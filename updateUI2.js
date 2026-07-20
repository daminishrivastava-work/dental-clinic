const fs = require('fs');

function updateComponent(path, replaces) {
  let content = fs.readFileSync(path, 'utf-8');
  for (const r of replaces) {
    content = content.replace(r.from, r.to);
  }
  fs.writeFileSync(path, content, 'utf-8');
}

updateComponent('components/sections/doctors/DoctorsContent.tsx', [
  {
    from: '{t.description}',
    to: '<span dangerouslySetInnerHTML={{ __html: t.description }} />'
  },
  {
    from: '{t.title}',
    to: '<span dangerouslySetInnerHTML={{ __html: t.title }} />'
  },
  {
    from: '{t.subtitle}',
    to: '<span dangerouslySetInnerHTML={{ __html: t.subtitle }} />'
  }
]);

console.log('Updated DoctorsContent.tsx');

updateComponent('components/sections/services/ServicesHeader.tsx', [
  {
    from: '{t.title}',
    to: '<span dangerouslySetInnerHTML={{ __html: t.title }} />'
  },
  {
    from: '{t.description}',
    to: '<span dangerouslySetInnerHTML={{ __html: t.description }} />'
  }
]);

console.log('Updated ServicesHeader.tsx');

updateComponent('components/sections/services/ServiceCard.tsx', [
  {
    from: '{service.title}',
    to: '<span dangerouslySetInnerHTML={{ __html: service.title }} />'
  }
]);

console.log('Updated ServiceCard.tsx');

// update localties in footer if needed, but we don't have to if they don't have HTML tags. Wait, I added <b> to localties!
// Let's check FooterLocality.tsx or something.
