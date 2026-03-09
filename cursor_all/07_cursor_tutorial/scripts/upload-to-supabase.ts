/**
 * Upload Indexed Content to Supabase
 * 
 * Reads indexed-tutorials.json and uploads to Supabase vector DB
 * 
 * Run with: npx tsx scripts/upload-to-supabase.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { insertContentBatch } from '../src/lib/search/vector-db';

async function uploadToSupabase() {
  console.log('📤 Uploading indexed content to Supabase...\n');
  
  // Read indexed content
  const indexedPath = path.join(process.cwd(), 'indexed-tutorials.json');
  
  if (!fs.existsSync(indexedPath)) {
    console.error('❌ indexed-tutorials.json not found!');
    console.log('   Run: npm run index:tutorials first\n');
    process.exit(1);
  }
  
  const chunks = JSON.parse(fs.readFileSync(indexedPath, 'utf-8'));
  
  console.log(`Found ${chunks.length} chunks to upload\n`);
  
  // Check environment variables
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('❌ Supabase environment variables not set!');
    console.log('   Make sure .env.local has:');
    console.log('   - NEXT_PUBLIC_SUPABASE_URL');
    console.log('   - SUPABASE_SERVICE_ROLE_KEY\n');
    process.exit(1);
  }
  
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ OPENAI_API_KEY not set!');
    console.log('   Required for generating embeddings\n');
    process.exit(1);
  }
  
  try {
    console.log('⏳ Generating embeddings and uploading...');
    console.log('   (This may take 1-2 minutes)\n');
    
    await insertContentBatch(chunks);
    
    console.log('\n✅ Upload complete!');
    console.log(`   Uploaded ${chunks.length} chunks to Supabase\n`);
    console.log('📊 Estimated costs:');
    console.log(`   Embeddings: ~$${(chunks.length * 0.00002).toFixed(4)}`);
    console.log(`   Storage: ~${(chunks.length * 0.02).toFixed(2)} MB\n`);
    console.log('🎉 Your AI search is ready!');
    console.log('   Test it at: http://localhost:3000/search\n');
    
  } catch (error: any) {
    console.error('\n❌ Upload failed:', error.message);
    console.log('\nTroubleshooting:');
    console.log('   1. Check that Supabase project is set up');
    console.log('   2. Run the schema: db/schema/search-schema.sql');
    console.log('   3. Verify API keys in .env.local');
    console.log('   4. Check Supabase logs for errors\n');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  uploadToSupabase();
}

export { uploadToSupabase };

