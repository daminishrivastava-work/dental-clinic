const fs = require('fs');

let translations = fs.readFileSync('constants/translations.ts', 'utf-8');

// Replacements for English
translations = translations.replace(
  'title: "Archana Dental Clinic",',
  'title: "<b>Archana Dental Clinic & Implant Center, Umaria</b>",'
);
translations = translations.replace(
  'subtitle: "& Implant Centre",',
  'subtitle: "",'
);
translations = translations.replace(
  'description: "Experience world-class dental treatments by Dr. Anil Prajapati (BDS) with over 16 years of expertise. We are dedicated to providing state-of-the-art implantology and dental care in a comfortable environment.",',
  'description: "Experience world-class dental care with <b>Dr. Anil Prajapati (BDS)</b>, backed by <b>16+ years of clinical experience</b>. We are dedicated to providing advanced <b>Implantology</b> and <b>Orthodontic</b> dental care in a comfortable, patient-friendly environment.",'
);
translations = translations.replace(
  'ctaPrimary: "Book Appointment",',
  'ctaPrimary: "<b>Book an Appointment – Physical Consultation / Video Consultation (VC)</b>",'
);

translations = translations.replace(
  'title: "Dr. Anil Prajapati",',
  'title: "<b>Dr. Anil Prajapati</b>",'
);
translations = translations.replace(
  'subtitle: "BDS | 16 Years of Dental Excellence",',
  'subtitle: "<b>BDS | 16 Years of Dental Excellence</b>",'
);
translations = translations.replace(
  'description: "Dr. Anil Prajapati is a highly accomplished dental surgeon and implantologist based in Umaria. With a rich clinical history of 16 years, he has successfully delivered healthy smiles through meticulous patient-centric treatment and advanced digital diagnostics.",',
  'description: "Dr. Anil Prajapati is a highly skilled <b>Orthodontist</b> and <b>Implantologist</b> based in Umaria. With over 16 years of extensive clinical experience, he has helped <b>nearly half a million people</b> achieve healthier smiles through patient-centered care and advanced digital diagnostics.",'
);

translations = translations.replace(
  'title: "Comprehensive Dental Solutions",',
  'title: "Comprehensive Dental Care Solutions",'
);
translations = translations.replace(
  'description: "Our clinic is equipped with modern tools to perform advanced dental procedures with high precision and care.",',
  'description: "Our clinic is equipped with modern technology to perform advanced dental procedures with precision, safety, and compassionate care.",'
);

const enServicesOld = `      items: [
        {
          id: "rvg-xray",
          title: "RVG Digital X-ray",
          description: "Advanced low-radiation digital imaging for immediate and highly detailed diagnosis.",
          highlight: "Digital Imaging",
        },
        {
          id: "intraoral-scanner",
          title: "Digital Intraoral Scanner & Camera",
          description: "Precise 3D mouth visualization and high-definition photography of teeth structure.",
          highlight: "Advanced 3D",
        },
        {
          id: "dental-implants",
          title: "Dental Implants",
          description: "Permanent replacement of missing teeth using premium implants, fixed crowns, bridges, and dentures.",
          highlight: "Speciality",
        },
        {
          id: "rct",
          title: "Root Canal Treatment (RCT)",
          description: "Nerve treatments performed with advanced rotary Endomotor systems to save damaged teeth painlessly.",
          highlight: "Advanced Care",
        },
        {
          id: "orthodontic-braces",
          title: "Orthodontic Braces",
          description: "Professional alignment of crooked or misaligned teeth using high-quality modern wiring techniques.",
          highlight: "Aesthetics",
        },
        {
          id: "pyorrhea-periodontitis",
          title: "Pyorrhea & Gum Treatment",
          description: "Advanced gum care to stop bleeding, bad breath, continuous pus discharge, and save loose teeth.",
          highlight: "Gum Health",
        },
        {
          id: "dissimpaction",
          title: "Dissimpaction & Jaw Surgery",
          description: "Surgical removal of impacted, crooked, or wisdom teeth embedded deep within the jawbone.",
          highlight: "Surgical",
        },
        {
          id: "mandible-fracture",
          title: "Mandible Fracture Care",
          description: "Specialized clinical diagnosis and treatment/fixation for broken or fractured jawbones.",
          highlight: "Trauma Care",
        },
        {
          id: "composite-restoration",
          title: "Composite Restoration",
          description: "Natural tooth-colored fillings for decayed teeth cured using advanced laser light technology.",
          highlight: "Cosmetic",
        },
      ],`;

