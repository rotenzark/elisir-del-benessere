/* Elisir del Benessere — i18n IT/EN, intro "goccia", orari (Europe/Rome),
   firma acqua, barra azioni, reveal, micro-CTA per trattamento */
(function () {
  'use strict';

  var EMAIL = 'elisirdelbenessere.et@gmail.com';

  /* ---------- i18n ---------- */
  var translations = {
    it: {
      skip: 'Salta al contenuto', menu: 'Menu',
      nav_elisir: 'L’elisir', nav_treat: 'Trattamenti', nav_who: 'Ermira', nav_where: 'Orari e dove',
      book: 'Prenota', aria_top: 'Elisir del Benessere — torna su', aria_nav: 'Navigazione principale',
      hero_eyebrow: 'Centro estetico · Ripa di Porta Ticinese 107 — Navigli, Milano',
      hero_titlesub: 'del Benessere',
      hero_lead: 'Massaggi, viso e corpo sulla riva del Naviglio Grande. Un gesto lento, ripetuto finché non torna la leggerezza.',
      call_cta: 'Prenota', write_cta: 'Scrivici', hero_proof: '4,8 su 5 · 257 recensioni',
      elisir_kicker: 'Il gesto', elisir_title: 'Un elisir è una formula paziente.',
      elisir_body: 'Oli, essenze, pietre calde, erbe. E una mano che non ha fretta. Sulla riva del Naviglio, il benessere non è un ritocco veloce: è un tempo che ti riprendi. Una goccia alla volta.',
      elisir_n1: 'Un centro a conduzione personale', elisir_n2: 'Una persona alla volta, senza fretta', elisir_n3: 'Prodotti e gesti scelti sulla tua pelle',
      treat_kicker: 'Il listino', treat_title: 'Trattamenti',
      treat_sub: 'I gesti della casa, per categoria. Durate e prezzi su richiesta: ogni percorso si costruisce sulla persona.',
      g_massaggi: 'Massaggi',
      t_aroma: 'Massaggio aromaterapico', t_aroma_d: 'Oli essenziali scelti sulla pelle e sul momento: un massaggio lento che scioglie e riequilibra.',
      t_linfo: 'Linfodrenante', t_linfo_d: 'Manovre leggere e ritmate per drenare, sgonfiare e rimettere in circolo la leggerezza.',
      t_hot: 'Hot stone', t_hot_d: 'Pietre laviche calde che sciolgono la tensione in profondità, con il calore che resta.',
      ask: 'Prenota',
      g_viso: 'Viso',
      t_pulizia: 'Pulizia profonda', t_pulizia_d: 'Detersione, estrazione e idratazione: la pelle torna a respirare.',
      t_peeling: 'Peeling', t_peeling_d: 'Un rinnovo delicato della superficie per un incarnato più luminoso e uniforme.',
      t_antiage: 'Anti-age', t_antiage_d: 'Trattamenti mirati che ridisegnano tono ed elasticità, senza forzare la mano.',
      g_corpo: 'Corpo',
      t_snellente: 'Trattamento snellente', t_snellente_d: 'Un percorso corpo che rimodella e compatta, gesto dopo gesto.',
      t_ceretta: 'Ceretta ed epilazione', t_ceretta_d: 'Epilazione precisa e rispettosa della pelle, in ogni zona.',
      g_mani: 'Mani & Piedi',
      t_mani: 'Manicure', t_mani_d: 'Cura di mani e unghie, classica o semipermanente.',
      t_piedi: 'Pedicure', t_piedi_d: 'Piedi curati e leggeri, classica o semipermanente.',
      treat_note: 'Il listino completo, con durate e prezzi aggiornati, te lo diamo in un attimo al telefono o via email.',
      who_kicker: 'La mano', who_title: 'Da Ermira, una persona alla volta',
      who_body: 'Elisir del Benessere è un centro a conduzione personale: Ermira accoglie chi arriva senza sovrapposizioni, con la cura del dettaglio che le riconoscono le recensioni. Ambiente accogliente e moderno, sulla riva del Naviglio Grande — il posto giusto per rallentare davvero.',
      who_reviews: 'su 257 recensioni', ermira_cap: 'La cabina trattamenti',
      prova_kicker: 'La fiducia', prova_sub: 'La media di 257 recensioni verificate. La cura si sente, e si legge.', prova_cta: 'Leggi le recensioni',
      book_kicker: 'L’appuntamento', book_title: 'Prenota il tuo momento',
      book_sub: 'Le prenotazioni online sono in aggiornamento: per ora bastano un attimo e un messaggio. Ti richiamiamo se serve.',
      write_full: 'Scrivici via email',
      hours_kicker: 'Quando', hours_title: 'Orari', hours_caption: 'Orari di apertura',
      mon: 'Lunedì', tue: 'Martedì', wed: 'Mercoledì', thu: 'Giovedì', fri: 'Venerdì', sat: 'Sabato', sun: 'Domenica', closed: 'chiuso',
      open_now: 'Aperto ora', closed_now: 'Chiuso', until: 'fino alle', opens: 'apre',
      where_kicker: 'Dove', where_zone: 'Navigli — riva del Naviglio Grande', where_near: 'A pochi passi dalla Darsena e dal Naviglio Pavese.', maps: 'Apri in Maps',
      f_contacts: 'Contatti', f_where: 'Dove', f_what: 'Centro estetico', f_line: 'Massaggi, viso e corpo, sulla riva del Naviglio Grande.'
    },
    en: {
      skip: 'Skip to content', menu: 'Menu',
      nav_elisir: 'The elixir', nav_treat: 'Treatments', nav_who: 'Ermira', nav_where: 'Hours & location',
      book: 'Book', aria_top: 'Elisir del Benessere — back to top', aria_nav: 'Main navigation',
      hero_eyebrow: 'Beauty centre · Ripa di Porta Ticinese 107 — Navigli, Milan',
      hero_titlesub: 'del Benessere',
      hero_lead: 'Massage, face and body on the bank of the Naviglio Grande. A slow gesture, repeated until lightness returns.',
      call_cta: 'Book', write_cta: 'Email us', hero_proof: '4.8 out of 5 · 257 reviews',
      elisir_kicker: 'The gesture', elisir_title: 'An elixir is a patient formula.',
      elisir_body: 'Oils, essences, hot stones, herbs. And a hand that is never in a hurry. On the Naviglio, wellbeing is not a quick fix: it is time you take back. One drop at a time.',
      elisir_n1: 'A personally run centre', elisir_n2: 'One person at a time, unhurried', elisir_n3: 'Products and gestures chosen for your skin',
      treat_kicker: 'The menu', treat_title: 'Treatments',
      treat_sub: 'The house gestures, by category. Durations and prices on request: every path is built around the person.',
      g_massaggi: 'Massage',
      t_aroma: 'Aromatherapy massage', t_aroma_d: 'Essential oils chosen for your skin and the moment: a slow massage that releases and rebalances.',
      t_linfo: 'Lymphatic drainage', t_linfo_d: 'Light, rhythmic strokes to drain, de-puff and set lightness back in motion.',
      t_hot: 'Hot stone', t_hot_d: 'Warm volcanic stones that melt deep tension, with heat that lingers.',
      ask: 'Book',
      g_viso: 'Face',
      t_pulizia: 'Deep cleanse', t_pulizia_d: 'Cleansing, extraction and hydration: the skin breathes again.',
      t_peeling: 'Peeling', t_peeling_d: 'A gentle resurfacing for a brighter, more even complexion.',
      t_antiage: 'Anti-age', t_antiage_d: 'Targeted treatments that redraw tone and elasticity, without forcing the hand.',
      g_corpo: 'Body',
      t_snellente: 'Slimming treatment', t_snellente_d: 'A body path that reshapes and firms, gesture after gesture.',
      t_ceretta: 'Waxing & hair removal', t_ceretta_d: 'Precise hair removal that respects the skin, on every area.',
      g_mani: 'Hands & Feet',
      t_mani: 'Manicure', t_mani_d: 'Care for hands and nails, classic or gel.',
      t_piedi: 'Pedicure', t_piedi_d: 'Cared-for, lighter feet, classic or gel.',
      treat_note: 'We’ll give you the full menu, with up-to-date durations and prices, in a moment by phone or email.',
      who_kicker: 'The hand', who_title: 'With Ermira, one person at a time',
      who_body: 'Elisir del Benessere is a personally run centre: Ermira welcomes each guest with no overlap, with the attention to detail her reviews are known for. A warm, modern setting on the bank of the Naviglio Grande — the right place to truly slow down.',
      who_reviews: 'from 257 reviews', ermira_cap: 'A treatment room',
      prova_kicker: 'The trust', prova_sub: 'The average of 257 verified reviews. The care shows — and reads.', prova_cta: 'Read the reviews',
      book_kicker: 'The appointment', book_title: 'Book your moment',
      book_sub: 'Online booking is being updated: for now, a moment and a message are enough. We’ll call you back if needed.',
      write_full: 'Email us',
      hours_kicker: 'When', hours_title: 'Hours', hours_caption: 'Opening hours',
      mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', sat: 'Saturday', sun: 'Sunday', closed: 'closed',
      open_now: 'Open now', closed_now: 'Closed', until: 'until', opens: 'opens',
      where_kicker: 'Where', where_zone: 'Navigli — Naviglio Grande bank', where_near: 'A few steps from the Darsena and the Naviglio Pavese.', maps: 'Open in Maps',
      f_contacts: 'Contact', f_where: 'Find us', f_what: 'Beauty centre', f_line: 'Massage, face and body, on the bank of the Naviglio Grande.'
    }
  };

  var current = 'it';
  try { var s = localStorage.getItem('elisir-lang'); if (s === 'en' || s === 'it') current = s; } catch (e) {}

  function applyLang(lang) {
    var dict = translations[lang]; if (!dict) return;
    current = lang; document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) { var k = el.getAttribute('data-i18n'); if (dict[k] !== undefined) el.textContent = dict[k]; });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { var k = el.getAttribute('data-i18n-aria'); if (dict[k] !== undefined) el.setAttribute('aria-label', dict[k]); });
    document.querySelectorAll('.lang-btn').forEach(function (b) { var a = b.getAttribute('data-lang') === lang; b.classList.toggle('is-active', a); b.setAttribute('aria-pressed', String(a)); });
    try { localStorage.setItem('elisir-lang', lang); } catch (e) {}
    updateStatus();
  }
  document.querySelectorAll('.lang-btn').forEach(function (b) { b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); }); });

  /* ---------- micro-CTA per trattamento (email precompilata) ---------- */
  document.querySelectorAll('.voce-cta').forEach(function (cta) {
    cta.addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation();
      var voce = cta.closest('.voce');
      var nome = voce ? voce.querySelector('.voce-n').textContent.trim() : '';
      var subj = (current === 'en' ? 'Booking: ' : 'Prenotazione: ') + nome;
      var body = current === 'en'
        ? 'Hello, I would like to book: ' + nome + '.'
        : 'Buongiorno, vorrei prenotare: ' + nome + '.';
      window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
    });
  });

  /* ---------- orari: stato Aperto/Chiuso (Europe/Rome) ---------- */
  var SCHEDULE = { 0: [], 1: [[510, 1140]], 2: [[540, 1140]], 3: [[480, 1140]], 4: [[510, 1140]], 5: [[480, 1140]], 6: [[480, 1020]] };
  var DAY_KEYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  var WD_MAP = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  function romeNow() {
    try {
      var parts = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Rome', hour12: false, weekday: 'short', hour: '2-digit', minute: '2-digit' }).formatToParts(new Date());
      var wd, h, m;
      parts.forEach(function (p) { if (p.type === 'weekday') wd = WD_MAP[p.value]; else if (p.type === 'hour') h = parseInt(p.value, 10) % 24; else if (p.type === 'minute') m = parseInt(p.value, 10); });
      if (wd === undefined || isNaN(h) || isNaN(m)) return null;
      return { day: wd, min: h * 60 + m };
    } catch (e) { return null; }
  }
  function hhmm(x) { var h = Math.floor(x / 60) % 24, m = x % 60; return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m); }
  function computeStatus(now) {
    var today = SCHEDULE[now.day] || [];
    for (var i = 0; i < today.length; i++) if (now.min >= today[i][0] && now.min < today[i][1]) return { open: true, close: today[i][1] };
    for (var d = 0; d < 8; d++) {
      var di = (now.day + d) % 7, slots = SCHEDULE[di] || [];
      for (var j = 0; j < slots.length; j++) { if (d === 0 && slots[j][0] <= now.min) continue; return { open: false, nextDay: di, nextOpen: slots[j][0], sameDay: d === 0 }; }
    }
    return { open: false };
  }
  function updateStatus() {
    var now = romeNow(), dict = translations[current], boxes = document.querySelectorAll('.status'), today = now ? now.day : -1;
    document.querySelectorAll('.orari-tabella tr[data-day]').forEach(function (tr) { tr.classList.toggle('is-today', parseInt(tr.getAttribute('data-day'), 10) === today); });
    if (!now) { boxes.forEach(function (b) { b.hidden = true; }); return; }
    var st = computeStatus(now), text, cls;
    if (st.open) { cls = 'is-open'; text = dict.open_now + ' · ' + dict.until + ' ' + hhmm(st.close); }
    else { cls = 'is-closed'; text = dict.closed_now; if (st.nextOpen !== undefined) { var when = st.sameDay ? '' : (' ' + dict[DAY_KEYS[st.nextDay]]); text += ' · ' + dict.opens + when + ' ' + hhmm(st.nextOpen); } }
    boxes.forEach(function (b) { b.hidden = false; b.classList.remove('is-open', 'is-closed'); b.classList.add(cls); var t = b.querySelector('.status-text'); if (t) t.textContent = text; });
  }

  /* ---------- intro "la goccia" ---------- */
  var intro = document.getElementById('intro');
  if (intro) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { intro.remove(); }
    else {
      var done = false;
      var finish = function () {
        if (done) return; done = true;
        clearTimeout(t1); clearTimeout(t2);
        document.documentElement.classList.add('intro-done');
        intro.classList.add('intro--out');
        document.body.classList.remove('intro-lock');
        setTimeout(function () { if (intro.parentNode) intro.remove(); }, 750);
        window.removeEventListener('pointerdown', finish, true);
        window.removeEventListener('keydown', finish, true);
      };
      document.documentElement.classList.add('has-intro');
      document.body.classList.add('intro-lock');
      var t1 = setTimeout(function () { document.documentElement.classList.add('intro-done'); }, 2200);
      var t2 = setTimeout(finish, 2700);
      window.addEventListener('pointerdown', finish, true);
      window.addEventListener('keydown', finish, true);
    }
  }

  /* ---------- firma acqua (feTurbulence, solo desktop + no reduced-motion) ---------- */
  (function () {
    var turb = document.querySelector('#waterfilter feTurbulence');
    if (!turb) return;
    var started = false;
    function maybeEnable() {
      if (started) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (!window.matchMedia('(min-width: 861px)').matches) return;
      started = true;
      document.querySelectorAll('.hero-water, .elisir-water').forEach(function (el) { el.classList.add('water-on'); });
      var last = 0;
      function tick(ts) {
        if (ts - last > 80) {
          last = ts;
          var bx = 0.0105 + Math.sin(ts / 9000) * 0.0025;
          var by = 0.018 + Math.cos(ts / 11000) * 0.003;
          turb.setAttribute('baseFrequency', bx.toFixed(4) + ' ' + by.toFixed(4));
        }
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    maybeEnable();
    window.addEventListener('resize', maybeEnable, { passive: true });
  })();

  /* ---------- ripple full-page (l'elisir che si propaga) ---------- */
  (function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var cv = document.getElementById('rippleLayer');
    if (!cv || !cv.getContext) return;
    var ctx = cv.getContext('2d');
    if (!ctx) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2), W = 0, H = 0;
    function resize() {
      W = window.innerWidth; H = window.innerHeight;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      cv.style.width = W + 'px'; cv.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    var DUR = 1600;
    var ripples = [], raf = null;

    function spawn(x, y) {
      ripples.push({ x: x, y: y, t: performance.now() });
      if (ripples.length > 8) ripples.shift();
      if (!raf) raf = requestAnimationFrame(loop);
    }
    function loop(now) {
      ctx.clearRect(0, 0, W, H);
      var maxr = Math.sqrt(W * W + H * H); // diagonale: copre tutta la pagina
      var alive = false;
      for (var i = 0; i < ripples.length; i++) {
        var r = ripples[i], p = (now - r.t) / DUR;
        if (p < 0 || p >= 1) continue;
        alive = true;
        var ease = 1 - Math.pow(1 - p, 3);
        var rad = ease * maxr;
        var fade = (1 - p);
        ctx.beginPath();
        ctx.arc(r.x, r.y, rad, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(184, 117, 43, ' + (fade * 0.42).toFixed(3) + ')';
        ctx.lineWidth = Math.max(0.5, 2.6 * fade);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(r.x, r.y, rad * 0.7, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(112, 122, 80, ' + (fade * 0.3).toFixed(3) + ')';
        ctx.lineWidth = Math.max(0.5, 1.6 * fade);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(r.x, r.y, rad * 0.42, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(184, 117, 43, ' + (fade * 0.18).toFixed(3) + ')';
        ctx.lineWidth = Math.max(0.5, 1 * fade);
        ctx.stroke();
      }
      for (var j = ripples.length - 1; j >= 0; j--) { if ((now - ripples[j].t) >= DUR) ripples.splice(j, 1); }
      if (alive) { raf = requestAnimationFrame(loop); }
      else { raf = null; ctx.clearRect(0, 0, W, H); }
    }
    window.addEventListener('pointerdown', function (e) { spawn(e.clientX, e.clientY); }, { passive: true });
    // goccia iniziale al centro, appena finita l'intro
    setTimeout(function () { spawn(W / 2, H * 0.42); }, 2950);
  })();

  /* ---------- anno, nav, barra azioni ---------- */
  document.querySelectorAll('[data-current-year]').forEach(function (el) { el.textContent = String(new Date().getFullYear()); });

  var nav = document.querySelector('.nav'), toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () { var o = nav.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(o)); });
    nav.querySelectorAll('.nav-menu a').forEach(function (l) { l.addEventListener('click', function () { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }); });
  }

  var actionbar = document.getElementById('actionbar'), hero = document.querySelector('.hero');
  if (actionbar && hero) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return; ticking = true;
      window.requestAnimationFrame(function () { actionbar.classList.toggle('is-visible', window.scrollY > hero.offsetHeight * 0.6); ticking = false; });
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  /* ---------- reveal ---------- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.sez-intesta, .elisir-inner, .gruppo, .ermira-media, .ermira-testo, .prova > *, .prenota-inner, .dove-orari, .dove-luogo');
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }); }, { threshold: 0.12 });
    targets.forEach(function (t) { io.observe(t); });
    var alive = false, sentinel = new IntersectionObserver(function () { alive = true; sentinel.disconnect(); });
    sentinel.observe(document.body);
    setTimeout(function () { if (!alive) document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); }); }, 1500);
  }

  /* ---------- avvio ---------- */
  if (current !== 'it') applyLang(current);
  updateStatus();
  setInterval(updateStatus, 60000);
})();
