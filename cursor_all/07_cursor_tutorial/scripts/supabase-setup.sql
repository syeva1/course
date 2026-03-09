-- Cursor Tutorial Database Setup
-- Run this in your Supabase SQL Editor

-- Enable the vector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create the cursor_content table
CREATE TABLE IF NOT EXISTS cursor_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,
  embedding VECTOR(1536), -- OpenAI embeddings are 1536 dimensions
  metadata JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create the search_queries table
CREATE TABLE IF NOT EXISTS search_queries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  query TEXT NOT NULL,
  results_count INTEGER DEFAULT 0,
  response_time_ms INTEGER DEFAULT 0,
  user_rating INTEGER CHECK (user_rating >= 1 AND user_rating <= 5),
  was_helpful BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create the search function
CREATE OR REPLACE FUNCTION search_cursor_content(
  query_embedding VECTOR(1536),
  match_threshold FLOAT DEFAULT 0.5,
  match_count INTEGER DEFAULT 8
)
RETURNS TABLE (
  id UUID,
  content TEXT,
  metadata JSONB,
  similarity FLOAT
)
LANGUAGE SQL
AS $$
  SELECT
    cursor_content.id,
    cursor_content.content,
    cursor_content.metadata,
    1 - (cursor_content.embedding <=> query_embedding) AS similarity
  FROM cursor_content
  WHERE 1 - (cursor_content.embedding <=> query_embedding) > match_threshold
  ORDER BY cursor_content.embedding <=> query_embedding
  LIMIT match_count;
$$;

-- Enable Row Level Security
ALTER TABLE cursor_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_queries ENABLE ROW LEVEL SECURITY;

-- Create policies (allow all for now)
DROP POLICY IF EXISTS "Allow all operations on cursor_content" ON cursor_content;
CREATE POLICY "Allow all operations on cursor_content" ON cursor_content FOR ALL USING (true);

DROP POLICY IF EXISTS "Allow all operations on search_queries" ON search_queries;
CREATE POLICY "Allow all operations on search_queries" ON search_queries FOR ALL USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS cursor_content_embedding_idx ON cursor_content USING ivfflat (embedding vector_cosine_ops);
CREATE INDEX IF NOT EXISTS search_queries_created_at_idx ON search_queries (created_at);
CREATE INDEX IF NOT EXISTS cursor_content_metadata_idx ON cursor_content USING gin (metadata);

