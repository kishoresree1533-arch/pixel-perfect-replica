import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ta";

/* eslint-disable prettier/prettier */
const en = {
  nav: {
    home: "Home",
    about: "About Us",
    doctors: "Doctors",
    services: "Services",
    contact: "Contact",
    book: "Book on WhatsApp",
  },
  common: {
    call: "Call the clinic",
    whatsapp: "Book on WhatsApp",
    directions: "Get directions",
    reviews: "Google reviews",
    openDays: "Open Monday – Sunday",
    morning: "Morning",
    evening: "Evening",
    learnMore: "Learn more",
    seeDoctors: "Meet our care team",
    bookVisit: "Book a visit",
  },
  home: {
    hero: {
      eyebrow: "Family healthcare · Saravanampatti, Coimbatore",
      titleA: "Healthcare for",
      titleAccent: "every generation",
      titleB: "of your family",
      sub: "G7 Clinic brings warm, affordable and patient-centred care to Sunnambu Kalavai — from your baby's first check-up to your parents' ongoing treatment, all under one roof.",
      openCard: "Open today",
      ratingLine: "Rated 4.8 on Google",
    },
    trust: {
      eyebrow: "Why families trust us",
      title: "Trusted by families across Saravanampatti",
      sub: "Every visit is built on unhurried consultations, honest advice and care that respects your family's budget.",
      stats: [
        { value: "4.8/5", label: "Google rating" },
        { value: "125", label: "Patient reviews" },
        { value: "7 days", label: "Open every week" },
        { value: "Lab + Pharmacy", label: "Under one roof" },
      ],
    },
    about: {
      eyebrow: "About G7 Clinic",
      title: "A neighbourhood clinic with a family's heart",
      p1: "G7 Clinic was founded with one belief: quality healthcare should feel personal, not intimidating. Located in the heart of Sunnambu Kalavai, our clinic serves everyone — a newborn's first weigh-in, a working parent's fever, a grandparent's diabetes review — with the same unhurried attention.",
      p2: "With an attached laboratory and pharmacy, most visits end the same day: consult, test, collect your medicines and go home. No running across the city, no surprise bills.",
      cta: "Read our full story",
    },
    generations: {
      eyebrow: "Healthcare for every generation",
      title: "One clinic for your whole family",
      sub: "From first cries to silver years, our care adapts to each stage of life.",
      items: [
        {
          title: "Infants",
          text: "Gentle first check-ups, growth monitoring and vaccination-time guidance for your littlest ones.",
        },
        {
          title: "Children",
          text: "Fever, coughs, tummy troubles and school-age health — answered with patience, in Tamil or English.",
        },
        {
          title: "Adults",
          text: "Everyday illness, blood pressure, thyroid and lifestyle care that fits around your workday.",
        },
        {
          title: "Senior citizens",
          text: "Long-term diabetes and blood pressure management, with unhurried reviews and clear medicine plans.",
        },
      ],
    },
    services: {
      eyebrow: "Medical services",
      title: "Care for the everyday, and the long run",
      sub: "Physician-led care for the health concerns families face most — with lab tests and medicines available right here.",
      items: [
        {
          title: "Common illnesses",
          text: "Fever, cough, cold, infections, body pain and everyday complaints — diagnosed and treated without delay.",
        },
        {
          title: "Diabetes care",
          text: "Sugar monitoring, HbA1c testing at our lab, medicine reviews and practical diet guidance in your language.",
        },
        {
          title: "Chronic conditions",
          text: "Blood pressure, thyroid, cholesterol and asthma — steady, long-term management you can plan your life around.",
        },
        {
          title: "Preventive health check-ups",
          text: "Full body and age-appropriate check-up packages to catch problems early, before they become problems.",
        },
      ],
      cta: "Explore all services",
    },
    why: {
      eyebrow: "Why choose G7 Clinic",
      title: "Healthcare that puts people first",
      items: [
        {
          title: "Affordable, always",
          text: "Honest consultation charges and medicine discounts at our own pharmacy — care that respects your budget.",
        },
        {
          title: "Compassionate doctors",
          text: "Unhurried consultations where your questions are answered in Tamil or English, never rushed out the door.",
        },
        {
          title: "Patient-centred care",
          text: "Your history, your family, your routine — treatment plans built around real life, not just reports.",
        },
        {
          title: "Everything in one visit",
          text: "Consultation, lab tests and pharmacy under one roof, so most visits end the very same day.",
        },
      ],
    },
    doctors: {
      eyebrow: "Our care team",
      title: "Physician-led care, with verified credentials",
      sub: "G7 Clinic is a general-physician practice serving Saravanampatti families. Our doctor profiles are published only after verification — ask us directly about qualifications on your visit, or call us anytime.",
      cta: "Meet our care team",
    },
    testimonials: {
      eyebrow: "Patient voices",
      title: "What patients say about us",
      sub: "4.8 out of 5, from 125 Google reviews — here is what families appreciate most.",
      quotes: [
        {
          text: "The doctor listens patiently and explains everything clearly in Tamil. My parents' diabetes and BP are finally under control.",
          name: "A regular family",
          detail: "Saravanampatti",
        },
        {
          text: "Consultation, blood test and medicines all in one visit — and the bill was very reasonable. This is how a clinic should run.",
          name: "A parent",
          detail: "Sunnambu Kalavai",
        },
        {
          text: "Brought my daughter at night during fever. The evening hours are a blessing for working families like ours.",
          name: "A working mother",
          detail: "Coimbatore",
        },
      ],
    },
    gallery: {
      eyebrow: "Inside G7 Clinic",
      title: "A calm space, made for healing",
      sub: "Bright consulting rooms, a peaceful waiting area, and a fully stocked pharmacy next door.",
    },
    location: {
      eyebrow: "Visit us",
      title: "We're around the corner",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Consultation hours",
      daysLabel: "Days",
    },
    cta: {
      title: "Your family's health deserves unhurried care",
      sub: "Message us on WhatsApp to book a consultation, or simply walk in during clinic hours.",
    },
  },
  footer: {
    tagline: "Healthcare for every generation, in the heart of Saravanampatti.",
    quickLinks: "Quick links",
    contact: "Contact",
    hours: "Consultation hours",
    rights: "All rights reserved.",
    disclaimer:
      "Information on this website is for general awareness and does not replace medical consultation.",
  },
  aboutPage: {
    heroTitle: "Caring for Coimbatore's families, one visit at a time",
    heroSub: "The story, philosophy and people behind G7 Clinic in Sunnambu Kalavai, Saravanampatti.",
    storyTitle: "Our story",
    story: [
      "G7 Clinic opened its doors in Saravanampatti with a simple mission: to make dependable healthcare feel close to home. As the IT corridor of Coimbatore grew around us, we saw young families moving in — parents juggling long work hours, children growing fast, grandparents moving to be near their loved ones. They needed a clinic that could serve all three, without a hospital's queues or a city-centre's bills.",
      "So we built G7 around the family. A general physician practice that treats the everyday with the same seriousness as the chronic. A laboratory for same-day answers. A pharmacy with honest, discounted prices. Consultation hours that respect both school timetables and office shifts.",
      "Today, families across Sunnambu Kalavai and Saravanampatti rate us 4.8 out of 5 on Google — not for fancy buildings, but for listening carefully, explaining clearly and treating gently.",
    ],
    philosophyTitle: "Our philosophy",
    philosophy: [
      {
        title: "Listen first",
        text: "Every consultation begins with listening — your symptoms, your worries, your family's history. Diagnosis follows understanding.",
      },
      {
        title: "Treat honestly",
        text: "We prescribe only what is needed, explain why, and never inflate a bill. Trust is our most prescribed medicine.",
      },
      {
        title: "Care continuously",
        text: "Chronic conditions need companionship, not just prescriptions. We follow up, adjust and stand by your family long-term.",
      },
    ],
    offerTitle: "What you'll find here",
    offerItems: [
      { title: "General physician consultations", text: "For every age, every day of the week." },
      { title: "In-house laboratory", text: "Blood, sugar, thyroid and routine tests with quick reports." },
      { title: "Attached pharmacy", text: "Genuine medicines at discounted prices, steps from the consulting room." },
      { title: "Health check-up packages", text: "Preventive screenings tailored to age and risk." },
    ],
    hoursTitle: "Come say hello",
  },
  doctorsPage: {
    heroTitle: "Our care team",
    heroSub: "Experienced, verified and genuinely caring — the people behind G7 Clinic.",
    intro:
      "G7 Clinic is a physician-led general practice. Our consulting doctors are registered medical practitioners, and we share each doctor's name and qualifications only after they are verified — because your trust should rest on facts, not flyers.",
    rolesTitle: "Who you'll meet at G7",
    roles: [
      {
        title: "Consulting general physician",
        text: "Our lead physician handles everyday illness, diabetes, blood pressure, thyroid and preventive care for all ages, with unhurried consultations in Tamil and English.",
      },
      {
        title: "Laboratory team",
        text: "Trained technicians run our in-house lab — blood counts, sugar, thyroid and routine tests, with reports the same day for most panels.",
      },
      {
        title: "Pharmacy team",
        text: "Our attached pharmacy stocks genuine medicines at discounted prices and helps you understand your prescription before you leave.",
      },
    ],
    noteTitle: "Doctor profiles are being updated",
    noteText:
      "We publish doctor names, qualifications and photos only after verification. For the current consultation schedule, please call the clinic or message us on WhatsApp — we'll gladly tell you who is consulting and when.",
    ctaTitle: "Ask us directly",
    ctaText:
      "Call or WhatsApp us any time — we'll happily share who is consulting, their timings and anything else you'd like to know before your visit.",
  },
  servicesPage: {
    heroTitle: "Services at G7 Clinic",
    heroSub: "Physician-led care for your family's everyday health — supported by an in-house lab and pharmacy.",
    itemsTitle: "What we treat and manage",
    items: [
      {
        title: "Common illnesses",
        text: "The fevers, flus and infections that arrive uninvited — treated promptly so life gets back to normal fast.",
        points: [
          "Fever, cough, cold and sore throat",
          "Viral infections and seasonal flu",
          "Stomach pain, vomiting and loose motions",
          "Skin allergies and minor infections",
          "Headaches and body pain",
        ],
      },
      {
        title: "Diabetes care",
        text: "Steady, practical diabetes management — from first diagnosis to long-term sugar control.",
        points: [
          "Fasting sugar and HbA1c testing at our lab",
          "Medicine planning and dose reviews",
          "Diet guidance explained in Tamil or English",
          "Foot, eye and kidney complication screening",
          "Follow-up reminders on WhatsApp",
        ],
      },
      {
        title: "Chronic condition management",
        text: "Long-term conditions need a long-term partner — we plan your care around your real life.",
        points: [
          "Blood pressure monitoring and control",
          "Thyroid disorders and hormone profiles",
          "Cholesterol and heart-risk management",
          "Asthma and breathing complaints",
          "Joint pain and arthritis care",
        ],
      },
      {
        title: "Preventive health check-ups",
        text: "Catch problems while they're small — age-appropriate packages with clear, honest reports.",
        points: [
          "Full body check-up packages",
          "Annual health screening for adults",
          "Senior citizen wellness panels",
          "Pre-employment and school fitness checks",
          "Personalised advice based on your reports",
        ],
      },
    ],
    supportTitle: "Support that makes visits simple",
    support: [
      {
        title: "In-house laboratory",
        text: "Blood counts, sugar, thyroid, liver and kidney function tests — most reports the same day, so your consultation never waits on a second visit.",
      },
      {
        title: "Attached pharmacy",
        text: "Genuine, in-date medicines at discounted prices. Our pharmacist walks your prescription through with you before you leave.",
      },
    ],
    noteText:
      "Suitability of any test or treatment is always decided by the doctor after consultation. Please confirm availability of specific services when you book.",
    faqTitle: "Common questions",
    faqs: [
      {
        q: "Do I need an appointment, or can I walk in?",
        a: "Walk-ins are welcome during consultation hours. Booking on WhatsApp simply reduces your waiting time.",
      },
      {
        q: "What are the consultation timings?",
        a: "Morning: 9:30 AM to 1:30 PM. Evening: 5:00 PM to 9:00 PM. The clinic is open Monday to Sunday.",
      },
      {
        q: "Is the pharmacy and lab at the same place?",
        a: "Yes — our laboratory and pharmacy are attached to the clinic, so tests and medicines happen in the same visit.",
      },
      {
        q: "Do you treat children and elderly patients?",
        a: "Yes. From infants to senior citizens, our physician cares for every generation of the family.",
      },
      {
        q: "Which language will the doctor speak?",
        a: "Consultations are available in both Tamil and English — choose whichever you're comfortable with.",
      },
    ],
  },
  contactPage: {
    heroTitle: "Book a visit",
    heroSub: "Message us on WhatsApp, call directly, or send a request below — we'll confirm your slot quickly.",
    formTitle: "Request an appointment",
    formSub: "Fill this in and we'll open WhatsApp with your details ready to send.",
    name: "Your name",
    phone: "Phone number",
    date: "Preferred date",
    time: "Preferred time",
    reason: "Reason for visit",
    reasonPlaceholder: "e.g. Fever since 2 days / Diabetes review",
    submit: "Send on WhatsApp",
    morning: "Morning · 9:30 AM – 1:30 PM",
    evening: "Evening · 5:00 PM – 9:00 PM",
    infoTitle: "Clinic details",
    callTitle: "Prefer to talk?",
    callText: "Call us during clinic hours and our front desk will help you plan your visit.",
    directionsTitle: "Getting here",
    directionsText:
      "We're on Tank Street at Aathipalayam Junction, Sunnambu Kalavai — minutes from Saravanampatti's IT corridor, with parking nearby.",
  },
  form: {
    waIntro: "Hello G7 Clinic! I would like to book an appointment.",
    waName: "Name",
    waPhone: "Phone",
    waDate: "Preferred date",
    waTime: "Preferred time",
    waReason: "Reason",
  },
} as const;
/* eslint-enable prettier/prettier */

