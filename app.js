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
    ["Standing cable hip abduction/adduction","2 × 10–12 each direction, each leg","Use a low cable and ankle strap. Move slowly and hold the frame for balance."],
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

const guideData = {
  A: [
    {name:"Smith-machine squat",sets:"3 × 8–10",icon:"🏋️",start:"Stand tall",finish:"Squat",setup:"Set the bar around shoulder height and place your feet about shoulder-width.",move:"Brace, sit down and back under control, then drive through the feet to stand.",cue:"Keep knees tracking over your toes. Stop before your form changes."},
    {name:"Dumbbell Romanian deadlift",sets:"3 × 8–10",icon:"↘️",start:"Tall",finish:"Hip hinge",setup:"Hold dumbbells in front of your thighs with a small bend in the knees.",move:"Push your hips back and slide the weights down your thighs until you feel the hamstrings stretch; stand and squeeze the glutes.",cue:"Think hips back, not squat down. Keep the weights close to your legs."},
    {name:"Dumbbell step-up",sets:"3 × 8 each leg",icon:"🪜",start:"Floor",finish:"On step",setup:"Use the sturdy bench or platform and hold dumbbells at your sides.",move:"Place your whole foot on the step and drive through that leg to stand; step down slowly.",cue:"Make the leg on the step do the work. Avoid pushing hard from the trailing foot."},
    {name:"Seated or cable row",sets:"3 × 10",icon:"↔️",start:"Arms long",finish:"Elbows back",setup:"Sit or stand tall with the cable handle in both hands and shoulders relaxed.",move:"Pull toward the lower ribs, squeeze your shoulder blades, then return slowly.",cue:"Keep your chest tall. Do not round your back or shrug."},
    {name:"Dumbbell bench press",sets:"3 × 8–10",icon:"🏋️",start:"At chest",finish:"Press up",setup:"Lie on the bench with feet planted and dumbbells beside the chest.",move:"Press the dumbbells up until the arms are nearly straight, then lower with control.",cue:"Keep your shoulder blades supported on the bench."},
    {name:"Standing calf raise",sets:"3 × 12–15",icon:"⬆️",start:"Heels down",finish:"Heels high",setup:"Stand tall holding dumbbells at your sides and use support if balance is an issue.",move:"Rise onto the balls of the feet, pause briefly, then lower slowly.",cue:"Use a full comfortable range and do not bounce."},
    {name:"Pallof press",sets:"3 × 10 each side",icon:"↔️",start:"Hands at chest",finish:"Arms out",setup:"Stand sideways to the cable station with both hands at your chest.",move:"Press your hands straight out while resisting the cable's pull, then return slowly.",cue:"Your torso should not rotate toward the machine."}
  ],
  B: [
    {name:"Reverse lunge or split squat",sets:"3 × 8 each leg",icon:"🦵",start:"Tall / split",finish:"Lower",setup:"Start bodyweight if needed. Use dumbbells only when the movement feels steady.",move:"Step back into a lunge or hold a split stance, lower under control, then drive through the front foot to stand.",cue:"Keep the front foot planted and the knee tracking over the toes."},
    {name:"Seated leg curl",sets:"3 × 10–12",icon:"↩️",start:"Legs forward",finish:"Curl back",setup:"Use the leg curl setting on your seated leg machine and adjust the pad comfortably.",move:"Curl the lower legs back, pause, then return slowly.",cue:"Keep your hips and back against the seat."},
    {name:"Leg extension",sets:"2 × 10–12",icon:"➡️",start:"Knees bent",finish:"Legs out",setup:"Use the leg extension setting on the same seated machine and align the knee comfortably with the pivot.",move:"Extend the legs until nearly straight, pause, then lower slowly.",cue:"Do not kick the weight or snap the knees straight."},
    {name:"Standing cable hip abduction/adduction",sets:"2 × 10–12 each direction, each leg",icon:"↔️",start:"Leg centered",finish:"Out / across",setup:"Attach an ankle strap to the low cable and hold the machine frame lightly for balance. Use a very light weight at first.",move:"For abduction, move the working leg out to the side. For adduction, reposition so the cable pulls from the outside and draw the working leg across your body. Return slowly each time.",cue:"Keep your torso tall and still. The hip moves; your body does not lean to create range."},
    {name:"Lat pulldown",sets:"3 × 8–12",icon:"⬇️",start:"Arms high",finish:"Bar down",setup:"Sit at the lat pulldown with the thigh pad secure and grip slightly wider than shoulder-width.",move:"Pull toward the upper chest, squeeze the shoulder blades, then return slowly.",cue:"Keep your chest up and avoid leaning far back."},
    {name:"Incline dumbbell press",sets:"3 × 8–12",icon:"🏋️",start:"Chest level",finish:"Press up",setup:"Set the adjustable bench to a low incline, roughly 30–45 degrees.",move:"Press the dumbbells up, then lower them slowly to chest level.",cue:"Keep wrists stacked and shoulder blades supported."},
    {name:"Cable face pull",sets:"2 × 12–15",icon:"🎯",start:"Arms forward",finish:"Hands to face",setup:"Attach the rope to the cable station around face height and stand tall.",move:"Pull the rope toward your face with elbows high, squeeze the shoulder blades, then return slowly.",cue:"Keep your ribs down and avoid leaning backward."},
    {name:"Farmer carry",sets:"3 × 30–45 sec",icon:"🚶",start:"Stand tall",finish:"Walk tall",setup:"Hold a pair of dumbbells or kettlebells at your sides.",move:"Walk with short controlled steps and steady breathing.",cue:"Stay tall and do not let the weights pull you to one side."},
    {name:"Plank",sets:"3 × 30–60 sec",icon:"▬",start:"Set",finish:"Hold",setup:"Place forearms or hands under the shoulders and extend the legs behind you.",move:"Hold a straight line from head to heels while breathing normally.",cue:"Brace your middle and keep the hips from sagging or hiking up."}
  ]
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
  renderSessions(); renderGuide('A'); renderPlan(); renderLogs(); renderProgress(); wire();
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
function renderGuide(group='A'){
  $('.guide-toggle-btn').forEach(b=>b.classList.toggle('active',b.dataset.guideGroup===group));
  const intro = group==='A'
    ? 'Strength A: warm up 8–10 minutes on the recumbent bike. Finish with 10–15 minutes very easy.'
    : 'Strength B: warm up 8–10 minutes on the rower or elliptical. Finish with 20–25 minutes easy Zone 2.';
  $('#guideList').innerHTML = '<div class="guide-note"><strong>'+intro+'</strong><br>Use the lightest resistance that lets you learn each movement cleanly. Leave about 2–3 good reps in reserve.</div>' +
    guideData[group].map((g,idx)=>`<article class="guide-card">
      <div class="guide-card-top"><span class="guide-number">${idx+1}</span><div class="guide-title"><strong>${g.name}</strong><span>${g.sets}</span></div></div>
      <div class="guide-visual"><div class="pose"><span class="pose-icon">${g.icon}</span><span class="pose-label">${g.start}</span></div><span class="move-arrow">→</span><div class="pose"><span class="pose-icon">${g.icon}</span><span class="pose-label">${g.finish}</span></div></div>
      <div class="guide-steps"><div class="guide-step"><b>Setup</b><span>${g.setup}</span></div><div class="guide-step"><b>Move</b><span>${g.move}</span></div></div>
      <div class="guide-cue">✓ ${g.cue}</div>
    </article>`).join('');
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
  $('[data-nav]').forEach(b=>b.addEventListener('click',()=>nav(b.dataset.nav)));
  $('#guideBtn').addEventListener('click',()=>nav('guide'));
  $('.guide-toggle-btn').forEach(b=>b.addEventListener('click',()=>renderGuide(b.dataset.guideGroup))); $('#saveWorkoutBtn').addEventListener('click',saveWorkout); $('#saveWeightBtn').addEventListener('click',saveWeight); $('#filterType').addEventListener('change',renderLogs); $('#settingsBtn').addEventListener('click',()=>$('#settingsDialog').showModal()); $('#exportBtn').addEventListener('click',exportData); $('#clearBtn').addEventListener('click',()=>{if(confirm('Clear all locally stored workouts and weights?')){localStorage.removeItem('brutal_workouts');localStorage.removeItem('brutal_weights');renderLogs();renderRecent();renderProgress();$('#settingsDialog').close();}});
}
init();