/* ═══════════════════════════════════════════════════
   Cambrón Studio — LinkedIn Strategy Dashboard
   app.js
   ═══════════════════════════════════════════════════ */

/* ─── POST DATA ──────────────────────────────────── */
const posts = [
  {
    num: 1, type: 'educativo',
    objetivo: 'Educativo — Neuromarketing',
    formato: 'Carrusel recomendado',
    publico: 'CEOs, Marketing Managers',
    hashtags: '#Neuromarketing #Marketing #PsicologiaDelConsumidor #PublicidadCreativa',
    text: `Durante décadas hemos asumido que el consumidor analiza, compara y decide de forma racional.

Sin embargo, la neurociencia del comportamiento demuestra que esto no es del todo cierto.

La emoción aparece primero, activa la decisión, y la lógica entra después únicamente para justificar lo que ya ha ocurrido a nivel subconsciente.

Esto cambia completamente la forma en la que entendemos la publicidad y el marketing moderno.

No se trata solo de comunicar información, sino de activar respuestas emocionales que influyen en la percepción antes del análisis racional.

¿Tu publicidad actual está diseñada para hablar al sistema emocional o al racional?`
  },
  {
    num: 2, type: 'educativo',
    objetivo: 'Educativo — Branding',
    formato: 'Carrusel (5–7 slides)',
    publico: 'Marketing Managers, CEOs',
    hashtags: '#Branding #MarketingDigital #EstrategiaDeMarketing #IdentidadDeMarca',
    text: `5 errores de branding que hacen que tu empresa parezca pequeña (aunque no lo sea)

1. Tener un logo genérico que no diferencia
2. Comunicar CARACTERÍSTICAS en lugar de TRANSFORMACIONES
3. Cambiar el tono de voz según la plataforma
4. No tener una historia de marca clara
5. Diseño inconsistente en todos los touchpoints

El branding no es estética. Es la suma de todas las percepciones que genera tu marca en la mente del cliente.

¿Cuál de estos errores reconoces en tu empresa?`
  },
  {
    num: 3, type: 'opinion',
    objetivo: 'Opinion — Industria',
    formato: 'Texto de opinion + imagen',
    publico: 'CEOs, Emprendedores',
    hashtags: '#Neuromarketing #PublicidadCreativa #MarketingEstrategico',
    text: `La publicidad que más vende no es la más creativa.

Es la que mejor entiende a su cliente.

Podemos gastar semanas diseñando el anuncio perfecto, pero si no sabemos qué miedo, qué deseo o qué inseguridad tiene nuestra audiencia antes de verlo… el anuncio no sirve de nada.

El neuromarketing no es una fórmula mágica.
Es el proceso de escuchar al consumidor antes de hablarle.

Y en eso, la mayoría de marcas aún tienen mucho por mejorar.

¿Tú qué opinas?`
  },
  {
    num: 4, type: 'engagement',
    objetivo: 'Engagement — Comunidad',
    formato: 'Pregunta + imagen',
    publico: 'Toda la comunidad',
    hashtags: '#Marketing #PublicidadDigital #ComunidadMarketing #Encuesta',
    text: `Pregunta rápida para los que trabajáis en marketing:

¿Cuál es el mayor reto que tenéis ahora mismo con vuestras campañas?

A. Conseguir atención inicial
B. Que conviertan de verdad
C. Diferenciarse de la competencia
D. Medir el impacto real

Leo todos los comentarios. Me ayuda mucho entender qué está pasando en el sector.`
  },
  {
    num: 5, type: 'storytelling',
    objetivo: 'Storytelling — Marca Personal',
    formato: 'Texto narrativo (historia real)',
    publico: 'CEOs, Emprendedores, Marketing Managers',
    hashtags: '#Emprendimiento #Neuromarketing #MarketingDeResultados #Storytelling',
    text: `Hace 2 años lancé Cambrón Studio con una convicción: la publicidad basada en el comportamiento humano siempre superará a la publicidad basada en intuición.

Los primeros meses fueron difíciles. Nadie me conocía. Tenía que demostrar que el neuromarketing no era un concepto abstracto, sino una herramienta real con resultados medibles.

El primer cliente que confió en nosotros tenía campañas con un coste por adquisición brutal. Lo que cambiamos no fue el diseño ni el presupuesto.

Cambiamos el mensaje. Lo alineamos con cómo realmente decide su cliente.

En 6 semanas el CPA bajó un 40%.

Eso fue lo que me confirmó que íbamos por el camino correcto.

¿Qué momento te confirmó a ti que estabas en el camino correcto?`
  },
  {
    num: 6, type: 'educativo',
    objetivo: 'Educativo — Tactica concreta',
    formato: 'Carrusel (3–5 slides)',
    publico: 'Marketing Managers',
    hashtags: '#MarketingDigital #PublicidadDigital #Neuromarketing #MetaAds #GoogleAds',
    text: `El framework de 3 preguntas que usamos antes de lanzar cualquier campaña:

1. ¿Qué emoción queremos activar en los primeros 3 segundos?
2. ¿Qué fricción cognitiva tiene el CTA? ¿Es demasiado complejo o demasiado genérico?
3. ¿La promesa del anuncio y la landing page cuentan la misma historia?

Si no puedes responder estas 3 preguntas antes del lanzamiento, la campaña necesita más trabajo.

Guárdalo para tu próxima campaña.`
  },
  {
    num: 7, type: 'portfolio',
    objetivo: 'Portfolio — Caso Before/After',
    formato: 'Imagen + texto (before/after)',
    publico: 'CEOs, Marketing Managers',
    hashtags: '#PublicidadDigital #Neuromarketing #MetaAds #MarketingDeResultados #CasoDeExito',
    text: `ANTES vs DESPUÉS de aplicar neuromarketing a una campaña:

ANTES:
— Anuncio con propuesta de valor genérica ("Somos los mejores")
— CTA: "Más información"
— Targeting amplio sin segmentación emocional
— Resultado: CTR 0.8% · CPA 95€

DESPUÉS:
— Mensaje que activa el miedo a quedarse atrás
— CTA: "Descubre si tu estrategia está fallando"
— Segmentación por comportamiento e intereses de decisores
— Resultado: CTR 3.2% · CPA 34€

La creatividad sin estrategia psicológica es entretenimiento. Con ella, es conversión.

¿Quieres analizar tu campaña actual?`
  },
  {
    num: 8, type: 'educativo',
    objetivo: 'Educativo — Concepto clave',
    formato: 'Texto + imagen explicativa',
    publico: 'Toda la audiencia',
    hashtags: '#Neuromarketing #MarketingComportamental #PsicologiaDelConsumidor #Publicidad',
    text: `¿Qué es exactamente el neuromarketing? (Sin tecnicismos)

El cerebro humano toma decisiones de compra en menos de 2.5 segundos. En ese tiempo procesa emoción, memoria y percepción, no datos racionales.

El neuromarketing es la aplicación de lo que sabemos sobre cómo funciona el cerebro para diseñar mensajes, experiencias y campañas que conectan con ese proceso de forma natural.

No es manipulación.
Es entender al cliente tan bien que nuestro mensaje le llega exactamente cuando y como lo necesita.`
  },
  {
    num: 9, type: 'opinion',
    objetivo: 'Engagement — Debate profesional',
    formato: 'Texto de debate',
    publico: 'Marketing Managers, CEOs',
    hashtags: '#Marketing #EstrategiaDeMarketing #MarketingDigital #Publicidad #Emprendimiento',
    text: `Opinión polémica (o no tanto):

El 80% del presupuesto de marketing se desperdicia no por falta de dinero sino por falta de estrategia.

Lo veo constantemente:
— Empresas que invierten 10.000€/mes en Meta Ads con mensajes genéricos
— Startups que lanzan campañas antes de entender qué problema resuelven para su cliente
— Marcas que optimizan creatividades sin tocar la estrategia de fondo

El problema no es cuánto inviertes.
Es en qué y con qué enfoque.

¿Estás de acuerdo? ¿O el problema es otro en tu experiencia?`
  },
  {
    num: 10, type: 'educativo',
    objetivo: 'Educativo — Dato sorprendente',
    formato: 'Dato + imagen + explicación',
    publico: 'CEOs, Emprendedores',
    hashtags: '#Neuromarketing #ComportamientoDelConsumidor #Branding #MarketingCientifico',
    text: `Dato que cambia cómo entiendes la publicidad:

El 95% de las decisiones de compra se toman en el subconsciente.
(Fuente: Harvard Business School)

Significa que cuando un cliente te dice "lo tengo que pensar"… en realidad ya ha decidido. Y esa decisión la tomó en los primeros segundos de contacto con tu marca.

Por eso importa tanto:
— La primera impresión visual
— El tono de voz
— La emoción que activa tu mensaje antes de que lean el copy

¿Tu marca está diseñada para los primeros 3 segundos?`
  },
  {
    num: 11, type: 'storytelling',
    objetivo: 'Behind the scenes — Humanización',
    formato: 'Video o carrusel fotos',
    publico: 'Toda la comunidad',
    hashtags: '#BehindTheScenes #AgenciaDeMarketing #CambronStudio #Neuromarketing #VidaDeCEO',
    text: `Un día normal en Cambrón Studio:

7:30 — Revisión de métricas de campañas activas de clientes
9:00 — Sesión de estrategia: construyendo el mapa de emociones de una nueva campaña
12:00 — Llamada con cliente para presentar resultados del mes
14:30 — Taller interno: nuevas tendencias en publicidad basada en IA
17:00 — Revisión de copy de 3 anuncios con lente de neuromarketing
19:00 — Networking con emprendedores del ecosistema Barcelona 22@

Lo que más me gusta de lo que hacemos: cada día aprendemos algo nuevo sobre cómo funciona la mente del consumidor. Y eso se traduce directamente en resultados para nuestros clientes.

¿Cómo es vuestro día a día en marketing?`
  },
  {
    num: 12, type: 'educativo',
    objetivo: 'Educativo — Herramienta práctica',
    formato: 'Hilo / Carrusel',
    publico: 'Marketing Managers',
    hashtags: '#MarketingDigital #Neuromarketing #PublicidadDigital #ChecklistMarketing',
    text: `La checklist de neuromarketing que usamos antes de publicar cualquier anuncio:

— ¿El visual activa una emoción en menos de 3 segundos?
— ¿El headline habla a un deseo o a un miedo real del cliente?
— ¿Hay un solo mensaje principal (no tres)?
— ¿El CTA es específico y de bajo riesgo percibido?
— ¿La landing page continúa la promesa del anuncio sin fricción?
— ¿Hemos eliminado todo elemento que distraiga del objetivo?
— ¿Hay prueba social visible en las primeras 2 pantallas?

Guárdala. Te va a ahorrar dinero.

¿Qué añadirías tú a la lista?`
  },
  {
    num: 13, type: 'inspiracional',
    objetivo: 'Inspiracional — Liderazgo',
    formato: 'Texto con cita',
    publico: 'CEOs, Emprendedores',
    hashtags: '#Liderazgo #Branding #Neuromarketing #Emprendimiento #Marketing',
    text: `"La gente no compra lo que haces. Compra por qué lo haces."
— Simon Sinek

Llevamos años aplicando esto con nuestros clientes, y funciona.

Pero hay una capa más profunda que Sinek no menciona:

La gente compra cuando EL POR QUÉ activa la emoción correcta en el momento adecuado.

Puedes tener el "por qué" más bonito del mundo. Si no llega en el momento emocional correcto del consumidor, no conecta.

Eso es lo que trabajamos en Cambrón Studio: el "por qué" + el "cuándo" + el "cómo" emocional.

¿Tu marca sabe cuándo y cómo llegar a su cliente?`
  },
  {
    num: 14, type: 'educativo',
    objetivo: 'Educativo — Sector específico (Tech)',
    formato: 'Texto + imagen sectorial',
    publico: 'CEOs startups tecnológicas',
    hashtags: '#Startups #MarketingB2B #SaaS #ComunicacionEstrategica #Neuromarketing',
    text: `Para los que tenéis startups tech: el error de comunicación más frecuente que veo.

Explicáis vuestra tecnología.
Pero no explicáis el problema que resolvéis.

Ejemplo:
MAL — "Nuestra plataforma usa IA para optimizar procesos de RRHH con algoritmos predictivos"
BIEN — "Tu equipo de RRHH deja de perder 12 horas semanales en tareas que nuestra IA hace en 20 minutos"

La diferencia no es de producto. Es de perspectiva.

El cliente no compra tu tecnología.
Compra el resultado que le da.

¿Tu pitch está orientado al producto o al resultado?`
  },
  {
    num: 15, type: 'portfolio',
    objetivo: 'Testimonial / Social proof',
    formato: 'Cita de cliente + imagen',
    publico: 'Toda la audiencia',
    hashtags: '#CasoDeExito #Neuromarketing #Publicidad #MarketingDeResultados #Branding',
    text: `El mejor feedback que puede recibir una agencia de neuromarketing:

"Llevábamos meses invirtiendo en publicidad sin ver resultados claros. Después de trabajar con Cambrón Studio, no cambiamos el presupuesto. Cambiamos cómo pensábamos sobre nuestro cliente. Y los resultados llegaron solos."
— Marketing Director, empresa mediana sector retail, Barcelona

Nuestro trabajo no es hacer anuncios bonitos.
Es cambiar la forma en que las marcas entienden a sus clientes.

Y cuando eso pasa, todo lo demás fluye.

¿Quieres que analicemos tu estrategia actual?`
  },
  {
    num: 16, type: 'educativo',
    objetivo: 'Educativo — Tendencias',
    formato: 'Carrusel con datos',
    publico: 'Marketing Managers, CEOs',
    hashtags: '#MarketingTendencias2025 #Marketing #IA #PublicidadDigital #Neuromarketing',
    text: `Tendencias de marketing que van a dominar 2025 (basadas en comportamiento del consumidor):

1. Hiperpersonalización emocional en publicidad
2. Video de menos de 15 segundos como formato de conversión principal
3. Marketing de comunidad sobre marketing de broadcast
4. Contenido educativo que posiciona como experto (thought leadership)
5. IA para personalización de mensajes a escala

Lo que no cambiará:
El cerebro humano sigue tomando decisiones igual que hace 10.000 años.
Emoción — Intuición — Racionalización posterior.

Las marcas que entiendan esto seguirán ganando.

¿Cuál de estas tendencias ya estás aplicando?`
  },
  {
    num: 17, type: 'storytelling',
    objetivo: 'Manifiesto — Valores de marca',
    formato: 'Texto largo + imagen de marca',
    publico: 'Toda la comunidad',
    hashtags: '#CambronStudio #Neuromarketing #PublicidadCreativa #MisionDeMarca #Emprendimiento',
    text: `Por qué fundé Cambrón Studio.

Llevaba años trabajando en marketing y publicidad viendo siempre lo mismo:
Muchas marcas invirtiendo mucho dinero. Pocos resultados reales.

El problema no era la inversión. Era que la mayoría de campañas se diseñaban desde la perspectiva de la marca, no desde la perspectiva del cliente.

Hacer publicidad basada en lo que creemos que queremos comunicar, en lugar de basarla en cómo funciona realmente la mente de la persona que la va a recibir.

Decidí crear Cambrón Studio para cambiar eso.

Para demostrar que cuando entiendes el comportamiento del consumidor, la publicidad deja de ser un gasto y se convierte en una inversión con retorno predecible.

Esa es nuestra misión.
Esa es nuestra obsesión.

Bienvenidos a Cambrón Studio.`
  },
  {
    num: 18, type: 'educativo',
    objetivo: 'Educativo — Quick tip',
    formato: 'Texto corto + imagen',
    publico: 'Marketing Managers',
    hashtags: '#QuickTip #Neuromarketing #CopywritingPersuasivo #MarketingDigital',
    text: `Quick tip de neuromarketing para tu próximo anuncio:

Usa el principio de ESCASEZ + ESPECIFICIDAD.

MAL — "Oferta limitada" (demasiado genérico)
BIEN — "Solo quedan 7 plazas para el mes de enero"

El cerebro responde más intensamente a la escasez específica que a la genérica.
Cuanto más concreto, más real parece la urgencia. Y más activa el FOMO.

Testéalo en tu próximo anuncio y cuéntame qué pasa.`
  },
  {
    num: 19, type: 'engagement',
    objetivo: 'Networking — Colaboracion',
    formato: 'Texto de comunidad',
    publico: 'Toda la comunidad',
    hashtags: '#ComunidadMarketing #NetworkingBarcelona #Marketers #Publicidad #Neuromarketing',
    text: `Estamos construyendo una comunidad de marketers, emprendedores y directivos que creen que la publicidad puede ser más inteligente y más humana al mismo tiempo.

Si tú también trabajas en esta dirección, conectemos.

Y si conoces a alguien que debería estar en esta conversación, etiquétalo aquí abajo.

La mejor publicidad se construye en comunidad.`
  },
  {
    num: 20, type: 'promocional',
    objetivo: 'Promocional — Oferta directa (soft sell)',
    formato: 'Imagen + texto con CTA claro',
    publico: 'CEOs, Marketing Managers listos para contratar',
    hashtags: '#MarketingDeResultados #Neuromarketing #PublicidadQueConvierte #CambronStudio #Estrategia',
    text: `¿Tu publicidad está generando los resultados que esperabas?

Si la respuesta es "podría ir mejor", esta semana abrimos 3 plazas para un Diagnóstico Estratégico de Publicidad gratuito.

En 45 minutos analizamos:
— Tu campaña actual o estrategia de comunicación
— Los 3 puntos críticos que están limitando tus conversiones
— Qué cambiaría Cambrón Studio y por qué

No es una llamada de venta. Es un diagnóstico real con valor concreto.
Solo 3 plazas disponibles esta semana.

Escríbeme "DIAGNÓSTICO" en un mensaje privado y lo gestionamos.

¿A quién conoces que necesite esto?`
  }
];

