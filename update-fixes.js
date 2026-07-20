const fs = require('fs');

let translations = fs.readFileSync('constants/translations.ts', 'utf-8');

// 1. Phone number fix
translations = translations.replace(/phoneDoctor:\s*".*?:\s*\+91\s*9131022272"/g, function(match) {
  if (match.includes("Doctor")) {
    return 'phoneDoctor: "Reception: +91 9301957509"';
  } else {
    // Hindi version
    return 'phoneDoctor: "रिसेप्शन: +91 9301957509"';
  }
});

// Also replace the bare number if it exists anywhere else just in case, but let's be careful.
translations = translations.replace(/9131022272/g, '9301957509');

// 2. Hindi services item 6 (Free cancer treatment)
const oldHiServices = `      items: [
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

const newHiServices = `      items: [
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
          title: "<b>लंबे समय से मुंह का न खुलना व छालों का इलाज</b>",
          description: "",
          highlight: "उपचार",
        },
        {
          id: "free-cancer",
          title: "<b>कैंसर मरीजों के पात्र हितग्राहियों को निःशुल्क इलाज</b>",
          description: "सरकारी योजनाओं के तहत।",
          highlight: "Care",
        }
      ],`;

translations = translations.replace(oldHiServices, newHiServices);

fs.writeFileSync('constants/translations.ts', translations, 'utf-8');
console.log('updated translations.ts');

// 3. Fix ContactContent.tsx nearbyLocalities bolding issue
let contactContent = fs.readFileSync('components/sections/contact/ContactContent.tsx', 'utf-8');
contactContent = contactContent.replace(
  '<span className="truncate">{language === "en" ? loc.en : loc.hi}</span>',
  '<span className="truncate" dangerouslySetInnerHTML={{ __html: language === "en" ? loc.en : loc.hi }} />'
);
fs.writeFileSync('components/sections/contact/ContactContent.tsx', contactContent, 'utf-8');
console.log('updated ContactContent.tsx');
