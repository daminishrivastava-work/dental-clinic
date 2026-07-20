const fs = require('fs');

const files = [
  'components/hero/HeroContent.tsx',
  'components/sections/contact/ContactContent.tsx',
  'components/sections/doctors/DoctorsContent.tsx',
  'components/sections/services/ServiceCard.tsx',
  'components/sections/services/ServicesHeader.tsx',
  'constants/translations.ts',
  'package.json'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  // Replaces the conflict marker block, keeping the HEAD content ($1)
  content = content.replace(/<<<<<<< HEAD\r?\n([\s\S]*?)=======\r?\n[\s\S]*?>>>>>>> [^\r\n]+\r?\n?/g, '$1');
  fs.writeFileSync(file, content, 'utf-8');
  console.log('Fixed ' + file);
}
