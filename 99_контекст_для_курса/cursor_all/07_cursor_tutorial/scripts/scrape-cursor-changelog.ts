/**
 * Scrape Cursor Changelog
 * 
 * Fetches latest updates from cursor.com/changelog
 * Run with: npx tsx scripts/scrape-cursor-changelog.ts
 */

import * as https from 'https';
import * as fs from 'fs';
import * as path from 'path';

interface ChangelogEntry {
  content: string;
  metadata: {
    source: 'changelog';
    title: string;
    url: string;
    category: 'changelog';
    version: string;
    quality_score: number;
    tags: string[];
    author: string;
    date: string;
  };
}

async function fetchChangelog(): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get('https://cursor.com/changelog', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parseChangelog(html: string): ChangelogEntry[] {
  const entries: ChangelogEntry[] = [];
  
  // Extract version sections (e.g., "1.7 Sep 29, 2025")
  const versionRegex = /(\d+\.\d+(?:\.\d+)?)\s+([A-Za-z]{3}\s+\d{1,2},\s+\d{4})/g;
  let match;
  
  while ((match = versionRegex.exec(html)) !== null) {
    const version = match[1];
    const date = match[2];
    
    // Extract content after this version (until next version or end)
    const startIndex = match.index;
    const nextMatch = versionRegex.exec(html);
    const endIndex = nextMatch ? nextMatch.index : html.length;
    versionRegex.lastIndex = nextMatch ? nextMatch.index : html.length;
    
    const sectionHTML = html.slice(startIndex, endIndex);
    
    // Remove HTML tags, keep text
    const text = sectionHTML
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    
    if (text.length > 100) { // Only include substantial entries
      entries.push({
        content: text,
        metadata: {
          source: 'changelog',
          title: `Cursor ${version} - What's New`,
          url: 'https://cursor.com/changelog',
          category: 'changelog',
          version,
          quality_score: 10, // Official changelog = highest quality
          tags: ['changelog', `v${version}`, 'updates', 'features'],
          author: 'official',
          date: new Date(date).toISOString(),
        },
      });
    }
  }
  
  return entries;
}

async function scrapeChangelog() {
  console.log('🔍 Scraping Cursor changelog...\n');
  
  try {
    const html = await fetchChangelog();
    const entries = parseChangelog(html);
    
    console.log(`✅ Found ${entries.length} changelog entries\n`);
    
    // Save to JSON
    const outputPath = path.join(process.cwd(), 'indexed-changelog.json');
    fs.writeFileSync(outputPath, JSON.stringify(entries, null, 2));
    
    console.log(`📦 Saved to: ${outputPath}\n`);
    
    // Show preview
    console.log('Preview of latest entry:');
    if (entries[0]) {
      console.log(`  Version: ${entries[0].metadata.version}`);
      console.log(`  Date: ${new Date(entries[0].metadata.date).toLocaleDateString()}`);
      console.log(`  Content: ${entries[0].content.slice(0, 150)}...\n`);
    }
    
    console.log('📌 Next steps:');
    console.log('   1. Review indexed-changelog.json');
    console.log('   2. Merge with indexed-tutorials.json');
    console.log('   3. Run: npm run db:seed\n');
    
    return entries;
    
  } catch (error: any) {
    console.error('❌ Failed to scrape changelog:', error.message);
    throw error;
  }
}

if (require.main === module) {
  scrapeChangelog()
    .then(() => {
      console.log('✨ Changelog scraping complete!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Scraping failed:', error);
      process.exit(1);
    });
}

export { scrapeChangelog };

