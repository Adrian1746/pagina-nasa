/*
 * EDITA AQUÍ EL CONTENIDO
 * Los siete registros con información están transcritos de la base de datos.
 * En las filas vacías solo aparecen el artefacto y su destino, tal como están
 * identificados para este sitio. Completa los campos vacíos cuando tengas datos.
 * story, discoveries e image también son espacios para que agregues contenido.
 */
const missions = [
  {
    id: 'apollo-11', name: 'Apollo 11 LM Descent Stage', world: 'Luna', mark: '11',
    officialName: 'Etapa de descenso del Módulo Lunar Apollo (LM-5, Eagle)',
    launch: '16 de julio de 1969 (13:32:00 UTC), Complejo de Lanzamiento 39A, Centro Espacial Kennedy, Florida; cohete Saturno V.',
    end: '20 de julio de 1969, alunizaje y cumplimiento de la función de descenso. Permaneció como plataforma hasta el despegue de la etapa de ascenso el 21 de julio de 1969.',
    purpose: 'Servir como el vehículo propulsado capaz de frenar y descender de manera controlada el Módulo Lunar desde la órbita hasta la superficie de la Luna.',
    endReason: 'Cese planeado por diseño: la etapa de descenso sirvió como plataforma para el despegue de la etapa de ascenso y quedó atrás al terminar su función.',
    finalPlace: 'Base Tranquilidad, al sur del Mare Tranquillitatis.',
    nasaUrl: 'https://ntrs.nasa.gov/api/citations/19700024568/downloads/19700024568.pdf',
    story: '', discoveries: '', image: '', color: 'moon'
  },
  {
    id: 'alsep', name: 'Paquetes ALSEP (Apollo 12 a 17)', world: 'Luna', mark: 'A',
    officialName: 'ALSEP (Apollo Lunar Surface Experiments Package)',
    launch: 'Apollo 12: 14 de noviembre de 1969 (alunizaje: 19 de noviembre de 1969). Apollo 14: 31 de enero de 1971 (alunizaje: 5 de febrero de 1971). Apollo 15: 26 de julio de 1971 (alunizaje: 30 de julio de 1971). Apollo 16: 16 de abril de 1972 (alunizaje: 21 de abril de 1972). Apollo 17: 7 de diciembre de 1972 (alunizaje: 11 de diciembre de 1972).',
    end: '30 de septiembre de 1977: apagado definitivo y desconexión de las estaciones.',
    purpose: 'Dejar estaciones científicas geofísicas autónomas en la Luna para monitorear su entorno después de la partida de los astronautas.',
    endReason: 'La NASA ordenó el apagado por recortes presupuestarios y por la degradación de componentes tras años de exposición al entorno lunar.',
    finalPlace: 'Apollo 12: Oceanus Procellarum; Apollo 14: Fra Mauro; Apollo 15: Hadley-Apennine; Apollo 16: Descartes; Apollo 17: Taurus-Littrow.',
    nasaUrl: 'https://ntrs.nasa.gov/api/citations/20180008613/downloads/20180008613.pdf',
    story: '', discoveries: '', image: '', color: 'moon'
  },
  {
    id: 'surveyor-1', name: 'Surveyor 1', world: 'Luna', mark: 'S1',
    officialName: 'Surveyor 1, primera nave de la serie Surveyor',
    launch: '30 de mayo de 1966 (14:41:01 UTC), Complejo 36A, Cabo Cañaveral, Florida; cohete Atlas-Centaur.',
    end: '7 de enero de 1967, fecha de la última transmisión recibida.',
    purpose: 'Ser la primera sonda estadounidense en realizar un alunizaje suave y controlado en la superficie lunar.',
    endReason: 'Agotamiento de energía y componentes internos después de varios meses de operación y exposición a las noches lunares.',
    finalPlace: 'Oceanus Procellarum, formación craterizada Flamsteed P.',
    nasaUrl: 'https://science.nasa.gov/mission/surveyor-1/',
    story: '', discoveries: '', image: '', color: 'moon'
  },
  {
    id: 'sojourner', name: 'Sojourner (Mars Pathfinder)', world: 'Marte', mark: 'SP',
    officialName: 'Sojourner, vehículo de la misión Mars Pathfinder',
    launch: '4 de diciembre de 1996 (06:58:07 UTC), Complejo 17B, Cabo Cañaveral, Florida; cohete Delta II.',
    end: 'Último dato recibido el 27 de septiembre de 1997. La misión concluyó oficialmente el 10 de marzo de 1998.',
    purpose: 'Demostrar la viabilidad tecnológica de un sistema de bajo costo para aterrizar en Marte y desplegar un vehículo móvil autónomo.',
    endReason: 'Colapsó la batería principal de la estación base. Sojourner dependía del módulo de aterrizaje para transmitir sus datos a la Tierra.',
    finalPlace: 'Ares Vallis, dentro de Chryse Planitia.',
    nasaUrl: 'https://science.nasa.gov/mission/mars-pathfinder/',
    story: '', discoveries: '', image: '', color: 'mars'
  },
  {
    id: 'spirit', name: 'Spirit (MER-A)', world: 'Marte', mark: 'A',
    officialName: 'MER-A o Mars Exploration Rover A',
    launch: '10 de junio de 2003 (17:58:47 UTC), Estación de la Fuerza Espacial de Cabo Cañaveral, Florida; cohete Delta II.',
    end: 'Última comunicación: 22 de marzo de 2010. La NASA declaró finalizada la misión el 25 de mayo de 2011.',
    purpose: 'Buscar y caracterizar rocas y suelos marcianos con pistas de actividad pasada del agua.',
    endReason: 'Quedó atrapado en suelo blando en Troy. Su posición impidió orientar los paneles solares favorablemente durante el invierno marciano; perdió energía y sus sistemas se congelaron.',
    finalPlace: 'Troy, al pie de Columbia Hills, dentro del cráter Gusev.',
    nasaUrl: 'https://science.nasa.gov/mission/mer-spirit/',
    story: '', discoveries: '', image: '', color: 'mars'
  },
  {
    id: 'opportunity', name: 'Opportunity (MER-B)', world: 'Marte', mark: 'B',
    officialName: 'MER-B o Mars Exploration Rover B; gemelo de Spirit',
    launch: '7 de julio de 2003 (03:18 UTC), Estación de la Fuerza Espacial de Cabo Cañaveral, Florida; cohete Delta II Heavy.',
    end: 'Última comunicación: 10 de junio de 2018. La NASA declaró finalizada la misión el 13 de febrero de 2019.',
    purpose: 'Buscar y caracterizar rocas y suelos marcianos para encontrar pruebas de actividad pasada del agua líquida.',
    endReason: 'Una tormenta global de polvo bloqueó la luz solar en Perseverance Valley. El rover perdió energía y no pudo reanudar la comunicación.',
    finalPlace: 'Perseverance Valley, borde interior del cráter Endeavour, Meridiani Planum.',
    nasaUrl: 'https://science.nasa.gov/mission/mer-opportunity/',
    story: '', discoveries: '', image: '', color: 'mars'
  },
  {
    id: 'insight', name: 'InSight Lander', world: 'Marte', mark: 'I',
    officialName: '', launch: '', end: '', purpose: '', endReason: '', finalPlace: '', nasaUrl: '',
    story: '', discoveries: '', image: '', color: 'mars'
  },
  {
    id: 'ingenuity', name: 'Ingenuity Helicopter', world: 'Marte', mark: 'H',
    officialName: '', launch: '', end: '', purpose: '', endReason: '', finalPlace: '', nasaUrl: '',
    story: '', discoveries: '', image: '', color: 'mars'
  },
  {
    id: 'pioneer-venus-2', name: 'Pioneer Venus 2 (Sondas)', world: 'Venus', mark: 'PV',
    officialName: '', launch: '', end: '', purpose: '', endReason: '', finalPlace: '', nasaUrl: '',
    story: '', discoveries: '', image: '', color: 'venus'
  },
  {
    id: 'magellan', name: 'Magellan', world: 'Venus', mark: 'M',
    officialName: '', launch: '', end: '', purpose: '', endReason: '', finalPlace: '', nasaUrl: '',
    story: '', discoveries: '', image: '', color: 'venus'
  },
  {
    id: 'messenger', name: 'MESSENGER', world: 'Mercurio', mark: 'ME',
    officialName: '', launch: '', end: '', purpose: '', endReason: '', finalPlace: '', nasaUrl: '',
    story: '', discoveries: '', image: '', color: 'mercury'
  },
  {
    id: 'deep-impact', name: 'Deep Impact (Impactor)', world: 'Cometa 9P', mark: 'DI',
    officialName: '', launch: '', end: '', purpose: '', endReason: '', finalPlace: '', nasaUrl: '',
    story: '', discoveries: '', image: '', color: 'comet'
  },
  {
    id: 'galileo', name: 'Galileo (Orbiter)', world: 'Júpiter', mark: 'G',
    officialName: '', launch: '', end: '', purpose: '', endReason: '', finalPlace: '', nasaUrl: '',
    story: '', discoveries: '', image: '', color: 'jupiter'
  }
];

