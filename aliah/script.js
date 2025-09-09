// Boot the app after fetching data
(async () => {
  /* Sticky offset for sidebar + header canvas sizing */
  function syncHeaderOffset(){
    const header = document.querySelector('header');
    if(!header) return;
    const h = header.offsetHeight || 0;
    document.documentElement.style.setProperty('--header-h', h + 'px');
    sizeStars();
  }
  window.addEventListener('load', syncHeaderOffset);
  window.addEventListener('resize', syncHeaderOffset);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncHeaderOffset);
  }

  /* Load data */
  let promises = [];
  let emojis = [];
  let timeline = [];
  let placesMap = [];
  try {
    const res = await fetch('data.json', { cache: 'no-store' });
    const data = await res.json();
    promises  = Array.isArray(data.promises) ? data.promises : [];
    emojis    = Array.isArray(data.emojis) ? data.emojis : [];
    timeline  = Array.isArray(data.timeline) ? data.timeline : [];
    placesMap = Array.isArray(data.places_map) ? data.places_map : [];
  } catch (e) {
    console.warn('data.json could not be loaded, using fallback.');
    promises = ["I fell in love with your voice, your smile, your sweetness, your adorable little chaos, and the way time bends when I'm with you"];
    emojis   = ["💖","✨","🥰","🌸"];
    timeline = [];
    placesMap = [];
  }

  /* Elements */
  const grid = document.getElementById("grid");
  const countEl = document.getElementById("count");
  const totalEl = document.getElementById("total");
  const fill = document.getElementById("fill");
  const mCountEl = document.getElementById("m_count");
  const mTotalEl = document.getElementById("m_total");
  const mFill = document.getElementById("m_fill");
  const toast = document.getElementById("toast");
  const tlEl = document.getElementById("tl");

  /* ---------- Starry header ---------- */
  const starCanvas = document.getElementById('starsCanvas');
  const sctx = starCanvas.getContext('2d', { alpha: true });
  let stars = [];
  function sizeStars(){
    if(!starCanvas) return;
    const rect = starCanvas.getBoundingClientRect();
    starCanvas.width  = Math.max(300, rect.width  * devicePixelRatio);
    starCanvas.height = Math.max(80,  rect.height * devicePixelRatio);
    const count = Math.floor((starCanvas.width * starCanvas.height) / 15000);
    stars = new Array(count).fill(0).map(() => ({
      x: Math.random()*starCanvas.width,
      y: Math.random()*starCanvas.height,
      r: Math.random()*1.5 + .4,
      a: Math.random()*Math.PI*2,
      v: (Math.random()*0.7 + 0.3) * 0.02
    }));
  }
  function drawStars(){
    sctx.clearRect(0,0,starCanvas.width, starCanvas.height);
    sctx.globalCompositeOperation = 'lighter';
    for(const st of stars){
      st.a += st.v;
      const alpha = 0.35 + 0.35*Math.sin(st.a);
      sctx.beginPath();
      sctx.arc(st.x, st.y, st.r, 0, Math.PI*2);
      sctx.fillStyle = `rgba(255,255,255,${alpha})`;
      sctx.fill();
    }
    requestAnimationFrame(drawStars);
  }
  sizeStars(); drawStars();

  /* ---------- Emoji dust (parallax) ---------- */
  (function startEmojiDust(){
    const host = document.getElementById('emojiDust');
    if(!host) return;
    const chars = ["💖","✨","🌸","💌","🫶","🌟","🎀","🧡"];
    for(let i=0;i<18;i++){
      const span = document.createElement('span');
      span.textContent = chars[i % chars.length];
      span.style.position = 'absolute';
      span.style.left = Math.random()*100 + 'vw';
      span.style.top = Math.random()*100 + 'vh';
      span.style.fontSize = (12 + Math.random()*18) + 'px';
      span.style.opacity = (0.15 + Math.random()*0.25).toFixed(2);
      span.style.filter = 'blur(' + (Math.random()*0.5) + 'px)';
      span.style.animation = `float${i%3} ${18 + Math.random()*12}s linear infinite`;
      host.appendChild(span);
    }
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float0 { from { transform: translateY(10vh) } to { transform: translateY(-10vh) } }
      @keyframes float1 { from { transform: translateY(-8vh) } to { transform: translateY(8vh) } }
      @keyframes float2 { from { transform: translateY(12vh) } to { transform: translateY(-12vh) } }
    `;
    document.head.appendChild(style);
  })();

  /* ---------- Timeline render + scroll reveal ---------- */
  function renderTimeline(items){
    if(!tlEl) return;
    tlEl.innerHTML = "";
    items.forEach(({ date, textHTML }) => {
      const li = document.createElement('li');
      li.className = 'tl-item';
      li.innerHTML = `
        <span class="tl-dot" aria-hidden="true"></span>
        <div class="tl-date">${date}</div>
        <article class="tl-card">${textHTML}</article>
      `;
      tlEl.appendChild(li);
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

    document.querySelectorAll('.tl-item').forEach(el => io.observe(el));
  }

  /* ---------- Real map (Leaflet + OSM) ---------- */
  async function initLeafletMap(list){
    const mapNode = document.getElementById('realMap');
    if(!mapNode || !window.L) return;

    // Center on Mauritius roughly
    const map = L.map(mapNode, {
      zoomControl: true,
      attributionControl: true
    }).setView([-20.2, 57.5], 12);

    // OSM tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Cute emoji marker
    const emojiIcon = (emoji='📍') =>
      L.divIcon({
        className: 'emoji-marker',
        html: `<div style="
          display:flex;align-items:center;justify-content:center;
          width:34px;height:34px;border-radius:50%;
          background: linear-gradient(180deg, var(--brand), var(--brand-2));
          color:#fff;border:1px solid rgba(255,255,255,.4);
          box-shadow:0 10px 24px rgba(0,0,0,.45);font-size:16px;
          ">${emoji}</div>`,
        iconSize: [34,34],
        iconAnchor: [17, 34],
        popupAnchor: [0, -30]
      });

    // Helper: geocode name → [lat,lng]
    async function geocode(q){
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(q + ', Mauritius')}`;
      const res = await fetch(url, { headers: { 'Accept-Language': 'en' }});
      const js = await res.json();
      if (Array.isArray(js) && js.length) {
        return [parseFloat(js[0].lat), parseFloat(js[0].lon)];
      }
      return null;
    }

    // Add markers
    const bounds = [];
    for (const p of list) {
      let latlng = null;
      if (Array.isArray(p.latlng) && p.latlng.length === 2) {
        latlng = p.latlng;
      } else if (p.query) {
        try { latlng = await geocode(p.query); } catch {}
      }

      if (!latlng) {
        console.warn('Could not locate place:', p);
        continue;
      }

      const m = L.marker(latlng, { icon: emojiIcon(p.emoji || '📍') }).addTo(map);
      const popupHtml = `
        <div style="min-width:190px">
          <strong>${p.name || p.query}</strong><br/>
          <span style="color:var(--muted)">${p.date || ''}</span>
          <p style="margin:6px 0 0">${p.note || ''}</p>
        </div>
      `;
      m.bindPopup(popupHtml, { closeButton: true });
      bounds.push(latlng);
    }

    // Fit bounds if we have multiple points
    if (bounds.length > 1) {
      map.fitBounds(bounds, { padding: [20,20] });
    } else if (bounds.length === 1) {
      map.setView(bounds[0], 15);
    }

    // Ensure clicks go through on mobile (Leaflet already handles)
    mapNode.style.pointerEvents = 'auto';
  }

  /* ---------- Cards ---------- */
  let order = [...promises.keys()].map((i) => i);

  function shuffleArray(arr){
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function showToast(){
    if(!toast) return;
    toast.classList.add("show");
    clearTimeout(showToast.tid);
    showToast.tid = setTimeout(() => toast.classList.remove("show"), 1100);
  }
  function save(){
    localStorage.setItem("love_cards_v2", JSON.stringify({
      order,
      revealed: [...document.querySelectorAll(".card.revealed")].map(c => +c.dataset.idx)
    }));
    showToast();
  }
  function load(){
    const raw = localStorage.getItem("love_cards_v2");
    if(!raw) return;
    try{
      const { order:ord, revealed } = JSON.parse(raw);
      if(Array.isArray(ord) && ord.length === promises.length) order = ord;
      build();
      if(Array.isArray(revealed)) revealed.forEach(i => revealByIndex(i, false));
      updateProgress();
    }catch{ build(); }
  }

  function build(){
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    if(totalEl) totalEl.textContent = promises.length;
    if(mTotalEl) mTotalEl.textContent = promises.length;

    order.forEach((idx, n) => {
      const card = document.createElement("article");
      card.className = "card";
      card.dataset.idx = idx;
      card.innerHTML = `
        <div class="inner">
          <div class="face front">
            <div class="badge">Card</div>
            <div class="num">${n + 1} <span class="emoji">${emojis[idx % emojis.length]}</span></div>
            <div class="tap">Tap to reveal</div>
          </div>
          <div class="face back">${promises[idx]}</div>
        </div>`;
      card.addEventListener("click", () => {
        const willReveal = !card.classList.contains("revealed");
        card.classList.toggle("revealed");
        if(willReveal) celebrate(card);
        updateProgress();
        save();
        if (navigator.vibrate) navigator.vibrate(10);
      }, { passive:true });
      grid.appendChild(card);
    });
  }

  function revealByIndex(idx, doCelebrate=true){
    const card = [...document.querySelectorAll(".card")].find(c => +c.dataset.idx === idx);
    if(card && !card.classList.contains("revealed")){
      card.classList.add("revealed");
      if(doCelebrate) celebrate(card);
    }
  }

  function celebrate(el){
    const rect = el.getBoundingClientRect();
    shootConfetti(rect.left + rect.width/2, rect.top + rect.height/2);
  }

  function updateProgress(){
    const revealed = document.querySelectorAll(".card.revealed").length;
    if(countEl) countEl.textContent = revealed;
    if(mCountEl) mCountEl.textContent = revealed;

    const pct = ((revealed / promises.length) * 100).toFixed(1) + "%";
    if(fill) fill.style.width = pct;
    if(mFill) mFill.style.width = pct;
  }

  function shootConfetti(x, y){
    const layer = document.querySelector(".confetti");
    const colors = [getCSS("--brand"), getCSS("--brand-2"), getCSS("--accent"), "#ffffff"];
    const N = 24;
    for(let i=0;i<N;i++){
      const bit = document.createElement("div");
      bit.className = "bit";
      const size = 6 + Math.random()*8;
      bit.style.width = bit.style.height = size + "px";
      bit.style.background = colors[Math.floor(Math.random()*colors.length)];
      bit.style.left = x + (Math.random()*40 - 20) + "px";
      bit.style.top = y + (Math.random()*20 - 10) + "px";
      const rot = Math.random()*360;
      const dx = (Math.random()*2 - 1) * 180;
      const dy = 160 + Math.random()*140;
      bit.animate(
        [
          { transform: `translate(0,0) rotate(${rot}deg)`, opacity: 1 },
          { transform: `translate(${dx}px, ${dy}px) rotate(${rot+360}deg)`, opacity: 0 },
        ],
        { duration: 1200 + Math.random()*600, easing: "cubic-bezier(.2,.7,.2,1)" }
      );
      layer.appendChild(bit);
      setTimeout(() => bit.remove(), 1800);
    }
  }
  function getCSS(v){ return getComputedStyle(document.body).getPropertyValue(v).trim(); }

  /* Actions */
  function handleRevealOne(){
    const cards = [...document.querySelectorAll(".card")];
    const hidden = cards.filter(c => !c.classList.contains("revealed"));
    if(hidden.length){
      const pick = hidden[Math.floor(Math.random()*hidden.length)];
      pick.classList.add("revealed");
      celebrate(pick);
      updateProgress();
      save();
    }
  }
  function handleRevealAll(){
    document.querySelectorAll(".card").forEach(c => c.classList.add("revealed"));
    updateProgress();
    save();
    shootConfetti(window.innerWidth/2, 80);
  }
  function handleReset(){
    document.querySelectorAll(".card").forEach(c => c.classList.remove("revealed"));
    updateProgress();
    save();
  }
  function handleShuffle(){
    shuffleArray(order);
    build();
    updateProgress();
    save();
  }

  /* Pace modal */
  const paceModal = document.getElementById('paceModal');
  const paceScrim = document.getElementById('paceScrim');
  const paceOk = document.getElementById('paceOk');
  function openPace(){ paceScrim.classList.add('show'); paceModal.classList.add('open'); document.body.classList.add('no-scroll'); }
  function closePace(){ paceScrim.classList.remove('show'); paceModal.classList.remove('open'); document.body.classList.remove('no-scroll'); }
  function handlePace(){ openPace(); }
  paceScrim.addEventListener('click', (e)=>{ e.stopPropagation(); closePace(); });
  paceOk.addEventListener('click', (e)=>{ e.stopPropagation(); closePace(); });
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && paceModal.classList.contains('open')) closePace(); });

  /* Binding */
  function bindButton(id, handler){
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); handler(); }, { passive: false });
  }
  [
    ['d_revealOne', handleRevealOne], ['d_revealAll', handleRevealAll],
    ['d_resetAll',  handleReset],     ['d_shuffle',   handleShuffle],
    ['d_pace',      handlePace],
    ['m_revealOne', handleRevealOne], ['m_revealAll', handleRevealAll],
    ['m_resetAll',  handleReset],     ['m_shuffle',   handleShuffle],
    ['m_pace',      handlePace],
  ].forEach(([id, fn]) => bindButton(id, fn));

  /* Init */
  renderTimeline(timeline);
  shuffleArray(order);
  build();
  updateProgress();
  load();
  initLeafletMap(placesMap);
})();