/* ─── RENDER POSTS ───────────────────────────────── */
function renderPosts(filter = 'all') {
  const grid = document.getElementById('postsGrid');
  const filtered = filter === 'all' ? posts : posts.filter(p => p.type === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="post-card" data-type="${p.type}">
      <div class="post-card-header">
        <span class="post-num">POST ${String(p.num).padStart(2, '0')}</span>
        <div class="post-meta">
          <span class="tag tag-line">${p.formato}</span>
          <span class="tag tag-purple">${p.type}</span>
        </div>
      </div>
      <div class="post-body">
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">
          <span class="tag tag-line" style="font-size:10px">${p.objetivo}</span>
        </div>
        <div style="font-family:var(--mono);font-size:9px;color:var(--ink-4);margin-bottom:6px;letter-spacing:0.08em;text-transform:uppercase">
          Publico: ${p.publico}
        </div>
        <div class="post-text" id="pt-${p.num}">${p.text}</div>
      </div>
      <div class="post-footer">
        <div class="post-hashtags">${p.hashtags}</div>
        <button class="btn-expand" onclick="togglePost(${p.num}, this)">Ver todo</button>
        <button class="btn-copy"   onclick="copyPost(${p.num}, this)">Copiar</button>
      </div>
    </div>
  `).join('');
}

/* ─── TOGGLE POST EXPAND ─────────────────────────── */
function togglePost(num, btn) {
  const el = document.getElementById(`pt-${num}`);
  el.classList.toggle('expanded');
  btn.textContent = el.classList.contains('expanded') ? 'Colapsar' : 'Ver todo';
}

/* ─── COPY POST TEXT + HASHTAGS ──────────────────── */
function copyPost(num, btn) {
  const p = posts.find(x => x.num === num);
  const full = p.text + '\n\n' + p.hashtags;
  navigator.clipboard.writeText(full).then(() => {
    btn.textContent = 'Copiado';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copiar';
      btn.classList.remove('copied');
    }, 2000);
  });
}

/* ─── COPY HELPERS ───────────────────────────────── */
function copyText(id, btn) {
  const el = document.getElementById(id);
  const originalLabel = btn.textContent;
  navigator.clipboard.writeText(el.innerText || el.textContent).then(() => {
    btn.textContent = 'Copiado';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = originalLabel;
      btn.classList.remove('copied');
    }, 2000);
  });
}

function copyElement(text, btn) {
  const originalLabel = btn.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copiado';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = originalLabel;
      btn.classList.remove('copied');
    }, 2000);
  });
}

/* ─── NAVIGATION ─────────────────────────────────── */
function navigate(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const sec = document.getElementById(sectionId);
  if (sec) {
    sec.classList.add('active');
    document.querySelector('.main').scrollTop = 0;
  }

  const navItem = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
  if (navItem) navItem.classList.add('active');

  if (sectionId === 'posts-all') {
    renderPosts('all');
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    const allChip = document.querySelector('.filter-chip[data-filter="all"]');
    if (allChip) allChip.classList.add('active');
  }
}

/* ─── FILTER CHIPS ───────────────────────────────── */
document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', function () {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    renderPosts(this.dataset.filter);
  });
});

/* ─── SIDEBAR NAV CLICK ──────────────────────────── */
document.querySelectorAll('.nav-item[data-section]').forEach(item => {
  item.addEventListener('click', () => navigate(item.dataset.section));
});

/* ─── SEARCH INDEX ───────────────────────────────── */
const searchIndex = [
  { section: 'overview',         title: 'Resumen general',                          preview: 'Dashboard principal con KPIs y mapa de contenidos por semana' },
  { section: 'perfil-identidad', title: 'Identidad del Perfil',                     preview: 'Nombre, cargo, URL personalizada, headline optimizado y justificacion' },
  { section: 'perfil-about',     title: 'Extracto Acerca de',                       preview: 'Texto completo del extracto orientado al cliente potencial con CTA' },
  { section: 'perfil-exp',       title: 'Experiencia y Keywords SEO',               preview: 'Historial profesional y palabras clave para posicionamiento en LinkedIn' },
  { section: 'seg-persona1',     title: 'Buyer Persona 1 — Marketing Manager',      preview: 'Filtros Sales Navigator, pain points y justificacion de la segmentacion' },
  { section: 'seg-persona2',     title: 'Buyer Persona 2 — CEO / Founder',          preview: 'Filtros Sales Navigator para startups y PYMES en crecimiento' },
  { section: 'embudo1',          title: 'Embudo 1 — Reunion de descubrimiento',     preview: '3 mensajes para conseguir videollamada con Marketing Managers' },
  { section: 'embudo2',          title: 'Embudo 2 — Descarga + Demo',               preview: '3 mensajes para CEOs y Fundadores de startups' },
  { section: 'posts-all',        title: '20 Publicaciones LinkedIn',                preview: 'Todos los posts con texto completo, hashtags y boton de copia directa' },
  { section: 'crecimiento',      title: 'Estrategia de Crecimiento y KPIs',         preview: 'Tacticas de amplificacion, metricas y objetivos mensuales mes 1–3 y 6+' },
  { section: 'hashtags',         title: 'Hashtags y Keywords SEO',                  preview: 'Sistema de hashtags por volumen, nicho y marca con reglas de uso' },
  ...posts.map(p => ({
    section: 'posts-all',
    title: `Post ${p.num} — ${p.objetivo}`,
    preview: p.text.substring(0, 90) + '…'
  }))
];

/* ─── SEARCH LOGIC ───────────────────────────────── */
const searchInput   = document.getElementById('globalSearch');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function () {
  const q = this.value.toLowerCase().trim();

  if (!q) {
    searchResults.classList.remove('show');
    return;
  }

  const matches = searchIndex
    .filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.preview.toLowerCase().includes(q)
    )
    .slice(0, 8);

  if (!matches.length) {
    searchResults.classList.remove('show');
    return;
  }

  searchResults.innerHTML = matches.map(m => `
    <div class="search-result-item" onclick="navigate('${m.section}'); searchInput.value = ''; searchResults.classList.remove('show')">
      <div class="sri-section">${m.section.replace(/-/g, ' ')}</div>
      <div class="sri-title">${m.title}</div>
      <div class="sri-preview">${m.preview}</div>
    </div>
  `).join('');

  searchResults.classList.add('show');
});

/* Close search on outside click */
document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap')) {
    searchResults.classList.remove('show');
  }
});

/* ─── INIT ───────────────────────────────────────── */
renderPosts('all');