// Copy and placeholders not found in the database can be edited here.
const pageContent = {
  launchStory: '[EDITAR: agrega aquí la historia de los lanzamientos espaciales.]',
  launchTrail: [
    { date: '[AÑO]', title: '[MISIÓN]', note: '[Escribe una frase breve.]' },
    { date: '[AÑO]', title: '[MISIÓN]', note: '[Escribe una frase breve.]' },
    { date: '[AÑO]', title: '[MISIÓN]', note: '[Escribe una frase breve.]' },
    { date: '[AÑO]', title: '[MISIÓN]', note: '[Escribe una frase breve.]' }
  ],
  gamesIntro: '[EDITAR: escribe aquí la introducción para los juegos que se agregarán.]',
  gameModules: [], // Agrega { title, description, link, label } para cada juego de tus compañeros.
  teamIntro: '[EDITAR: presenta aquí al equipo.]',
  teamMembers: ['[NOMBRE]', '[NOMBRE]', '[NOMBRE]']
};

const destinations = [
  { name: 'Todos', icon: '✳', color: '#f0c56c', detail: 'Una colección de huellas que cruzan el sistema solar.' },
  { name: 'Luna', icon: '☾', color: '#beb5ee', detail: 'Misiones que dejaron equipos y experimentos en la superficie lunar.' },
  { name: 'Marte', icon: '♂', color: '#ef8067', detail: 'Exploradoras robóticas que hicieron camino por Marte.' },
  { name: 'Venus', icon: '♀', color: '#f1aa77', detail: 'Equipos que se aventuraron entre las nubes y la superficie venusiana.' },
  { name: 'Mercurio', icon: '☿', color: '#94bdc3', detail: 'Una viajera dejó una huella en el planeta más cercano al Sol.' },
  { name: 'Cometa 9P', icon: '☄', color: '#c1a6ec', detail: 'Una misión visitó el núcleo de un cometa.' },
  { name: 'Júpiter', icon: '♃', color: '#e1b27e', detail: 'Una exploradora viajó hasta el planeta gigante.' }
];
let selectedDestination = 'Todos';
let searchTerm = '';
const tabHost = document.querySelector('#destinationTabs');
const missionGrid = document.querySelector('#missionGrid');
const banner = document.querySelector('#destinationBanner');

