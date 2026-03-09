import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/search/supabase-client';
import { generateEmbedding } from '@/lib/search/embeddings';
import { randomUUID } from 'crypto';

export const runtime = 'nodejs';
export const maxDuration = 300;

// Additional content about Cursor's interface and windows
const interfaceContent = [
  {
    id: randomUUID(),
    content: `Cursor's interface consists of several key windows and panels that work together to provide a powerful AI-assisted coding experience. The main interface includes the Editor Window (where you write code), AI Chat Window (Cmd+L for questions and debugging), Composer Window (Cmd+I for multi-file editing), Terminal/Command Line Window (for running commands), and the Sidebar (for file navigation and project structure). Each window serves a specific purpose in the development workflow, with the AI Chat being particularly powerful for getting help and explanations about your code.`,
    metadata: {
      source: 'tutorial',
      title: 'Cursor Interface Overview - Windows and Panels',
      url: 'https://cursortutorial.ai/tutorial/basics/lessons/interface',
      category: 'basics',
      version: '1.7.52',
      quality_score: 0.92,
      tags: ['interface', 'windows', 'panels', 'ui', 'layout', 'editor', 'chat', 'terminal'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: randomUUID(),
    content: `The AI Chat Window in Cursor (opened with Cmd+L) is a powerful conversational interface that understands your entire codebase context. It can answer questions about your code, help debug issues, explain complex algorithms, and provide coding guidance. The chat window appears as a side panel and maintains conversation history, making it easy to have ongoing discussions about your project. You can also use Cmd+Shift+L to chat with a specific code selection, giving the AI focused context about particular functions or sections.`,
    metadata: {
      source: 'tutorial',
      title: 'AI Chat Window - Cmd+L Interface',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/ai-chat',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.94,
      tags: ['ai-chat', 'cmd+l', 'chat-window', 'conversation', 'debugging', 'context'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: randomUUID(),
    content: `Cursor's Terminal/Command Line Window provides integrated terminal access for running commands, scripts, and development tools. The terminal is fully integrated with Cursor's AI, so you can ask questions about command output, debug errors, or get suggestions for next steps. You can have multiple terminal instances open simultaneously, and each terminal maintains its own session history. The terminal window can be resized, moved, or docked in different positions within the interface, making it easy to work with both code and command-line tools simultaneously.`,
    metadata: {
      source: 'tutorial',
      title: 'Terminal Window - Command Line Integration',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/terminal',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.90,
      tags: ['terminal', 'command-line', 'shell', 'commands', 'integration', 'debugging'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: randomUUID(),
    content: `The Composer Window (Cmd+I) is Cursor's most advanced interface for multi-file editing and project-wide changes. When opened, it provides a dedicated space where you can describe complex features or changes you want to make across multiple files. The Composer window shows a preview of all the changes it will make before applying them, allowing you to review and approve modifications. This window is particularly useful for large refactoring tasks, adding new features, or making architectural changes that span multiple files in your project.`,
    metadata: {
      source: 'tutorial',
      title: 'Composer Window - Multi-File Editing Interface',
      url: 'https://cursortutorial.ai/tutorial/features/lessons/composer',
      category: 'features',
      version: '1.7.52',
      quality_score: 0.93,
      tags: ['composer', 'cmd+i', 'multi-file', 'preview', 'refactoring', 'architecture'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: randomUUID(),
    content: `Cursor's Sidebar provides easy navigation through your project files and folders, similar to VS Code but enhanced with AI capabilities. The sidebar includes file explorers, search functionality, and quick access to frequently used files. You can also use @ symbols in the sidebar to quickly reference specific files, folders, or even external documentation. The sidebar adapts to your workflow, showing relevant files and suggestions based on your current context and recent activity.`,
    metadata: {
      source: 'tutorial',
      title: 'Sidebar - File Navigation and Project Structure',
      url: 'https://cursortutorial.ai/tutorial/basics/lessons/sidebar',
      category: 'basics',
      version: '1.7.52',
      quality_score: 0.88,
      tags: ['sidebar', 'navigation', 'files', 'folders', 'project-structure', '@-symbols'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  },
  {
    id: randomUUID(),
    content: `Cursor's Editor Window is the main coding area where you write and edit code, enhanced with AI-powered features like Tab completion and inline editing (Cmd+K). The editor supports all VS Code features including syntax highlighting, IntelliSense, and extensions, but adds AI capabilities on top. You can have multiple editor tabs open, split the editor into multiple panes, and use AI features like Tab completion, Cmd+K for inline edits, and @ symbols for context. The editor window is where most of your coding happens, with AI assistance seamlessly integrated into the writing experience.`,
    metadata: {
      source: 'tutorial',
      title: 'Editor Window - Main Coding Interface',
      url: 'https://cursortutorial.ai/tutorial/basics/lessons/editor',
      category: 'basics',
      version: '1.7.52',
      quality_score: 0.91,
      tags: ['editor', 'coding', 'tabs', 'split-view', 'ai-features', 'tab-completion'],
      author: 'Cursor Tutorial Team',
      date: '2025-01-17'
    }
  }
];

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Adding interface and windows content...');
    
    const supabaseAdmin = getSupabaseAdminClient();
    const results: any[] = [];
    let successCount = 0;
    let errorCount = 0;

    // Add interface content
    console.log('📝 Adding interface content...');
    
    for (const item of interfaceContent) {
      try {
        console.log(`  Adding: ${item.metadata.title}`);
        
        // Generate embedding
        const embedding = await generateEmbedding(item.content);
        
        // Insert into database
        const { error } = await supabaseAdmin.from('cursor_content').insert({
          id: item.id,
          content: item.content,
          embedding: embedding,
          metadata: item.metadata,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });
        
        if (error) {
          throw error;
        }
        
        successCount++;
        results.push({ id: item.id, title: item.metadata.title, status: 'success' });
        console.log(`✅ Added: ${item.metadata.title}`);
        
      } catch (error: any) {
        errorCount++;
        results.push({ id: item.id, title: item.metadata.title, status: 'error', error: error.message });
        console.error(`❌ Error adding ${item.metadata.title}:`, error.message);
      }
    }

    // Verify content
    const { data: contentInDb, error: verifyError } = await supabaseAdmin
      .from('cursor_content')
      .select('id, metadata')
      .not('embedding', 'is', null);

    if (verifyError) {
      console.error('❌ Error verifying content:', verifyError.message);
    }

    console.log(`🎉 Interface content addition completed! Success: ${successCount}, Errors: ${errorCount}`);

    return NextResponse.json({
      success: true,
      message: 'Interface content added successfully!',
      summary: {
        totalItems: interfaceContent.length,
        successCount,
        errorCount,
        contentInDatabase: contentInDb?.length || 0
      },
      results
    });

  } catch (error: any) {
    console.error('❌ Interface content addition error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Interface content addition failed',
        error: error.message
      },
      { status: 500 }
    );
  }
}
