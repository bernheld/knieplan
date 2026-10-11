// ============================================================
// APP LOGIC - Knie Trainingsplan PWA
// ============================================================

const DB_KEY = 'knie_plan_v1';

// ---- Storage ----
function loadStorage() {
  try { return JSON.parse(localStorage.getItem(DB_KEY)) || {}; }
  catch(e) { return {}; }
}
function saveStorage(data) {
  localStorage.setItem(DB_KEY, JSON.stringify(data));
}

// ---- Helpers ----
function todayStr() {
  return new Date().toISOString().split('T')[0];
}
function formatDate(str) {
  const d = new Date(str + 'T12:00:00');
  return d.toLocaleDateString('de-DE', { weekday:'short', day:'2-digit', month:'2-digit' });
}
function daysUntil(dateStr) {
  const today = new Date(); today.setHours(0,0,0,0);
  const target = new Date(dateStr + 'T00:00:00');
  return Math.ceil((target - today) / 86400000);
}
function getPhaseColor(phaseId) {
  const colors = { 1:'#4472C4', 2:'#375623', 3:'#C55A11', 4:'#7030A0' };
  return colors[phaseId] || '#333';
}
function getTypeLabel(type) {
  const labels = { kraft:'Kraft', ausdauer:'Ausdauer', fix:'Rudern + Core', pause:'Pause/Aktiv' };
  return labels[type] || type;
}
function getTodayEntry() {
  const today = todayStr();
  return PLAN_DATA.days.find(d => d.date === today);
}
function getCurrentWeekEntries() {
  const today = todayStr();
  const todayEntry = PLAN_DATA.days.find(d => d.date === today);
  if (!todayEntry) return [];
  const week = todayEntry.week;
  return PLAN_DATA.days.filter(d => d.week === week);
}

// ---- Render Helpers ----
function renderStars(value) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star ${i <= value ? 'active' : ''}" onclick="setStar(${i})">★</span>`;
  }
  return html;
}

function renderPainSlider(id, val, onchange) {
  const color = val <= 3 ? '#70AD47' : val <= 5 ? '#FFC000' : '#FF0000';
  return `
    <div class="pain-slider-wrap">
      <input type="range" min="0" max="10" value="${val}" id="${id}"
        oninput="updateSlider('${id}', this.value)"
        style="accent-color:${color}">
      <span class="pain-val" id="${id}_val" style="color:${color}">${val}</span>
    </div>`;
}

function updateSlider(id, val) {
  const color = val <= 3 ? '#70AD47' : val <= 5 ? '#FFC000' : '#FF0000';
  const el = document.getElementById(id + '_val');
  if (el) { el.textContent = val; el.style.color = color; }
  const slider = document.getElementById(id);
  if (slider) slider.style.accentColor = color;
}

// ---- PAGES ----