const enServicesNew = `      items: [
        {
          id: "rct",
          title: "<b>Endomotor-Assisted Root Canal Treatment (RCT)</b>",
          description: "",
          highlight: "Advanced Care",
        },
        {
          id: "braces",
          title: "<b>Aligners / Orthodontic Braces</b>",
          description: "",
          highlight: "Aesthetics",
        },
        {
          id: "cyst",
          title: "<b>Cyst & Tumor Surgery</b>",
          description: "Minor and major surgical procedures for cysts and tumors affecting the tooth roots, gums, tongue, lips, and cheeks.",
          highlight: "Surgical",
        },
        {
          id: "cancer-detection",
          title: "<b>Early Detection of Oral Cancer</b>",
          description: "",
          highlight: "Diagnosis",
        },
        {
          id: "mouth-opening",
          title: "<b>Treatment for Long-Standing Restricted Mouth Opening, Chronic Mouth Ulcers, and Pre-Cancerous Oral Conditions</b>",
          description: "",
          highlight: "Treatment",
        },
        {
          id: "free-cancer",
          title: "<b>Free Treatment for Eligible Cancer Patients</b>",
          description: "Under applicable government welfare schemes.",
          highlight: "Care",
        }
      ],`;

translations = translations.replace(enServicesOld, enServicesNew);

// Replacements for Hindi
translations = translations.replace(
  'title: "अर्चना डेंटल क्लीनिक",',
  'title: "अर्चना डेंटल क्लीनिक & इंप्लांट सेंटर <b>उमरिया</b>",'
);
translations = translations.replace(
  'subtitle: "& इंप्लांट सेंटर",',
  'subtitle: "",'
);
translations = translations.replace(
  'description: "16 से अधिक वर्षों के अनुभव के साथ डॉ. अनिल प्रजापति (BDS) द्वारा विश्व स्तरीय दंत चिकित्सा का अनुभव करें। हम एक आरामदायक वातावरण में अत्याधुनिक इंप्लांटोलॉजी और दंत चिकित्सा प्रदान करने के लिए समर्पित हैं।",',
  'description: "16 से अधिक वर्षों के अनुभव के साथ डॉ. अनिल प्रजापति (BDS) द्वारा विश्व स्तरीय दंत चिकित्सा का अनुभव करें। हम एक आरामदायक वातावरण में अत्याधुनिक इंप्लांटॉलॉजी और <b>ऑर्थोडोंटिक</b> दंत चिकित्सा प्रदान करने के लिए समर्पित हैं।",'
);
translations = translations.replace(
  'ctaPrimary: "अपॉइंटमेंट बुक करें",',
  'ctaPrimary: "<b>अपॉइंटमेंट बुक करें-फिजिकल/ वीसी</b>",'
);
translations = translations.replace(
  'description: "डॉ. अनिल प्रजापति उमरिया में स्थित एक अत्यंत कुशल दंत चिकित्सक और इम्प्लांटोलॉजिस्ट हैं। 16 वर्षों के समृद्ध नैदानिक इतिहास के साथ, उन्होंने सावधानीपूर्वक मरीज-केंद्रित उपचार और उन्नत डिजिटल डायग्नोस्टिक्स के माध्यम से हजारों लोगों को स्वस्थ मुस्कान दी है।",',
  'description: "डॉ. अनिल प्रजापति उमरिया में स्थित एक अत्यंत कुशल दंत चिकित्सक <b>ऑर्थोडोंटिक्स</b> और इम्प्लांटोलॉजिस्ट हैं। 16 वर्षों के समृद्ध नैदानिक इतिहास के साथ, उन्होंने सावधानी पूर्वक मरीज-केंद्रित उपचार और उन्नत डिजिटल डायग्नोस्टिक्स के माध्यम से <b>करीब आधे लाख</b> लोगों को स्वस्थ मुस्कान दी है।",'
);

