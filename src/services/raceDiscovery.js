// src/services/raceDiscovery.js
// =====================================================================
//  Cliente del buscador de carreras con IA.
//
//  IDEA CLAVE (lee esto):
//  La IA NO inventa carreras. Tu backend (Spring) usa la IA para LEER
//  fuentes reales, NORMALIZAR los datos a este formato y devolver SIEMPRE
//  el `sourceUrl` oficial de cada evento. El frontend solo muestra lo que
//  el backend ya verificó. Así garantizas que sean verdaderas y evitas
//  problemas por publicar datos sin fuente.
//
//  Contrato del endpoint (lo implementas tú en Spring):
//    POST  {VITE_RACE_API}/api/races/discover
//    body: { query, scope, country, limit }
//    resp: { results: RaceResult[], generatedAt, disclaimer }
//
//  RaceResult = {
//    id, title, date (ISO), location, country,
//    scope: "local"|"nacional"|"internacional",
//    category, distanceKm?, priceMXN?,
//    sourceUrl,            // <- obligatorio: link oficial
//    sourceName,           // <- de dónde salió (ej. "Asdeporte")
//    verified: boolean,    // <- true solo tras revisión/validación
//    confidence: number    // 0..1 confianza de la extracción
//  }
// =====================================================================

const API_BASE = import.meta.env?.VITE_RACE_API || "";

/**
 * Busca carreras a través de tu backend de IA.
 * Si no hay backend configurado (VITE_RACE_API vacío), devuelve datos
 * de DEMO claramente etiquetados para que la interfaz se vea y se pruebe
 * sin engañar al usuario con carreras falsas.
 *
 * @param {Object} opts
 * @param {string} [opts.query]   Texto libre: "maratón octubre", "trail cerca de mí"...
 * @param {("todos"|"local"|"nacional"|"internacional")} [opts.scope]
 * @param {string} [opts.country]
 * @param {number} [opts.limit]
 * @param {AbortSignal} [opts.signal]
 * @returns {Promise<{results: Array, demo: boolean, disclaimer: string}>}
 */
export async function discoverRaces({
  query = "",
  scope = "todos",
  country = "",
  limit = 8,
  signal,
} = {}) {
  // Sin backend => modo demo honesto.
  if (!API_BASE) {
    return demoResults({ query, scope });
  }

  const res = await fetch(`${API_BASE}/api/races/discover`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, scope, country, limit }),
    signal,
  });

  if (!res.ok) {
    throw new Error(`El buscador respondió ${res.status}. Intenta de nuevo.`);
  }

  const data = await res.json();
  return {
    results: Array.isArray(data.results) ? data.results : [],
    demo: false,
    disclaimer:
      data.disclaimer ||
      "Resultados obtenidos de fuentes oficiales. Verifica fecha y costo en el enlace de cada evento.",
  };
}

// --- Modo demo: NO son carreras reales, van etiquetadas como ejemplo ----
function demoResults({ query, scope }) {
  const sample = [
    {
      id: "demo-1",
      title: "Ejemplo — Medio Maratón (resultado de demostración)",
      date: "2026-10-18",
      location: "Aguascalientes, AGS",
      country: "México",
      scope: "local",
      category: "Medio Maratón",
      distanceKm: 21,
      priceMXN: null,
      sourceUrl: "",
      sourceName: "Sin fuente (demo)",
      verified: false,
      confidence: 0,
    },
    {
      id: "demo-2",
      title: "Ejemplo — Maratón internacional (resultado de demostración)",
      date: "2026-11-01",
      location: "Por confirmar",
      country: "Internacional",
      scope: "internacional",
      category: "Maratón",
      distanceKm: 42,
      priceMXN: null,
      sourceUrl: "",
      sourceName: "Sin fuente (demo)",
      verified: false,
      confidence: 0,
    },
  ].filter((r) => scope === "todos" || r.scope === scope);

  return {
    results: sample,
    demo: true,
    disclaimer:
      "MODO DEMO: aún no has conectado tu backend (VITE_RACE_API). Estos NO son eventos reales. " +
      "Cuando conectes Spring, aquí aparecerán carreras verificadas con su enlace oficial.",
  };
}