function renderHome() {
  const storage = loadStorage();
  const today = todayStr();
  const todayEntry = getTodayEntry();
  const goalDays = daysUntil(PLAN_DATA.meta.goalDate);
  const startDays = daysUntil(PLAN_DATA.meta.startDate);

  // Stats
  const completed = Object.values(storage).filter(v => v.done).length;
  const total = PLAN_DATA.days.length;
  const pct = Math.round((completed / total) * 100);

  let html = `
  <div class="hero-card">
    <div class="hero-title">🏔️ Knie Reha Plan</div>
    <div class="hero-sub">${PLAN_DATA.meta.name}</div>
    <div class="hero-goal">Ziel: ${PLAN_DATA.meta.goalDate.split('-').reverse().join('.')} — Wiedersberger Horn</div>
    <div class="countdown ${goalDays < 14 ? 'urgent' : ''}">
      ${goalDays > 0 ? `⏳ Noch <strong>${goalDays}</strong> Tage` : goalDays === 0 ? '🎿 HEUTE IST DER GROSSE TAG!' : '🏆 Ziel erreicht!'}
    </div>
  </div>

  <div class="progress-card">
    <div class="progress-label">Gesamtfortschritt: ${completed}/${total} Einheiten (${pct}%)</div>
    <div class="progress-bar-wrap"><div class="progress-bar" style="width:${pct}%"></div></div>
  </div>`;

  // Heute
  if (todayEntry) {
    const rec = storage[todayEntry.date] || {};
    const done = rec.done || false;
    const phase = PLAN_DATA.phases.find(p => p.id === todayEntry.phase);
    const isFix = todayEntry.isFix;

    html += `
    <div class="section-title">📅 Heute — ${formatDate(today)}</div>
    <div class="day-card ${isFix ? 'friday-card' : ''} ${done ? 'done-card' : ''}" onclick="goTo('day','${todayEntry.date}')">
      <div class="day-card-header" style="background:${isFix ? '#C55A11' : getPhaseColor(todayEntry.phase)}">
        <span>${todayEntry.day} — ${todayEntry.title}</span>
        ${done ? '<span class="check-badge">✓ Erledigt</span>' : '<span class="open-badge">Offen</span>'}
      </div>
      <div class="day-card-body">
        <div class="day-meta">${phase ? phase.name : ''} | Woche ${todayEntry.week}</div>
        <div class="day-exercises">${todayEntry.exercises.length} Übungen</div>
        ${rec.painBefore !== undefined ? `<div class="day-pain">Schmerz: ${rec.painBefore}/10 → ${rec.painAfter}/10</div>` : ''}
        <div class="tap-hint">Tippen zum Öffnen →</div>
      </div>
    </div>`;
  } else if (startDays > 0) {
    html += `<div class="info-card">⏳ Plan startet in ${startDays} Tagen (05.10.2026)</div>`;
  } else {
    html += `<div class="info-card">🏆 Plan abgeschlossen! Viel Erfolg am Berg!</div>`;
  }

  // Diese Woche
  const weekEntries = getCurrentWeekEntries();
  if (weekEntries.length > 0) {
    const weekNum = weekEntries[0].week;
    const weekDone = weekEntries.filter(e => (storage[e.date] || {}).done).length;
    html += `
    <div class="section-title">📆 Diese Woche (${weekNum}/10) — ${weekDone}/${weekEntries.length} erledigt</div>
    <div class="week-strip">`;
    weekEntries.forEach(e => {
      const rec = storage[e.date] || {};
      const isToday = e.date === today;
      html += `
      <div class="week-day ${isToday ? 'week-day-today' : ''} ${rec.done ? 'week-day-done' : ''} ${e.isFix ? 'week-day-fix' : ''}"
           onclick="goTo('day','${e.date}')">
        <div class="wd-name">${e.day.slice(0,2)}</div>
        <div class="wd-icon">${e.isFix ? '🟠' : e.type === 'kraft' ? '💪' : e.type === 'ausdauer' ? '🚴' : '😴'}</div>
        <div class="wd-check">${rec.done ? '✓' : ''}</div>
      </div>`;
    });
    html += `</div>`;
  }

  // Ampel
  html += `
  <div class="section-title">🚦 Knie-Ampel</div>
  <div class="ampel-row">
    <div class="ampel-item gruen" onclick="goTo('ampel')">
      <div>🟢</div><div>Grün</div><div>Weiter!</div>
    </div>
    <div class="ampel-item gelb" onclick="goTo('ampel')">
      <div>🟡</div><div>Gelb</div><div>Sanfter</div>
    </div>
    <div class="ampel-item rot" onclick="goTo('ampel')">
      <div>🔴</div><div>Rot</div><div>STOPP!</div>
    </div>
  </div>`;

  document.getElementById('page-content').innerHTML = html;
}