const hiServicesOld = `      items: [
        {
          id: "rvg-xray",
          title: "RVG डिजिटल एक्स-रे",
          description: "त्वरित और अत्यधिक विस्तृत निदान के लिए उन्नत कम विकिरण वाली डिजिटल इमेजिंग।",
          highlight: "डिजिटल इमेजिंग",
        },
        {
          id: "intraoral-scanner",
          title: "डिजिटल इंट्राओरल स्कैनर और कैमरा",
          description: "दांतों की संरचना का सटीक 3D विज़ुअलाइज़ेशन और हाई-डेफिनिशन फोटोग्राफी।",
          highlight: "उन्नत 3D",
        },
        {
          id: "dental-implants",
          title: "डेंटल इंप्लांट (फिक्स दाँत कैप एवं ब्रिज)",
          description: "प्रीमियम इम्प्लांट्स, फिक्स क्राउन, ब्रिज और बत्तीसी के साथ टूटे या गायब दांतों का स्थायी प्रतिस्थापन।",
          highlight: "विशेषज्ञता",
        },
        {
          id: "rct",
          title: "रूट कैनाल ट्रीटमेंट (नसों का इलाज)",
          description: "अत्याधुनिक रोटरी एंडोमोटर सिस्टम का उपयोग करके नसों का दर्द रहित इलाज, जिससे दांतों को बचाया जाता है।",
          highlight: "उन्नत उपचार",
        },
        {
          id: "orthodontic-braces",
          title: "ऑर्थोडॉन्टिक ब्रेसेस (टेढ़े मेढ़े दाँतों को सीधा करना)",
          description: "आधुनिक वायरिंग तकनीकों द्वारा टेढ़े-मेढ़े या आड़े-तिरछे दांतों का सीधा व सुंदर संरेखण।",
          highlight: "सौंदर्यशास्त्र",
        },
        {
          id: "pyorrhea-periodontitis",
          title: "पायरिया का इलाज",
          description: "मसूड़ों से खून आना, बदबू, मवाद का लगातार बहना रोकना और हिलते दांतों को बचाने के लिए उन्नत मसूड़ों की देखभाल।",
          highlight: "मसूड़ों का स्वास्थ्य",
        },
        {
          id: "dissimpaction",
          title: "डिसइम्पैक्शन (आड़े-तिरछे दांतों की सर्जरी)",
          description: "जबड़े की हड्डी के भीतर गहरे फंसे हुए आड़े-तिरछे या अक्ल दाढ़ (विजडम टूथ) को सर्जरी द्वारा निकालना।",
          highlight: "सर्जिकल",
        },
        {
          id: "mandible-fracture",
          title: "मैंडिबल फ्रैक्चर (जबड़े की हड्डी का इलाज)",
          description: "जबड़े की टूटी हुई हड्डी के उपचार, संरेखण और फिक्सेशन के लिए विशेष नैदानिक प्रक्रियाएं।",
          highlight: "आघात देखभाल",
        },
        {
          id: "composite-restoration",
          title: "कम्पोजिट रेस्टोरेशन (टूथ कलर फिलिंग)",
          description: "कीड़े लगे दांतों में उन्नत लेज़र लाइट मशीनों द्वारा दांतों के प्राकृतिक रंग का कम्पोजिट मसाला भरना।",
          highlight: "कॉस्मेटिक",
        },
      ],`;

