const buyerArchetypeMap = {
  "UR-LUXE": {
    name: "The Luxury Seeker",
    coreHook: "Prestige & urban lifestyle",
    targetBuyer: "Affluent end-users",
    priceRange: "High 7-figures+",
    bestArea: "Urban core",
    vibe: "Sleek, premium, aspirational"
  },
  "UR-FIX": {
    name: "The Urban Flipper",
    coreHook: "Quick turnaround profit",
    targetBuyer: "Fix/Flip investors",
    priceRange: "Mid-range",
    bestArea: "Gentrifying urban",
    vibe: "Bold, ROI-focused"
  },
  "SUB-FAM": {
    name: "The Family Nest Seeker",
    coreHook: "Safety & community",
    targetBuyer: "Families, VA buyers",
    priceRange: "Entry–Mid",
    bestArea: "Suburban stable",
    vibe: "Warm, family-first"
  }
};

let currentQuestion = 0;
let scores = { D:0, C:0, V:0, U:0 };

let questions = [];
fetch('questions.json').then(res=>res.json()).then(data=>{ questions = data; });

document.getElementById('startQuizBtn').addEventListener('click',()=>{
  localStorage.setItem('listingCity', document.getElementById('city').value);
  document.getElementById('customFields').style.display = 'none';
  document.getElementById('quizSection').style.display = 'block';
  showQuestion();
});

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').innerText = q.question;
  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';
  q.answers.forEach(ans=>{
    const btn = document.createElement('button');
    btn.innerText = ans.text;
    btn.onclick = ()=>selectAnswer(ans);
    answersDiv.appendChild(btn);
  });
  document.getElementById('progress').innerText = `Question ${currentQuestion+1} of ${questions.length}`;
}

function selectAnswer(answer) {
  scores[answer.axis] += answer.value;
  currentQuestion++;
  if (currentQuestion < questions.length) showQuestion();
  else window.location.href = 'results.html';
}

document.addEventListener('DOMContentLoaded', ()=>{
  if(!document.getElementById('mbtiType')) return;

  let D = scores.D, C = scores.C, V = scores.V, U = scores.U; // placeholder
  const result = "UR-LUXE"; // temporary until you add scoring logic

  document.getElementById('mbtiType').innerText = buyerArchetypeMap[result].name;
  document.getElementById('mbtiName').innerText = buyerArchetypeMap[result].coreHook;
  document.getElementById('mbtiDetails').innerHTML = `
    <strong>Target Buyer:</strong> ${buyerArchetypeMap[result].targetBuyer}<br>
    <strong>Price Range:</strong> ${buyerArchetypeMap[result].priceRange}<br>
    <strong>Best Area:</strong> ${buyerArchetypeMap[result].bestArea}<br>
    <strong>Vibe:</strong> ${buyerArchetypeMap[result].vibe}
  `;
  document.getElementById('archetypeFlyer').src = `images/${result}.png`;

  fetch(`/.netlify/functions/getPlan?mbti=${result}`)
    .then(res=>res.text())
    .then(plan=>{ document.getElementById('planOutput').innerText = plan; });
});
