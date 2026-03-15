-- Migration script to convert database from 1536 to 512 dimensions
-- Run this in your Supabase SQL Editor

-- Step 1: Drop the existing search function
DROP FUNCTION IF EXISTS search_cursor_content(vector(1536), float, int, jsonb);

-- Step 2: Drop the existing similar content function  
DROP FUNCTION IF EXISTS get_similar_content(uuid, int);

-- Step 3: Drop the existing index
DROP INDEX IF EXISTS cursor_content_embedding_idx;

-- Step 4: Drop the new table if it exists (from previous run)
DROP TABLE IF EXISTS cursor_content_new;

-- Step 5: Create new table with 512 dimensions
CREATE TABLE cursor_content_new (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  embedding vector(512), -- 512 dimensions for speed
  metadata JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 6: Copy data from old table to new table
-- Note: We'll need to regenerate embeddings with 512 dimensions
-- For now, we'll copy the content and metadata, but skip the embeddings
INSERT INTO cursor_content_new (id, content, metadata, created_at, updated_at)
SELECT id, content, metadata, created_at, updated_at
FROM cursor_content;

-- Step 7: Drop the old table
DROP TABLE cursor_content;

-- Step 8: Rename new table to original name
ALTER TABLE cursor_content_new RENAME TO cursor_content;

-- Step 9: Create index with 512 dimensions
CREATE INDEX cursor_content_embedding_idx 
ON cursor_content 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Step 10: Create search function with 512 dimensions
CREATE OR REPLACE FUNCTION search_cursor_content(
  query_embedding vector(512),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 10,
  metadata_filter jsonb DEFAULT '{}'::jsonb
)
RETURNS TABLE (
  id uuid,
  content text,
  metadata jsonb,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    cursor_content.id,
    cursor_content.content,
    cursor_content.metadata,
    1 - (cursor_content.embedding <=> query_embedding) as similarity
  FROM cursor_content
  WHERE 
    -- Vector similarity filter
    1 - (cursor_content.embedding <=> query_embedding) > match_threshold
    -- Metadata filters (if provided)
    AND (
      metadata_filter = '{}'::jsonb 
      OR cursor_content.metadata @> metadata_filter
    )
  ORDER BY cursor_content.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Step 11: Create similar content function with 512 dimensions
CREATE OR REPLACE FUNCTION get_similar_content(
  content_id uuid,
  match_count int DEFAULT 5
)
RETURNS TABLE (
  id uuid,
  content text,
  metadata jsonb,
  similarity float
)
LANGUAGE plpgsql
AS $$
DECLARE
  query_embedding vector(512);
BEGIN
  -- Get the embedding of the source content
  SELECT embedding INTO query_embedding
  FROM cursor_content
  WHERE cursor_content.id = content_id;

  -- Find similar content
  RETURN QUERY
  SELECT
    cursor_content.id,
    cursor_content.content,
    cursor_content.metadata,
    1 - (cursor_content.embedding <=> query_embedding) as similarity
  FROM cursor_content
  WHERE cursor_content.id != content_id
  ORDER BY cursor_content.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Step 12: Verify the migration
SELECT 
  'Migration completed successfully' as status,
  COUNT(*) as content_count,
  'Content ready for 512-dimensional embeddings' as next_step
FROM cursor_content;