function renderMissions() {
  const active = destinations.find(d => d.name === selectedDestination) || destinations[0];
  tabHost.innerHTML = destinations.map(d => `<button class="destination-tab" type="button" data-destination="${d.name}" aria-pressed="${d.name === selectedDestination}" style="--planet-color:${d.color}"><span>${d.icon}</span>${d.name}<small>${d.name === 'Todos' ? missions.length : missions.filter(m => m.world === d.name).length}</small></button>`).join('');
  banner.innerHTML = `<div class="banner-world" aria-hidden="true">${active.icon}</div><div><span class="mini-label">DESTINO SELECCIONADO</span><h3>${selectedDestination === 'Todos' ? 'Sistema solar' : selectedDestination}</h3><p>${active.detail}</p></div><span class="banner-count">${missions.filter(m => selectedDestination === 'Todos' || m.world === selectedDestination).length.toString().padStart(2, '0')} <small>HUELLAS</small></span>`;
  const records = missions.filter(m => (selectedDestination === 'Todos' || m.world === selectedDestination) && `${m.name} ${m.world}`.toLocaleLowerCase('es').includes(searchTerm.toLocaleLowerCase('es')));
  missionGrid.innerHTML = records.length ? records.map(m => {
    const complete = Boolean(m.launch);
    return `<button class="mission-card ${m.color}" type="button" data-mission="${m.id}"><span class="card-orbit" aria-hidden="true"></span><span class="card-top"><span class="mission-mark">${m.mark}</span><span class="mission-world">${m.world}</span></span><span class="mission-name">${m.name}</span><span class="card-bottom"><span class="record-status ${complete ? 'ready' : 'empty'}">${complete ? 'REGISTRO EN BASE' : 'ESPACIO PARA COMPLETAR'}</span><span class="card-open" aria-hidden="true">↗</span></span></button>`;
  }).join('') : '<p class="no-results">No hay misiones con ese nombre. Prueba otra búsqueda.</p>';
}

function valueOrEdit(value) {
  return value ? `<span>${value}</span>` : '<span class="field-empty">[EDITAR ESTE CAMPO EN app.js]</span>';
}

