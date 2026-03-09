/**
 * Index Tutorial Content for AI Search
 * 
 * This script extracts text content from all tutorial pages
 * and indexes them into the Supabase vector database.
 * 
 * Run with: npx tsx scripts/index-tutorials.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';

// Types for tutorial content
interface TutorialChunk {
  content: string;
  metadata: {
    source: 'tutorial';
    title: string;
    url: string;
    category: string;
    version: string;
    quality_score: number;
    tags: string[];
    author: string;
    date: string;
  };
}

/**
 * Extract text content from a TSX file
 */
function extractTextFromTSX(filePath: string): { title: string; content: string; category: string } {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract title from h1 or metadata
  const titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>/) || 
                     content.match(/title:\s*["']([^"']+)["']/);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'Untitled';
  
  // Determine category from path
  let category = 'general';
  if (filePath.includes('/basics/')) category = 'basics';
  else if (filePath.includes('/features/')) category = 'features';
  else if (filePath.includes('/advanced/')) category = 'advanced';
  else if (filePath.includes('/examples/')) category = 'examples';
  
  // Extract all text content (remove JSX/HTML tags, keep text)
  let textContent = content
    // Remove imports
    .replace(/import\s+.*?from\s+['"].*?['"];?\n/g, '')
    // Remove export statements
    .replace(/export\s+(default\s+)?function.*?\{/g, '')
    // Remove JSX tags but keep content
    .replace(/<[^>]+>/g, ' ')
    // Remove code blocks (keep content)
    .replace(/```[\s\S]*?```/g, (match) => {
      return match.replace(/```\w*\n?/g, '').trim();
    })
    // Clean up whitespace
    .replace(/\s+/g, ' ')
    .trim();
  
  return { title, content: textContent, category };
}

/**
 * Chunk text into smaller pieces for better search results
 */
function chunkText(text: string, maxChunkSize: number = 1000): string[] {
  const chunks: string[] = [];
  const sentences = text.split(/[.!?]+\s+/);
  
  let currentChunk = '';
  
  for (const sentence of sentences) {
    if ((currentChunk + sentence).length > maxChunkSize && currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
      currentChunk = sentence;
    } else {
      currentChunk += (currentChunk ? '. ' : '') + sentence;
    }
  }
  
  if (currentChunk.length > 0) {
    chunks.push(currentChunk.trim());
  }
  
  return chunks;
}

/**
 * Generate tags from content
 */
function generateTags(title: string, content: string, category: string): string[] {
  const tags: string[] = [];
  const text = (title + ' ' + content).toLowerCase();
  
  // Feature tags
  if (text.includes('tab') || text.includes('completion')) tags.push('tab-completion');
  if (text.includes('cmd+k') || text.includes('inline')) tags.push('cmd-k', 'inline-edit');
  if (text.includes('cmd+l') || text.includes('chat')) tags.push('ai-chat');
  if (text.includes('composer') || text.includes('cmd+i')) tags.push('composer');
  if (text.includes('@') || text.includes('symbol')) tags.push('context-symbols');
  if (text.includes('.cursorrules') || text.includes('rules')) tags.push('cursor-rules');
  if (text.includes('keyboard') || text.includes('shortcut')) tags.push('shortcuts');
  
  // Category tag
  tags.push(category);
  
  // Version tags
  if (text.includes('1.7')) tags.push('v1.7');
  if (text.includes('claude')) tags.push('claude');
  
  return [...new Set(tags)]; // Remove duplicates
}

/**
 * Main indexing function
 */
async function indexTutorials() {
  console.log('🔍 Finding tutorial files...\n');
  
  // Find all tutorial page files
  const tutorialDir = path.join(process.cwd(), 'src/app/tutorial');
  const files = glob.sync('**/page.tsx', { cwd: tutorialDir, absolute: true });
  
  console.log(`Found ${files.length} tutorial files\n`);
  
  const chunks: TutorialChunk[] = [];
  
  for (const file of files) {
    try {
      console.log(`Processing: ${path.relative(process.cwd(), file)}`);
      
      const { title, content, category } = extractTextFromTSX(file);
      
      // Generate URL from file path
      const relativePath = path.relative(tutorialDir, file);
      const url = '/tutorial/' + relativePath.replace(/\/page\.tsx$/, '').replace(/\\/g, '/');
      
      // Generate tags
      const tags = generateTags(title, content, category);
      
      // Chunk the content
      const textChunks = chunkText(content, 1000);
      
      // Create chunks with metadata
      textChunks.forEach((chunk, index) => {
        chunks.push({
          content: chunk,
          metadata: {
            source: 'tutorial',
            title: index === 0 ? title : `${title} (part ${index + 1})`,
            url,
            category,
            version: '1.7',
            quality_score: 10, // Official tutorial content = highest quality
            tags,
            author: 'official',
            date: new Date().toISOString(),
          },
        });
      });
      
      console.log(`  ✓ Extracted: "${title}" (${textChunks.length} chunks)`);
    } catch (error: any) {
      console.error(`  ✗ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n📦 Total chunks created: ${chunks.length}\n`);
  
  // Save to JSON file for inspection/import
  const outputPath = path.join(process.cwd(), 'indexed-tutorials.json');
  fs.writeFileSync(outputPath, JSON.stringify(chunks, null, 2));
  
  console.log(`✅ Saved to: ${outputPath}\n`);
  console.log('📌 Next steps:');
  console.log('   1. Review the JSON file to verify content extraction');
  console.log('   2. Run: npm run db:seed-tutorials (to upload to Supabase)');
  console.log('   3. Test search at: http://localhost:3000/search\n');
  
  return chunks;
}

// Run if called directly
if (require.main === module) {
  indexTutorials()
    .then(() => {
      console.log('✨ Indexing complete!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Indexing failed:', error);
      process.exit(1);
    });
}

export { indexTutorials };

