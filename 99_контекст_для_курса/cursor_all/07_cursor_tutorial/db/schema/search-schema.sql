-- ============================================
-- Cursor Tutorial - AI Search System
-- Supabase Database Schema
-- ============================================

-- Enable pgvector extension for vector similarity search
CREATE EXTENSION IF NOT EXISTS vector;

-- ============================================
-- Main Content Table (Vector Storage)
-- ============================================

CREATE TABLE IF NOT EXISTS cursor_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  embedding vector(512), -- OpenAI text-embedding-3-small dimensions (512 for speed)
  metadata JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Metadata structure (enforced at application level):
-- {
--   "source": "tutorial" | "docs" | "changelog" | "rules" | "community",
--   "title": "Tab Completion Guide",
--   "url": "/tutorial/features/tab-completion",
--   "category": "features" | "basics" | "advanced",
--   "version": "1.7",
--   "quality_score": 9.5,
--   "tags": ["tab", "autocomplete", "ai"],
--   "author": "official" | "community",
--   "date": "2025-10-08"
-- }

-- Create vector similarity search index
-- Using ivfflat for fast approximate nearest neighbor search
CREATE INDEX IF NOT EXISTS cursor_content_embedding_idx 
ON cursor_content 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Create GIN index for JSONB metadata filtering
CREATE INDEX IF NOT EXISTS cursor_content_metadata_idx 
ON cursor_content 
USING GIN (metadata);

-- Create full-text search index as backup
CREATE INDEX IF NOT EXISTS cursor_content_content_idx 
ON cursor_content 
USING GIN (to_tsvector('english', content));

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_cursor_content_updated_at 
BEFORE UPDATE ON cursor_content 
FOR EACH ROW 
EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Vector Similarity Search Function
-- ============================================

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

-- ============================================
-- Search Analytics Table
-- ============================================

CREATE TABLE IF NOT EXISTS search_queries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query TEXT NOT NULL,
  results_count INT,
  response_time_ms INT,
  user_rating INT CHECK (user_rating >= 1 AND user_rating <= 5),
  was_helpful BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for analytics queries
CREATE INDEX IF NOT EXISTS search_queries_created_at_idx 
ON search_queries (created_at DESC);

CREATE INDEX IF NOT EXISTS search_queries_query_idx 
ON search_queries USING GIN (to_tsvector('english', query));

-- ============================================
-- Popular Queries Materialized View
-- ============================================

CREATE MATERIALIZED VIEW IF NOT EXISTS popular_queries AS
SELECT 
  query,
  COUNT(*) as search_count,
  AVG(user_rating) as avg_rating,
  COUNT(CASE WHEN was_helpful THEN 1 END)::FLOAT / NULLIF(COUNT(*), 0) as helpful_rate,
  AVG(response_time_ms) as avg_response_time_ms
FROM search_queries
WHERE created_at > NOW() - INTERVAL '30 days'
GROUP BY query
HAVING COUNT(*) > 1
ORDER BY search_count DESC
LIMIT 100;

-- Create unique index for concurrent refresh
CREATE UNIQUE INDEX IF NOT EXISTS popular_queries_query_idx 
ON popular_queries (query);

-- Function to refresh popular queries (call this daily via cron)
CREATE OR REPLACE FUNCTION refresh_popular_queries()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY popular_queries;
END;
$$;

-- ============================================
-- Content Statistics View
-- ============================================

CREATE OR REPLACE VIEW content_stats AS
SELECT 
  metadata->>'source' as source,
  COUNT(*) as count,
  AVG((metadata->>'quality_score')::float) as avg_quality,
  MAX(updated_at) as last_updated
FROM cursor_content
GROUP BY metadata->>'source'
ORDER BY count DESC;

-- ============================================
-- Helper Functions
-- ============================================

-- Get similar content by ID (for "related content" features)
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

-- ============================================
-- Row Level Security (Optional - enable if needed)
-- ============================================

-- For now, we'll use service role key for all operations
-- Uncomment these if you want to enable RLS for public access

-- ALTER TABLE cursor_content ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE search_queries ENABLE ROW LEVEL SECURITY;

-- CREATE POLICY "Allow public read access to content"
-- ON cursor_content FOR SELECT
-- TO public
-- USING (true);

-- CREATE POLICY "Allow public insert to search queries"
-- ON search_queries FOR INSERT
-- TO public
-- WITH CHECK (true);

-- ============================================
-- Cleanup/Maintenance Functions
-- ============================================

-- Delete old search queries (keep last 90 days)
CREATE OR REPLACE FUNCTION cleanup_old_search_queries()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  DELETE FROM search_queries
  WHERE created_at < NOW() - INTERVAL '90 days';
END;
$$;

-- ============================================
-- Initial Data Seed (Optional)
-- ============================================

-- Example: Insert some sample content for testing
-- DELETE FROM cursor_content; -- Uncomment to reset

-- You'll populate this table using the indexing scripts

-- ============================================
-- Useful Queries for Admin/Debugging
-- ============================================

-- Check index sizes
-- SELECT
--   schemaname,
--   tablename,
--   indexname,
--   pg_size_pretty(pg_relation_size(indexrelid)) as index_size
-- FROM pg_indexes
-- JOIN pg_class ON pg_indexes.indexname = pg_class.relname
-- WHERE schemaname = 'public'
-- ORDER BY pg_relation_size(indexrelid) DESC;

-- Check table sizes
-- SELECT
--   schemaname,
--   tablename,
--   pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as total_size,
--   pg_size_pretty(pg_relation_size(schemaname||'.'||tablename)) as table_size
-- FROM pg_tables
-- WHERE schemaname = 'public'
-- ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- ============================================
-- SETUP COMPLETE! 
-- ============================================
-- Next steps:
-- 1. Run this schema in your Supabase SQL Editor
-- 2. Verify tables were created: SELECT * FROM cursor_content LIMIT 1;
-- 3. Run the indexing script to populate content
-- 4. Test search: SELECT * FROM search_cursor_content([your_embedding], 0.7, 10);
-- ============================================

