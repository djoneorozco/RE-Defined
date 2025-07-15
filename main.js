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
  document.get
