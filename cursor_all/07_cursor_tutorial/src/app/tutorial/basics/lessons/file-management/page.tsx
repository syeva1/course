import { TutorialNavigation } from "@/components/TutorialNavigation";
import { CodeExample } from "@/components/CodeExample";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Folder, FileText, Search, Settings, Zap, Brain, Code2, Filter } from "lucide-react";

export default function FileManagementLesson() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/tutorial/basics" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Basics
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            File Management & Navigation
          </h1>
          <p className="text-xl text-gray-600">
            Master efficient file management, advanced search, and AI-powered navigation in Cursor.
          </p>
        </div>

        <TutorialNavigation />

        <div className="space-y-8 mt-8">
          {/* File Management Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200">
            <div className="flex items-center mb-6">
              <Folder className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">File Management Overview</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Cursor's file management combines traditional VS Code features with AI-powered navigation and search capabilities.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">File Explorer</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Hierarchical file structure</li>
                  <li>• Drag and drop support</li>
                  <li>• Right-click context menus</li>
                  <li>• File type icons</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-green-100">
                <div className="flex items-center mb-4">
                  <Search className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">AI-Powered Search</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Semantic code search</li>
                  <li>• Natural language queries</li>
                  <li>• Context-aware results</li>
                  <li>• Cross-file references</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Smart Navigation</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Go to definition</li>
                  <li>• Find references</li>
                  <li>• Symbol navigation</li>
                  <li>• AI-suggested files</li>
                </ul>
              </div>
            </div>
          </div>

          {/* File Explorer */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-900">File Explorer</h2>
            </div>

            <p className="text-gray-600 mb-6">
              The File Explorer (left sidebar) is your primary interface for navigating and managing project files.
            </p>

            <div className="space-y-8">
              {/* Basic Navigation */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Navigation</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Opening Files</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Click to open files</li>
                      <li>• Double-click to open in new tab</li>
                      <li>• Right-click for context menu</li>
                      <li>• Drag files to editor area</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Folder Operations</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Click arrow to expand/collapse</li>
                      <li>• Right-click to create files/folders</li>
                      <li>• Drag to move files</li>
                      <li>• Rename with F2</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* File Operations */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">File Operations</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Creating Files</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Right-click in Explorer → New File</p>
                      <CodeExample
                        language="bash"
                        code={`# Or use Command Palette (Cmd+Shift+P)
# Type: "File: New File"
# Or use keyboard shortcut: Cmd+N`}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Creating Folders</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Right-click in Explorer → New Folder</p>
                      <CodeExample
                        language="bash"
                        code={`# Or use Command Palette
# Type: "File: New Folder"
# Or use keyboard shortcut: Cmd+Shift+N`}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Renaming Files</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Select file and press F2, or right-click → Rename</p>
                      <CodeExample
                        language="bash"
                        code={`# Rename with AI assistance
# Right-click → "Rename with AI"
# AI will suggest better names based on content`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* File Icons and Types */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">File Icons and Types</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Common File Types</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <span className="font-mono">.tsx</span> - React TypeScript components</li>
                      <li>• <span className="font-mono">.ts</span> - TypeScript files</li>
                      <li>• <span className="font-mono">.js</span> - JavaScript files</li>
                      <li>• <span className="font-mono">.css</span> - Stylesheets</li>
                      <li>• <span className="font-mono">.json</span> - Configuration files</li>
                      <li>• <span className="font-mono">.md</span> - Markdown documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Special Files</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <span className="font-mono">package.json</span> - Dependencies</li>
                      <li>• <span className="font-mono">tsconfig.json</span> - TypeScript config</li>
                      <li>• <span className="font-mono">.env</span> - Environment variables</li>
                      <li>• <span className="font-mono">README.md</span> - Project documentation</li>
                      <li>• <span className="font-mono">.gitignore</span> - Git ignore rules</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Search */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Advanced Search</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Cursor's search capabilities go beyond simple text matching with AI-powered semantic search.
            </p>

            <div className="space-y-8">
              {/* Basic Search */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Search (Cmd+Shift+F)</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Text Search</h4>
                    <CodeExample
                      language="text"
                      code={`Search for: "useState"
Results: All files containing "useState"`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Regex Search</h4>
                    <CodeExample
                      language="text"
                      code={`Search for: "use[A-Z][a-z]+"
Results: All custom hooks (useAuth, useLocalStorage, etc.)`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">File Type Filtering</h4>
                    <CodeExample
                      language="text"
                      code={`Search for: "useState"
Files to include: *.tsx
Results: Only in TypeScript React files`}
                    />
                  </div>
                </div>
              </div>

              {/* AI-Powered Search */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-Powered Search</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Semantic Search</h4>
                    <CodeExample
                      language="text"
                      code={`Search for: "authentication logic"
Results: Files containing login, auth, token, session, etc.`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Function Search</h4>
                    <CodeExample
                      language="text"
                      code={`Search for: "functions that handle user input"
Results: Event handlers, form validators, input processors`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Pattern Search</h4>
                    <CodeExample
                      language="text"
                      code={`Search for: "error handling patterns"
Results: Try-catch blocks, error boundaries, error states`}
                    />
                  </div>
                </div>
              </div>

              {/* Search in AI Chat */}
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Search in AI Chat</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Natural Language Queries</h4>
                    <CodeExample
                      language="text"
                      code={`"Find all components that use the useAuth hook"`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Code Analysis</h4>
                    <CodeExample
                      language="text"
                      code={`"Show me all API calls in the project and their error handling"`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Dependency Analysis</h4>
                    <CodeExample
                      language="text"
                      code={`"What files import the Button component and how is it used?"`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Quick Navigation</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Navigate your codebase efficiently with keyboard shortcuts and AI-powered suggestions.
            </p>

            <div className="space-y-8">
              {/* Keyboard Shortcuts */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Essential Keyboard Shortcuts</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">File Navigation</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-gray-700">Quick Open</span>
                        <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+P</kbd>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-gray-700">Go to Symbol</span>
                        <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+O</kbd>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-gray-700">Go to Definition</span>
                        <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">F12</kbd>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-gray-700">Find References</span>
                        <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Shift+F12</kbd>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Tab Navigation</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-gray-700">Next Tab</span>
                        <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Tab</kbd>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-gray-700">Previous Tab</span>
                        <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+Tab</kbd>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-gray-700">Close Tab</span>
                        <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+W</kbd>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-gray-700">Reopen Tab</span>
                        <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+T</kbd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI-Powered Navigation */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-Powered Navigation</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Smart File Suggestions</h4>
                    <p className="text-gray-600 mb-2">When you open Quick Open (Cmd+P), Cursor suggests relevant files based on:</p>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Recently opened files</li>
                      <li>• Files related to current context</li>
                      <li>• Files you're likely to need next</li>
                      <li>• Files with similar names or content</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Context-Aware Suggestions</h4>
                    <p className="text-gray-600 mb-2">AI analyzes your current work and suggests:</p>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Related components to edit</li>
                      <li>• Configuration files to update</li>
                      <li>• Test files to create</li>
                      <li>• Documentation to update</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Breadcrumb Navigation */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Breadcrumb Navigation</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">File Path Breadcrumbs</h4>
                    <p className="text-gray-600 mb-2">Navigate through your file structure using breadcrumbs:</p>
                    <CodeExample
                      language="text"
                      code={`src > components > ui > Button.tsx
Click any part to navigate to that folder`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Symbol Breadcrumbs</h4>
                    <p className="text-gray-600 mb-2">Navigate through code structure:</p>
                    <CodeExample
                      language="text"
                      code={`App > UserProfile > handleSubmit > validateForm
Click to jump to any level of the call stack`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* File Organization */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-900">File Organization</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Organize your project files for better maintainability and AI understanding.
            </p>

            <div className="space-y-8">
              {/* Project Structure */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Project Structure</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">React/Next.js Project</h4>
                    <CodeExample
                      language="text"
                      code={`src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components
│   ├── forms/          # Form components
│   └── layout/         # Layout components
├── pages/              # Page components (Next.js)
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── services/           # API services
├── contexts/           # React contexts
├── styles/             # Global styles
└── __tests__/          # Test files`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">File Naming Conventions</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <span className="font-mono">PascalCase</span> for components: <span className="font-mono">UserProfile.tsx</span></li>
                      <li>• <span className="font-mono">camelCase</span> for utilities: <span className="font-mono">formatDate.ts</span></li>
                      <li>• <span className="font-mono">kebab-case</span> for pages: <span className="font-mono">user-profile.tsx</span></li>
                      <li>• <span className="font-mono">UPPERCASE</span> for constants: <span className="font-mono">API_ENDPOINTS.ts</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* AI-Friendly Organization */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-Friendly Organization</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Clear File Names</h4>
                    <p className="text-gray-600 mb-2">Use descriptive names that AI can understand:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-green-600 font-medium">✓ Good:</p>
                        <ul className="text-sm text-gray-700">
                          <li>• UserProfileCard.tsx</li>
                          <li>• validateEmail.ts</li>
                          <li>• useLocalStorage.ts</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm text-red-600 font-medium">✗ Avoid:</p>
                        <ul className="text-sm text-gray-700">
                          <li>• Card.tsx</li>
                          <li>• utils.ts</li>
                          <li>• hook.ts</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Logical Grouping</h4>
                    <p className="text-gray-600 mb-2">Group related files together for better AI context:</p>
                    <CodeExample
                      language="text"
                      code={`components/
├── auth/
│   ├── LoginForm.tsx
│   ├── RegisterForm.tsx
│   └── AuthProvider.tsx
├── dashboard/
│   ├── DashboardLayout.tsx
│   ├── StatsCard.tsx
│   └── RecentActivity.tsx`}
                    />
                  </div>
                </div>
              </div>

              {/* File Templates */}
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">File Templates</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Creating Templates</h4>
                    <p className="text-gray-600 mb-2">Use AI to create consistent file templates:</p>
                    <CodeExample
                      language="text"
                      code={`Create a React component template that includes:
- TypeScript interface for props
- Default export
- JSDoc comments
- Basic structure`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Template Examples</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 font-medium">React Component:</p>
                        <CodeExample
                          language="tsx"
                          code={`interface ComponentNameProps {
  // Define props here
}

/**
 * Component description
 */
export const ComponentName: React.FC<ComponentNameProps> = ({
  // Destructure props
}) => {
  return (
    <div>
      {/* Component content */}
    </div>
  );
};`}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Custom Hook:</p>
                        <CodeExample
                          language="tsx"
                          code={`import { useState, useEffect } from 'react';

/**
 * Hook description
 */
export const useHookName = (param: string) => {
  const [state, setState] = useState<string>('');
  
  useEffect(() => {
    // Effect logic
  }, [param]);
  
  return { state, setState };
};`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <p className="text-gray-700 mb-6">
              Now that you understand file management, learn about code generation and advanced features:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/tutorial/basics/lessons/code-generation"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Code Generation</h3>
                <p className="text-gray-600 text-sm">Master AI-powered code generation techniques</p>
              </Link>
              <Link 
                href="/tutorial/advanced/lessons/cursor-settings"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Essential Settings</h3>
                <p className="text-gray-600 text-sm">Configure Cursor for maximum productivity</p>
              </Link>
            </div>
          </div>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}