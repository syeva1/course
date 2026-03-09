import { TutorialNavigation } from "@/components/TutorialNavigation";
import { CodeExample } from "@/components/CodeExample";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Settings, Code2, Palette, Keyboard } from "lucide-react";

export default function CustomConfigurationsLesson() {
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
            Custom Configurations
          </h1>
          <p className="text-xl text-gray-600">
            Configure Cursor for your specific development needs and preferences.
          </p>
        </div>

        <TutorialNavigation />

        <div className="space-y-8 mt-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Settings className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Personalizing Your Cursor Experience</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Customizing Cursor's configuration allows you to tailor the AI assistance to your specific workflow, coding style, and project requirements.
            </p>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Configuration Areas</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>AI Model Settings:</strong> Choose the right AI model for your needs</li>
                <li><strong>Code Style Preferences:</strong> Configure formatting and linting rules</li>
                <li><strong>Keyboard Shortcuts:</strong> Customize shortcuts for your workflow</li>
                <li><strong>Theme and Appearance:</strong> Personalize the visual experience</li>
                <li><strong>Project-Specific Settings:</strong> Configure settings per project</li>
              </ul>
            </div>
          </div>

          {/* AI Model Configuration */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Model Configuration</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Choosing the Right Model</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">GPT-4 (Recommended)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Best for complex reasoning</li>
                        <li>• Excellent code generation</li>
                        <li>• Better context understanding</li>
                        <li>• Higher token limit</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">GPT-3.5 Turbo</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Faster responses</li>
                        <li>• Good for simple tasks</li>
                        <li>• Lower cost</li>
                        <li>• Sufficient for basic coding</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Configuration Example</h4>
                    <CodeExample
                      language="json"
                      title="settings.json - AI Configuration"
                      code={`{
  "cursor.ai.enabled": true,
  "cursor.ai.model": "gpt-4",
  "cursor.ai.maxTokens": 4000,
  "cursor.ai.temperature": 0.1,
  "cursor.ai.systemMessage": "You are an expert software developer. Provide clear, concise, and accurate code solutions.",
  "cursor.ai.includeCodeContext": true,
  "cursor.ai.includeFileContext": true
}`}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Temperature Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">0.0 - 0.3</span>
                      <p className="text-sm text-gray-600">Very focused, deterministic responses</p>
                    </div>
                    <span className="text-sm text-blue-600">Best for: Code generation, debugging</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">0.4 - 0.7</span>
                      <p className="text-sm text-gray-600">Balanced creativity and consistency</p>
                    </div>
                    <span className="text-sm text-green-600">Best for: General development tasks</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">0.8 - 1.0</span>
                      <p className="text-sm text-gray-600">More creative and varied responses</p>
                    </div>
                    <span className="text-sm text-purple-600">Best for: Brainstorming, exploration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Style Configuration */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Code Style Configuration</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Formatting and Linting</h3>
                <CodeExample
                  language="json"
                  title="settings.json - Code Style"
                  code={`{
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true,
    "source.removeUnusedImports": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true
}`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Language-Specific Settings</h3>
                <CodeExample
                  language="json"
                  title="settings.json - Language Settings"
                  code={`{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2
  },
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.tabSize": 4
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2
  }
}`}
                />
              </div>
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Custom Keyboard Shortcuts</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Creating Custom Shortcuts</h3>
                <CodeExample
                  language="json"
                  title="keybindings.json - Custom Shortcuts"
                  code={`[
  {
    "key": "cmd+shift+a",
    "command": "cursor.chat.focus",
    "when": "editorTextFocus"
  },
  {
    "key": "cmd+shift+k",
    "command": "cursor.edit",
    "when": "editorTextFocus"
  },
  {
    "key": "cmd+shift+d",
    "command": "cursor.debug",
    "when": "editorTextFocus"
  },
  {
    "key": "cmd+shift+t",
    "command": "workbench.action.terminal.new",
    "when": "editorTextFocus"
  }
]`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Useful Custom Shortcuts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Quick AI Chat</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+A</kbd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">AI Edit Mode</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+K</kbd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Debug with AI</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+D</kbd>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">New Terminal</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+T</kbd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Format Document</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+F</kbd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Toggle Sidebar</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+B</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Theme and Appearance */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Theme and Appearance</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommended Themes</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Dark+ (Default Dark)</h4>
                    <p className="text-sm text-gray-600 mb-2">Clean, professional dark theme</p>
                    <span className="text-xs text-blue-600">Best for: Long coding sessions</span>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">One Dark Pro</h4>
                    <p className="text-sm text-gray-600 mb-2">Popular dark theme with great syntax highlighting</p>
                    <span className="text-xs text-green-600">Best for: JavaScript/TypeScript</span>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Material Theme</h4>
                    <p className="text-sm text-gray-600 mb-2">Google Material Design inspired</p>
                    <span className="text-xs text-purple-600">Best for: Modern development</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Font Configuration</h3>
                <CodeExample
                  language="json"
                  title="settings.json - Font Settings"
                  code={`{
  "editor.fontFamily": "Fira Code, 'Cascadia Code', Consolas, monospace",
  "editor.fontSize": 14,
  "editor.fontLigatures": true,
  "editor.fontWeight": "400",
  "editor.lineHeight": 1.5,
  "terminal.integrated.fontFamily": "Fira Code, Consolas, monospace",
  "terminal.integrated.fontSize": 13
}`}
                />
              </div>
            </div>
          </div>

          {/* Project-Specific Settings */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project-Specific Settings</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Workspace Configuration</h3>
                <CodeExample
                  language="json"
                  title=".vscode/settings.json - Project Settings"
                  code={`{
  "cursor.ai.enabled": true,
  "cursor.ai.model": "gpt-4",
  "cursor.ai.includeCodeContext": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.next": true,
    "**/coverage": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.next": true
  },
  "typescript.preferences.includePackageJsonAutoImports": "auto"
}`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Team Configuration</h3>
                <p className="text-gray-600 mb-4">Share configuration with your team using workspace settings:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Create <code className="bg-gray-100 px-1 rounded">.vscode/settings.json</code> in your project root</li>
                  <li>Include AI model preferences and coding standards</li>
                  <li>Configure file exclusions and search patterns</li>
                  <li>Set up consistent formatting rules</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Configuration Complete! ⚙️</h2>
            <p className="text-gray-600 mb-6">
              You've learned how to customize Cursor for your specific needs. These configurations will make your development experience more efficient and enjoyable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tutorial/advanced/lessons/team-collaboration"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next Lesson: Team Collaboration
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
