#!/usr/bin/env node

/**
 * Script to regenerate embeddings with 512 dimensions
 * Run with: node scripts/regenerate-embeddings-512.js
 */

import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';

// Initialize clients
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const openaiKey = process.env.OPENAI_API_KEY;

if (!supabaseUrl || !supabaseKey || !openaiKey) {
  console.error('❌ Missing required environment variables');
  console.error('Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const openai = new OpenAI({ apiKey: openaiKey });

async function generateEmbedding(text, dimensions = 512) {
  try {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: text.slice(0, 8000),
      encoding_format: 'float',
      dimensions: dimensions,
    });
    return response.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
}

async function regenerateEmbeddings() {
  try {
    console.log('🔄 Starting embedding regeneration with 512 dimensions...');
    
    // Get all content without embeddings
    const { data: content, error: fetchError } = await supabase
      .from('cursor_content')
      .select('id, content')
      .is('embedding', null);
    
    if (fetchError) {
      throw new Error(`Failed to fetch content: ${fetchError.message}`);
    }
    
    if (!content || content.length === 0) {
      console.log('✅ No content found that needs embeddings');
      return;
    }
    
    console.log(`📊 Found ${content.length} content items to process`);
    
    // Process each item
    for (let i = 0; i < content.length; i++) {
      const item = content[i];
      console.log(`🔄 Processing ${i + 1}/${content.length}: ${item.id}`);
      
      try {
        // Generate 512-dimensional embedding
        const embedding = await generateEmbedding(item.content, 512);
        
        // Update the database
        const { error: updateError } = await supabase
          .from('cursor_content')
          .update({ embedding })
          .eq('id', item.id);
        
        if (updateError) {
          console.error(`❌ Failed to update ${item.id}:`, updateError.message);
        } else {
          console.log(`✅ Updated ${item.id} with 512-dimensional embedding`);
        }
        
        // Small delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.error(`❌ Error processing ${item.id}:`, error.message);
      }
    }
    
    console.log('🎉 Embedding regeneration completed!');
    
    // Verify the results
    const { data: verifyData, error: verifyError } = await supabase
      .from('cursor_content')
      .select('id, embedding')
      .not('embedding', 'is', null)
      .limit(1);
    
    if (verifyError) {
      console.error('❌ Verification failed:', verifyError.message);
    } else if (verifyData && verifyData.length > 0) {
      const embeddingLength = verifyData[0].embedding?.length || 0;
      console.log(`✅ Verification successful: Embeddings have ${embeddingLength} dimensions`);
    }
    
  } catch (error) {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  }
}

// Run the script
regenerateEmbeddings();
