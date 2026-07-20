const fs = require('fs');

let translations = fs.readFileSync('constants/translations.ts', 'utf-8');

// Replacements for English
translations = translations.replace(
  'title: "# <b>Archana Dental Clinic & Implant Center, Umaria</b>",',
  'title: "<b>Archana Dental Clinic & Implant Center, Umaria</b>",'
);
translations = translations.replace(
  'title: "# <b>Dr. Anil Prajapati</b>",',
  'title: "<b>Dr. Anil Prajapati</b>",'
);
translations = translations.replace(
  'title: "### Comprehensive Dental Care Solutions",',
  'title: "Comprehensive Dental Care Solutions",'
);

fs.writeFileSync('constants/translations.ts', translations, 'utf-8');
console.log('fixed titles');
