const sessions = {
  "Strength A": {emoji:"🏋️", tone:"tone-blue", sub:"Cycling strength", intro:"Keep 2–3 good reps in reserve. Move with control, not to failure.", distance:"none", exercises:[
    ["Warm-up","8–10 min recumbent bike","Easy conversational pace"],
    ["Smith-machine squat","3 × 8–10","Feet comfortable, brace, sit down and back. Stop before form changes."],
    ["Dumbbell Romanian deadlift","3 × 8–10","Soft knees. Push hips back. Keep dumbbells close to legs."],
    ["Dumbbell step-up","3 × 8 each leg","Whole foot on step. Drive through the working leg."],
    ["Seated or cable row","3 × 10","Tall chest. Pull elbows back without shrugging."],
    ["Dumbbell bench press","3 × 8–10","Shoulders down and back. Smooth controlled reps."],
    ["Standing calf raise","3 × 12–15","Pause briefly at the top; lower under control."],
    ["Pallof press","3 × 10 each side","Stand side-on to cable. Press out without letting torso rotate."],
    ["Easy cardio finish","10–15 min","Very easy recumbent bike."]]},
  "Strength B": {emoji:"💪", tone:"tone-green", sub:"Single-leg + core", intro:"This session builds climbing durability, upper-body support, and trunk stability.", distance:"none", exercises:[
    ["Warm-up","8–10 min","Rower or elliptical, easy."],
    ["Reverse lunge or split squat","3 × 8 each leg","Start bodyweight if needed. Keep front foot planted."],
    ["Seated leg curl","3 × 10–12","Adjust pad comfortably; curl smoothly without lifting hips."],
    ["Leg extension","2 × 10–12","Controlled range. Do not kick or lock out hard."],
    ["Lat pulldown","3 × 8–12","Pull bar toward upper chest; avoid leaning far back."],
    ["Incline dumbbell press","3 × 8–12","Low incline. Keep wrists stacked and controlled."],
    ["Cable face pull","2 × 12–15","Pull toward face with elbows high; squeeze shoulder blades."],
    ["Farmer carry","3 × 30–45 sec","Walk tall with heavy dumbbells. Do not lean side to side."],
    ["Plank","3 × 30–60 sec","Brace as if preparing for a punch; keep hips level."],
    ["Easy Zone 2","20–25 min","Elliptical or recumbent bike; complete sentences pace."]]},
  "Swim": {emoji:"🏊", tone:"tone-purple", sub:"Low-impact aerobic", intro:"The goal is relaxed aerobic work, not speed.", distance:"meters", exercises:[
    ["Warm-up","200 m","Easy"],["Main set","8 × 100 m","Comfortable pace; 20–30 sec rest"],["Easy/moderate","4 × 50 m","Smooth"],["Cool-down","200 m","Easy"],["Starting total","1,400 m","Gradually build toward 1,800–2,200 m over the phase"]]},
  "Intervals": {emoji:"⚡", tone:"tone-orange", sub:"Controlled harder work", intro:"Use the recumbent bike at first. Hard should feel about 7/10, never all-out.", distance:"none", exercises:[
    ["Warm-up","10 min","Easy"],["Intervals","6 × 3 min","Moderately hard, ~7/10"],["Recovery","3 min after each","Very easy"],["Cool-down","10 min","Easy"],["Goal","Finish feeling you could do one more","Consistency beats exhaustion"]]},
  "Long Ride": {emoji:"🚴", tone:"tone-red", sub:"The centerpiece", intro:"Move this ride to the best day each week. Ride at conversational intensity and prioritize safe roads.", distance:"miles", exercises:[
    ["Weeks 1–4","90 min → 1:45 → 2:00 → 1:30","Week 4 is recovery"],
    ["Weeks 5–8","2:00 → 2:15 → 2:30 → 1:45","Week 8 is recovery"],
    ["Weeks 9–12","2:30 → 2:45 → 3:00 → 2:00","Week 12 is recovery"],
    ["Intensity","Conversational","Do not chase speed"],
    ["Fueling","Practice once rides exceed ~90 min","Do not under-fuel long rides to speed weight loss"]]},
  "Recovery": {emoji:"🌿", tone:"tone-white", sub:"Rest is training", intro:"Choose rest, an easy walk, mobility, or a very easy swim. If your legs feel heavy, rest.", distance:"none", exercises:[
    ["Option 1","Complete rest","Absolutely counts"],["Option 2","30–45 min walk","Easy"],["Option 3","800–1,200 m swim","Relaxed"],["Option 4","20–30 min bike","Extremely easy"]]}
};

