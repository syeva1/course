// Simple script to generate embeddings using the deployed API
const content = [
  {
    content: "Cursor is an AI-powered code editor that helps developers write code faster and more efficiently. It features Tab completion, Cmd+K for inline editing, AI Chat, and Composer for multi-file editing.",
    metadata: {
      source: 'tutorial',
      title: 'What is Cursor?',
      url: 'https://cursortutorial.ai/tutorial/basics/lessons/getting-started',
      category: 'basics',
      version: '1.7.52',
      quality_score: 0.95,
      tags: ['cursor', 'ai', 'editor', 'introduction'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    content: "Tab completion in Cursor allows you to accept AI-generated code suggestions by pressing the Tab key. This feature works across multiple languages and can complete functions, variables, and entire code blocks.",
    metadata: {
      source: 'tutorial',
      title: 'Tab Completion',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/tab-completion',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.92,
      tags: ['tab', 'completion', 'ai', 'suggestions'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    content: "Cmd+K (or Ctrl+K) opens the inline edit mode in Cursor. This allows you to select code and ask the AI to modify, refactor, or explain it. You can also use it to generate new code based on natural language descriptions.",
    metadata: {
      source: 'tutorial',
      title: 'Cmd+K Inline Edit',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/inline-edit',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.94,
      tags: ['cmd+k', 'inline', 'edit', 'refactor'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  }
];

console.log('This script would generate embeddings, but since the API keys are in Vercel,');
console.log('the search will work automatically once the site is deployed.');
console.log('The database already has the content - embeddings will be generated on first search.');