function renderPlan() {
  const storage = loadStorage();
  const today = todayStr();
  let html = `<div class="section-title" style="margin-top:0">📋 Alle 10 Wochen</div>`;

  let currentPhase = 0;
  let currentWeek = 0;

  PLAN_DATA.days.forEach(entry => {
    if (entry.phase !== currentPhase) {
      currentPhase = entry.phase;
      const phase = PLAN_DATA.phases.find(p => p.id === currentPhase);
      html += `<div class="phase-header" style="background:${phase.color}">${phase.name} | ${phase.dates}</div>`;
    }
    if (entry.week !== currentWeek) {
      currentWeek = entry.week;
      const weekDone = PLAN_DATA.days.filter(d => d.week === currentWeek && (storage[d.date]||{}).done).length;
      const weekTotal = PLAN_DATA.days.filter(d => d.week === currentWeek).length;
      html += `<div class="week-header">Woche ${currentWeek} — ${weekDone}/${weekTotal}</div>`;
    }

    const rec = storage[entry.date] || {};
    const isToday = entry.date === today;
    const isPast = entry.date < today;

    html += `
    <div class="plan-row ${isToday ? 'plan-row-today' : ''} ${rec.done ? 'plan-row-done' : ''} ${entry.isFix ? 'plan-row-fix' : ''}"
         onclick="goTo('day','${entry.date}')">
      <div class="pr-dot ${rec.done ? 'dot-done' : isPast ? 'dot-past' : isToday ? 'dot-today' : 'dot-future'}"></div>
      <div class="pr-info">
        <div class="pr-title">${entry.day} ${formatDate(entry.date)}</div>
        <div class="pr-sub">${entry.title}</div>
      </div>
      <div class="pr-badge ${entry.type}">${entry.isFix ? '🟠' : rec.done ? '✓' : '→'}</div>
    </div>`;
  });

  document.getElementById('page-content').innerHTML = html;
}

function renderDay(dateStr) {
  const entry = PLAN_DATA.days.find(d => d.date === dateStr);
  if (!entry) { document.getElementById('page-content').innerHTML = '<div class="info-card">Tag nicht gefunden.</div>'; return; }

  const storage = loadStorage();
  const rec = storage[dateStr] || { done: false, painBefore: 0, painAfter: 0, feeling: 0, swelling: false, note: '' };
  const phase = PLAN_DATA.phases.find(p => p.id === entry.phase);
  const phaseColor = entry.isFix ? '#C55A11' : getPhaseColor(entry.phase);

  let exercisesHtml = '';
  entry.exercises.forEach((ex, i) => {
    if (ex.sets === 0) {
      exercisesHtml += `<div class="ex-special">${ex.name} ${ex.note ? '— ' + ex.note : ''}</div>`;
    } else {
      exercisesHtml += `
      <div class="ex-row">
        <div class="ex-num">${i+1}</div>
        <div class="ex-info">
          <div class="ex-name">${ex.name}</div>
          <div class="ex-meta">${ex.sets > 0 ? ex.sets + ' Sätze × ' : ''}${ex.reps}${ex.equip && ex.equip !== 'Kein' ? ' | ' + ex.equip : ''}</div>
          ${ex.note ? `<div class="ex-note">${ex.note}</div>` : ''}
        </div>
      </div>`;
    }
  });

  const html = `
  <div class="day-header" style="background:${phaseColor}">
    <div class="dh-title">${entry.day}, ${formatDate(dateStr)}</div>
    <div class="dh-sub">${entry.title}</div>
    <div class="dh-phase">${phase ? phase.name : ''} | Woche ${entry.week}/10</div>
  </div>

  <div class="exercises-card">
    <div class="card-title">Übungen</div>
    ${exercisesHtml}
  </div>

  <div class="tracking-card">
    <div class="card-title">📊 Tracking</div>

    <div class="track-row">
      <span class="track-label">Schmerz VOR Training</span>
      ${renderPainSlider('pain_before', rec.painBefore || 0)}
    </div>
    <div class="track-row">
      <span class="track-label">Schmerz NACH Training</span>
      ${renderPainSlider('pain_after', rec.painAfter || 0)}
    </div>

    <div class="track-row">
      <span class="track-label">Schwellung aufgetreten?</span>
      <div class="toggle-wrap">
        <button class="tog-btn ${rec.swelling ? '' : 'active'}" onclick="setSwelling(false)">Nein</button>
        <button class="tog-btn ${rec.swelling ? 'active warn' : ''}" onclick="setSwelling(true)">Ja ⚠️</button>
      </div>
    </div>

    <div class="track-row">
      <span class="track-label">Gefühl (1-5 ★)</span>
      <div class="stars-wrap" id="stars-wrap">${renderStars(rec.feeling || 0)}</div>
    </div>

    <div class="track-row col">
      <span class="track-label">Notizen</span>
      <textarea id="track_note" placeholder="Was war gut? Was war schwer? Anpassungen?" rows="3">${rec.note || ''}</textarea>
    </div>

    <div class="save-row">
      <button class="btn-done ${rec.done ? 'done' : ''}" onclick="markDone('${dateStr}')">
        ${rec.done ? '✓ Erledigt!' : 'Als erledigt markieren'}
      </button>
      <button class="btn-save" onclick="saveTracking('${dateStr}')">💾 Speichern</button>
    </div>

    ${rec.swelling ? `
    <div class="alert-swelling">
      ⚠️ SCHWELLUNG! → 48h Pause, Kühlen, Physio informieren!
    </div>` : ''}
  </div>`;

  document.getElementById('page-content').innerHTML = html;
  window._currentDate = dateStr;
}

