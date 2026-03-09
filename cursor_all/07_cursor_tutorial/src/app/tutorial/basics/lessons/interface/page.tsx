import { TutorialNavigation } from "@/components/TutorialNavigation";
import { CodeExample } from "@/components/CodeExample";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Monitor, MessageSquare, Code2, FileText, Settings, Search, Zap, Brain, Palette } from "lucide-react";

export default function InterfaceLesson() {
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
            Understanding the Cursor Interface
          </h1>
          <p className="text-xl text-gray-600">
            Master Cursor's modern interface with AI-powered features, Composer, and advanced codebase context.
          </p>
        </div>

        <TutorialNavigation />

        <div className="space-y-8 mt-8">
          {/* Interface Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200">
            <div className="flex items-center mb-6">
              <Monitor className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Interface Overview</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Cursor's interface is built on VS Code but enhanced with powerful AI features. Here's what makes it special:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-blue-600" />
                  AI-First Design
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI chat always accessible</li>
                  <li>• Composer for multi-file editing</li>
                  <li>• Context-aware suggestions</li>
                  <li>• Smart code completion</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Code2 className="w-5 h-5 mr-2 text-green-600" />
                  Enhanced Development
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Familiar VS Code layout</li>
                  <li>• All VS Code extensions work</li>
                  <li>• Advanced codebase understanding</li>
                  <li>• Integrated AI tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Interface Components */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Main Interface Components</h2>
            </div>

            <div className="space-y-8">
              {/* Activity Bar */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Activity Bar (Left Side)</h3>
                <p className="text-gray-600 mb-4">
                  The activity bar contains essential navigation and AI features:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                        <FileText className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Explorer</div>
                        <div className="text-sm text-gray-500">File and folder navigation</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                        <Search className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Search</div>
                        <div className="text-sm text-gray-500">Find in files and codebase</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">AI Chat</div>
                        <div className="text-sm text-gray-500">Chat with Claude 4.5 Sonnet</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                        <Code2 className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Composer</div>
                        <div className="text-sm text-gray-500">Multi-file AI editing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Editor Area */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Editor Area (Center)</h3>
                <p className="text-gray-600 mb-4">
                  The main editing area with enhanced AI features:
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>AI Code Completion:</strong> Real-time suggestions as you type</li>
                    <li>• <strong>Inline AI Chat:</strong> Right-click for context-specific AI help</li>
                    <li>• <strong>Code Explanation:</strong> Hover over code for AI explanations</li>
                    <li>• <strong>Smart Refactoring:</strong> AI-powered code improvements</li>
                    <li>• <strong>Error Detection:</strong> AI identifies potential issues</li>
                  </ul>
                </div>
              </div>

              {/* Sidebar Panels */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sidebar Panels (Right Side)</h3>
                <p className="text-gray-600 mb-4">
                  Additional panels for development tools and AI features:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
                        <Zap className="w-4 h-4 text-yellow-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Problems</div>
                        <div className="text-sm text-gray-500">Errors and warnings</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                        <Settings className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Extensions</div>
                        <div className="text-sm text-gray-500">Installed extensions</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                        <Brain className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">AI Context</div>
                        <div className="text-sm text-gray-500">Codebase understanding</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center">
                        <Palette className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Themes</div>
                        <div className="text-sm text-gray-500">Visual customization</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Chat Interface */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900">AI Chat Interface</h2>
            </div>

            <p className="text-gray-600 mb-6">
              The AI Chat is your primary interface for interacting with Claude 4.5 Sonnet. Access it with Cmd+L (Mac) or Ctrl+L (Windows/Linux).
            </p>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Chat Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Basic Features:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Natural language conversations</li>
                      <li>• Code generation and explanation</li>
                      <li>• Debugging assistance</li>
                      <li>• Project-wide context understanding</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Advanced Features:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• @-mentions for files/functions</li>
                      <li>• Codebase-wide searches</li>
                      <li>• Multi-file operations</li>
                      <li>• Context-aware suggestions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example Chat Prompts</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Code Generation:</p>
                    <CodeExample
                      language="text"
                      code={`Create a React hook for managing form state with validation`}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Code Explanation:</p>
                    <CodeExample
                      language="text"
                      code={`Explain this function and suggest improvements: [paste your code]`}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">File Reference:</p>
                    <CodeExample
                      language="text"
                      code={`@components/Button.tsx How can I make this button more accessible?`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Composer Interface */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Composer Interface</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Composer is Cursor's revolutionary multi-file editing feature that understands your entire codebase context.
            </p>

            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How Composer Works</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Context Understanding:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Analyzes entire project structure</li>
                      <li>• Understands imports and dependencies</li>
                      <li>• Maintains consistency across files</li>
                      <li>• Follows project patterns and conventions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Multi-file Operations:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Create multiple related files</li>
                      <li>• Update existing files together</li>
                      <li>• Refactor across the codebase</li>
                      <li>• Generate complete features</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Composer Examples</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Create a complete feature:</p>
                    <CodeExample
                      language="text"
                      code={`Create a user authentication system with:
- Login component
- Register component  
- Auth context
- Protected route wrapper
- API functions
- TypeScript types`}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Refactor existing code:</p>
                    <CodeExample
                      language="text"
                      code={`Refactor the user management system to use Redux Toolkit instead of useState. Update all related components and create the necessary store files.`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Essential Keyboard Shortcuts</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Features</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Open AI Chat</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+L</kbd>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Open Composer</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+I</kbd>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Accept AI Suggestion</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Tab</kbd>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Reject AI Suggestion</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Esc</kbd>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Quick File Open</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+P</kbd>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Command Palette</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+P</kbd>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Go to Definition</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">F12</kbd>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Find in Files</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+F</kbd>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customization */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                5
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Interface Customization</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Customize Cursor's interface to match your workflow and preferences.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Themes and Appearance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Built-in Themes:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Dark+ (default dark)</li>
                      <li>• Light+ (default light)</li>
                      <li>• High Contrast Dark</li>
                      <li>• High Contrast Light</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Popular Extensions:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• One Dark Pro</li>
                      <li>• Material Theme</li>
                      <li>• Monokai Pro</li>
                      <li>• Dracula Official</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Layout Customization</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Panel Arrangement:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Move panels to different sides</li>
                      <li>• Resize panels and editor</li>
                      <li>• Toggle panel visibility</li>
                      <li>• Customize panel order</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Editor Settings:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Font family and size</li>
                      <li>• Line height and spacing</li>
                      <li>• Tab size and indentation</li>
                      <li>• Word wrap settings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <p className="text-gray-700 mb-6">
              Now that you understand Cursor's interface, learn how to use its AI features effectively:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/tutorial/basics/lessons/ai-commands"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">AI Commands & Features</h3>
                <p className="text-gray-600 text-sm">Master AI chat, Composer, and code generation</p>
              </Link>
              <Link 
                href="/tutorial/basics/lessons/file-management"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">File Management</h3>
                <p className="text-gray-600 text-sm">Learn efficient file and project management</p>
              </Link>
            </div>
          </div>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}