export type Dict = typeof en;

const ta: Dict = {
  nav: {
    home: "முகப்பு",
    about: "எங்களைப் பற்றி",
    doctors: "மருத்துவர்கள்",
    services: "சேவைகள்",
    contact: "தொடர்பு",
    book: "வாட்ஸ்அப்பில் பதிவு செய்யுங்கள்",
  },
  common: {
    call: "கிளினிக்கை அழைக்கவும்",
    whatsapp: "வாட்ஸ்அப்பில் பதிவு செய்யுங்கள்",
    directions: "வழிகாட்டி",
    reviews: "கூகுள் விமர்சனங்கள்",
    openDays: "திங்கள் முதல் ஞாயிறு வரை",
    morning: "காலை",
    evening: "மாலை",
    learnMore: "மேலும் அறிய",
    seeDoctors: "எங்கள் குழுவை சந்திக்கவும்",
    bookVisit: "வருகையை பதிவு செய்யுங்கள்",
  },
  home: {
    hero: {
      eyebrow: "குடும்ப சுகாதாரம் · சரவணம்பட்டி, கோயம்புத்தூர்",
      titleA: "உங்கள் குடும்பத்தின்",
      titleAccent: "ஒவ்வொரு தலைமுறைக்கும்",
      titleB: "சுகாதாரம்",
      sub: "உங்கள் குழந்தையின் முதல் பரிசோதனை முதல் பெரியவர்களின் தொடர் சிகிச்சை வரை — சூன்னாம்பாளையத்தில் அன்பான, மலிவான, நோயாளி மையமான சுகாதார சேவையை G7 கிளினிக் வழங்குகிறது.",
      openCard: "இன்று திறந்திருக்கும் நேரம்",
      ratingLine: "கூகுளில் 4.8 மதிப்பீடு",
    },
    trust: {
      eyebrow: "குடும்பங்கள் ஏன் நம்புகின்றன",
      title: "சரவணம்பட்டி குடும்பங்களின் நம்பிக்கை",
      sub: "அவசரப்படாத ஆலோசனை, நேர்மையான சிகிச்சை மற்றும் உங்கள் பட்ஜெட்டுக்கு ஏற்ற கவனிப்பு — ஒவ்வொரு வருகையிலும் இதுவே நமது வாக்கு.",
      stats: [
        { value: "4.8/5", label: "கூகுள் மதிப்பீடு" },
        { value: "125", label: "நோயாளி விமர்சனங்கள்" },
        { value: "7 நாள்", label: "வாரம்தோறும் திறந்திருக்கும்" },
        { value: "லேப் + மருந்தகம்", label: "ஒரே இடத்தில்" },
      ],
    },
    about: {
      eyebrow: "G7 கிளினிக் பற்றி",
      title: "குடும்பத்தின் இதயத்துடன் இயங்கும் சுற்றுவட்டார கிளினிக்",
      p1: "தரமான சுகாதாரம் தனிப்பட்டதாகவும் அச்சுறுத்தாததாகவும் இருக்க வேண்டும் என்பதே G7 கிளினிக்கின் நம்பிக்கை. சூன்னாம்பாளையத்தின் மையத்தில் அமைந்த எங்கள் கிளினிக் — புதிதாகப் பிறந்த குழந்தையின் முதல் பரிசோதனை, பணிபுரியும் பெற்றோரின் காய்ச்சல், பேரன் பேதைகளின் நீரிழிவு பரிசோதனை — அனைத்திற்கும் அவசரப்படாத கவனம் வழங்குகிறது.",
      p2: "இணைக்கப்பட்ட லேபரேட்டரி மற்றும் மருந்தகத்துடன், பெரும்பாலான வருகைகள் அதே நாளில் முடிகிறது: ஆலோசனை, பரிசோதனை, மருந்து — வீட்டிற்கு நேராக. நகரம் முழுவதும் ஓட்டம் இல்லை, எதிர்பாராத கட்டணம் இல்லை.",
      cta: "முழு கதையைப் படிக்கவும்",
    },
    generations: {
      eyebrow: "ஒவ்வொரு தலைமுறைக்கும் சுகாதாரம்",
      title: "உங்கள் முழு குடும்பத்திற்கும் ஒரே கிளினிக்",
      sub: "முதல் அழுகையிலிருந்து நரை முடி வரை — ஒவ்வொரு வாழ்க்கை நிலைக்கும் ஏற்ப எங்கள் கவனிப்பு மாறுகிறது.",
      items: [
        {
          title: "குழந்தைகள்",
          text: "உங்கள் சிறியவர்களுக்கு அன்பான முதல் பரிசோதனை, வளர்ச்சி கண்காணிப்பு மற்றும் தடுப்பூசி வழிகாட்டல்.",
        },
        {
          title: "குழந்தை பருவம்",
          text: "காய்ச்சல், இருமல், வயிற்று பிரச்சனைகள் — தமிழிலும் ஆங்கிலத்திலும் பொறுமையாக விளக்கம்.",
        },
        {
          title: "பெரியவர்கள்",
          text: "அன்றாட நோய்கள், இரத்த அழுத்தம், தைராய்டு — உங்கள் பணி நேரத்திற்கு ஏற்ப கவனிப்பு.",
        },
        {
          title: "மூத்த குடிமக்கள்",
          text: "நீரிழிவு மற்றும் இரத்த அழுத்த நீண்டகால மேலாண்மை, அவசரப்படாத மறுஆய்வுகளுடன்.",
        },
      ],
    },
    services: {
      eyebrow: "மருத்துவ சேவைகள்",
      title: "அன்றாட நோய்களுக்கும் நீண்டகால நோய்களுக்கும்",
      sub: "குடும்பங்கள் எதிர்கொள்ளும் முக்கிய உடல்நல பிரச்சனைகளுக்கு மருத்துவர் தலைமையிலான கவனிப்பு — லேப் பரிசோதனைகளும் மருந்துகளும் இதே இடத்தில்.",
      items: [
        {
          title: "பொதுவான நோய்கள்",
          text: "காய்ச்சல், இருமல், சளி, தொற்றுக்கள், உடல்வலி — தாமதமின்றி கண்டறிந்து சிகிச்சை.",
        },
        {
          title: "நீரிழிவு கவனிப்பு",
          text: "சர்க்கரை கண்காணிப்பு, எங்கள் லேபில் HbA1c பரிசோதனை, மருந்து மறுஆய்வு, உங்கள் மொழியில் உணவு ஆலோசனை.",
        },
        {
          title: "நாள்பட்ட நோய்கள்",
          text: "இரத்த அழுத்தம், தைராய்டு, கொலஸ்ட்ரால், ஆஸ்துமா — வாழ்க்கையுடன் இணைந்த நீண்டகால மேலாண்மை.",
        },
        {
          title: "தடுப்பு உடல்நல பரிசோதனை",
          text: "பிரச்சனைகள் பெரிதாகும் முன்பே கண்டறிய முழு உடல் பரிசோதனை தொகுப்புகள்.",
        },
      ],
      cta: "அனைத்து சேவைகளையும் பார்க்க",
    },
    why: {
      eyebrow: "G7ஐ ஏன் தேர்வு செய்ய வேண்டும்",
      title: "மனிதர்களை முதலில் வைக்கும் சுகாதாரம்",
      items: [
        {
          title: "எப்போதும் மலிவானது",
          text: "நேர்மையான ஆலோசனை கட்டணம், எங்கள் மருந்தகத்தில் மருந்து தள்ளுபடி — உங்கள் செலவை மதிக்கும் கவனிப்பு.",
        },
        {
          title: "அன்பான மருத்துவர்கள்",
          text: "உங்கள் கேள்விகளுக்கு தமிழிலும் ஆங்கிலத்திலும் தெளிவான பதில் — அவசரப்படுத்தி அனுப்ப மாட்டோம்.",
        },
        {
          title: "நோயாளி மைய கவனிப்பு",
          text: "உங்கள் வரலாறு, குடும்பம், அன்றாட வாழ்க்கை — அறிக்கைகள் மட்டுமல்ல, உண்மையான வாழ்க்கையை மையமாகக் கொண்ட சிகிச்சை.",
        },
        {
          title: "ஒரே வருகையில் அனைத்தும்",
          text: "ஆலோசனை, லேப் பரிசோதனை, மருந்தகம் — ஒரே கூரையின் கீழ், பெரும்பாலான வருகைகள் அன்றே முடியும்.",
        },
      ],
    },
    doctors: {
      eyebrow: "எங்கள் குழு",
      title: "சரிபார்க்கப்பட்ட தகுதிகளுடன் மருத்துவர் தலைமை கவனிப்பு",
      sub: "G7 கிளினிக் ஒரு பொது மருத்துவர் நடத்தும் நடைமுறை. சரிபார்க்கப்பட்ட பின்னரே மருத்துவர் விவரங்களை வெளியிடுகிறோம் — தகுதிகள் குறித்து நேரடியாக கேட்கலாம் அல்லது எப்போதும் அழைக்கலாம்.",
      cta: "எங்கள் குழுவை சந்திக்கவும்",
    },
    testimonials: {
      eyebrow: "நோயாளிகளின் குரல்",
      title: "நோயாளிகள் எங்களைப் பற்றி கூறுவது",
      sub: "125 கூகுள் விமர்சனங்களில் 5க்கு 4.8 — குடும்பங்கள் மிகவும் பாராட்டுவது இதோ.",
      quotes: [
        {
          text: "மருத்துவர் பொறுமையாக கேட்டு, தமிழில் தெளிவாக விளக்குகிறார். என் பெற்றோரின் நீரிழிவும் இரத்த அழுத்தமும் இப்போது கட்டுப்பாட்டில் உள்ளது.",
          name: "தொடர் வருகை குடும்பம்",
          detail: "சரவணம்பட்டி",
        },
        {
          text: "ஒரே வருகையில் ஆலோசனை, இரத்த பரிசோதனை, மருந்துகள் — கட்டணமும் மிகக் குறைவு. ஒரு கிளினிக் இப்படித்தான் இருக்க வேண்டும்.",
          name: "ஒரு பெற்றோர்",
          detail: "சூன்னாம்பாளையம்",
        },
        {
          text: "இரவு காய்ச்சலுடன் மகளை அழைத்து வந்தேன். மாலை நேர இயங்கும் நேரம் பணிபுரியும் குடும்பங்களுக்கு பெரும் வரப்பிரசாதம்.",
          name: "பணிபுரியும் தாய்",
          detail: "கோயம்புத்தூர்",
        },
      ],
    },
    gallery: {
      eyebrow: "G7 கிளினிக்கின் உள்ளே",
      title: "குணமடைய உதவும் அமைதியான இடம்",
      sub: "ஒளியூட்டப்பட்ட பரிசோதனை அறைகள், அமைதியான காத்திருப்பு பகுதி, அடுத்த கட்டத்தில் மருந்தகம்.",
    },
    location: {
      eyebrow: "வருகை தாருங்கள்",
      title: "உங்கள் அடுத்த தெருவிலேயே நாங்கள்",
      addressLabel: "முகவரி",
      phoneLabel: "தொலைபேசி",
      emailLabel: "மின்னஞ்சல்",
      hoursLabel: "ஆலோசனை நேரம்",
      daysLabel: "நாட்கள்",
    },
    cta: {
      title: "உங்கள் குடும்பத்தின் உடல்நலம் அவசரப்படாத கவனிப்பை தகுதி செய்கிறது",
      sub: "வாட்ஸ்அப்பில் செய்தி அனுப்பி பதிவு செய்யுங்கள், அல்லது கிளினிக் நேரத்தில் நேரடியாக வாருங்கள்.",
    },
  },
  footer: {
    tagline: "சரவணம்பட்டியின் மையத்தில், ஒவ்வொரு தலைமுறைக்கும் சுகாதாரம்.",
    quickLinks: "விரைவு இணைப்புகள்",
    contact: "தொடர்பு",
    hours: "ஆலோசனை நேரம்",
    rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    disclaimer:
      "இந்த இணையதளத்தின் தகவல்கள் பொது விழிப்புணர்வுக்காக மட்டுமே; மருத்துவ ஆலோசனைக்கு மாற்றாகாது.",
  },
  aboutPage: {
    heroTitle: "ஒரு வருகை, ஒரு குடும்பம் — கோயம்புத்தூரை கவனிக்கிறோம்",
    heroSub: "சூன்னாம்பாளையம், சரவணம்பட்டியில் G7 கிளினிக்கின் கதை, தத்துவம் மற்றும் மக்கள்.",
    storyTitle: "எங்கள் கதை",
    story: [
      "நம்பகமான சுகாதாரம் வீட்டுக்கு அருகில் இருக்க வேண்டும் என்ற எளிய நோக்கத்துடன் சரவணம்பட்டியில் G7 கிளினிக் தனது கதவுகளைத் திறந்தது. கோயம்புத்தூரின் IT தாழவாரம் நம்மைச் சுற்றி வளர்ந்தபோது, இளம் குடும்பங்கள் குடியேறுவதைக் கண்டோம் — நீண்ட பணி நேரத்தை நிர்வகிக்கும் பெற்றோர், விரைவில் வளரும் குழந்தைகள், குடும்பத்தினருக்கு அருகில் வரும் பெரியவர்கள். மருத்துவமனை வரிசையில்லாமல், நகர மையக் கட்டணமில்லாமல், மூவருக்கும் சேவை செய்யும் கிளினிக் அவர்களுக்குத் தேவைப்பட்டது.",
      "அதனால் G7ஐ குடும்பத்தை மையமாகக் கொண்டு கட்டினோம். அன்றாட நோய்களையும் நாள்பட்ட நோய்களையும் சமமாக கவனிக்கும் பொது மருத்துவ நடைமுறை. அதே நாளில் பதிலளிக்கும் லேபரேட்டரி. நேர்மையான, தள்ளுபடி விலையுள்ள மருந்தகம். பள்ளி நேரத்தையும் அலுவலக மாற்ற நேரத்தையும் மதிக்கும் ஆலோசனை நேரம்.",
      "இன்று, சூன்னாம்பாளையம் மற்றும் சரவணம்பட்டி குடும்பங்கள் கூகுளில் 5க்கு 4.8 என மதிப்பிடுகிறார்கள் — அலங்கரிக்கப்பட்ட கட்டிடங்களுக்கல்ல, கவனமாகக் கேட்பதற்கும், தெளிவாக விளக்குவதற்கும், மென்மையாக சிகிச்சையளிப்பதற்குமே.",
    ],
    philosophyTitle: "எங்கள் தத்துவம்",
    philosophy: [
      {
        title: "முதலில் கேளுங்கள்",
        text: "ஒவ்வொரு ஆலோசனையும் கேட்பதிலிருந்து தொடங்குகிறது — உங்கள் அறிகுறிகள், கவலைகள், குடும்ப வரலாறு. புரிந்துகொண்ட பிறகே கண்டறிதல்.",
      },
      {
        title: "நேர்மையாக சிகிச்சை",
        text: "தேவையானதை மட்டுமே பரிந்துரைத்து, ஏன் என்று விளக்கி, கட்டணத்தை உயர்த்த மாட்டோம். நம்பிக்கையே நமது முக்கிய மருந்து.",
      },
      {
        title: "தொடர்ந்து கவனிப்பு",
        text: "நாள்பட்ட நோய்களுக்கு மருந்துச் சீட்டு மட்டும் போதாது. நாங்கள் பின்தொடர்கிறோம், சரிசெய்கிறோம், நீண்டகாலம் உடனிருக்கிறோம்.",
      },
    ],
    offerTitle: "இங்கே நீங்கள் காண்பவை",
    offerItems: [
      { title: "பொது மருத்துவ ஆலோசனை", text: "எல்லா வயதினருக்கும், வாரத்தின் ஒவ்வொரு நாளும்." },
      { title: "உள்ளூர் லேபரேட்டரி", text: "இரத்தம், சர்க்கரை, தைராய்டு பரிசோதனைகள் — விரைவான அறிக்கைகள்." },
      { title: "இணைந்த மருந்தகம்", text: "தள்ளுபடி விலையில் உண்மையான மருந்துகள், ஆலோசனை அறைக்கு அடுத்து." },
      { title: "உடல்நல பரிசோதனை தொகுப்புகள்", text: "வயது மற்றும் ஆபத்துக்கு ஏற்ப தடுப்பு பரிசோதனைகள்." },
    ],
    hoursTitle: "வந்து பாருங்கள்",
  },
  doctorsPage: {
    heroTitle: "எங்கள் கவனிப்பு குழு",
    heroSub: "அனுபவமிக்க, சரிபார்க்கப்பட்ட, உண்மையாக அக்கறை கொள்ளும் மக்கள் — G7ன் பின்னணியில்.",
    intro:
      "G7 கிளினிக் மருத்துவர் தலைமையிலான பொது மருத்துவ நடைமுறை. எங்கள் மருத்துவர்கள் பதிவுசெய்யப்பட்ட மருத்துவ பயிற்சியாளர்கள்; ஒவ்வொரு மருத்துவரின் பெயரையும் தகுதிகளையும் சரிபார்த்த பின்னரே வெளியிடுகிறோம் — உங்கள் நம்பிக்கை தகவல்களின் மீது நிற்க வேண்டும், விளம்பரங்களின் மீது அல்ல.",
    rolesTitle: "G7இல் நீங்கள் சந்திப்பவர்கள்",
    roles: [
      {
        title: "பொது மருத்துவ ஆலோசகர்",
        text: "அன்றாட நோய்கள், நீரிழிவு, இரத்த அழுத்தம், தைராய்டு, தடுப்பு கவனிப்பு — எல்லா வயதினருக்கும், தமிழிலும் ஆங்கிலத்திலும், அவசரப்படாத ஆலோசனை.",
      },
      {
        title: "லேபரேட்டரி குழு",
        text: "பயிற்சி பெற்ற தொழில்நுட்பக் குழு எங்கள் லேபை நடத்துகிறது — இரத்த அளவுகள், சர்க்கரை, தைராய்டு; பெரும்பாலான பரிசோதனைகளுக்கு அதே நாள் அறிக்கை.",
      },
      {
        title: "மருந்தக குழு",
        text: "எங்கள் மருந்தகம் தள்ளுபடி விலையில் உண்மையான மருந்துகளை வழங்குகிறது; கிளம்புவதற்கு முன் உங்கள் மருந்துச் சீட்டை விளக்குகிறது.",
      },
    ],
    noteTitle: "மருத்துவர் விவரங்கள் புதுப்பிக்கப்படுகின்றன",
    noteText:
      "சரிபார்ப்புக்குப் பிறகே மருத்துவரின் பெயர், தகுதிகள், புகைப்படங்களை வெளியிடுகிறோம். தற்போதைய ஆலோசனை அட்டவணைக்கு கிளினிக்கை அழைக்கவும் அல்லது வாட்ஸ்அப்பில் தொடர்பு கொள்ளவும் — யார் எப்போது ஆலோசிக்கிறார்கள் என்று மகிழ்ச்சியுடன் தெரிவிப்போம்.",
    ctaTitle: "நேரடியாக கேளுங்கள்",
    ctaText:
      "எப்போதும் அழைக்கலாம் அல்லது வாட்ஸ்அப் செய்யலாம் — யார் ஆலோசிக்கிறார்கள், நேரம் என்ன, வருகைக்கு முன் தெரிய வேண்டியவை என்ன — அனைத்தும் பகிர்வோம்.",
  },
  servicesPage: {
    heroTitle: "G7 கிளினிக் சேவைகள்",
    heroSub: "உள்ளூர் லேப் மற்றும் மருந்தகத்துடன் — உங்கள் குடும்பத்தின் அன்றாட உடல்நலத்திற்கு மருத்துவர் தலைமை கவனிப்பு.",
    itemsTitle: "நாங்கள் சிகிச்சையளிப்பதும் மேலாண்மை செய்வதும்",
    items: [
      {
        title: "பொதுவான நோய்கள்",
        text: "அழைக்காமல் வரும் காய்ச்சல், காய்ச்சல் தொடர்பான நோய்கள் — விரைவில் சிகிச்சையளித்து வாழ்க்கையை இயல்பாக்குகிறோம்.",
        points: [
          "காய்ச்சல், இருமல், சளி, தொண்டை வலி",
          "வைரஸ் தொற்றுகள் மற்றும் பருவகால காய்ச்சல்",
          "வயிற்று வலி, வாந்தி, வயிற்றுப்போக்கு",
          "தோல் ஒவ்வாமை மற்றும் சிறு தொற்றுக்கள்",
          "தலைவலி மற்றும் உடல்வலி",
        ],
      },
      {
        title: "நீரிழிவு கவனிப்பு",
        text: "முதல் கண்டறிதலிலிருந்து நீண்டகால சர்க்கரை கட்டுப்பாடு வரை — நிலையான, நடைமுறையான மேலாண்மை.",
        points: [
          "எங்கள் லேபில் விரத சர்க்கரை மற்றும் HbA1c பரிசோதனை",
          "மருந்து திட்டமிடல் மற்றும் அளவு மறுஆய்வு",
          "தமிழிலும் ஆங்கிலத்திலும் உணவு ஆலோசனை",
          "கால், கண், சிறுநீரக சிக்கல் பரிசோதனை",
          "வாட்ஸ்அப்பில் பின்தொடர்தல் நினைவூட்டல்",
        ],
      },
      {
        title: "நாள்பட்ட நோய் மேலாண்மை",
        text: "நாள்பட்ட நோய்களுக்கு நீண்டகால துணை தேவை — உங்கள் உண்மையான வாழ்க்கையை மையமாகக் கொண்டு திட்டமிடுகிறோம்.",
        points: [
          "இரத்த அழுத்த கண்காணிப்பு மற்றும் கட்டுப்பாடு",
          "தைராய்டு பிரச்சனைகள் மற்றும் ஹார்மோன் பரிசோதனை",
          "கொலஸ்ட்ரால் மற்றும் இதய ஆபத்து மேலாண்மை",
          "ஆஸ்துமா மற்றும் மூச்சுக்கோளாறு",
          "மூட்டு வலி மற்றும் மூட்டுவலிப்பு கவனிப்பு",
        ],
      },
      {
        title: "தடுப்பு உடல்நல பரிசோதனை",
        text: "சிறியதாக இருக்கும்போதே பிரச்சனைகளைக் கண்டறியுங்கள் — வயதுக்கு ஏற்ப, தெளிவான நேர்மையான அறிக்கைகளுடன்.",
        points: [
          "முழு உடல் பரிசோதனை தொகுப்புகள்",
          "பெரியவர்களுக்கான ஆண்டு உடல்நல பரிசோதனை",
          "மூத்த குடிமக்களுக்கான நல பரிசோதனை",
          "வேலைக்கு முந்தைய மற்றும் பள்ளி உடல்தகுதி சோதனை",
          "உங்கள் அறிக்கைகளின் அடிப்படையில் தனிப்பயன் ஆலோசனை",
        ],
      },
    ],
    supportTitle: "வருகைகளை எளிதாக்கும் ஆதரவு",
    support: [
      {
        title: "உள்ளூர் லேபரேட்டரி",
        text: "இரத்த அளவுகள், சர்க்கரை, தைராய்டு, கல்லீரல், சிறுநீரக பரிசோதனைகள் — பெரும்பாலான அறிக்கைகள் அதே நாளில், இரண்டாம் வருகை தேவையில்லை.",
      },
      {
        title: "இணைந்த மருந்தகம்",
        text: "உண்மையான, நாள் முடியாத மருந்துகள், தள்ளுபடி விலையில். கிளம்புவதற்கு முன் உங்கள் மருந்துச் சீட்டை விளக்குகிறோம்.",
      },
    ],
    noteText:
      "எந்த பரிசோதனை அல்லது சிகிச்சை உங்களுக்கு பொருத்தமானது என்பதை ஆலோசனைக்குப் பிறகு மருத்துவரே முடிவு செய்வார். குறிப்பிட்ட சேவைகள் கிடைக்கும் தன்மையை பதிவு செய்யும்போது உறுதிப்படுத்திக் கொள்ளவும்.",
    faqTitle: "பொதுவான கேள்விகள்",
    faqs: [
      {
        q: "நேரம் பதிவு செய்ய வேண்டுமா, நேரடியாக வரலாமா?",
        a: "ஆலோசனை நேரத்தில் நேரடி வருகை அனுமதிக்கப்படுகிறது. வாட்ஸ்அப்பில் பதிவு செய்வது காத்திருப்பு நேரத்தை குறைக்கும்.",
      },
      {
        q: "ஆலோசனை நேரம் என்ன?",
        a: "காலை: காலை 9:30 முதல் மதியம் 1:30 வரை. மாலை: மாலை 5:00 முதல் இரவு 9:00 வரை. திங்கள் முதல் ஞாயிறு வரை திறந்திருக்கும்.",
      },
      {
        q: "மருந்தகமும் லேபும் ஒரே இடத்திலா?",
        a: "ஆம் — லேபரேட்டரியும் மருந்தகமும் கிளினிக்குடன் இணைக்கப்பட்டுள்ளன; பரிசோதனையும் மருந்தும் ஒரே வருகையில்.",
      },
      {
        q: "குழந்தைகள் மற்றும் பெரியவர்களுக்கு சிகிச்சை உண்டா?",
        a: "ஆம். குழந்தைகள் முதல் மூத்த குடிமக்கள் வரை, குடும்பத்தின் ஒவ்வொரு தலைமுறைக்கும் கவனிப்பு.",
      },
      {
        q: "மருத்துவர் எந்த மொழியில் பேசுவார்?",
        a: "தமிழ் மற்றும் ஆங்கிலம் இரண்டிலும் ஆலோசனை கிடைக்கும் — உங்களுக்கு வசதியானதை தேர்வு செய்யுங்கள்.",
      },
    ],
  },
  contactPage: {
    heroTitle: "ஒரு வருகையை பதிவு செய்யுங்கள்",
    heroSub: "வாட்ஸ்அப்பில் செய்தி அனுப்பவும், நேரடியாக அழைக்கவும், அல்லது கீழே வேண்டுகோள் அனுப்பவும் — விரைவில் உறுதிப்படுத்துவோம்.",
    formTitle: "சந்திப்பு வேண்டுகோள்",
    formSub: "இதை நிரப்பவும் — உங்கள் விவரங்களுடன் வாட்ஸ்அப் திறக்கும்.",
    name: "உங்கள் பெயர்",
    phone: "தொலைபேசி எண்",
    date: "விருப்பமான தேதி",
    time: "விருப்பமான நேரம்",
    reason: "வருகைக்கான காரணம்",
    reasonPlaceholder: "எ.கா. 2 நாட்களாக காய்ச்சல் / நீரிழிவு மறுஆய்வு",
    submit: "வாட்ஸ்அப்பில் அனுப்பவும்",
    morning: "காலை · 9:30 – 1:30",
    evening: "மாலை · 5:00 – 9:00",
    infoTitle: "கிளினிக் விவரங்கள்",
    callTitle: "பேச விரும்பினால்?",
    callText: "ஆலோசனை நேரத்தில் அழைக்கவும் — எங்கள் முன்னணி அலுவலகம் உங்கள் வருகையை திட்டமிட உதவும்.",
    directionsTitle: "இங்கு வருவது எப்படி",
    directionsText:
      "டேங்க் ஸ்ட்ரீட், ஆத்திப்பாளையம் சந்திப்பு, சூன்னாம்பாளையத்தில் நாங்கள் — சரவணம்பட்டி IT தாழவாரத்திலிருந்து சில நிமிடங்கள், அருகில் பார்க்கிங்.",
  },
  form: {
    waIntro: "வணக்கம் G7 கிளினிக்! ஒரு சந்திப்பு பதிவு செய்ய விரும்புகிறேன்.",
    waName: "பெயர்",
    waPhone: "தொலைபேசி",
    waDate: "விருப்பமான தேதி",
    waTime: "விருப்பமான நேரம்",
    waReason: "காரணம்",
  },
};

/* eslint-enable prettier/prettier */

interface LanguageState {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const LanguageContext = createContext<LanguageState>({
  lang: "en",
  setLang: () => {},
  t: en,
});

const STORAGE_KEY = "g7-clinic-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ta" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "ta" ? "ta" : "en";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: lang === "ta" ? ta : en }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
