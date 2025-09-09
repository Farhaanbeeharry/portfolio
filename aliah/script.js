// Boot the app after fetching data
(async () => {
  /* Sticky offset for sidebar */
  function syncSidebarOffset(){
    const header = document.querySelector('header');
    if(!header) return;
    const h = header.offsetHeight || 0;
    document.documentElement.style.setProperty('--header-h', h + 'px');
  }
  window.addEventListener('load', syncSidebarOffset);
  window.addEventListener('resize', syncSidebarOffset);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncSidebarOffset);
  }

  /* Load data */
  let promises = [];
  let emojis = [];
  let timeline = [];
  try {
    const res = await fetch('data.json', { cache: 'no-store' });
    const data = await res.json();
    promises = Array.isArray(data.promises) ? data.promises : [];
    emojis = Array.isArray(data.emojis) ? data.emojis : [];
    timeline = Array.isArray(data.timeline) ? data.timeline : [];
  } catch (e) {
    console.warn('data.json could not be loaded, using fallback data.');
    promises = [
      "I fell in love with your voice, your smile, your sweetness, your adorable little chaos, and the way time bends when I'm with you"
    ];
    emojis = ["💖","✨","🥰","🌸"];
    timeline = [];
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

  /* Timeline render */
  function renderTimeline(items){
    if(!tlEl || !items.length) return;
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
  }

  /* Cards state */
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
    }catch{
      build();
    }
  }

  function build(){
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

  function openPace(){
    paceScrim.classList.add('show');
    paceModal.classList.add('open');
    const btn = paceOk || paceModal.querySelector('button');
    if(btn) btn.focus();
    document.body.classList.add('no-scroll');
  }
  function closePace(){
    paceScrim.classList.remove('show');
    paceModal.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }
  function handlePace(){ openPace(); }
  paceScrim.addEventListener('click', (e)=>{ e.stopPropagation(); closePace(); });
  paceOk.addEventListener('click', (e)=>{ e.stopPropagation(); closePace(); });
  window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && paceModal.classList.contains('open')) closePace();
  });

  /* Binding */
  function bindButton(id, handler){
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handler();
    }, { passive: false });
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
  syncSidebarOffset();
  renderTimeline(timeline);
  shuffleArray(order);
  build();
  updateProgress();
  load();
})();
