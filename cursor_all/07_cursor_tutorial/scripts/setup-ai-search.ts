#!/usr/bin/env tsx

import { createClient } from '@supabase/supabase-js';
import { generateEmbedding } from '../src/lib/search/embeddings';
import fs from 'fs';
import path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing environment variables:');
  console.error('  NEXT_PUBLIC_SUPABASE_URL:', !!supabaseUrl);
  console.error('  SUPABASE_SERVICE_ROLE_KEY:', !!supabaseKey);
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Comprehensive Cursor tutorial content
const tutorialContent = [
  {
    id: 'cursor-intro',
    content: `Cursor is an AI-powered code editor built on VS Code that revolutionizes how developers write code. It features Claude 4.5 Sonnet integration, Tab completion for 30-50% faster coding, Cmd+K for surgical inline edits, AI Chat (Cmd+L) for questions and debugging, and Composer for multi-file editing. Cursor understands your entire codebase context and provides intelligent suggestions that feel like pair programming with an expert developer.`,
    metadata: {
      source: 'tutorial',
      title: 'What is Cursor?',
      url: 'https://cursortutorial.ai/tutorial/basics/lessons/getting-started',
      category: 'basics',
      version: '1.7.52',
      quality_score: 0.95,
      tags: ['cursor', 'ai', 'editor', 'introduction', 'claude', 'vs-code'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'tab-completion',
    content: `Tab completion in Cursor is a game-changing feature that predicts 1-15 lines of code as you type. Simply start typing a function name, variable, or code pattern, and press Tab to accept the AI suggestion. Use Cmd+→ to accept word-by-word, and Alt+[ or Alt+] to cycle through alternatives. This feature works across all programming languages and can complete functions, classes, imports, and entire code blocks. It's like having an expert developer sitting next to you, anticipating what you want to write next.`,
    metadata: {
      source: 'tutorial',
      title: 'Tab Completion - AI Pair Programmer',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/tab-completion',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.92,
      tags: ['tab', 'completion', 'ai', 'suggestions', 'productivity', 'coding'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'cmd-k-inline-edit',
    content: `Cmd+K (Ctrl+K on Windows/Linux) opens Cursor's powerful inline edit mode. Select any code, press Cmd+K, and describe your change in plain English. For example: "add error handling", "convert to TypeScript", "optimize this function", or "add logging". Cursor will instantly modify the selected code according to your instructions. This feature is perfect for refactoring, debugging, adding features, or converting between programming languages. It's like having a surgical code editor that understands natural language.`,
    metadata: {
      source: 'tutorial',
      title: 'Cmd+K Inline Edit',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/inline-edit',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.94,
      tags: ['cmd+k', 'inline', 'edit', 'refactor', 'natural-language', 'surgical'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'ai-chat-cmd-l',
    content: `Cmd+L opens Cursor's AI Chat interface, your personal coding assistant. Ask questions about your code, debug errors, learn new concepts, or get explanations for complex algorithms. The chat understands your entire codebase context and can reference specific files, functions, or variables. Examples: "Why is this function slow?", "How do I implement authentication?", "Explain this React hook", or "What's the best way to structure this component?". It's like having a senior developer available 24/7 for code reviews and mentoring.`,
    metadata: {
      source: 'tutorial',
      title: 'Cmd+L AI Chat',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/ai-chat',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.93,
      tags: ['cmd+l', 'ai', 'chat', 'debugging', 'learning', 'mentoring'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'composer-multi-file',
    content: `Composer is Cursor's most powerful feature for building entire features across multiple files. Press Cmd+I to open Composer, then describe what you want to build in natural language. Composer can create new files, modify existing ones, update imports, and ensure everything works together. Examples: "Create a user authentication system", "Add a shopping cart feature", "Implement a REST API", or "Build a React component library". Composer understands your project structure and maintains consistency across all files.`,
    metadata: {
      source: 'tutorial',
      title: 'Composer - Multi-File Editing',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/composer',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.96,
      tags: ['composer', 'multi-file', 'features', 'architecture', 'cmd+i', 'projects'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'context-symbols',
    content: `@ symbols provide powerful context to Cursor's AI. Use @Files to reference specific files, @Folders for entire directories, @Codebase to search your whole project, @Docs to query official documentation, and @Web to search the internet. These symbols dramatically improve AI accuracy by giving it the right context. Examples: "@Files: auth.js How do I add JWT validation?" or "@Codebase: Find all API endpoints and add rate limiting". Context symbols make Cursor understand your project like a human developer would.`,
    metadata: {
      source: 'tutorial',
      title: '@ Symbols - Context Mastery',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/context-symbols',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.91,
      tags: ['@', 'symbols', 'context', 'files', 'folders', 'codebase', 'docs', 'web'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'cursor-rules',
    content: `Cursor Rules are custom instructions in a .cursorrules file that tell the AI how to generate code for your project. They enforce coding standards, preferred libraries, file organization, and team conventions automatically. Examples: "Always use TypeScript", "Follow React best practices", "Use Tailwind for styling", "Prefer functional components", or "Add JSDoc comments to all functions". Cursor Rules ensure consistency across your entire codebase and make the AI understand your team's specific requirements.`,
    metadata: {
      source: 'tutorial',
      title: 'Cursor Rules - Custom Instructions',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/cursor-rules',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.89,
      tags: ['cursorrules', 'custom', 'instructions', 'standards', 'conventions', 'team'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'browser-control',
    content: `Browser Control in Cursor allows you to interact with web applications directly from your editor. You can click buttons, fill forms, navigate pages, and even take screenshots - all while coding. This is perfect for testing your applications, debugging frontend issues, or automating web tasks. Simply describe what you want to do in the browser, and Cursor will execute the actions while you continue coding. It's like having a built-in browser automation tool integrated with your development workflow.`,
    metadata: {
      source: 'tutorial',
      title: 'Browser Control',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/browser-control',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.87,
      tags: ['browser', 'control', 'automation', 'testing', 'frontend', 'debugging'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'sandboxed-terminals',
    content: `Sandboxed Terminals in Cursor provide secure, isolated environments for running commands and scripts. Each terminal is completely separate, so you can run different projects, install different dependencies, and test different configurations without conflicts. Perfect for microservices, different Node.js versions, or experimental features. The terminals are integrated with Cursor's AI, so you can ask questions about command output, debug errors, or get suggestions for next steps.`,
    metadata: {
      source: 'tutorial',
      title: 'Sandboxed Terminals',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/sandboxed-terminals',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.85,
      tags: ['terminals', 'sandboxed', 'isolated', 'secure', 'commands', 'scripts'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'team-rules',
    content: `Team Rules in Cursor allow organizations to share coding standards and conventions across all team members. Administrators can create organization-wide .cursorrules files that automatically apply to everyone's Cursor installation. This ensures consistency, reduces code review time, and helps onboard new team members quickly. Team Rules can include company-specific patterns, preferred libraries, security requirements, and architectural decisions. It's like having your team's coding culture built into the AI.`,
    metadata: {
      source: 'tutorial',
      title: 'Team Rules',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/team-rules',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.88,
      tags: ['team', 'rules', 'organization', 'standards', 'collaboration', 'culture'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'getting-started',
    content: `Getting started with Cursor is easy and takes just 10 minutes. Download from cursor.sh, install for your operating system, and sign up for an account. Start with Tab completion - just type a function name and press Tab. Try Cmd+K on some code - select it and describe a change. Open Cmd+L and ask a question about your code. These three features alone will make you 30-50% more productive immediately. Cursor works with any programming language and integrates seamlessly with your existing VS Code extensions and workflows.`,
    metadata: {
      source: 'tutorial',
      title: 'Getting Started with Cursor',
      url: 'https://cursortutorial.ai/tutorial/basics/lessons/getting-started',
      category: 'basics',
      version: '1.7.52',
      quality_score: 0.94,
      tags: ['getting-started', 'basics', 'installation', 'quick-start', 'productivity'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'keyboard-shortcuts',
    content: `Essential Cursor keyboard shortcuts: Tab (accept AI suggestion), Cmd+→ (accept word-by-word), Alt+[ or Alt+] (cycle alternatives), Cmd+K (inline edit), Cmd+L (AI chat), Cmd+I (Composer), Cmd+Shift+L (chat with selection), Cmd+Shift+K (edit with selection). These shortcuts make Cursor incredibly fast to use. You can customize them in Settings > Keyboard Shortcuts. Most developers memorize these within a week and find themselves reaching for them in other editors too.`,
    metadata: {
      source: 'tutorial',
      title: 'Keyboard Shortcuts',
      url: 'https://cursortutorial.ai/tutorial/basics/lessons/keyboard-shortcuts',
      category: 'basics',
      version: '1.7.52',
      quality_score: 0.90,
      tags: ['shortcuts', 'keyboard', 'productivity', 'efficiency', 'customization'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'vs-code-comparison',
    content: `Cursor vs VS Code: Cursor is built on VS Code but adds AI superpowers. You get all VS Code features plus Tab completion, Cmd+K editing, AI Chat, Composer, and context symbols. Cursor understands your codebase context, while VS Code is just a text editor. Cursor can write entire features, debug complex issues, and explain code - VS Code requires extensions and manual work. Cursor is like VS Code + GitHub Copilot + ChatGPT + a senior developer, all integrated seamlessly.`,
    metadata: {
      source: 'tutorial',
      title: 'Cursor vs VS Code',
      url: 'https://cursortutorial.ai/tutorial/comparisons/cursor-vs-vscode',
      category: 'comparisons',
      version: '1.7.52',
      quality_score: 0.92,
      tags: ['comparison', 'vs-code', 'features', 'ai', 'productivity', 'advantages'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'github-copilot-comparison',
    content: `Cursor vs GitHub Copilot: Cursor includes everything Copilot does plus much more. Copilot only does Tab completion, while Cursor adds Cmd+K editing, AI Chat, Composer, context symbols, and codebase understanding. Cursor works offline, understands your entire project, and can build complete features. Copilot is just a suggestion engine, while Cursor is a full AI development environment. Cursor's AI is more powerful, context-aware, and integrated with your workflow.`,
    metadata: {
      source: 'tutorial',
      title: 'Cursor vs GitHub Copilot',
      url: 'https://cursortutorial.ai/tutorial/comparisons/cursor-vs-copilot',
      category: 'comparisons',
      version: '1.7.52',
      quality_score: 0.91,
      tags: ['comparison', 'github-copilot', 'ai', 'features', 'productivity', 'integration'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: 'productivity-tips',
    content: `Cursor productivity tips: Use @ symbols for better context, create .cursorrules files for consistency, combine Tab completion with Cmd+K for rapid development, use Composer for new features, ask Cmd+L for code explanations, leverage Browser Control for testing, and use Team Rules for collaboration. The key is to think of Cursor as a pair programming partner, not just a tool. Describe what you want to build, not how to build it. Let Cursor handle the implementation details while you focus on architecture and logic.`,
    metadata: {
      source: 'tutorial',
      title: 'Productivity Tips',
      url: 'https://cursortutorial.ai/tutorial/advanced/productivity-tips',
      category: 'advanced',
      version: '1.7.52',
      quality_score: 0.93,
      tags: ['productivity', 'tips', 'best-practices', 'workflow', 'efficiency', 'pair-programming'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  }
];

async function setupAISearch() {
  console.log('🚀 Setting up AI Search for Cursor Tutorial...\n');
  
  try {
    // Step 1: Create the search function
    console.log('📝 Step 1: Creating search function...');
    const sqlContent = fs.readFileSync(path.join(__dirname, 'create-search-function.sql'), 'utf8');
    
    const { error: functionError } = await supabase.rpc('exec_sql', { sql: sqlContent });
    if (functionError) {
      console.log('⚠️  Function might already exist, continuing...');
    } else {
      console.log('✅ Search function created successfully');
    }
    
    // Step 2: Clear existing content
    console.log('\n🧹 Step 2: Clearing existing content...');
    const { error: deleteError } = await supabase.from('cursor_content').delete().neq('id', 'dummy');
    if (deleteError) {
      console.log('⚠️  No existing content to clear');
    } else {
      console.log('✅ Existing content cleared');
    }
    
    // Step 3: Populate with new content
    console.log('\n📚 Step 3: Adding comprehensive tutorial content...');
    
    for (let i = 0; i < tutorialContent.length; i++) {
      const item = tutorialContent[i];
      console.log(`  [${i + 1}/${tutorialContent.length}] Adding: ${item.metadata.title}`);
      
      try {
        // Generate embedding for the content
        const embedding = await generateEmbedding(item.content);
        
        // Insert into database
        const { error } = await supabase.from('cursor_content').insert({
          id: item.id,
          content: item.content,
          embedding: embedding,
          metadata: item.metadata,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });
        
        if (error) {
          console.error(`❌ Error adding ${item.metadata.title}:`, error.message);
        } else {
          console.log(`✅ Added: ${item.metadata.title}`);
        }
        
        // Small delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 200));
        
      } catch (itemError) {
        console.error(`❌ Failed to process ${item.metadata.title}:`, itemError);
      }
    }
    
    // Step 4: Verify the setup
    console.log('\n🔍 Step 4: Verifying setup...');
    
    const { data: content, error: contentError } = await supabase
      .from('cursor_content')
      .select('id, metadata', { count: 'exact' });
    
    if (contentError) {
      console.error('❌ Error verifying content:', contentError);
    } else {
      console.log(`✅ Content verification: ${content?.length || 0} items in database`);
    }
    
    // Test the search function
    console.log('\n🧪 Step 5: Testing search function...');
    
    try {
      const testEmbedding = await generateEmbedding('What is Cursor?');
      const { data: searchResults, error: searchError } = await supabase.rpc('search_cursor_content', {
        query_embedding: testEmbedding,
        match_threshold: 0.5,
        match_count: 3
      });
      
      if (searchError) {
        console.error('❌ Search function test failed:', searchError);
      } else {
        console.log(`✅ Search function test: Found ${searchResults?.length || 0} results`);
        if (searchResults && searchResults.length > 0) {
          console.log(`   Top result: ${searchResults[0].metadata.title} (similarity: ${searchResults[0].similarity?.toFixed(3)})`);
        }
      }
    } catch (testError) {
      console.error('❌ Search test failed:', testError);
    }
    
    console.log('\n🎉 AI Search setup completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   • Content items: ${content?.length || 0}`);
    console.log(`   • Search function: Created`);
    console.log(`   • Vector embeddings: Generated`);
    console.log(`   • Ready for AI search! 🚀`);
    
  } catch (error) {
    console.error('\n❌ Setup failed:', error);
    process.exit(1);
  }
}

// Run the setup
setupAISearch();
