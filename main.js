// ================================
// #1 — Buyer Archetype Map
// ================================
const buyerArchetypeMap = {
  "UR-LUXE": {
    name: "The Luxury Seeker",
    coreHook: "Prestige & urban lifestyle",
    targetBuyer: "Affluent end-users",
    priceRangeTier: "Luxury",
    budgetRange: "$900K+",
    bestArea: "Urban core",
    vibe: "Sleek, premium, aspirational",
    flyer: "LuxurySeeker-ModernGatedEstate-ForSale_V1.png"
  },
  "UR-FIX": {
    name: "The Urban Flipper",
    coreHook: "Quick turnaround profit",
    targetBuyer: "Fix/Flip investors",
    priceRangeTier: "Mid",
    budgetRange: "$200K–$400K",
    bestArea: "Gentrifying urban",
    vibe: "Bold, ROI-focused",
    flyer: "UrbanFlipper-Moderate-V1.png"
  },
  "SUB-FAM": {
    name: "The Family Nest Seeker",
    coreHook: "Safety & community",
    targetBuyer: "Families, VA buyers",
    priceRangeTier: "Middle-High",
    budgetRange: "$400K–$650K",
    bestArea: "Suburban stable",
    vibe: "Warm, family-first",
    flyer: "FamilyNestSeeker-ModernNest-V2.png"
  }
};

// ================================
// #2 — Questions & Scores
// ================================
let currentQuestion = 0;
let scores = { D: 0, C: 0, V: 0, U: 0 };

let questions = [];
fetch('questions.json').then(res => res.json()).then(data => { questions = data; });

// ================================
// #3 — Start Quiz Button
// ================================
const startBtn = document.getElementById('startQuizBtn');
if (startBtn) {
  startBtn.addEventListener('click', () => {
    localStorage.setItem('listingCity', document.getElementById('city').value);
    document.getElementById('customFields').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    showQuestion();
  });
}

// ================================
// #4 — Show Each Question
// ================================
function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').innerText = q.question;

  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';
  q.answers.forEach(ans => {
    const btn = document.createElement('button');
    btn.innerText = ans.text;
    btn.onclick = () => selectAnswer(ans);
    answersDiv.appendChild(btn);
  });

  document.getElementById('progress').innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
}

// ================================
// #5 — Select Answer
// ================================
function selectAnswer(answer) {
  scores[answer.axis] += answer.value;
  currentQuestion++;
  if (currentQuestion < questions.length) showQuestion();
  else {
    localStorage.setItem('buyerScores', JSON.stringify(scores)); // Store final scores
    window.location.href = 'results.html';
  }
}

// ================================
// #6 — Determine Buyer Archetype
// ================================
function determineBuyerArchetype(scores) {
  // Simple dominant axis logic — tweak later!
  if (scores.U >= scores.D && scores.U >= scores.C && scores.U >= scores.V) {
    return "UR-LUXE";
  } else if (scores.D >= scores.U && scores.D >= scores.C && scores.D >= scores.V) {
    return "UR-FIX";
  } else if (scores.C >= scores.U && scores.C >= scores.D && scores.C >= scores.V) {
    return "SUB-FAM";
  } else {
    return "UR-FIX"; // fallback
  }
}

// ================================
// #7 — Results Page Logic
// ================================
document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('mbtiType')) return;

  const savedScores = JSON.parse(localStorage.getItem('buyerScores') || '{"D":0,"C":0,"V":0,"U":0}');
  const result = determineBuyerArchetype(savedScores);

  const details = buyerArchetypeMap[result];

  document.getElementById('mbtiType').innerText = details.name;
  document.getElementById('mbtiName').innerText = details.coreHook;
  document.getElementById('mbtiDetails').innerHTML = `
    <strong>Target Buyer:</strong> ${details.targetBuyer}<br>
    <strong>Price Tier:</strong> ${details.priceRangeTier}<br>
    <strong>Budget Range:</strong> ${details.budgetRange}<br>
    <strong>Best Area:</strong> ${details.bestArea}<br>
    <strong>Vibe:</strong> ${details.vibe}
  `;

  document.getElementById('archetypeFlyer').src = `images/${details.flyer}`;
  document.getElementById('archetypeFlyer').alt = `${details.name} Flyer`;

  fetch(`/.netlify/functions/getPlan?mbti=${result}`)
    .then(res => res.text())
    .then(plan => {
      document.getElementById('planOutput').innerText = plan;
    });
});
