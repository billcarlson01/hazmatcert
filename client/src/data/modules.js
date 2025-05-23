// client/src/data/modules.js

export const modules = [
  {
    id: 1,
    title: "Hazard Classes",
    slug: "hazard-classes",
    description: "Learn the 9 DOT hazard classes and what they mean.",
    content: `Hazardous materials are grouped into 9 classes based on their properties:\n
1. Explosives\n2. Gases\n3. Flammable liquids\n4. Flammable solids\n5. Oxidizers and organic peroxides\n6. Toxic and infectious substances\n7. Radioactive material\n8. Corrosives\n9. Miscellaneous dangerous goods`,
    quiz: [
      {
        question: "How many DOT hazard classes exist?",
        choices: ["5", "7", "9", "11"],
        answer: "9"
      },
      {
        question: "Class 3 refers to which of the following?",
        choices: ["Explosives", "Gases", "Flammable liquids", "Corrosives"],
        answer: "Flammable liquids"
      }
    ]
  },
  {
    id: 2,
    title: "Shipping Papers",
    slug: "shipping-papers",
    description: "Understand required documents for hazmat transport.",
    content: `Shipping papers must include:\n\n- Proper shipping name\n- Hazard class\n- ID number\n- Packing group\n- Emergency contact info\n\nThey must be within reach in the cab at all times.`,
    quiz: [
      {
        question: "Where must shipping papers be kept while driving?",
        choices: ["In the trailer", "In the glove compartment", "Within the driver's reach", "With the shipper"],
        answer: "Within the driver's reach"
      },
      {
        question: "Which of these is NOT required on a shipping paper?",
        choices: ["Hazard class", "Net weight", "ID number", "Emergency contact"],
        answer: "Net weight"
      }
    ]
  },
  {
    id: 3,
    title: "Placarding & Marking",
    slug: "placarding-marking",
    description: "Master hazmat vehicle labeling requirements.",
    content: `Placards must be placed on all four sides of a vehicle transporting hazardous materials. They must be:\n\n- Readable\n- Weather-resistant\n- Correct for the class and amount being transported.`,
    quiz: [
      {
        question: "How many placards must be on a hazmat vehicle?",
        choices: ["Two", "Four", "One on each rear door", "Only the front"],
        answer: "Four"
      },
      {
        question: "Placards must indicate:",
        choices: ["Hazard class", "Driver's name", "Route info", "Fuel type"],
        answer: "Hazard class"
      }
    ]
  },
  {
    id: 4,
    title: "Emergency Procedures",
    slug: "emergency-procedures",
    description: "What to do in the event of a spill, fire, or crash.",
    content: `Drivers must follow emergency response guides, secure the scene, notify authorities, and avoid contact with the material unless trained. The Emergency Response Guidebook (ERG) provides guidance.`,
    quiz: [
      {
        question: "What should be your first action in a hazmat spill?",
        choices: ["Drive away", "Call the shipper", "Notify authorities", "Try to clean it up"],
        answer: "Notify authorities"
      },
      {
        question: "What manual helps with emergency hazmat response?",
        choices: ["The FMCSA Handbook", "The CDL Guide", "The Emergency Response Guidebook", "The Road Atlas"],
        answer: "The Emergency Response Guidebook"
      }
    ]
  },
  {
    id: 5,
    title: "Security Risks & Plans",
    slug: "security-plans",
    description: "How to prevent hazmat from falling into the wrong hands.",
    content: `Security plans are required for high-risk materials. These include:\n\n- Personnel background checks\n- Route planning\n- Facility security\n\nTraining is required to recognize and respond to security threats.`,
    quiz: [
      {
        question: "What is a key part of a hazmat security plan?",
        choices: ["Extra fuel storage", "Background checks", "Traffic violations", "Uniforms"],
        answer: "Background checks"
      },
      {
        question: "Security plans are required for:",
        choices: ["All drivers", "Any commercial load", "High-risk hazmat", "Oversize vehicles"],
        answer: "High-risk hazmat"
      }
    ]
  },
  {
    id: 6,
    title: "FMCSA & DOT Responsibilities",
    slug: "regulations",
    description: "Who's in charge, and what they require from you.",
    content: `The FMCSA enforces DOT hazmat regulations. They require:\n\n- Proper training\n- Up-to-date records\n- Inspections\n\nViolations can result in fines or suspension of operating authority.`,
    quiz: [
      {
        question: "Who enforces hazmat regulations for trucking?",
        choices: ["OSHA", "FBI", "FMCSA", "USDOT"],
        answer: "FMCSA"
      },
      {
        question: "What must hazmat drivers carry proof of?",
        choices: ["Insurance", "Training", "Fuel receipts", "Background checks"],
        answer: "Training"
      }
    ]
  },
  {
    id: 7,
    title: "Final Exam",
    slug: "final-exam",
    description: "Pass the course with an 80% or higher to earn your certificate.",
    content: `The final exam covers all modules. You must answer at least 80% correctly to pass. Questions will be drawn from prior quizzes.`,
    quiz: [
      {
        question: "What percentage is required to pass the final exam?",
        choices: ["60%", "70%", "80%", "90%"],
        answer: "80%"
      },
      {
        question: "Which document must be within reach while driving?",
        choices: ["Logbook", "Shipping papers", "Load manifest", "Route plan"],
        answer: "Shipping papers"
      }
    ]
  }
];
