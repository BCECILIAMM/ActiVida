# Buscador de carreras con IA — guía de arquitectura (segura y legal)

Esta guía resuelve tus dos requisitos:
1. **Que sean verdaderas.** La IA nunca inventa eventos: extrae de fuentes reales y guarda el enlace oficial.
2. **Que no tengas problemas por mostrarlas.** Solo publicas datos *factuales* (nombre, fecha, lugar, distancia, precio) y enlazas a la fuente. No copias textos largos ni imágenes ajenas.

---

## 1. La regla de oro

> Un LLM, solo, **alucina**: te inventa carreras, fechas y precios que suenan reales.
> Por eso la IA NO es la fuente de la verdad. La IA es el **procesador** que toma datos
> de una fuente real y los ordena a tu formato, conservando el `sourceUrl`.

Arquitectura correcta (RAG / "grounding"):

```
Fuentes reales ─►  IA extrae y normaliza ─►  Revisión humana ─►  Publicas
(webs oficiales,   (estructura a tu JSON,    (apruebas/rechazas   (solo lo
 calendarios,       NO inventa, cita URL)     en un panel)         aprobado)
 APIs de eventos)
```

La IA hace lo que hace bien (leer texto desordenado y estructurarlo). La verdad la
ponen la **fuente** y tu **revisión**, no el modelo.

---

## 2. Pipeline en tu stack (Spring + Oracle)

| Paso | Qué hace | Tecnología |
|------|----------|-----------|
| 1. Ingesta | Trae HTML/JSON de fuentes oficiales | Spring `RestClient` / scraping puntual |
| 2. Extracción | Claude convierte el texto a tu JSON con `sourceUrl` | Anthropic API (tool `web_search`) |
| 3. Validación | Reglas: fecha válida, URL viva, dominio confiable | Java puro |
| 4. Deduplicación | Une el mismo evento de varias fuentes | Clave: nombre+fecha+ciudad normalizados |
| 5. Persistencia | Guarda con estado `PENDING` | Oracle |
| 6. Revisión | Tú apruebas/rechazas | Endpoint admin + panel |
| 7. Publicación | El frontend solo lee `verified = 1` | Tu `EventsPage.vue` |

El frontend que ya tienes (`raceDiscovery.js`) llama al paso 7.

---

## 3. Esquema Oracle

```sql
CREATE TABLE races (
  id            VARCHAR2(40)  PRIMARY KEY,
  title         VARCHAR2(200) NOT NULL,
  race_date     DATE          NOT NULL,
  location      VARCHAR2(200),
  country       VARCHAR2(80),
  scope         VARCHAR2(20),          -- local | nacional | internacional
  category      VARCHAR2(60),
  distance_km   NUMBER(6,2),
  price_mxn     NUMBER(10,2),
  source_url    VARCHAR2(500) NOT NULL,-- obligatorio: sin fuente, no entra
  source_name   VARCHAR2(120),
  confidence    NUMBER(3,2),           -- 0..1 que reporta la extracción
  verified      NUMBER(1) DEFAULT 0,   -- 0 pendiente, 1 aprobado por ti
  status        VARCHAR2(20) DEFAULT 'PENDING',
  created_at    TIMESTAMP DEFAULT SYSTIMESTAMP,
  reviewed_at   TIMESTAMP
);

-- Evita duplicados del mismo evento
CREATE UNIQUE INDEX ux_race_dedupe
  ON races (LOWER(title), race_date, LOWER(location));
```

Regla de negocio dura: **si `source_url` es nulo, el evento no se inserta.** Eso solo ya
te quita el 90% del riesgo.

---

## 4. La llamada a Claude (lo que evita las alucinaciones)

El truco está en el *system prompt* y en activar la herramienta de búsqueda web para
que el modelo trabaje sobre resultados reales, no sobre su memoria.

