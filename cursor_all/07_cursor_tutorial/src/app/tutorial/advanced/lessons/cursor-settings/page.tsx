import { TutorialNavigation } from "@/components/TutorialNavigation";
import { CodeExample } from "@/components/CodeExample";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Settings, Monitor, Keyboard, Zap, Shield, Palette, Code2, Brain } from "lucide-react";

export default function CursorSettingsLesson() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <TutorialNavigation />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Essential Cursor Settings for Maximum Productivity
          </h1>
          <p className="text-xl text-gray-600">
            Master the most functional settings in Cursor to supercharge your AI-assisted development workflow.
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-blue-900">Why Settings Matter</h2>
            </div>
            <p className="text-blue-800">
              The right Cursor settings can dramatically improve your development speed, AI interaction quality, 
              and overall coding experience. This tutorial covers the most impactful settings that every developer should configure.
            </p>
          </div>

          {/* AI Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 text-purple-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">AI Model & Behavior Settings</h2>
                <p className="text-gray-600">Configure how Cursor's AI interacts with your code</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. AI Model Selection</h3>
                <p className="text-gray-700 mb-4">
                  Choose the right AI model for your needs. Cursor supports multiple models with different strengths:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Claude 4.5 Sonnet:</strong> Best for complex reasoning, code generation, and debugging
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>GPT-4:</strong> Excellent for creative coding and diverse programming languages
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>GPT-4o:</strong> Fast and efficient for quick tasks and simple code changes
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Context Window Settings</h3>
                <p className="text-gray-700 mb-4">
                  Configure how much code context the AI can see and work with:
                </p>
                <CodeExample
                  language="json"
                  code={`{
  "cursor.ai.contextWindow": "large", // small, medium, large
  "cursor.ai.includeImports": true,
  "cursor.ai.includeComments": true,
  "cursor.ai.maxFileSize": 10000
}`}
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. AI Response Behavior</h3>
                <p className="text-gray-700 mb-4">
                  Control how the AI responds to your requests:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Auto-apply suggestions:</strong> Automatically apply simple changes</li>
                  <li>• <strong>Show reasoning:</strong> Display AI's thought process</li>
                  <li>• <strong>Generate tests:</strong> Automatically create unit tests for new code</li>
                  <li>• <strong>Suggest improvements:</strong> Proactively suggest code optimizations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Editor Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Code2 className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Editor & Code Settings</h2>
                <p className="text-gray-600">Optimize your coding environment for maximum efficiency</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Code Formatting & Linting</h3>
                <CodeExample
                  language="json"
                  code={`{
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "eslint.autoFixOnSave": true,
  "prettier.enable": true
}`}
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. IntelliSense & Autocomplete</h3>
                <CodeExample
                  language="json"
                  code={`{
  "editor.suggestOnTriggerCharacters": true,
  "editor.acceptSuggestionOnCommitCharacter": true,
  "editor.acceptSuggestionOnEnter": "on",
  "editor.tabCompletion": "on",
  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": true
  }
}`}
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. File Management</h3>
                <CodeExample
                  language="json"
                  code={`{
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false
}`}
                />
              </div>
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Keyboard className="w-8 h-8 text-orange-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Essential Keyboard Shortcuts</h2>
                <p className="text-gray-600">Master these shortcuts for lightning-fast development</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">AI Interaction</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Open AI Chat</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+L</kbd>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">AI Code Generation</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+K</kbd>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">AI Edit Selection</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+K</kbd>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Accept AI Suggestion</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Tab</kbd>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Navigation & Editing</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Quick File Open</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+P</kbd>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Go to Definition</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">F12</kbd>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Find in Files</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+F</kbd>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Toggle Terminal</span>
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Ctrl+`</kbd>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Theme & Appearance */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Palette className="w-8 h-8 text-pink-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Theme & Appearance</h2>
                <p className="text-gray-600">Customize your visual experience for better focus and productivity</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommended Themes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Dark+ (default dark):</strong> Easy on the eyes for long coding sessions</li>
                  <li>• <strong>One Dark Pro:</strong> Popular dark theme with great syntax highlighting</li>
                  <li>• <strong>Material Theme:</strong> Google's Material Design inspired theme</li>
                  <li>• <strong>Monokai Pro:</strong> Classic theme with excellent contrast</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Font & Typography</h3>
                <CodeExample
                  language="json"
                  code={`{
  "editor.fontFamily": "'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace",
  "editor.fontSize": 14,
  "editor.fontLigatures": true,
  "editor.lineHeight": 1.5,
  "editor.letterSpacing": 0.5
}`}
                />
              </div>
            </div>
          </div>

          {/* Performance Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-yellow-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Performance Optimization</h2>
                <p className="text-gray-600">Keep Cursor running smoothly even with large projects</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Memory & CPU Settings</h3>
                <CodeExample
                  language="json"
                  code={`{
  "typescript.preferences.includePackageJsonAutoImports": "off",
  "typescript.suggest.autoImports": false,
  "typescript.updateImportsOnFileMove.enabled": "never",
  "search.followSymlinks": false,
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/dist/**": true
  }
}`}
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Performance</h3>
                <CodeExample
                  language="json"
                  code={`{
  "cursor.ai.maxTokens": 4000,
  "cursor.ai.temperature": 0.7,
  "cursor.ai.streaming": true,
  "cursor.ai.cacheResponses": true
}`}
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-green-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Security & Privacy</h2>
                <p className="text-gray-600">Protect your code and maintain privacy</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Code Privacy Settings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Exclude sensitive files:</strong> Add .env, config files to .cursorignore</li>
                  <li>• <strong>Disable telemetry:</strong> Turn off usage data collection if desired</li>
                  <li>• <strong>Local processing:</strong> Use local models for sensitive projects</li>
                  <li>• <strong>Code encryption:</strong> Enable encryption for cloud-synced settings</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommended .cursorignore</h3>
                <CodeExample
                  language="text"
                  code={`# Sensitive files
.env
.env.local
.env.production
config/secrets.js
*.key
*.pem

# Dependencies
node_modules/
vendor/
bower_components/

# Build outputs
dist/
build/
.next/
out/

# Logs
*.log
logs/

# OS generated files
.DS_Store
Thumbs.db`}
                />
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-xl font-semibold text-purple-900">Pro Tips for Maximum Productivity</h2>
            </div>
            <div className="space-y-4 text-purple-800">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p><strong>Use workspaces:</strong> Create separate workspaces for different projects to maintain clean settings</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p><strong>Sync settings:</strong> Enable settings sync across devices for consistent experience</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p><strong>Custom snippets:</strong> Create custom code snippets for frequently used patterns</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p><strong>Extension management:</strong> Keep only essential extensions to maintain performance</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h2>
            <p className="text-gray-700 mb-4">
              Now that you've configured Cursor for maximum productivity, explore these advanced topics:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/tutorial/advanced/lessons/custom-configurations"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Custom Configurations</h3>
                <p className="text-gray-600 text-sm">Learn to create custom AI prompts and workflows</p>
              </Link>
              <Link 
                href="/tutorial/advanced/lessons/workflow-optimization"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Workflow Optimization</h3>
                <p className="text-gray-600 text-sm">Streamline your development process with AI</p>
              </Link>
            </div>
          </div>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}
