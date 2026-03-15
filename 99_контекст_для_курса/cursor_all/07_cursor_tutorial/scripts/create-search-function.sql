-- Create the search function for vector similarity search
CREATE OR REPLACE FUNCTION search_cursor_content(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.5,
  match_count int DEFAULT 10
)
RETURNS TABLE (
  id text,
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
  WHERE 1 - (cursor_content.embedding <=> query_embedding) > match_threshold
  ORDER BY cursor_content.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS cursor_content_embedding_idx 
ON cursor_content USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Grant necessary permissions
GRANT EXECUTE ON FUNCTION search_cursor_content TO authenticated;
GRANT EXECUTE ON FUNCTION search_cursor_content TO service_role;