function openMission(id) {
  const m = missions.find(item => item.id === id);
  if (!m) return;
  const dialogContent = document.querySelector('#missionDetail');
  const techRows = [
    ['Nombre del dispositivo / designación oficial', m.officialName],
    ['Fecha de lanzamiento', m.launch],
    ['Fecha de cese de operaciones', m.end],
    ['Propósito principal de la misión', m.purpose],
    ['Razón de cese de operaciones', m.endReason],
    ['Lugar de descanso final', m.finalPlace],
    ['Imagen representativa', m.image ? `<img class="mission-image" src="${m.image}" alt="Imagen representativa de ${m.name}">` : ''],
    ['Enlace oficial de NASA', m.nasaUrl ? `<a class="source-link" href="${m.nasaUrl}" target="_blank" rel="noopener">Abrir recurso de NASA ↗</a>` : '']
  ];
  const introName = m.id === 'spirit' ? 'Conozcamos al' : 'Conozcamos';
  dialogContent.innerHTML = `<div class="detail-cover ${m.color}"><span class="detail-world">${m.world} · REGISTRO DE MISIÓN</span><span class="detail-glyph" aria-hidden="true">${destinations.find(d => d.name === m.world)?.icon || '✳'}</span><h2 id="dialogTitle">${introName} ${m.name}</h2><p>${m.finalPlace || '[EDITAR: ubicación exacta en app.js]'}</p></div><div class="detail-body"><div class="detail-story"><span class="mini-label">HISTORIA PARA EXPLORADORES</span><p>${m.story || '<span class="field-empty">[EDITAR: escribe aquí la historia de esta misión con la información que recopiles.]</span>'}</p></div><div class="detail-discoveries"><span class="mini-label">¿QUÉ NOS DIO?</span>${m.discoveries ? `<p>${m.discoveries}</p>` : '<p class="field-empty">[EDITAR: agrega descubrimientos o datos de la misión.]</p>'}</div><h3 class="tech-title">Para saber más…</h3><dl class="tech-list">${techRows.map(([label, value]) => `<div><dt>${label}</dt><dd>${valueOrEdit(value)}</dd></div>`).join('')}</dl></div>`;
  document.querySelector('#missionDialog').showModal();
}

tabHost.addEventListener('click', event => {
  const button = event.target.closest('[data-destination]');
  if (!button) return;
  selectedDestination = button.dataset.destination;
  renderMissions();
});
missionGrid.addEventListener('click', event => {
  const button = event.target.closest('[data-mission]');
  if (button) openMission(button.dataset.mission);
});
const searchInput = document.querySelector('#searchInput');
const clearSearch = document.querySelector('#clearSearch');
searchInput.addEventListener('input', () => {
  searchTerm = searchInput.value;
  clearSearch.hidden = !searchTerm;
  renderMissions();
});
clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  searchTerm = '';
  clearSearch.hidden = true;
  renderMissions();
  searchInput.focus();
});
document.querySelector('#dialogClose').addEventListener('click', () => document.querySelector('#missionDialog').close());
document.querySelector('#missionDialog').addEventListener('click', event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

// These slots are intentionally empty content, ready for collaborators' game modules.
document.querySelector('#launchStory').textContent = pageContent.launchStory;
document.querySelector('#storyTrail').innerHTML = pageContent.launchTrail.map(item => `<article class="trail-stop"><span>${item.date}</span><i></i><b>${item.title}</b><p>${item.note}</p></article>`).join('');
document.querySelector('#gamesIntro').textContent = pageContent.gamesIntro;
document.querySelector('#teamCopy').textContent = pageContent.teamIntro;
document.querySelector('#teamList').innerHTML = pageContent.teamMembers.map(person => `<span>${person}</span>`).join('');
const modules = document.querySelector('#gameModules');
modules.innerHTML = pageContent.gameModules.length ? pageContent.gameModules.map(game => `<article class="game-module"><span class="module-star">✳</span><span class="mini-label">ACTIVIDAD INTERACTIVA</span><h3>${game.title}</h3><p>${game.description}</p>${game.link ? `<a href="${game.link}" target="_blank" rel="noopener" class="module-link">${game.label || 'Abrir juego'} ↗</a>` : ''}</article>`).join('') : `<article class="module-empty"><div class="empty-orbit" aria-hidden="true"><span>+</span></div><div><span class="mini-label">ESPACIO ABIERTO</span><h3>Tu juego puede vivir aquí.</h3><p>Este apartado está preparado para integrar los juegos del equipo. Agrega título, descripción y enlace en <code>gameModules</code>, dentro de <code>app.js</code>.</p></div><span class="empty-index">01 / ∞</span></article>`;

const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
mainNav.addEventListener('click', event => {
  if (!event.target.closest('a')) return;
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menú');
});

// One scroll reveal system creates a gentle, coordinated entrance for sections.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}
const progressBar = document.querySelector('#scrollProgress');
let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(() => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
    ticking = false;
  });
}, { passive: true });

renderMissions();
