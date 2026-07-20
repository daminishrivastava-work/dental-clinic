const fs = require('fs');

const files = [
  'components/hero/DesktopHero.tsx',
  'components/hero/MobileHero.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace(/"10,000\+"/g, '"40,000+"');
  fs.writeFileSync(file, content, 'utf-8');
  console.log(`Updated ${file}`);
});
