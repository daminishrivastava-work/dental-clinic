const fs = require('fs');

function removeBold(path) {
  let content = fs.readFileSync(path, 'utf-8');
  content = content.replace(/<b>/g, '');
  content = content.replace(/<\/b>/g, '');
  fs.writeFileSync(path, content, 'utf-8');
  console.log('Removed bold from ' + path);
}

removeBold('constants/translations.ts');
removeBold('components/hero/DesktopHero.tsx');
removeBold('components/hero/MobileHero.tsx');
