import { getSupabaseAdminClient, CursorContent } from './supabase-client';
import { generateEmbedding } from './embeddings';
import { getSearchConfig } from './config';

export interface SearchResult {
  id: string;
  content: string;
  metadata: CursorContent['metadata'];
  similarity: number;
}

export interface SearchOptions {
  matchThreshold?: number; // Minimum similarity score (0-1)
  matchCount?: number; // Number of results to return
  filter?: Partial<CursorContent['metadata']>; // Filter by metadata
}

/**
 * Search for similar content using vector similarity
 */
export async function searchSimilarContent(
  query: string,
  options: SearchOptions = {}
): Promise<SearchResult[]> {
  const {
    matchThreshold = 0.7,
    matchCount = 10,
    filter = {}
  } = options;

  try {
    // Get configuration for embedding dimensions
    const config = getSearchConfig();
    
    // Generate embedding for the query
    const queryEmbedding = await generateEmbedding(query, config.embeddingDimensions);

    // Build metadata filter
    let metadataFilter = {};
    if (filter.source) metadataFilter = { ...metadataFilter, source: filter.source };
    if (filter.version) metadataFilter = { ...metadataFilter, version: filter.version };
    if (filter.category) metadataFilter = { ...metadataFilter, category: filter.category };

    // Search using Supabase's vector similarity function
    const supabaseAdmin = getSupabaseAdminClient();
    const { data, error } = await supabaseAdmin.rpc('search_cursor_content', {
      query_embedding: queryEmbedding,
      match_threshold: matchThreshold,
      match_count: matchCount
    });

    if (error) {
      console.error('Vector search error:', error);
      throw error;
    }

    return data.map((row: any) => ({
      id: row.id,
      content: row.content,
      metadata: row.metadata,
      similarity: row.similarity
    }));
  } catch (error) {
    console.error('Error searching content:', error);
    throw new Error('Failed to search content');
  }
}

/**
 * Insert content with embedding into the database
 */
export async function insertContent(
  content: string,
  metadata: CursorContent['metadata']
): Promise<void> {
  try {
    // Get configuration for embedding dimensions
    const config = getSearchConfig();
    
    // Generate embedding
    const embedding = await generateEmbedding(content, config.embeddingDimensions);

    // Insert into database
    const supabaseAdmin = getSupabaseAdminClient();
    const { error } = await supabaseAdmin
      .from('cursor_content')
      .insert({
        content,
        embedding,
        metadata,
      });

    if (error) throw error;
  } catch (error) {
    console.error('Error inserting content:', error);
    throw new Error('Failed to insert content');
  }
}

/**
 * Batch insert multiple content items
 */
export async function insertContentBatch(
  items: Array<{ content: string; metadata: CursorContent['metadata'] }>
): Promise<void> {
  try {
    // Get configuration for embedding dimensions
    const config = getSearchConfig();
    
    // Generate embeddings in batch (more efficient)
    const contents = items.map(item => item.content);
    const embeddings = await Promise.all(contents.map(c => generateEmbedding(c, config.embeddingDimensions)));

    // Prepare batch insert
    const rows = items.map((item, i) => ({
      content: item.content,
      embedding: embeddings[i],
      metadata: item.metadata,
    }));

    // Insert in chunks of 100 to avoid payload size limits
    const chunkSize = 100;
    for (let i = 0; i < rows.length; i += chunkSize) {
      const chunk = rows.slice(i, i + chunkSize);
      const supabaseAdmin = getSupabaseAdminClient();
    const { error } = await supabaseAdmin
        .from('cursor_content')
        .insert(chunk);

      if (error) throw error;
      
      console.log(`Inserted ${i + chunk.length}/${rows.length} items`);
    }
  } catch (error) {
    console.error('Error batch inserting content:', error);
    throw new Error('Failed to batch insert content');
  }
}

/**
 * Update content by ID
 */
export async function updateContent(
  id: string,
  content: string,
  metadata: CursorContent['metadata']
): Promise<void> {
  try {
    // Get configuration for embedding dimensions
    const config = getSearchConfig();
    
    const embedding = await generateEmbedding(content, config.embeddingDimensions);

    const supabaseAdmin = getSupabaseAdminClient();
    const { error } = await supabaseAdmin
      .from('cursor_content')
      .update({
        content,
        embedding,
        metadata,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);

    if (error) throw error;
  } catch (error) {
    console.error('Error updating content:', error);
    throw new Error('Failed to update content');
  }
}

/**
 * Delete content by ID
 */
export async function deleteContent(id: string): Promise<void> {
  try {
    const supabaseAdmin = getSupabaseAdminClient();
    const { error } = await supabaseAdmin
      .from('cursor_content')
      .delete()
      .eq('id', id);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting content:', error);
    throw new Error('Failed to delete content');
  }
}

/**
 * Delete all content from a specific source
 */
export async function deleteContentBySource(
  source: CursorContent['metadata']['source']
): Promise<void> {
  try {
    const supabaseAdmin = getSupabaseAdminClient();
    const { error } = await supabaseAdmin
      .from('cursor_content')
      .delete()
      .eq('metadata->>source', source);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting content by source:', error);
    throw new Error('Failed to delete content by source');
  }
}

/**
 * Get content count by source
 */
export async function getContentStats(): Promise<Record<string, number>> {
  try {
    const supabaseAdmin = getSupabaseAdminClient();
    const { data, error } = await supabaseAdmin
      .from('cursor_content')
      .select('metadata');

    if (error) throw error;

    const stats: Record<string, number> = {};
    data.forEach((row: any) => {
      const source = row.metadata.source;
      stats[source] = (stats[source] || 0) + 1;
    });

    return stats;
  } catch (error) {
    console.error('Error getting content stats:', error);
    return {};
  }
}