const plan = [
  ["Strength A","Main leg strength + push/pull + core","3 sets most weeks","2 sets in recovery weeks"],
  ["Swim","Aerobic base without extra leg pounding","40–60 min","Build gradually"],
  ["Strength B","Single-leg work + hamstrings + upper body","3 sets most weeks","2 sets in recovery weeks"],
  ["Recovery","Rest, walk, or mobility","At least 1 day","Use more when needed"],
  ["Intervals","Recumbent bike controlled intervals","~50 min","6 × 3 min at ~7/10"],
  ["Long Ride","Move to the best day each week","90 min → 3 hr","Every 4th week easier"],
  ["Optional","Easy swim, walk, or very easy cardio","30–45 min","Only if recovered"]
];

const store = {
  get workouts(){return JSON.parse(localStorage.getItem('brutal_workouts')||'[]')},
  set workouts(v){localStorage.setItem('brutal_workouts',JSON.stringify(v))},
  get weights(){return JSON.parse(localStorage.getItem('brutal_weights')||'[]')},
  set weights(v){localStorage.setItem('brutal_weights',JSON.stringify(v))}
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const fmtDate = d => new Date(d+'T12:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});

function init(){
  $('#todayDate').textContent = new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'});
  $('#workoutDate').value = new Date().toISOString().slice(0,10);
  renderSessions(); renderPlan(); renderLogs(); renderProgress(); wire();
  if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
}

function renderSessions(){
  $('#sessionGrid').innerHTML = Object.entries(sessions).map(([name,s])=>`<button class="session-btn ${s.tone}" data-session="${name}"><span class="emoji">${s.emoji}</span><strong>${name}</strong><small>${s.sub}</small></button>`).join('');
  $$('.session-btn').forEach(b=>b.addEventListener('click',()=>openWorkout(b.dataset.session)));
  renderRecent();
}

function openWorkout(name){
  const s=sessions[name]; $('#dialogTitle').textContent=name; $('#dialogEyebrow').textContent=s.sub.toUpperCase();
  $('#workoutDetails').innerHTML=`<div class="workout-intro">${s.intro}</div><div class="exercise-list">${s.exercises.map(e=>`<div class="exercise"><strong>${e[0]}</strong><small>${e[2]}</small><div class="sets">${e[1]}</div></div>`).join('')}</div>`;
  $('#workoutDialog').dataset.session=name;
  $('#distanceLabel').style.display=s.distance==='none'?'none':'block';
  $('#elevationLabel').style.display=name==='Long Ride'?'block':'none';
  $('#distanceLabel').childNodes[0].nodeValue = s.distance==='meters'?'Meters ':s.distance==='miles'?'Miles ':'Distance ';
  $('#workoutMinutes').value=''; $('#workoutDistance').value=''; $('#workoutElevation').value=''; $('#workoutEffort').value=''; $('#workoutNotes').value='';
  $('#workoutDialog').showModal();
}

function saveWorkout(){
  const type=$('#workoutDialog').dataset.session;
  const rec={id:Date.now(),date:$('#workoutDate').value,type,minutes:+$('#workoutMinutes').value||0,distance:+$('#workoutDistance').value||0,elevation:+$('#workoutElevation').value||0,effort:+$('#workoutEffort').value||0,notes:$('#workoutNotes').value.trim()};
  const arr=store.workouts; arr.push(rec); store.workouts=arr; $('#workoutDialog').close(); renderLogs(); renderRecent(); renderProgress();
}

function renderRecent(){
  const arr=store.workouts.sort((a,b)=>b.date.localeCompare(a.date)||b.id-a.id).slice(0,4);
  $('#recentList').innerHTML=arr.length?arr.map(logRow).join(''):'<div class="empty">No workouts logged yet. Pick today’s session above.</div>';
}
function logRow(w){
  let detail=w.minutes?`${w.minutes} min`:'';
  if(w.type==='Long Ride'&&w.distance) detail+=`${detail?' · ':''}${w.distance} mi`;
  if(w.type==='Swim'&&w.distance) detail+=`${detail?' · ':''}${w.distance} m`;
  return `<div class="list-item"><div><strong>${w.type}</strong><small>${fmtDate(w.date)}${detail?' · '+detail:''}</small></div>${w.effort?`<span class="badge">Effort ${w.effort}</span>`:''}</div>`;
}
function renderLogs(){
  const type=$('#filterType')?.value||'all'; let arr=[...store.workouts].sort((a,b)=>b.date.localeCompare(a.date)||b.id-a.id); if(type!=='all') arr=arr.filter(w=>w.type===type);
  $('#logList').innerHTML=arr.length?arr.map(logRow).join(''):'<div class="card empty">Nothing logged here yet.</div>';
}
function renderPlan(){
  $('#planList').innerHTML=plan.map(p=>`<div class="plan-card"><h3>${p[0]}</h3><p>${p[1]}</p><div class="chips"><span class="chip">${p[2]}</span><span class="chip">${p[3]}</span></div></div>`).join('');
}
function renderProgress(){
  const weights=[...store.weights].sort((a,b)=>a.date.localeCompare(b.date)); const current=weights.length?weights.at(-1).weight:215; $('#currentWeight').textContent=current;
  const rides=store.workouts.filter(w=>w.type==='Long Ride'); const longest=rides.reduce((m,w)=>Math.max(m,w.distance||0),0); $('#longestRide').textContent=longest||0;
  const pct=Math.min(100,longest); $('#rideProgress').style.width=pct+'%'; $('#rideProgressText').textContent=longest?`${longest} miles is ${Math.round(longest)}% of your 100-mile goal.`:'Start logging long rides to see progress.';
  $('#weightHistory').innerHTML=weights.length?weights.slice(-6).reverse().map(w=>`<div class="mini-row"><span>${fmtDate(w.date)}</span><strong>${w.weight} lb</strong></div>`).join(''):'<p class="muted tiny">No weekly weights logged yet.</p>';
}
function saveWeight(){
  const v=+$('#weightInput').value; if(!v) return; const arr=store.weights; arr.push({date:new Date().toISOString().slice(0,10),weight:v}); store.weights=arr; $('#weightInput').value=''; renderProgress();
}
function nav(name){
  $$('.screen').forEach(s=>s.classList.remove('active')); $('#'+name+'Screen').classList.add('active'); $$('.tab').forEach(t=>t.classList.toggle('active',t.dataset.nav===name)); window.scrollTo({top:0,behavior:'smooth'}); if(name==='log')renderLogs(); if(name==='progress')renderProgress();
}
function exportData(){
  const data=JSON.stringify({exportedAt:new Date().toISOString(),workouts:store.workouts,weights:store.weights},null,2); const blob=new Blob([data],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='brutal-100-training-backup.json'; a.click(); URL.revokeObjectURL(a.href);
}
function wire(){
  $$('[data-nav]').forEach(b=>b.addEventListener('click',()=>nav(b.dataset.nav))); $('#saveWorkoutBtn').addEventListener('click',saveWorkout); $('#saveWeightBtn').addEventListener('click',saveWeight); $('#filterType').addEventListener('change',renderLogs); $('#settingsBtn').addEventListener('click',()=>$('#settingsDialog').showModal()); $('#exportBtn').addEventListener('click',exportData); $('#clearBtn').addEventListener('click',()=>{if(confirm('Clear all locally stored workouts and weights?')){localStorage.removeItem('brutal_workouts');localStorage.removeItem('brutal_weights');renderLogs();renderRecent();renderProgress();$('#settingsDialog').close();}});
}
init();