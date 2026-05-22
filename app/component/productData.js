// Returns price for a given product and size string like "30mg"
// Uses sizePrices if defined, otherwise uses proportional formula: basePrice * (mg/20)
export const getPriceForSize = (product, size) => {
  const mg = parseInt(size.replace("mg", ""));
  if (product.sizePrices && product.sizePrices[size] !== undefined) {
    return product.sizePrices[size];
  }
  // Default: linear scaling. Base price is for 20mg, so multiply by (mg/20)
  return Math.round(product.price * (mg / 20));
};

export const productsData = [
            // SKINCARE
            {
                 id: 1,
    name: "Adamax",
    category: "growth",
    price: 76,
    image: "/pdone.jpeg",
    sizePrices: null, // null = use price formula: price * (mg/20)
    description: "Advanced peptide compound researched for growth hormone pathway stimulation and cellular performance models.",
    rating: 4.8,
    reviews: 234,
    howItWorks: [
      "Studied for endocrine signaling interactions",
      "Explored in hormone optimization research models",
      "Supports advanced peptide pathway investigations",
      "Produced with high-purity research standards"
    ]
  },
             {
    id: 2,
    name: "Adipotide / FTTP",
    category: "metabolic",
    price: 71,
    image: "/pdtwo.jpeg",
    description: "Research peptide studied for metabolic signaling, fat-regulation pathways, and energy-balance models.",
    rating: 4.7,
    reviews: 201,
    howItWorks: [
      "Investigated in metabolic pathway research",
      "Explored for cellular fat-signaling studies",
      "Designed for precision laboratory applications",
      "Manufactured for scientific consistency"
    ]
  },
          {
    id: 3,
    name: "Aicar",
    category: "performance",
    price: 59,
    image: "/pdthree.jpeg",
    description: "Widely researched peptide compound explored in endurance, metabolic activity, and cellular energy studies.",
    rating: 4.9,
    reviews: 287,
    howItWorks: [
      "Studied in AMPK activation research",
      "Explored for energy-regulation pathways",
      "Investigated in endurance-focused models",
      "Developed for advanced peptide research"
    ]
  },

  {
    id: 4,
    name: "ARA290 (Cibinetide)",
    category: "recovery",
    price: 73,
    image: "/pdfour.jpeg",
    description: "Peptide compound researched for tissue-repair signaling and inflammation-support laboratory models.",
    rating: 4.8,
    reviews: 198,
    howItWorks: [
      "Studied for cellular recovery pathways",
      "Explored in regenerative signaling models",
      "Supports advanced peptide investigations",
      "Produced with verified purity standards"
    ]
  },
            {
    id: 5,
    name: "AOD9604",
    category: "metabolic",
    price: 57,
    image: "/pdfive.jpeg",
    description: "Metabolic research peptide explored for fat-regulation signaling and body-composition studies.",
    rating: 4.9,
    reviews: 321,
    howItWorks: [
      "Investigated in metabolic signaling research",
      "Explored for lipid-regulation studies",
      "Supports precision peptide applications",
      "Designed for laboratory-grade consistency"
    ]
  },

  {
    id: 6,
    name: "ACE 031",
    category: "performance",
    price: 54,
    image: "/pdsix.jpeg",
    description: "Advanced peptide compound studied for muscle-preservation and anabolic signaling research.",
    rating: 4.7,
    reviews: 167,
    howItWorks: [
      "Explored in muscle-growth pathway models",
      "Studied for anabolic signaling activity",
      "Supports sports-science investigations",
      "Produced for scientific-grade applications"
    ]
  },
            {
                    id: 7,
    name: "ACTH 1-39",
    category: "hormonal",
    price: 66,
    image: "/pdtwentysix.jpeg",
    description: "Hormonal peptide researched for adrenal signaling and endocrine-response laboratory studies.",
    rating: 4.8,
    reviews: 214,
    howItWorks: [
      "Investigated in endocrine pathway studies",
      "Explored for hormonal-response research",
      "Supports advanced peptide applications",
      "Manufactured under strict purity protocols"
    ]
  },

  {
    id: 8,
    name: "B7-33",
    category: "recovery",
    price: 64,
    image: "/pdeight.jpeg",
    description: "Precision peptide researched for regenerative pathways and tissue-support biological models.",
    rating: 4.6,
    reviews: 189,
    howItWorks: [
      "Studied for recovery pathway interactions",
      "Explored in tissue-regeneration research",
      "Supports targeted peptide investigations",
      "Designed for laboratory reliability"
    ]
  },
              {
    id: 9,
    name: "BPC 157",
    category: "recovery",
    price: 48,
    image: "/pdnine.jpeg",
    description: "Advanced peptide compound researched for recovery support, tissue pathways, and cellular regeneration models.",
    rating: 4.9,
    reviews: 456,
    howItWorks: [
      "Studied for regenerative signaling pathways",
      "Explored in tissue-support laboratory models",
      "Designed for precision peptide research",
      "Produced with high-purity standards"
    ]
  },

  {
    id: 10,
    name: "BPC + TB Blend",
    category: "recovery",
    price: 83,
    image: "/pdten.jpeg",
    description: "Dual-peptide blend researched for advanced recovery, tissue-repair, and regenerative pathway studies.",
    rating: 4.9,
    reviews: 332,
    howItWorks: [
      "Combines two recovery-focused peptides",
      "Explored in regenerative research models",
      "Supports tissue signaling investigations",
      "Manufactured for scientific precision"
    ]
  },
  {
    id: 11,
    name: "Cagrilintide",
    category: "metabolic",
    price: 99,
    image: "/pdeleven.jpeg",
    description: "Research peptide explored for appetite-signaling and metabolic-regulation pathways.",
    rating: 4.8,
    reviews: 278,
    howItWorks: [
      "Studied in appetite-control models",
      "Explored for metabolic signaling activity",
      "Supports glucose-regulation investigations",
      "Developed for laboratory applications"
    ]
  },

  {
    id: 12,
    name: "Cagrisema",
    category: "metabolic",
    price: 75,
    image: "/pdtwelve.jpeg",
    description: "Combination peptide formula researched for advanced metabolic and energy-regulation studies.",
    rating: 4.9,
    reviews: 301,
    howItWorks: [
      "Combines multiple metabolic pathways",
      "Studied in glucose-regulation research",
      "Explored for appetite-signaling models",
      "Produced with scientific-grade quality"
    ]
  },
   

  {
    id: 13,
    name: "CJC1295 with DAC",
    category: "growth",
    price: 75,
    image: "/pdthirteen.jpeg",
    description: "Growth hormone-releasing peptide researched for endocrine optimization and recovery models.",
    rating: 4.9,
    reviews: 411,
    howItWorks: [
      "Studied in GH-release pathway research",
      "Explored for recovery-support signaling",
      "Supports endocrine-focused studies",
      "Designed for advanced laboratory use"
    ]
  },
              {
    id: 14,
    name: "Bac Water",
    category: "support",
    price: 41,
    image: "/pdfourteen.jpeg",
    description: "Laboratory support solution prepared for peptide research handling and formulation applications.",
    rating: 4.6,
    reviews: 140,
    howItWorks: [
      "Used in peptide preparation research",
      "Supports laboratory compound handling",
      "Prepared under sterile-grade standards",
      "Designed for scientific consistency"
    ]
  },

  {
    id: 15,
    name: "GLP Research Blend",
    category: "metabolic",
    price: 118,
    image: "/pdfifteen.jpeg",
    description: "Advanced metabolic peptide researched for glucose-signaling and appetite-regulation pathways.",
    rating: 4.8,
    reviews: 367,
    howItWorks: [
      "Explored in metabolic-response models",
      "Studied for appetite-regulation research",
      "Supports peptide signaling investigations",
      "Produced with laboratory precision"
    ]
  },
  {
    id: 16,
    name: "Recovery Matrix",
    category: "recovery",
    price: 87,
    image: "/pdtwentyone.jpeg",
    description: "Precision peptide formula researched for tissue-support and cellular-repair pathway studies.",
    rating: 4.7,
    reviews: 204,
    howItWorks: [
      "Studied in regenerative pathway research",
      "Explored for cellular recovery models",
      "Supports laboratory peptide analysis",
      "Produced for scientific applications"
    ]
  },

  {
    id: 17,
    name: "Growth Signal X",
    category: "growth",
    price: 151,
    image: "/pdseventen.jpeg",
    description: "Peptide compound explored for growth-signaling and performance-support research models.",
    rating: 4.9,
    reviews: 390,
    howItWorks: [
      "Investigated in GH signaling studies",
      "Explored for anabolic-response models",
      "Supports cellular growth research",
      "Manufactured with premium purity"
    ]
  },

  {
    id: 18,
    name: "Cellular Longevity Blend",
    category: "longevity",
    price: 128,
    image: "/pdeighten.jpeg",
    description: "Advanced peptide formula researched for mitochondrial signaling and cellular-health studies.",
    rating: 4.8,
    reviews: 242,
    howItWorks: [
      "Studied in longevity-focused models",
      "Explored for mitochondrial signaling",
      "Supports cellular-repair investigations",
      "Produced for scientific-grade research"
    ]
  },

  {
    id: 19,
    name: "Muscle Preservation Complex",
    category: "performance",
    price: 94,
    image: "/pdnineteen.jpeg",
    description: "Performance peptide researched for muscle-support and anabolic-pathway studies.",
    rating: 4.7,
    reviews: 219,
    howItWorks: [
      "Explored in muscle-preservation models",
      "Studied for anabolic signaling pathways",
      "Supports sports-science research",
      "Developed with high-purity standards"
    ]
  },

  {
    id: 20,
    name: "Neuro Signal Peptide",
    category: "cognitive",
    price: 81,
    image: "/pdtwenty.jpeg",
    description: "Research peptide explored for neurotransmission and cognitive-support biological models.",
    rating: 4.8,
    reviews: 188,
    howItWorks: [
      "Studied in neurological pathway research",
      "Explored for cognitive signaling models",
      "Supports neurotransmitter investigations",
      "Designed for advanced laboratory studies"
    ]
  },
            // FRAGRANCE
            {
    id: 21,
    name: "Immune Modulator X",
    category: "immune",
    price: 77,
    image: "/pdtwentytwo.jpeg",
    description: "Peptide compound researched for immune-response and inflammatory-pathway studies.",
    rating: 4.7,
    reviews: 210,
    howItWorks: [
      "Explored in immune signaling research",
      "Studied for inflammatory-response pathways",
      "Supports laboratory biological models",
      "Produced with scientific precision"
    ]
  },

  {
    id: 22,
    name: "Collagen Signal Matrix",
    category: "skincare",
    price: 72,
    image: "/pdtwentythree.jpeg",
    description: "Cosmetic peptide researched for collagen-support and skin-regeneration pathways.",
    rating: 4.9,
    reviews: 402,
    howItWorks: [
      "Studied for collagen signaling activity",
      "Explored in skin-repair research",
      "Supports cosmetic peptide investigations",
      "Manufactured for purity and consistency"
    ]
  },

  {
    id: 23,
    name: "Mito Energy Peptide",
    category: "longevity",
    price: 110,
    image: "/pdtwentyfour.jpeg",
    description: "Advanced peptide explored for mitochondrial energy regulation and cellular vitality studies.",
    rating: 4.8,
    reviews: 260,
    howItWorks: [
      "Studied in energy-signaling models",
      "Explored for mitochondrial support pathways",
      "Supports cellular vitality research",
      "Produced for laboratory-grade use"
    ]
  },

  {
    id: 24,
    name: "Regenerative Complex",
    category: "recovery",
    price: 85,
    image: "/pdtwentyfive.jpeg",
    description: "Research peptide compound focused on regenerative signaling and tissue-support applications.",
    rating: 4.8,
    reviews: 276,
    howItWorks: [
      "Explored in regenerative studies",
      "Supports tissue pathway research",
      "Investigated for recovery-focused models",
      "Manufactured with verified standards"
    ]
  },  {
    id: 25,
    name: "Endurance Pathway Blend",
    category: "performance",
    price: 95,
    image: "/pdfive.jpeg",
    description: "Performance peptide researched for endurance optimization and energy-regulation studies.",
    rating: 4.7,
    reviews: 197,
    howItWorks: [
      "Studied in endurance pathway research",
      "Explored for metabolic energy signaling",
      "Supports sports physiology investigations",
      "Designed for scientific-grade analysis"
    ]
  },

  {
    id: 26,
    name: "Advanced Recovery-X",
    category: "recovery",
    price: 98,
    image: "/pdsix.jpeg",
    description: "High-purity peptide researched for recovery support and cellular-regeneration laboratory models.",
    rating: 4.9,
    reviews: 348,
    howItWorks: [
      "Studied for tissue-repair signaling",
      "Explored in regenerative pathway models",
      "Supports recovery-focused research",
      "Produced with precision standards"
    ]
  },

  {
    id: 27,
    name: "Hormone Optimization Blend",
    category: "hormonal",
    price: 120,
    image: "/pdseven.jpeg",
    description: "Endocrine research peptide explored for hormonal signaling and biological-regulation studies.",
    rating: 4.8,
    reviews: 266,
    howItWorks: [
      "Studied in endocrine response models",
      "Explored for hormone-signaling research",
      "Supports advanced peptide applications",
      "Designed for laboratory consistency"
    ]
  },

  {
    id: 28,
    name: "Cell Repair Peptide",
    category: "longevity",
    price: 88,
    image: "/pdeight.jpeg",
    description: "Research compound investigated for cellular-repair and longevity-support biological studies.",
    rating: 4.7,
    reviews: 184,
    howItWorks: [
      "Explored in cell-repair research",
      "Studied for longevity pathway models",
      "Supports advanced peptide signaling",
      "Manufactured with high-quality standards"
    ]
  },

  {
    id: 29,
    name: "Anabolic Research Blend",
    category: "performance",
    price: 105,
    image: "/pdnine.jpeg",
    description: "Advanced anabolic peptide researched for muscle-support and growth-focused laboratory studies.",
    rating: 4.9,
    reviews: 372,
    howItWorks: [
      "Studied in anabolic signaling research",
      "Explored for muscle-support pathways",
      "Supports performance-based investigations",
      "Produced for scientific-grade analysis"
    ]
  },

  {
    id: 30,
    name: "Precision Peptide Elite",
    category: "research",
    price: 130,
    image: "/pdaten.jpeg",
    description: "Premium research peptide compound developed for precision-focused scientific investigations.",
    rating: 5.0,
    reviews: 421,
    howItWorks: [
      "Designed for advanced peptide research",
      "Supports targeted biological pathway studies",
      "Explored in precision laboratory models",
      "Produced with elite purity verification"
    ]
  },
  {
  id: 31,
  name: "Metabo Lean X",
  category: "metabolic",
  price: 92,
  image: "/pdaone.jpeg",
  description: "Advanced metabolic peptide researched for appetite signaling and energy-regulation studies.",
  rating: 4.8,
  reviews: 244,
  howItWorks: [
    "Studied in metabolic signaling pathways",
    "Explored for glucose-regulation research",
    "Supports advanced laboratory investigations",
    "Produced with verified purity standards"
  ]
},

{
  id: 32,
  name: "GH Release Matrix",
  category: "growth",
  price: 108,
  image: "/pdatwo.jpeg",
  description: "Growth-focused peptide compound explored for endocrine and recovery pathway research.",
  rating: 4.9,
  reviews: 331,
  howItWorks: [
    "Investigated in GH-release models",
    "Explored for recovery-support signaling",
    "Supports hormonal pathway studies",
    "Manufactured for scientific consistency"
  ]
},

{
  id: 33,
  name: "RepairCore Blend",
  category: "recovery",
  price: 84,
  image: "/pdathree.jpeg",
  description: "Recovery peptide researched for tissue-support and regenerative cellular models.",
  rating: 4.7,
  reviews: 203,
  howItWorks: [
    "Studied for regenerative signaling",
    "Explored in tissue-support research",
    "Supports precision peptide investigations",
    "Produced with laboratory-grade quality"
  ]
},

{
  id: 34,
  name: "Neuro Focus PX",
  category: "cognitive",
  price: 97,
  image: "/pdafour.jpeg",
  description: "Cognitive peptide researched for neurotransmission and mental-performance studies.",
  rating: 4.8,
  reviews: 178,
  howItWorks: [
    "Explored in neural signaling research",
    "Studied for cognitive pathway activity",
    "Supports neurotransmitter investigations",
    "Designed for scientific applications"
  ]
},

{
  id: 35,
  name: "Immune Shield Complex",
  category: "immune",
  price: 88,
  image: "/pdafive.jpeg",
  description: "Peptide compound explored for immune modulation and inflammatory-response research.",
  rating: 4.8,
  reviews: 191,
  howItWorks: [
    "Studied in immune-response pathways",
    "Explored for inflammation signaling",
    "Supports laboratory biological models",
    "Produced with premium purity control"
  ]
},

{
  id: 36,
  name: "Collagen Restore",
  category: "skincare",
  price: 74,
  image: "/pdasix.jpeg",
  description: "Cosmetic peptide researched for collagen production and skin-repair signaling pathways.",
  rating: 4.9,
  reviews: 354,
  howItWorks: [
    "Studied for collagen-support activity",
    "Explored in skin-regeneration models",
    "Supports cosmetic peptide research",
    "Manufactured for scientific precision"
  ]
},

{
  id: 37,
  name: "EnduroMax Research",
  category: "performance",
  price: 112,
  image: "/pdaseven.jpeg",
  description: "Performance peptide investigated for endurance optimization and recovery-support studies.",
  rating: 4.7,
  reviews: 216,
  howItWorks: [
    "Studied in endurance pathway models",
    "Explored for cellular energy signaling",
    "Supports sports-science investigations",
    "Produced for laboratory applications"
  ]
},

{
  id: 38,
  name: "Longevita Signal",
  category: "longevity",
  price: 125,
  image: "/pdaeight.jpeg",
  description: "Advanced peptide researched for mitochondrial support and cellular-longevity studies.",
  rating: 4.9,
  reviews: 287,
  howItWorks: [
    "Explored in longevity-focused research",
    "Studied for mitochondrial activity",
    "Supports advanced cellular investigations",
    "Designed for scientific-grade consistency"
  ]
},

{
  id: 39,
  name: "Hormo Balance-X",
  category: "hormonal",
  price: 101,
  image: "/pdanine.jpeg",
  description: "Hormonal peptide compound researched for endocrine signaling and recovery-support pathways.",
  rating: 4.8,
  reviews: 223,
  howItWorks: [
    "Studied in endocrine-response research",
    "Explored for hormonal pathway models",
    "Supports advanced peptide investigations",
    "Produced with verified laboratory standards"
  ]
},

{
  id: 40,
  name: "Recovery Prime",
  category: "recovery",
  price: 90,
  image: "/pdaeleven.jpeg",
  description: "Precision recovery peptide researched for tissue regeneration and repair-support studies.",
  rating: 4.9,
  reviews: 301,
  howItWorks: [
    "Explored in regenerative signaling",
    "Studied for tissue-support pathways",
    "Supports cellular-recovery investigations",
    "Manufactured with scientific integrity"
  ]
},

{
  id: 41,
  name: "Mass Growth Elite",
  category: "growth",
  price: 132,
  image: "/pdatwelve.jpeg",
  description: "High-purity growth peptide researched for anabolic and cellular-growth pathway studies.",
  rating: 4.9,
  reviews: 398,
  howItWorks: [
    "Studied in anabolic signaling models",
    "Explored for muscle-support research",
    "Supports GH-focused investigations",
    "Produced for advanced laboratory use"
  ]
},

{
  id: 42,
  name: "Metabolic Edge",
  category: "metabolic",
  price: 95,
  image: "/pdathirteen.jpeg",
  description: "Research peptide explored for metabolic optimization and fat-regulation studies.",
  rating: 4.7,
  reviews: 184,
  howItWorks: [
    "Studied in metabolic signaling activity",
    "Explored for appetite-control pathways",
    "Supports energy-regulation research",
    "Designed with laboratory-grade standards"
  ]
},

{
  id: 43,
  name: "Cellular Defense PX",
  category: "immune",
  price: 87,
  image: "/pdafourteen.jpeg",
  description: "Advanced immune peptide researched for biological defense and inflammation studies.",
  rating: 4.8,
  reviews: 193,
  howItWorks: [
    "Studied for immune-support signaling",
    "Explored in inflammatory pathway models",
    "Supports advanced laboratory analysis",
    "Produced with high-purity protocols"
  ]
},

{
  id: 44,
  name: "Performance Drive",
  category: "performance",
  price: 116,
  image: "/pdafifteen.jpeg",
  description: "Performance-focused peptide researched for endurance and recovery-support pathways.",
  rating: 4.8,
  reviews: 249,
  howItWorks: [
    "Explored in endurance optimization research",
    "Studied for muscle-support signaling",
    "Supports sports physiology studies",
    "Manufactured for scientific consistency"
  ]
},

{
  id: 45,
  name: "Skin Renewal Matrix",
  category: "skincare",
  price: 79,
  image: "/pdaeighteen.jpeg",
  description: "Cosmetic peptide compound researched for collagen signaling and skin-repair models.",
  rating: 4.9,
  reviews: 318,
  howItWorks: [
    "Studied in collagen pathway research",
    "Explored for skin-regeneration activity",
    "Supports cosmetic peptide investigations",
    "Produced for advanced skincare science"
  ]
}
     ];