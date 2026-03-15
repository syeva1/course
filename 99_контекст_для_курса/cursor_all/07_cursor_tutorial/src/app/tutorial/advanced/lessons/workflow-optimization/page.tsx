import { TutorialNavigation } from "@/components/TutorialNavigation";
import { CodeExample } from "@/components/CodeExample";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap, Settings, Clock, Target } from "lucide-react";

export default function WorkflowOptimizationLesson() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/tutorial/advanced" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Advanced
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Workflow Optimization
          </h1>
          <p className="text-xl text-gray-600">
            Streamline your development process with advanced Cursor techniques and best practices.
          </p>
        </div>

        <TutorialNavigation />

        <div className="space-y-8 mt-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Optimizing Your Development Workflow</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              A well-optimized workflow can dramatically increase your productivity. Learn how to configure Cursor and organize your development process for maximum efficiency.
            </p>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits of Workflow Optimization</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Faster Development:</strong> Reduce time spent on repetitive tasks</li>
                <li><strong>Better Code Quality:</strong> Consistent patterns and fewer errors</li>
                <li><strong>Improved Focus:</strong> Less context switching and distractions</li>
                <li><strong>Enhanced Collaboration:</strong> Standardized processes for team work</li>
              </ul>
            </div>
          </div>

          {/* Keyboard Shortcuts Mastery */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Master Essential Keyboard Shortcuts</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI-Powered Shortcuts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Open Chat</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+L</kbd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">AI Edit Mode</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+K</kbd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Accept Suggestion</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Tab</kbd>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Reject Suggestion</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Esc</kbd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Next Suggestion</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Alt+]</kbd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Previous Suggestion</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Alt+[</kbd>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Navigation Shortcuts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Quick Open File</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+P</kbd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Command Palette</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+P</kbd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Toggle Sidebar</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+B</kbd>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Toggle Terminal</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Ctrl+`</kbd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Global Search</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+F</kbd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Recent Files</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+R</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Organization */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Organization Best Practices</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Folder Structure Optimization</h3>
                <CodeExample
                  language="text"
                  title="Recommended Project Structure"
                  code={`my-project/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Basic UI elements
│   │   └── features/       # Feature-specific components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── services/           # API and external services
│   └── styles/             # Global styles
├── public/                 # Static assets
├── docs/                   # Documentation
├── tests/                  # Test files
└── config/                 # Configuration files`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">File Naming Conventions</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Components:</strong> PascalCase (e.g., UserProfile.tsx)</li>
                  <li><strong>Hooks:</strong> camelCase starting with 'use' (e.g., useAuth.ts)</li>
                  <li><strong>Utilities:</strong> camelCase (e.g., formatDate.ts)</li>
                  <li><strong>Types:</strong> PascalCase with descriptive names (e.g., UserTypes.ts)</li>
                  <li><strong>Constants:</strong> UPPER_SNAKE_CASE (e.g., API_ENDPOINTS.ts)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Workflow Patterns */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Workflow Patterns</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Iterative Development Pattern</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Start with a Skeleton</h4>
                      <p className="text-gray-600">Ask AI to create a basic structure or outline</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Iterate and Refine</h4>
                      <p className="text-gray-600">Use follow-up prompts to improve and add features</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Test and Debug</h4>
                      <p className="text-gray-600">Use AI to help identify and fix issues</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Context-Aware Development</h3>
                <CodeExample
                  language="text"
                  code={`Effective AI prompts for context-aware development:

1. "Looking at the attached file, add error handling to this function"
2. "Based on the existing codebase patterns, create a similar component for user profiles"
3. "This function needs to integrate with the existing API service in /services/api.ts"
4. "Following the same TypeScript patterns used in this project, add proper typing"`}
                />
              </div>
            </div>
          </div>

          {/* Performance Optimization */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Optimization</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cursor Settings for Performance</h3>
                <CodeExample
                  language="json"
                  title="settings.json - Performance Optimizations"
                  code={`{
  "cursor.ai.enabled": true,
  "cursor.ai.model": "gpt-4",
  "cursor.ai.maxTokens": 4000,
  "cursor.ai.temperature": 0.1,
  "editor.suggest.snippetsPreventQuickSuggestions": false,
  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": true
  },
  "editor.suggestOnTriggerCharacters": true,
  "editor.acceptSuggestionOnEnter": "on",
  "editor.tabCompletion": "on",
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000
}`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Memory Management</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Close unused files and tabs regularly</li>
                  <li>Use workspace folders for large projects</li>
                  <li>Configure file exclusions in settings</li>
                  <li>Restart Cursor periodically for large projects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Collaboration */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Collaboration Workflows</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Shared Configuration</h3>
                <CodeExample
                  language="json"
                  title=".vscode/settings.json - Team Settings"
                  code={`{
  "cursor.ai.enabled": true,
  "cursor.ai.model": "gpt-4",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.next": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.next": true
  }
}`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Code Review Integration</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use AI to generate comprehensive commit messages</li>
                  <li>Ask AI to review code for potential issues</li>
                  <li>Generate documentation for complex functions</li>
                  <li>Create test cases for new features</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Workflow Mastered! ⚡</h2>
            <p className="text-gray-600 mb-6">
              You've learned how to optimize your development workflow with Cursor. These techniques will significantly improve your productivity and code quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tutorial/advanced/lessons/custom-configurations"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next Lesson: Custom Configurations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/tutorial/advanced"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Advanced Overview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
