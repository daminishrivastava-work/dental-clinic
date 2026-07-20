const fs = require('fs');

function updateComponent(path, replaces) {
  let content = fs.readFileSync(path, 'utf-8');
  for (const r of replaces) {
    content = content.replace(r.from, r.to);
  }
  fs.writeFileSync(path, content, 'utf-8');
}

updateComponent('components/sections/contact/ContactContent.tsx', [
  {
    from: '{loc[language as "en" | "hi"]}',
    to: '<span dangerouslySetInnerHTML={{ __html: loc[language as "en" | "hi"] }} />'
  }
]);

console.log('Updated ContactContent.tsx');
