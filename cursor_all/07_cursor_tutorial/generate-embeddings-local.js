// Local script to generate embeddings
const { createClient } = require('@supabase/supabase-js');
const OpenAI = require('openai');

// You'll need to set these environment variables locally
const supabaseUrl = 'https://akrdqcjdyupjtrlfjljt.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const openaiApiKey = process.env.OPENAI_API_KEY;

if (!supabaseServiceKey || !openaiApiKey) {
  console.error('❌ Please set SUPABASE_SERVICE_ROLE_KEY and OPENAI_API_KEY environment variables');
  console.error('Run: export SUPABASE_SERVICE_ROLE_KEY=your-key && export OPENAI_API_KEY=your-key');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

const openai = new OpenAI({
  apiKey: openaiApiKey,
});

async function generateEmbedding(text) {
  try {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: text,
    });
    
    return response.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
}

async function generateEmbeddingsForContent() {
  try {
    console.log('🚀 Starting embedding generation...');
    
    // Get all content without embeddings
    const { data: content, error: fetchError } = await supabase
      .from('cursor_content')
      .select('id, content')
      .is('embedding', null);
    
    if (fetchError) {
      console.error('❌ Error fetching content:', fetchError);
      return;
    }
    
    if (!content || content.length === 0) {
      console.log('✅ No content found that needs embeddings');
      return;
    }
    
    console.log(`📚 Found ${content.length} content items to process`);
    
    // Process each content item
    for (let i = 0; i < content.length; i++) {
      const item = content[i];
      console.log(`🔄 Processing item ${i + 1}/${content.length}: ${item.id}`);
      
      try {
        // Generate embedding
        const embedding = await generateEmbedding(item.content);
        
        // Update the database
        const { error: updateError } = await supabase
          .from('cursor_content')
          .update({ embedding })
          .eq('id', item.id);
        
        if (updateError) {
          console.error(`❌ Error updating item ${item.id}:`, updateError);
        } else {
          console.log(`✅ Updated item ${item.id}`);
        }
        
        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.error(`❌ Error processing item ${item.id}:`, error);
      }
    }
    
    console.log('🎉 Embedding generation complete!');
    
    // Verify the results
    const { data: updatedContent, error: verifyError } = await supabase
      .from('cursor_content')
      .select('id, content')
      .not('embedding', 'is', null);
    
    if (verifyError) {
      console.error('❌ Error verifying results:', verifyError);
    } else {
      console.log(`✅ ${updatedContent?.length || 0} items now have embeddings`);
    }
    
  } catch (error) {
    console.error('❌ Error in embedding generation:', error);
  }
}

// Run the script
generateEmbeddingsForContent();
