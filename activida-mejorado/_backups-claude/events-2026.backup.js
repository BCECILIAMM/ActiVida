
// src/data/events-2026.js

const makeDate = (y, mIndex, day) => new Date(y, mIndex, day, 7, 0);


const getImage = (path) => {
  const normalized = String(path || "").trim();
  if (!normalized) return "/images/placeholder-event.webp";

  const nameWithoutExt = normalized.replace(/\.[^.]+$/, "");
  return `/eventos/${nameWithoutExt}.webp`;

};
export const events2026Raw = [
  // ===== ENERO =====
  { title: "Carrera de la Divina Providencia", date: makeDate(2026, 0, 1),category: "Carrera",location: "Por confirmar", tag: "por confirmar", image: getImage("corazon.jpeg")},
  { title: "Maratón Walt Disney", date: makeDate(2026, 0, 9), category: "Maratón" , location: "Orlando, USA", image: getImage("disney")},
  { title: "Maratón Dolores Hidalgo", date: makeDate(2026, 0, 11), category: "Maratón", location: "Dolores Hidalgo, GTO", image: getImage("dolores")},
  { title: "Maratón de Culiacán", date: makeDate(2026, 0, 18), category: "Maratón", location: "Culiacán, SIN", image: getImage("culiacan")},
  { title: "Maratón Cabo San Lucas", date: makeDate(2026, 0, 18), category: "Maratón", location: "Cabo San Lucas, BCS", image: getImage("san-lucas.jpg")},
  {title: "Trail Villa del Carbón",date: makeDate(2026, 0, 23),category: "Trail",location: "Villa del Carbón, EDOMEX",description: "Evento (23–24).",image: getImage("train-villa.png")},
  { title: "Ultra Bosque La Primavera", date: makeDate(2026, 0, 25), category: "Ultra", location: "Bosque La Primavera, JAL", image: getImage("bosque-primavera")},
  { title: "Medio Maratón Puerto de Veracruz", date: makeDate(2026, 0, 25), category: "Medio Maratón", location: "Veracruz, VER", image: getImage("ruta-veracruz.jpg")},
  { title: "Juntos por Apali – Pabellón de Arteaga", date: makeDate(2026, 0, 25), category: "Carrera", location: "Pabellón de Arteaga, AGS", image: getImage("juntos-apali")},

  // ===== FEBRERO =====
  { title: "HYROX Guadalajara", date: makeDate(2026, 1, 7), category: "HYROX", location: "Guadalajara, JAL", description: "Evento (07–08).", image: getImage("hyrox-g.jpg") },
  { title: "Carrera de los Barrios", date: makeDate(2026, 1, 8), category: "Carrera", location: "León, GTO", image: getImage("barrios") },
  { title: "Ruta San Blas – Pabellón de Hidalgo", date: makeDate(2026, 1, 15), category: "Carrera", location: "Pabellón de Hidalgo, AGS", image: getImage("sanBlas.jpg") },
  { title: "Maratón Capital", date: makeDate(2026, 1, 15), category: "Maratón", location: "Guanajuato, GTO", image: getImage("maraton-capital.jpg") },
  { title: "Trail Desafío en las Nubes", date: makeDate(2026, 1, 21), category: "Trail", location: "Puebla", description: "Evento (21–22).", image: getImage("train-nubes.jpg") },
  { title: "Rock 'n' Roll Las Vegas", date: makeDate(2026, 1, 22), category: "Carrera", location: "Las Vegas, USA", image: getImage("las-vegas") },
  { title: "Medio Maratón Guadalajara", date: makeDate(2026, 1, 22), category: "Medio Maratón", location: "Guadalajara, JAL", image: getImage("medio-maraton-g.png") },
  { title: "Maratón del Desierto", date: makeDate(2026, 1, 22), category: "Maratón", location: "Por confirmar", tag: "por confirmar", image: getImage("maraton-desierto.jpg")   },

  // ===== MARZO =====
{ title: "Medio Maratón Cancún", date: makeDate(2026, 2, 1), category: "Medio Maratón", location: "Cancún, QROO", image: getImage("medio-maraton-cancun.jpg") },
{ title: "Ironman 70.3", date: makeDate(2026, 2, 1), category: "Ironman", location: "Monterrey, Nuevo León", image: getImage("ironman.png") },
{ title: "Maratón Lala", date: makeDate(2026, 2, 1), category: "Maratón", location: "Torreón, Coahuila", image: getImage("lala") },
{ title: "Puerto Vallarta by UTM", date: makeDate(2026, 2, 5), category: "Trail", location: "Puerto Vallarta, Jalisco", image: getImage("utm-pv.jpg") },
{ title: "Carrera de la Mujer", date: makeDate(2026, 2, 8), category: "Carrera", location: "Aguascalientes", image: getImage("carrera-mujer") },
{ title: "HYROX Cancún", date: makeDate(2026, 2, 14), category: "HYROX", location: "Cancún, México", image: getImage("hyrox.jpg") },
{ title: "Carrera de Teotihuacán 3K/5K/10K", date: makeDate(2026, 2, 15), category: "Carrera", location: "Teotihuacán, Estado de México", image: getImage("teotihuacan.jpg") },
{ title: "Carrera de Teotihuacán 21K", date: makeDate(2026, 2, 15), category: "Medio Maratón", location: "Teotihuacán, Estado de México", image: getImage("teotihuacan.jpg") },
{ title: "Medio Maratón San Diego", date: makeDate(2026, 2, 22), category: "Medio Maratón", location: "San Diego, California", image: getImage("san-diego.jpg") },

// ===== ABRIL =====
{ title: "Gran Fondo Rivera Nayarit", date: makeDate(2026, 3, 18), category: "Gran Fondo", location: "Riviera Nayarit, México", image: getImage("gran-fondo.jpg") },
{ title: "HYROX Monterrey", date: makeDate(2026, 3, 18), category: "HYROX", location: "Monterrey, México", image: getImage("hyrox.jpg") },
{ title: "Maratón Puerto Vallarta", date: makeDate(2026, 3, 19), category: "Maratón", location: "Puerto Vallarta, Jalisco", image: getImage("maraton-pv.png") },
{ title: "Medio Maratón BJX", date: makeDate(2026, 3, 26), category: "Medio Maratón", location: "León, Guanajuato", image: getImage("medio-maraton-bjx.png") },

// ===== MAYO =====
{ title: "Ultra Otomí", date: makeDate(2026, 4, 15), category: "Ultra", location: "Isidro Fabela, Estado de México", image: getImage("logo-otomi") },
{ title: "Medio Maratón Zapopan", date: makeDate(2026, 4, 17), category: "Medio Maratón", location: "Zapopan, Jalisco", image: getImage("zapopan.jpg") },
{ title: "HYROX Puebla", date: makeDate(2026, 4, 23), category: "HYROX", location: "Puebla, México", image: getImage("hyrox.jpg") },
{ title: "Rock 'n' Roll San Diego", date: makeDate(2026, 4, 31), category: "Carrera", location: "San Diego, California", image: getImage("rock-roll.jpg") },

// por confirmar
{ title: "Carrera de San Marcos", date: makeDate(2026, 4, 15), category: "Carrera", location: "Aguascalientes, AGS", tag: "por confirmar", image: getImage("san-marcos.jpg") },

// ===== JUNIO =====

{ title: "Triatlón Sprint Boca del Río", date: makeDate(2026, 5, 21), category: "Triatlón", location: "Boca del Río, Veracruz", image:  getImage("triatlon-boca-rio.jpg") },
{ title: "Carrera del Día del Padre 21K", date: makeDate(2026, 5, 21), category: "Medio Maratón", location: "Ciudad de México", image: getImage("cddp") },
{ title: "Maratón Tangamanga", date: makeDate(2026, 5, 28), category: "Maratón", location: "San Luis Potosí, México", image: getImage("maraton-tangamanga.jpg") },

// por confirmar
{ title: "Trail de la Mixteca Oaxaqueña", date: makeDate(2026, 5, 15), category: "Trail", location: "Oaxaca, México", tag: "por confirmar", image: getImage("train-mixteca.jpg") },
{ title: "Carrera Peñuelas", date: makeDate(2026, 5, 15), category: "Carrera", location: "Peñuelas, Aguascalientes", image: getImage("corazon.jpeg") },
{ title: "Carrera Medio Ambiente", date: makeDate(2026, 5, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("mundo.jpg") },
{ title: "Carrera Nike Women", date: makeDate(2026, 5, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("woman-nike") },


// ===== JULIO =====
{ title: "Medio Maratón Ciudad de México", date: makeDate(2026, 6, 12), category: "Medio Maratón", location: "Ciudad de México", image: getImage("medio-maraton-cdmx.png") },
{ title: "Ultra Coahuila", date: makeDate(2026, 6, 25), category: "Ultra", location: "Coahuila, México", image: getImage("ultra-coahuila.jpg") },
{ title: "Triatlón Ciudad de México", date: makeDate(2026, 6, 25), category: "Triatlón", location: "Ciudad de México", image: getImage("triatlón-cdmx.jpg") },

// ===== AGOSTO =====

{ title: "Triatlón Veracruz", date: makeDate(2026, 7, 22), category: "Triatlón", location: "Boca del Río, Veracruz", image: getImage("triatlon-veracruz.jpeg") },
{ title: "Trail La Bastarda", date: makeDate(2026, 7, 29), category: "Trail", location: "León, Guanajuato", image:  getImage("bastarda") },
{ title: "Maratón Ciudad de México", date: makeDate(2026, 7, 30), category: "Maratón", location: "Ciudad de México", image: getImage("maraton-cdmx.jpg") },

// por confirmar
{ title: "Virgen de la Asunción", date: makeDate(2026, 7, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("virgen-asuncion.jpg") },
{ title: "Carrera de Uvas", date: makeDate(2026, 7, 15), category: "Carrera", location: "Cosío, Aguascalientes", tag: "por confirmar", image: getImage("uvas.png") },
{ title: "Carrera de Huevos", date: makeDate(2026, 7, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("cerebro") },
{ title: "Carrera Lancera", date: makeDate(2026, 7, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("corazon.jpeg") },
{ title: "Race Fest 2", date: makeDate(2026, 7, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("rice-fest.png") },
{ title: "Carrera de Colores", date: makeDate(2026, 7, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("carrera-colores") },
{ title: "Runnract", date: makeDate(2026, 7, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("cerebro") },
{ title: "Medio Maratón Atlas Colomos", date: makeDate(2026, 7, 15), category: "Medio Maratón", location: "Guadalajara, Jalisco", tag: "por confirmar", image: getImage("atlas") },
{ title: "Trail Ultra Sierra del Laurel", date: makeDate(2026, 7, 15), category: "Trail", location: "Calvillo, Aguascalientes", tag: "por confirmar", image:getImage("sierra-laurel") },

// ===== SEPTIEMBRE =====
{ title: "Maratón de Berlín", date: makeDate(2026, 8, 27), category: "Maratón", location: "Berlín, Alemania", image: getImage("berlin.jpg") },

// por confirmar
{ title: "Carrera Skarch", date: makeDate(2026, 8, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("skarch.jpeg") },
{ title: "Carrera Cruz Roja", date: makeDate(2026, 8, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("cruz-roja") },
{ title: "Carrera UAA", date: makeDate(2026, 8, 15), category: "Carrera", location: "Aguascalientes, AGS", tag: "por confirmar", image: getImage("uaa.jpg") },
{ title: "Carrera Esperanza de un Nuevo Hogar", date: makeDate(2026, 8, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("nuevo-hogar") },
{ title: "Carrera Pro Salud Mental", date: makeDate(2026, 8, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("cerebro") },

// ===== OCTUBRE =====
{ title: "Maratón Chicago", date: makeDate(2026, 9, 11), category: "Maratón", location: "Chicago, Illinois, USA", image: getImage("chicago-marathon.webp") },
{ title: "Maratón Aguascalientes", date: makeDate(2026, 9, 25), category: "Maratón", location: "Aguascalientes, México", image: getImage("ags") },

// por confirmar
{ title: "Carrera Nissan", date: makeDate(2026, 9, 15), category: "Carrera", location: "Aguascalientes, AGS", tag: "por confirmar", image: getImage("nissan.jpg") },
{ title: "Carrera del Médico", date: makeDate(2026, 9, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("medico.jpg") },
{ title: "Ironman 70.3 Los Cabos", date: makeDate(2026, 9, 15), category: "Ironman", location: "Los Cabos, Baja California Sur", image: getImage("los-cabos.png") },
{ title: "Maratón de Querétaro", date: makeDate(2026, 9, 15), category: "Maratón", location: "Querétaro, QRO", image: getImage("queretaro.jpg") },

// ===== NOVIEMBRE =====
{ title: "Maratón Nueva York", date: makeDate(2026, 10, 1), category: "Maratón", location: "Nueva York, USA", image: getImage("ny.jpg") },
{ title: "Ironman Cozumel", date: makeDate(2026, 10, 22), category: "Ironman", location: "Cozumel, Quintana Roo", image: getImage("cozumel.jpg") },

// por confirmar
{ title: "Maratón Pacífico Mazatlán", date: makeDate(2026, 10, 15), category: "Maratón", location: "Mazatlán, Sinaloa", tag: "por confirmar", image: getImage("mazatlan.jpg") },
{ title: "Carrera Exalumnos UNAM", date: makeDate(2026, 10, 15), category: "Carrera", location: "CDMX", tag: "por confirmar", image: getImage("unam.jpg") },

// ===== DICIEMBRE =====
{ title: "Maratón Guadalupano", date: makeDate(2026, 11, 12), category: "Maratón", location: "Ciudad de México", image: getImage("guadalupano") },

// por confirmar
{ title: "Maratón de Monterrey", date: makeDate(2026, 11, 15), category: "Maratón", location: "Monterrey, Nuevo León", tag: "por confirmar", image: getImage("mt.png") },
{ title: "Maratón Valencia", date: makeDate(2026, 11, 15), category: "Maratón", location: "Valencia, España", tag: "por confirmar", image: getImage("valencia.jpg") },
{ title: "Carrera Neón", date: makeDate(2026, 11, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("neon") },
{ title: "Carrera de Mar a Mar", date: makeDate(2026, 11, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("mar-a-mar.jpg") },
{ title: "Carrera Universidad Panamericana", date: makeDate(2026, 11, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("carrera-up") },
{ title: "Carrera Pedro Lomelí", date: makeDate(2026, 11, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("carrera-pedro-lomeli") },
{ title: "Carrera Adidas", date: makeDate(2026, 11, 15), category: "Carrera", location: "Por confirmar", tag: "por confirmar", image: getImage("adidas") },
];