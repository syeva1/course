const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix apostrophes
  content = content.replace(/Let's/g, 'Let&apos;s');
  content = content.replace(/Don't/g, 'Don&apos;t');
  content = content.replace(/Can't/g, 'Can&apos;t');
  content = content.replace(/Won't/g, 'Won&apos;t');
  content = content.replace(/It's/g, 'It&apos;s');
  content = content.replace(/You're/g, 'You&apos;re');
  content = content.replace(/We're/g, 'We&apos;re');
  content = content.replace(/I'm/g, 'I&apos;m');
  content = content.replace(/I'll/g, 'I&apos;ll');
  content = content.replace(/I've/g, 'I&apos;ve');
  content = content.replace(/I'd/g, 'I&apos;d');
  content = content.replace(/doesn't/g, 'doesn&apos;t');
  content = content.replace(/isn't/g, 'isn&apos;t');
  content = content.replace(/aren't/g, 'aren&apos;t');
  content = content.replace(/wasn't/g, 'wasn&apos;t');
  content = content.replace(/weren't/g, 'weren&apos;t');
  content = content.replace(/hasn't/g, 'hasn&apos;t');
  content = content.replace(/haven't/g, 'haven&apos;t');
  content = content.replace(/hadn't/g, 'hadn&apos;t');
  content = content.replace(/won't/g, 'won&apos;t');
  content = content.replace(/wouldn't/g, 'wouldn&apos;t');
  content = content.replace(/shouldn't/g, 'shouldn&apos;t');
  content = content.replace(/couldn't/g, 'couldn&apos;t');
  content = content.replace(/mustn't/g, 'mustn&apos;t');
  content = content.replace(/needn't/g, 'needn&apos;t');
  content = content.replace(/daren't/g, 'daren&apos;t');
  content = content.replace(/mayn't/g, 'mayn&apos;t');
  content = content.replace(/shan't/g, 'shan&apos;t');
  content = content.replace(/oughtn't/g, 'oughtn&apos;t');
  content = content.replace(/mightn't/g, 'mightn&apos;t');
  content = content.replace(/needn't/g, 'needn&apos;t');
  content = content.replace(/daren't/g, 'daren&apos;t');
  content = content.replace(/mayn't/g, 'mayn&apos;t');
  content = content.replace(/shan't/g, 'shan&apos;t');
  content = content.replace(/oughtn't/g, 'oughtn&apos;t');
  content = content.replace(/mightn't/g, 'mightn&apos;t');
  
  // Fix quotes in JSX text content (but not in attributes)
  content = content.replace(/(<[^>]*>)([^<]*)"([^"]*)"([^<]*)(<\/[^>]*>)/g, '$1$2&quot;$3&quot;$4$5');
  
  // Fix JSX comments
  content = content.replace(/\/\/ ([^<]*)/g, '{/* $1 */}');
  
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
console.log('Fixed ESLint issues in all TSX files');