const hiServicesNew = `      items: [
        {
          id: "rct",
          title: "<b>एंडोमोटर</b> - रूट कैनाल ट्रीटमेंट",
          description: "",
          highlight: "उन्नत उपचार",
        },
        {
          id: "braces",
          title: "<b>अलाइनर/</b> ऑर्थोडोंटिक ब्रेसेस",
          description: "",
          highlight: "सौंदर्यशास्त्र",
        },
        {
          id: "cyst",
          title: "<b>सिस्ट/ ट्यूमर ( छोटी बड़ी गाँठो की सर्जरी)</b> - दाँतो की जड़ो में, मसूड़ों, जीभ, होंठ व गालों में छोटी बड़ी सर्जरी",
          description: "",
          highlight: "सर्जिकल",
        },
        {
          id: "cancer-detection",
          title: "<b>कैंसर की पूर्वावस्था में पहचान</b>",
          description: "",
          highlight: "निदान",
        },
        {
          id: "mouth-opening",
          title: "<b>लंबे समय से मुंह का न खुलना व छालों का इलाज एवं कैंसर मरीजों के पात्र हितग्राहियों को निःशुल्क इलाज</b>",
          description: "",
          highlight: "उपचार",
        }
      ],`;

translations = translations.replace(hiServicesOld, hiServicesNew);

// Update localities
const oldLocalities = `export const nearbyLocalities = [
  { id: 1, en: "Krishi Upaj Mandi", hi: "कृषि उपज मंडी" },
  { id: 2, en: "Chaupati", hi: "चौपाटी" },
  { id: 3, en: "Petrol Pump (near Dist Court)", hi: "पेट्रोल पंप (जिला न्यायालय के पास)" },
  { id: 4, en: "District Court Umaria", hi: "जिला न्यायालय उमरिया" },
  { id: 5, en: "Laxminarayan Mandir", hi: "लक्ष्मीनारायण मंदिर" },
  { id: 6, en: "Collectrate Colony Umaria", hi: "कलेक्ट्रेट कॉलोनी उमरिया" },
  { id: 7, en: "Naman Medical Store", hi: "नमन मेडिकल स्टोर" },
  { id: 8, en: "KGN Travels / Umaria Motors", hi: "के.जी.एन. ट्रेवल्स / उमरिया मोटर्स" },
  { id: 9, en: "Sony Tea Stall", hi: "सोनी टी स्टॉल" },
  { id: 10, en: "Fazilganj", hi: "फाजिलगंज" },
]`;

const newLocalities = `export const nearbyLocalities = [
  { id: 1, en: "SBI Kiosk Bank (Lalit)", hi: "<b>एसबीआई कियोस्क बैंक (ललित)</b>" },
  { id: 2, en: "Krishi Upaj Mandi (Agricultural Produce Market)", hi: "कृषि उपज मंडी" },
  { id: 3, en: "Chaupati", hi: "चौपाटी" },
  { id: 4, en: "Petrol Pump (Near District Court)", hi: "पेट्रोल पंप (जिला न्यायालय के पास)" },
  { id: 5, en: "District Court, Umaria", hi: "जिला न्यायालय उमरिया" },
  { id: 6, en: "Lakshmi Narayan Temple", hi: "लक्ष्मीनारायण मंदिर" },
  { id: 7, en: "Collectorate Colony, Umaria", hi: "कलेक्ट्रेट कॉलोनी उमरिया" },
  { id: 8, en: "Naman Medical Store", hi: "नमन मेडिकल स्टोर" },
  { id: 9, en: "KGN Travels / Umaria Motors", hi: "के.जी.एन. ट्रेवल्स / उमरिया मोटर्स" },
  { id: 10, en: "Sony Tea Stall", hi: "सोनी टी स्टॉल" },
  { id: 11, en: "Fazilganj", hi: "फजिलगंज" },
]`;

translations = translations.replace(oldLocalities, newLocalities);

fs.writeFileSync('constants/translations.ts', translations, 'utf-8');
console.log('updated translations.ts');