-- Insert sample content
INSERT INTO cursor_content (content, metadata) VALUES
(
  'Cursor is an AI-powered code editor that helps developers write code faster and more efficiently. It features Tab completion, Cmd+K for inline editing, AI Chat, and Composer for multi-file editing.',
  '{
    "source": "tutorial",
    "title": "What is Cursor?",
    "url": "https://cursortutorial.ai/tutorial/basics/lessons/getting-started",
    "category": "basics",
    "version": "1.7.52",
    "quality_score": 0.95,
    "tags": ["cursor", "ai", "editor", "introduction"],
    "author": "Cursor Tutorial Team",
    "date": "2025-01-17"
  }'
),
(
  'Tab completion in Cursor allows you to accept AI-generated code suggestions by pressing the Tab key. This feature works across multiple languages and can complete functions, variables, and entire code blocks.',
  '{
    "source": "tutorial",
    "title": "Tab Completion",
    "url": "https://cursortutorial.ai/tutorial/features/lessons/tab-completion",
    "category": "features",
    "version": "1.7.52",
    "quality_score": 0.92,
    "tags": ["tab", "completion", "ai", "suggestions"],
    "author": "Cursor Tutorial Team",
    "date": "2025-01-17"
  }'
),
(
  'Cmd+K (or Ctrl+K) opens the inline edit mode in Cursor. This allows you to select code and ask the AI to modify, refactor, or explain it. You can also use it to generate new code based on natural language descriptions.',
  '{
    "source": "tutorial",
    "title": "Cmd+K Inline Edit",
    "url": "https://cursortutorial.ai/tutorial/features/lessons/inline-edit",
    "category": "features",
    "version": "1.7.52",
    "quality_score": 0.94,
    "tags": ["cmd+k", "inline", "edit", "refactor"],
    "author": "Cursor Tutorial Team",
    "date": "2025-01-17"
  }'
),
(
  'The AI Chat feature in Cursor provides a conversational interface for asking questions about your code, getting explanations, and receiving coding assistance. It''s powered by Claude 4.5 Sonnet and understands your entire codebase context.',
  '{
    "source": "tutorial",
    "title": "AI Chat",
    "url": "https://cursortutorial.ai/tutorial/features/lessons/ai-chat",
    "category": "features",
    "version": "1.7.52",
    "quality_score": 0.93,
    "tags": ["chat", "ai", "claude", "conversation"],
    "author": "Cursor Tutorial Team",
    "date": "2025-01-17"
  }'
),
(
  'Composer is Cursor''s multi-file editing feature that allows you to work across multiple files simultaneously. You can ask the AI to make changes that span multiple files, create new files, or refactor entire codebases.',
  '{
    "source": "tutorial",
    "title": "Composer Multi-file Editing",
    "url": "https://cursortutorial.ai/tutorial/features/lessons/composer",
    "category": "features",
    "version": "1.7.52",
    "quality_score": 0.91,
    "tags": ["composer", "multi-file", "editing", "refactor"],
    "author": "Cursor Tutorial Team",
    "date": "2025-01-17"
  }'
),
(
  'The @ symbol in Cursor allows you to reference files, folders, and symbols in your codebase. You can use @filename to reference a specific file, @folder to reference a directory, or @symbol to reference a function or variable.',
  '{
    "source": "tutorial",
    "title": "@ Symbols and Context",
    "url": "https://cursortutorial.ai/tutorial/features/lessons/context-symbols",
    "category": "features",
    "version": "1.7.52",
    "quality_score": 0.89,
    "tags": ["@", "symbols", "context", "references"],
    "author": "Cursor Tutorial Team",
    "date": "2025-01-17"
  }'
),
(
  'Cursor Rules (.cursorrules) allow you to define custom instructions for how the AI should behave in your project. You can specify coding styles, frameworks, patterns, and project-specific guidelines that the AI will follow.',
  '{
    "source": "tutorial",
    "title": "Cursor Rules",
    "url": "https://cursortutorial.ai/tutorial/features/lessons/cursor-rules",
    "category": "features",
    "version": "1.7.52",
    "quality_score": 0.88,
    "tags": ["cursorrules", "custom", "instructions", "guidelines"],
    "author": "Cursor Tutorial Team",
    "date": "2025-01-17"
  }'
),
(
  'Browser Control in Cursor allows you to interact with web browsers directly from the editor. You can open websites, take screenshots, and even control browser actions through natural language commands.',
  '{
    "source": "tutorial",
    "title": "Browser Control",
    "url": "https://cursortutorial.ai/tutorial/advanced/lessons/workflow-optimization",
    "category": "advanced",
    "version": "1.7.52",
    "quality_score": 0.87,
    "tags": ["browser", "control", "web", "automation"],
    "author": "Cursor Tutorial Team",
    "date": "2025-01-17"
  }'
),
(
  'Hooks in Cursor are pre-built functions that help you integrate with external services and APIs. They provide a simple way to connect your code with databases, authentication systems, and third-party services.',
  '{
    "source": "tutorial",
    "title": "Hooks Integration",
    "url": "https://cursortutorial.ai/tutorial/advanced/lessons/workflow-optimization",
    "category": "advanced",
    "version": "1.7.52",
    "quality_score": 0.86,
    "tags": ["hooks", "integration", "apis", "services"],
    "author": "Cursor Tutorial Team",
    "date": "2025-01-17"
  }'
),
(
  'Team Rules in Cursor allow multiple developers to share consistent AI behavior across a project. Team members can collaborate with the same coding standards and AI instructions, ensuring consistency in code generation and refactoring.',
  '{
    "source": "tutorial",
    "title": "Team Rules and Collaboration",
    "url": "https://cursortutorial.ai/tutorial/advanced/lessons/team-collaboration",
    "category": "advanced",
    "version": "1.7.52",
    "quality_score": 0.90,
    "tags": ["team", "collaboration", "rules", "consistency"],
    "author": "Cursor Tutorial Team",
    "date": "2025-01-17"
  }'
);

-- Verify the setup
SELECT 'Database setup complete!' as status;
SELECT COUNT(*) as content_count FROM cursor_content;
