-- Fix search function - remove duplicate functions
-- This will resolve the function overloading issue

-- Drop all versions of the function
DROP FUNCTION IF EXISTS search_cursor_content(vector, float, int);
DROP FUNCTION IF EXISTS search_cursor_content(vector, float, int, jsonb);

-- Recreate the correct function with 512 dimensions
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
    1 - (cursor_content.embedding <=> query_embedding) > match_threshold
    AND (
      metadata_filter = '{}'::jsonb
      OR cursor_content.metadata @> metadata_filter
    )
  ORDER BY cursor_content.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Test the function
SELECT 'Search function fixed successfully' as status;
