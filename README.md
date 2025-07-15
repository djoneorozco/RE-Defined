# RE-Defined
Your AI-Powered Listing Coach.
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
    priceRange: "Mid-range deals",
    bestArea: "Gentrifying urban",
    vibe: "Bold, ROI-focused"
  },
  "SUB-FAM": {
    name: "The Family Nest Seeker",
    coreHook: "Safety & community",
    targetBuyer: "Families, VA buyers",
    priceRange: "Entry–Mid range",
    bestArea: "Suburban stable",
    vibe: "Warm, family-first, pastel"
  },
  "SUB-RETRO": {
    name: "The Classic Charm Buyer",
    coreHook: "Vintage character homes",
    targetBuyer: "Empty nesters",
    priceRange: "Mid range",
    bestArea: "Historic suburban",
    vibe: "Soft, timeless, trust-rich"
  },
  "STUDENT-HUB": {
    name: "The College Hustler",
    coreHook: "Walkability & convenience",
    targetBuyer: "Students, Parents",
    priceRange: "Affordable–Mid",
    bestArea: "Uni & campus radius",
    vibe: "Trendy, social"
  },
  "BASE-HUB": {
    name: "The VA Relocator",
    coreHook: "Proximity & VA perks",
    targetBuyer: "Military families",
    priceRange: "Entry–Mid range",
    bestArea: "Near bases",
    vibe: "Reliable, clean, easy"
  },
  "RENT-READY": {
    name: "The Passive Income Seeker",
    coreHook: "Zero repairs, fast rent",
    targetBuyer: "Small landlords",
    priceRange: "Mid–High",
    bestArea: "Dense rental zones",
    vibe: "Structured, bold"
  },
  "DIY-DREAM": {
    name: "The Hands-On Investor",
    coreHook: "Sweat equity potential",
    targetBuyer: "Contractors, DIYers",
    priceRange: "Bargain–Mid",
    bestArea: "Fixer areas",
    vibe: "Rugged, industrial"
  }
};


[
  {
    "question": "Is the location more Suburban or Urban?",
    "answers": [
      { "text": "Strongly Suburban", "axis": "D", "value": -2 },
      { "text": "Suburban", "axis": "D", "value": -1 },
      { "text": "Balanced", "axis": "D", "value": 0 },
      { "text": "Urban", "axis": "D", "value": 1 },
      { "text": "Strongly Urban", "axis": "D", "value": 2 }
    ]
  },
  {
    "question": "Is the property move-in ready or does it need repairs?",
    "answers": [
      { "text": "Major repairs needed", "axis": "C", "value": -2 },
      { "text": "Some updates needed", "axis": "C", "value": -1 },
      { "text": "Neutral", "axis": "C", "value": 0 },
      { "text": "Mostly turnkey", "axis": "C", "value": 1 },
      { "text": "Fully turnkey", "axis": "C", "value": 2 }
    ]
  },
  {
    "question": "Does the style lean more Classic or Modern?",
    "answers": [
      { "text": "Very Classic", "axis": "V", "value": -2 },
      { "text": "Somewhat Classic", "axis": "V", "value": -1 },
      { "text": "Balanced", "axis": "V", "value": 0 },
      { "text": "Somewhat Modern", "axis": "V", "value": 1 },
      { "text": "Very Modern", "axis": "V", "value": 2 }
    ]
  },
  {
    "question": "Is it priced for entry-level buyers or luxury buyers?",
    "answers": [
      { "text": "Entry-level pricing", "axis": "P", "value": -2 },
      { "text": "Affordable", "axis": "P", "value": -1 },
      { "text": "Mid-range", "axis": "P", "value": 0 },
      { "text": "Upscale", "axis": "P", "value": 1 },
      { "text": "Luxury pricing", "axis": "P", "value": 2 }
    ]
  },
  {
    "question": "Is the property close to a key hub or far from it?",
    "answers": [
      { "text": "Very Far", "axis": "S", "value": -2 },
      { "text": "Far", "axis": "S", "value": -1 },
      { "text": "Neutral distance", "axis": "S", "value": 0 },
      { "text": "Close", "axis": "S", "value": 1 },
      { "text": "Very Close", "axis": "S", "value": 2 }
    ]
  },
  {
    "question": "Is this best suited for a family or income property?",
    "answers": [
      { "text": "Family only", "axis": "U", "value": -2 },
      { "text": "More family than income", "axis": "U", "value": -1 },
      { "text": "Balanced use", "axis": "U", "value": 0 },
      { "text": "More income than family", "axis": "U", "value": 1 },
      { "text": "Income property only", "axis": "U", "value": 2 }
    ]
  }
]