```java
// RaceExtractionService.java  (Spring Boot, esquema)
@Service
public class RaceExtractionService {

  private final RestClient anthropic = RestClient.builder()
      .baseUrl("https://api.anthropic.com")
      .defaultHeader("x-api-key", System.getenv("ANTHROPIC_API_KEY"))
      .defaultHeader("anthropic-version", "2023-06-01")
      .defaultHeader("content-type", "application/json")
      .build();

  private static final String SYSTEM = """
      Eres un extractor de carreras de running. Reglas ESTRICTAS:
      1. NO inventes eventos. Solo reporta carreras que aparezcan en los
         resultados de búsqueda web con una URL oficial real.
      2. Cada evento DEBE incluir "sourceUrl" (la página oficial o de
         inscripción). Si no tienes URL, NO incluyas el evento.
      3. No copies descripciones largas ni texto con derechos. Solo datos
         factuales: título, fecha, lugar, distancia, precio.
      4. Si un dato no aparece en la fuente, ponlo en null. No lo adivines.
      5. "confidence" refleja qué tan seguro estás de la extracción (0 a 1).
      Responde SOLO con JSON válido, sin texto extra, con la forma:
      {"results":[{"title","date","location","country","scope",
      "category","distanceKm","priceMmn","sourceUrl","sourceName",
      "confidence"}]}
      """;

  public String discover(String query, String scope) {
    var body = Map.of(
      "model", "claude-sonnet-4-6",
      "max_tokens", 2000,
      "system", SYSTEM,
      "tools", List.of(Map.of("type", "web_search_20250305", "name", "web_search")),
      "messages", List.of(Map.of(
        "role", "user",
        "content", "Busca carreras reales (" + scope + "). Petición: " + query
      ))
    );

    var resp = anthropic.post().uri("/v1/messages")
        .body(body).retrieve().body(Map.class);

    // Extrae solo los bloques de texto, ignora bloques de tool_use
    return extractText(resp); // luego JSON.parse en el paso de validación
  }
}
```

> Modelos disponibles hoy: `claude-opus-4-8` (más potente), `claude-sonnet-4-6`
> (equilibrio ideal para extracción), `claude-haiku-4-5-20251001` (rápido y barato).
> Para este caso, **Sonnet** es la mejor relación calidad/costo.

---

## 5. Validación en Java (después de la IA, antes de guardar)

Nunca confíes en la salida del modelo sin verificar:

```java
boolean esPublicable(RaceDto r) {
  if (r.sourceUrl() == null || r.sourceUrl().isBlank()) return false; // sin fuente, fuera
  if (!dominioConfiable(r.sourceUrl())) return false;                 // lista blanca
  if (urlNoResponde(r.sourceUrl())) return false;                     // HEAD 200
  if (r.date() == null || r.date().isBefore(LocalDate.now())) return false;
  if (r.confidence() < 0.6) return false;                             // baja confianza => revisión manual
  return true;
}
```

Mantén una **lista blanca de dominios** (Asdeporte, las webs de cada maratón oficial,
federaciones, etc.). Si la fuente no está en tu lista, va a revisión manual, no se
publica solo.

---

## 6. Flujo de aprobación (tu seguro anti-problemas)

Aunque todo lo anterior funcione, **nada se publica sin tu visto bueno**:

- La IA y la validación dejan los eventos en `status = 'PENDING'`, `verified = 0`.
- Tú entras a un panel admin, revisas el enlace, y das "Aprobar" (`verified = 1`).
- El frontend (`EventsPage.vue`) solo muestra `verified = 1`.

Así, si la IA se equivoca, el error se queda en tu panel y nunca llega a tu público.

---

## 7. Lo legal, en simple

- **Datos factuales** (nombre del evento, fecha, ciudad, distancia, precio): los hechos
  no se protegen por derechos de autor. Mostrarlos y enlazar a la fuente es lo correcto.
- **No copies** descripciones largas, fotos ni logos de otras webs. Usa tus propias fotos
  (las de `assets/eventos`) o un texto corto y neutral propio.
- **Enlaza siempre** a la página oficial de inscripción. Beneficia al organizador y te
  cubre a ti.
- Revisa los **Términos de Servicio** de cada fuente que vayas a leer de forma
  automatizada; algunas piden permiso o tienen API. Prioriza fuentes con API/calendario
  público.
- No es asesoría legal: para tu empresa de IA conviene una revisión con un abogado de tu
  localidad, sobre todo si vas a monetizar.

---

## 8. Cómo encaja con lo que ya mejoré en el frontend

- `src/data/events-2026.js` → agregué `classifyScope()` y `getCountry()` (local/nacional/
  internacional + país). No toqué tus 81 eventos.
- `src/services/raceDiscovery.js` → cliente del paso 7. Funciona en **modo demo** hasta
  que conectes Spring. Para conectarlo, define en tu `.env`:
  ```
  VITE_RACE_API=https://tu-backend-spring.com
  ```
- `src/pages/EventsPage.vue` → filtros por alcance, distintivo "Verificado" + enlace a
  fuente en cada tarjeta, panel "Buscar con IA" y mejor responsividad. Tu diseño y marca
  intactos.

El contrato que tu backend debe devolver está documentado al inicio de
`raceDiscovery.js`.