let _starVal = 0;
function setStar(val) {
  _starVal = val;
  document.getElementById('stars-wrap').innerHTML = renderStars(val);
}
function setSwelling(val) {
  const btns = document.querySelectorAll('.tog-btn');
  btns[0].className = 'tog-btn' + (!val ? ' active' : '');
  btns[1].className = 'tog-btn' + (val ? ' active warn' : '');
  window._swelling = val;
  const alert = document.querySelector('.alert-swelling');
  if (val && !alert) {
    document.querySelector('.save-row').insertAdjacentHTML('afterend',
      '<div class="alert-swelling">⚠️ SCHWELLUNG! → 48h Pause, Kühlen, Physio informieren!</div>');
  } else if (!val && alert) {
    alert.remove();
  }
}

function saveTracking(dateStr) {
  const storage = loadStorage();
  const rec = storage[dateStr] || {};
  rec.painBefore = parseInt(document.getElementById('pain_before')?.value || 0);
  rec.painAfter  = parseInt(document.getElementById('pain_after')?.value  || 0);
  rec.feeling    = _starVal || rec.feeling || 0;
  rec.swelling   = window._swelling !== undefined ? window._swelling : rec.swelling || false;
  rec.note       = document.getElementById('track_note')?.value || '';
  storage[dateStr] = rec;
  saveStorage(storage);
  showToast('Gespeichert! 💾');
}

function markDone(dateStr) {
  saveTracking(dateStr);
  const storage = loadStorage();
  const rec = storage[dateStr] || {};
  rec.done = !rec.done;
  storage[dateStr] = rec;
  saveStorage(storage);
  renderDay(dateStr);
  showToast(rec.done ? '✓ Erledigt!' : 'Als offen markiert');
}

function renderAmpel() {
  const html = `
  <div class="ampel-page">
    <div class="ampel-big gruen">
      <div class="ab-icon">🟢</div>
      <div class="ab-title">GRÜN — Weiter!</div>
      <ul>
        <li>Kein Schmerz während Training</li>
        <li>Keine Schwellung nach Training</li>
        <li>Schmerz ≤ 2/10 danach → OK</li>
      </ul>
    </div>
    <div class="ampel-big gelb">
      <div class="ab-icon">🟡</div>
      <div class="ab-title">GELB — Sanfter!</div>
      <ul>
        <li>Schmerz 3/10 NACH Training → beobachten</li>
        <li>Leichte Erwärmung am Knie → kühlen, weiter beobachten</li>
        <li>Schmerz beim Bergab bis 3/10 → Intensität reduzieren</li>
      </ul>
    </div>
    <div class="ampel-big rot">
      <div class="ab-icon">🔴</div>
      <div class="ab-title">ROT — SOFORT STOPP!</div>
      <ul>
        <li>Schmerz >4/10 WÄHREND Training → sofort aufhören!</li>
        <li>Schwellung / Erguss nach Training → 48h Pause, Physio!</li>
        <li>Schmerz >4/10 am nächsten Tag → keine Belastung!</li>
        <li>Knacken + Schmerz kombiniert → Orthopäden aufsuchen!</li>
      </ul>
    </div>
    <div class="ampel-protocol">
      <div class="ap-title">📋 Nach Schwellung — Sofortprotokoll</div>
      <div class="ap-step"><span>1</span>Training sofort stoppen</div>
      <div class="ap-step"><span>2</span>Knie 15 Min kühlen (Eispack mit Tuch)</div>
      <div class="ap-step"><span>3</span>Hochlagern (höher als Hüfte), 1-2 Stunden</div>
      <div class="ap-step"><span>4</span>Physio / Orthopäden informieren</div>
      <div class="ap-step"><span>5</span>48h vollständige Pause</div>
      <div class="ap-step"><span>6</span>Erst weitertrainieren wenn Schwellung weg!</div>
    </div>
  </div>`;
  document.getElementById('page-content').innerHTML = html;
}

