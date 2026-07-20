const fs = require('fs');

function replaceInFile(path, from, to) {
  let content = fs.readFileSync(path, 'utf-8');
  content = content.replace(from, to);
  fs.writeFileSync(path, content, 'utf-8');
}

// 1. Mobile layout header
replaceInFile(
  'components/navigation/mobile-drawer.tsx',
  'Archana Dental</span>',
  'Archana Dental Clinic</span>'
);

replaceInFile(
  'components/navigation/mobile-nav.tsx',
  'Archana Dental</span>',
  'Archana Dental Clinic</span>'
);

// 2. trustIndicators sequence
const newEnArray = '["16+ Years of Experience", "Fixed Dental Implants", "Intraoral 3D Scanner", "Aligners & Braces", "Digital X-Ray", "Root Canal Specialist"]';
const newHiArray = '["16+ वर्षों का अनुभव", "फिक्स डेंटल इम्प्लांट्स", "इंट्राओरल 3D स्कैनर", "अलाइनर और ब्रेसेस", "डिजिटल एक्स-रे", "रूट कैनाल स्पेशलिस्ट"]';

function updateIndicators(path) {
  let content = fs.readFileSync(path, 'utf-8');
  // We use regex to replace everything between language === "en" ? [ ... ] : [ ... ]
  // But wait, the ternary might be formatted across multiple lines.
  // We can just find the whole block.
  content = content.replace(
    /const trustIndicators = language === "en"[\s\S]*?\? \[[^\]]*\][\s\S]*?: \[[^\]]*\]/g,
    `const trustIndicators = language === "en"\n    ? ${newEnArray}\n    : ${newHiArray}`
  );
  fs.writeFileSync(path, content, 'utf-8');
}

updateIndicators('components/hero/DesktopHero.tsx');
updateIndicators('components/hero/MobileHero.tsx');

console.log("Updated header and indicators");
