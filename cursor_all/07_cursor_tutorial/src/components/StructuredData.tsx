export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://cursortutorial.ai/#organization",
        "name": "Cursor Tutorial",
        "description": "The most comprehensive Cursor AI editor tutorial. Learn Tab completion, Cmd+K, AI Chat, Composer, and Claude 4.5 Sonnet with real examples.",
        "url": "https://cursortutorial.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cursortutorial.ai/logo.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://github.com/william-mush/cursor-tutorial"
        ],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://cursortutorial.ai/#website",
        "url": "https://cursortutorial.ai",
        "name": "Cursor Tutorial",
        "description": "Master Cursor 0.45.14 with comprehensive tutorials on Tab completion, Cmd+K, AI Chat, Composer, @ symbols, and more",
        "publisher": {
          "@id": "https://cursortutorial.ai/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://cursortutorial.ai/tutorial?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Course",
        "@id": "https://cursortutorial.ai/#main-course",
        "name": "Complete Cursor AI Editor Tutorial",
        "description": "Master Cursor 0.45.14 with Tab completion, Cmd+K inline editing, AI Chat, Composer, @ symbols, and Cursor Rules. Learn Claude 4.5 Sonnet integration in 10 minutes.",
        "provider": {
          "@id": "https://cursortutorial.ai/#organization"
        },
        "educationalLevel": "Beginner to Advanced",
        "isAccessibleForFree": true,
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "courseWorkload": "PT10M"
        },
        "inLanguage": "en",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "hasPart": [
          {
            "@type": "Course",
            "name": "Tab Completion - AI Pair Programmer",
            "description": "Master Tab completion for 30-50% faster coding with multi-line AI predictions",
            "url": "https://cursortutorial.ai/tutorial/features/lessons/tab-completion",
            "educationalLevel": "Beginner",
            "timeRequired": "PT15M"
          },
          {
            "@type": "Course",
            "name": "Cmd+K Inline Edit",
            "description": "Make surgical code changes with natural language commands",
            "url": "https://cursortutorial.ai/tutorial/features/lessons/inline-edit",
            "educationalLevel": "Beginner",
            "timeRequired": "PT12M"
          },
          {
            "@type": "Course",
            "name": "Cmd+L AI Chat",
            "description": "Master the AI Chat interface for questions, debugging, and code understanding",
            "url": "https://cursortutorial.ai/tutorial/features/lessons/ai-chat",
            "educationalLevel": "Beginner",
            "timeRequired": "PT18M"
          },
          {
            "@type": "Course",
            "name": "Composer - Multi-File Editing",
            "description": "Build entire features across multiple files with AI assistance",
            "url": "https://cursortutorial.ai/tutorial/features/lessons/composer",
            "educationalLevel": "Intermediate",
            "timeRequired": "PT20M"
          },
          {
            "@type": "Course",
            "name": "@ Symbols - Context Mastery",
            "description": "Use @Files, @Folders, @Codebase, @Docs, and @Web for 10x better AI responses",
            "url": "https://cursortutorial.ai/tutorial/features/lessons/context-symbols",
            "educationalLevel": "Intermediate",
            "timeRequired": "PT25M"
          },
          {
            "@type": "Course",
            "name": "Cursor Rules - Custom Instructions",
            "description": "Create .cursorrules files to enforce coding standards and conventions",
            "url": "https://cursortutorial.ai/tutorial/features/lessons/cursor-rules",
            "educationalLevel": "Intermediate",
            "timeRequired": "PT20M"
          },
          {
            "@type": "Course",
            "name": "Getting Started with Cursor",
            "description": "Be 10x faster in 10 minutes with practical quick wins and real workflow examples",
            "url": "https://cursortutorial.ai/tutorial/basics/lessons/getting-started",
            "educationalLevel": "Beginner",
            "timeRequired": "PT10M"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Cursor AI Editor",
        "description": "AI-powered code editor with Claude 4.5 Sonnet, Tab completion, and multi-file editing capabilities",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": ["Windows", "macOS", "Linux"],
        "softwareVersion": "1.7.38",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "10000",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "Tab Completion with Claude 4.5 Sonnet",
          "Cmd+K Inline Editing",
          "AI Chat Interface (Cmd+L)",
          "Composer Multi-file Editing",
          "@ Symbols for Context",
          "Cursor Rules (.cursorrules)",
          "Browser Control",
          "Sandboxed Terminals",
          "Team Rules"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Cursor AI Editor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cursor is an AI-powered code editor built on VS Code with Claude 4.5 Sonnet integration. It features Tab completion for 30-50% faster coding, Cmd+K for surgical edits, AI Chat (Cmd+L) for questions and debugging, and Composer for multi-file editing."
            }
          },
          {
            "@type": "Question",
            "name": "How do I use Tab completion in Cursor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tab completion in Cursor predicts 1-15 lines of code. Start typing a function name or code pattern, and press Tab to accept the AI suggestion. Use Cmd+→ to accept word-by-word, and Alt+[ or Alt+] to cycle through alternatives."
            }
          },
          {
            "@type": "Question",
            "name": "What is Cmd+K in Cursor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cmd+K (Ctrl+K on Windows/Linux) is Cursor's inline editing feature. Select code, press Cmd+K, describe your change in plain English (like 'add error handling' or 'convert to TypeScript'), and Cursor makes the edit instantly."
            }
          },
          {
            "@type": "Question",
            "name": "How do @ symbols work in Cursor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "@ symbols provide context to Cursor's AI: @Files references specific files, @Folders references directories, @Codebase searches your entire project, @Docs queries official documentation, and @Web searches the internet. They dramatically improve AI accuracy."
            }
          },
          {
            "@type": "Question",
            "name": "What are Cursor Rules?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cursor Rules are custom instructions in a .cursorrules file that tell the AI how to generate code for your project. They enforce coding standards, preferred libraries, file organization, and team conventions automatically."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Get Started with Cursor AI Editor",
        "description": "Learn Cursor 0.45.14 and become 10x faster in 10 minutes",
        "totalTime": "PT10M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Install Cursor",
            "text": "Download Cursor from cursor.sh and install for your operating system",
            "url": "https://cursortutorial.ai/tutorial/basics/lessons/getting-started"
          },
          {
            "@type": "HowToStep",
            "name": "Try Tab Completion",
            "text": "Type a function name and press Tab to let AI complete it. Experience 30-50% faster coding.",
            "url": "https://cursortutorial.ai/tutorial/features/lessons/tab-completion"
          },
          {
            "@type": "HowToStep",
            "name": "Use Cmd+K for Edits",
            "text": "Select code, press Cmd+K, describe your change in English (like 'add types' or 'add error handling')",
            "url": "https://cursortutorial.ai/tutorial/features/lessons/inline-edit"
          },
          {
            "@type": "HowToStep",
            "name": "Ask Questions with Cmd+L",
            "text": "Press Cmd+L to open AI Chat. Ask questions about your code, debug errors, or learn new concepts.",
            "url": "https://cursortutorial.ai/tutorial/features/lessons/ai-chat"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://cursortutorial.ai"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tutorials",
            "item": "https://cursortutorial.ai/tutorial"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Essential Features",
            "item": "https://cursortutorial.ai/tutorial/features"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