function renderStats() {
  const storage = loadStorage();
  const today = todayStr();
  const allDone = PLAN_DATA.days.filter(d => (storage[d.date]||{}).done);
  const total = PLAN_DATA.days.length;
  const pct = Math.round((allDone.length / total) * 100);

  // Per phase
  let phaseHtml = '';
  PLAN_DATA.phases.forEach(phase => {
    const pDays = PLAN_DATA.days.filter(d => d.phase === phase.id);
    const pDone = pDays.filter(d => (storage[d.date]||{}).done).length;
    const pPct = Math.round((pDone / pDays.length) * 100);
    phaseHtml += `
    <div class="stat-phase">
      <div class="sp-header" style="background:${phase.color}">${phase.name}</div>
      <div class="sp-bar-wrap"><div class="sp-bar" style="width:${pPct}%;background:${phase.color}"></div></div>
      <div class="sp-label">${pDone}/${pDays.length} (${pPct}%)</div>
    </div>`;
  });

  // Pain trend (last 7 tracked)
  const tracked = PLAN_DATA.days
    .filter(d => storage[d.date]?.painBefore !== undefined)
    .slice(-7)
    .map(d => ({ date: d.date, before: storage[d.date].painBefore, after: storage[d.date].painAfter }));

  let painHtml = tracked.length === 0 ? '<div class="no-data">Noch keine Schmerzwerte erfasst</div>' : '';
  tracked.forEach(t => {
    const color = t.after <= 3 ? '#70AD47' : t.after <= 5 ? '#FFC000' : '#FF0000';
    painHtml += `
    <div class="pain-stat-row">
      <span class="ps-date">${formatDate(t.date)}</span>
      <span class="ps-val">Vorher: ${t.before}/10</span>
      <span class="ps-val" style="color:${color}">Nachher: ${t.after}/10</span>
    </div>`;
  });

  const html = `
  <div class="section-title" style="margin-top:0">📊 Mein Fortschritt</div>

  <div class="big-stat">
    <div class="bs-circle" style="--pct:${pct}">
      <div class="bs-inner">
        <div class="bs-num">${pct}%</div>
        <div class="bs-sub">${allDone.length}/${total}</div>
      </div>
    </div>
    <div class="bs-label">Gesamtfortschritt</div>
  </div>

  <div class="section-title">Fortschritt je Phase</div>
  ${phaseHtml}

  <div class="section-title">Schmerztrend (letzte 7 Einheiten)</div>
  <div class="pain-trend">${painHtml}</div>

  <div class="section-title">Countdown</div>
  <div class="countdown-big">
    ${daysUntil(PLAN_DATA.meta.goalDate)} Tage bis zum<br>
    <strong>Wiedersberger Horn 🏔️</strong><br>
    <span style="font-size:13px;opacity:0.8">${PLAN_DATA.meta.goalDate.split('-').reverse().join('.')}</span>
  </div>`;

  document.getElementById('page-content').innerHTML = html;
}

// ---- Navigation ----
let _currentPage = 'home';
let _currentDate = null;

function goTo(page, param) {
  _currentPage = page;
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
  window.scrollTo(0, 0);
  if (page === 'home')   renderHome();
  else if (page === 'plan')  renderPlan();
  else if (page === 'day')   renderDay(param || todayStr());
  else if (page === 'ampel') renderAmpel();
  else if (page === 'stats') renderStats();
}

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'toast show';
  setTimeout(() => t.className = 'toast', 2000);
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  goTo('home');
});
