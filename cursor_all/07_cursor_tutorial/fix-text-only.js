const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Only fix apostrophes in text content between > and < (not in attributes)
  content = content.replace(/>([^<]*Let's[^<]*)</g, (match, text) => {
    return '>' + text.replace(/Let's/g, 'Let&apos;s') + '<';
  });
  
  content = content.replace(/>([^<]*Don't[^<]*)</g, (match, text) => {
    return '>' + text.replace(/Don't/g, 'Don&apos;t') + '<';
  });
  
  content = content.replace(/>([^<]*Can't[^<]*)</g, (match, text) => {
    return '>' + text.replace(/Can't/g, 'Can&apos;t') + '<';
  });
  
  content = content.replace(/>([^<]*Won't[^<]*)</g, (match, text) => {
    return '>' + text.replace(/Won't/g, 'Won&apos;t') + '<';
  });
  
  content = content.replace(/>([^<]*It's[^<]*)</g, (match, text) => {
    return '>' + text.replace(/It's/g, 'It&apos;s') + '<';
  });
  
  content = content.replace(/>([^<]*You're[^<]*)</g, (match, text) => {
    return '>' + text.replace(/You're/g, 'You&apos;re') + '<';
  });
  
  content = content.replace(/>([^<]*We're[^<]*)</g, (match, text) => {
    return '>' + text.replace(/We're/g, 'We&apos;re') + '<';
  });
  
  content = content.replace(/>([^<]*I'm[^<]*)</g, (match, text) => {
    return '>' + text.replace(/I'm/g, 'I&apos;m') + '<';
  });
  
  content = content.replace(/>([^<]*I'll[^<]*)</g, (match, text) => {
    return '>' + text.replace(/I'll/g, 'I&apos;ll') + '<';
  });
  
  content = content.replace(/>([^<]*I've[^<]*)</g, (match, text) => {
    return '>' + text.replace(/I've/g, 'I&apos;ve') + '<';
  });
  
  content = content.replace(/>([^<]*I'd[^<]*)</g, (match, text) => {
    return '>' + text.replace(/I'd/g, 'I&apos;d') + '<';
  });
  
  // Fix common contractions
  const contractions = [
    "doesn't", "isn't", "aren't", "wasn't", "weren't", "hasn't", "haven't", 
    "hadn't", "won't", "wouldn't", "shouldn't", "couldn't", "mustn't", 
    "needn't", "daren't", "mayn't", "shan't", "oughtn't", "mightn't"
  ];
  
  contractions.forEach(contraction => {
    const escaped = contraction.replace("'", "&apos;");
    content = content.replace(new RegExp(`>([^<]*${contraction}[^<]*)<`, 'g'), (match, text) => {
      return '>' + text.replace(new RegExp(contraction, 'g'), escaped) + '<';
    });
  });
  
  // Fix quotes in text content only (not in JSX attributes)
  content = content.replace(/>([^<]*"[^<]*)</g, (match, text) => {
    return '>' + text.replace(/"/g, '&quot;') + '<';
  });
  
  fs.writeFileSync(filePath, content);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx')) {
      fixFile(filePath);
    }
  }
}

walkDir('./src');
console.log('Fixed text content issues in all TSX files');
