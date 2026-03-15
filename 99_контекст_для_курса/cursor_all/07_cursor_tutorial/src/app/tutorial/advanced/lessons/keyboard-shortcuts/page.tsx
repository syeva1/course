import { TutorialNavigation } from "@/components/TutorialNavigation";
import Link from "next/link";
import { ArrowLeft, Keyboard, Zap, Trophy, Brain } from "lucide-react";

export default function KeyboardShortcutsPage() {
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
            Cursor Keyboard Shortcuts - Power User Guide
          </h1>
          <p className="text-xl text-gray-600">
            Master all essential Cursor keyboard shortcuts and productivity hacks for 10x faster development
          </p>
        </div>

        <TutorialNavigation />

        <div className="prose prose-lg max-w-none mt-8">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 mb-8">
          <h3 className="text-purple-900 mt-0 flex items-center">
            <Keyboard className="w-6 h-6 mr-2" />
            Why Keyboard Shortcuts Matter
          </h3>
          <p className="mb-0">
            <strong>Power users are 50-70% faster</strong> than mouse users. Master these shortcuts and you&apos;ll spend less time clicking and more time coding.
          </p>
        </div>

        <h2>⚡ The Essential 10 - Learn These First</h2>
        <p>These 10 shortcuts cover 90% of your Cursor workflow:</p>

        <div className="bg-white border-2 border-blue-200 rounded-lg overflow-hidden my-8 shadow-md">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold">#</th>
                <th className="px-6 py-4 text-left font-bold">Action</th>
                <th className="px-6 py-4 text-left font-bold">Mac</th>
                <th className="px-6 py-4 text-left font-bold">Win/Linux</th>
                <th className="px-6 py-4 text-left font-bold">Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-blue-50 transition">
                <td className="px-6 py-4 font-bold text-blue-600">1</td>
                <td className="px-6 py-4 font-semibold text-gray-900">Tab Completion</td>
                <td className="px-6 py-4 font-mono text-blue-600">Tab</td>
                <td className="px-6 py-4 font-mono text-blue-600">Tab</td>
                <td className="px-6 py-4 text-sm">30-50% faster coding</td>
              </tr>
              <tr className="hover:bg-purple-50 transition">
                <td className="px-6 py-4 font-bold text-purple-600">2</td>
                <td className="px-6 py-4 font-semibold text-gray-900">Inline Edit</td>
                <td className="px-6 py-4 font-mono text-purple-600">Cmd+K</td>
                <td className="px-6 py-4 font-mono text-purple-600">Ctrl+K</td>
                <td className="px-6 py-4 text-sm">Instant refactoring</td>
              </tr>
              <tr className="hover:bg-green-50 transition">
                <td className="px-6 py-4 font-bold text-green-600">3</td>
                <td className="px-6 py-4 font-semibold text-gray-900">AI Chat</td>
                <td className="px-6 py-4 font-mono text-green-600">Cmd+L</td>
                <td className="px-6 py-4 font-mono text-green-600">Ctrl+L</td>
                <td className="px-6 py-4 text-sm">Ask anything</td>
              </tr>
              <tr className="hover:bg-orange-50 transition">
                <td className="px-6 py-4 font-bold text-orange-600">4</td>
                <td className="px-6 py-4 font-semibold text-gray-900">Composer</td>
                <td className="px-6 py-4 font-mono text-orange-600">Cmd+I</td>
                <td className="px-6 py-4 font-mono text-orange-600">Ctrl+I</td>
                <td className="px-6 py-4 text-sm">Multi-file editing</td>
              </tr>
              <tr className="hover:bg-pink-50 transition">
                <td className="px-6 py-4 font-bold text-pink-600">5</td>
                <td className="px-6 py-4 font-semibold text-gray-900">Command Palette</td>
                <td className="px-6 py-4 font-mono text-pink-600">Cmd+Shift+P</td>
                <td className="px-6 py-4 font-mono text-pink-600">Ctrl+Shift+P</td>
                <td className="px-6 py-4 text-sm">Access everything</td>
              </tr>
              <tr className="hover:bg-indigo-50 transition">
                <td className="px-6 py-4 font-bold text-indigo-600">6</td>
                <td className="px-6 py-4 font-semibold text-gray-900">Quick File Open</td>
                <td className="px-6 py-4 font-mono text-indigo-600">Cmd+P</td>
                <td className="px-6 py-4 font-mono text-indigo-600">Ctrl+P</td>
                <td className="px-6 py-4 text-sm">Jump to any file</td>
              </tr>
              <tr className="hover:bg-yellow-50 transition">
                <td className="px-6 py-4 font-bold text-yellow-600">7</td>
                <td className="px-6 py-4 font-semibold text-gray-900">Global Search</td>
                <td className="px-6 py-4 font-mono text-yellow-600">Cmd+Shift+F</td>
                <td className="px-6 py-4 font-mono text-yellow-600">Ctrl+Shift+F</td>
                <td className="px-6 py-4 text-sm">Find in project</td>
              </tr>
              <tr className="hover:bg-red-50 transition">
                <td className="px-6 py-4 font-bold text-red-600">8</td>
                <td className="px-6 py-4 font-semibold text-gray-900">Multi-cursor</td>
                <td className="px-6 py-4 font-mono text-red-600">Cmd+D</td>
                <td className="px-6 py-4 font-mono text-red-600">Ctrl+D</td>
                <td className="px-6 py-4 text-sm">Select next match</td>
              </tr>
              <tr className="hover:bg-teal-50 transition">
                <td className="px-6 py-4 font-bold text-teal-600">9</td>
                <td className="px-6 py-4 font-semibold text-gray-900">Go to Definition</td>
                <td className="px-6 py-4 font-mono text-teal-600">F12</td>
                <td className="px-6 py-4 font-mono text-teal-600">F12</td>
                <td className="px-6 py-4 text-sm">Jump to code</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-bold text-gray-600">10</td>
                <td className="px-6 py-4 font-semibold text-gray-900">Settings</td>
                <td className="px-6 py-4 font-mono text-gray-600">Cmd+,</td>
                <td className="px-6 py-4 font-mono text-gray-600">Ctrl+,</td>
                <td className="px-6 py-4 text-sm">Configure Cursor</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>🎯 AI-Specific Shortcuts</h2>
        <p>Cursor&apos;s unique AI shortcuts that set it apart:</p>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Action</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Mac</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Win/Linux</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">When to Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-blue-50">
                <td className="px-6 py-4 font-medium text-gray-900">Accept suggestion</td>
                <td className="px-6 py-4 font-mono text-blue-600">Tab</td>
                <td className="px-6 py-4 font-mono text-blue-600">Tab</td>
                <td className="px-6 py-4 text-gray-600">Accept full AI completion</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-6 py-4 font-medium text-gray-900">Accept word</td>
                <td className="px-6 py-4 font-mono text-blue-600">Cmd+→</td>
                <td className="px-6 py-4 font-mono text-blue-600">Ctrl+→</td>
                <td className="px-6 py-4 text-gray-600">Accept one word at a time</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-6 py-4 font-medium text-gray-900">Next suggestion</td>
                <td className="px-6 py-4 font-mono text-blue-600">Alt+]</td>
                <td className="px-6 py-4 font-mono text-blue-600">Alt+]</td>
                <td className="px-6 py-4 text-gray-600">Cycle to next alternative</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-6 py-4 font-medium text-gray-900">Previous suggestion</td>
                <td className="px-6 py-4 font-mono text-blue-600">Alt+[</td>
                <td className="px-6 py-4 font-mono text-blue-600">Alt+[</td>
                <td className="px-6 py-4 text-gray-600">Cycle to previous alternative</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-6 py-4 font-medium text-gray-900">Reject suggestion</td>
                <td className="px-6 py-4 font-mono text-blue-600">Esc</td>
                <td className="px-6 py-4 font-mono text-blue-600">Esc</td>
                <td className="px-6 py-4 text-gray-600">Dismiss current suggestion</td>
              </tr>
              <tr className="hover:bg-purple-50">
                <td className="px-6 py-4 font-medium text-gray-900">New chat</td>
                <td className="px-6 py-4 font-mono text-purple-600">Cmd+Shift+L</td>
                <td className="px-6 py-4 font-mono text-purple-600">Ctrl+Shift+L</td>
                <td className="px-6 py-4 text-gray-600">Start fresh conversation</td>
              </tr>
              <tr className="hover:bg-purple-50">
                <td className="px-6 py-4 font-medium text-gray-900">Apply chat code</td>
                <td className="px-6 py-4 font-mono text-purple-600">Cmd+Enter</td>
                <td className="px-6 py-4 font-mono text-purple-600">Ctrl+Enter</td>
                <td className="px-6 py-4 text-gray-600">Apply AI-generated code</td>
              </tr>
              <tr className="hover:bg-purple-50">
                <td className="px-6 py-4 font-medium text-gray-900">Reject changes</td>
                <td className="px-6 py-4 font-mono text-purple-600">Cmd+Backspace</td>
                <td className="px-6 py-4 font-mono text-purple-600">Ctrl+Backspace</td>
                <td className="px-6 py-4 text-gray-600">Discard AI changes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>✏️ Code Editing Shortcuts</h2>
        <p>Essential shortcuts for fast code manipulation:</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Selection & Navigation</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Select next occurrence</span>
                <code className="font-mono text-blue-600">Cmd+D / Ctrl+D</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Select all occurrences</span>
                <code className="font-mono text-blue-600">Cmd+Shift+L / Ctrl+Shift+L</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Expand selection</span>
                <code className="font-mono text-blue-600">Alt+Shift+→</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Shrink selection</span>
                <code className="font-mono text-blue-600">Alt+Shift+←</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Go to line</span>
                <code className="font-mono text-blue-600">Ctrl+G</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Go back</span>
                <code className="font-mono text-blue-600">Ctrl+- / Alt+←</code>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Line Operations</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Move line up</span>
                <code className="font-mono text-green-600">Alt+↑</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Move line down</span>
                <code className="font-mono text-green-600">Alt+↓</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Copy line up</span>
                <code className="font-mono text-green-600">Shift+Alt+↑</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Copy line down</span>
                <code className="font-mono text-green-600">Shift+Alt+↓</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Delete line</span>
                <code className="font-mono text-green-600">Cmd+Shift+K / Ctrl+Shift+K</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Toggle comment</span>
                <code className="font-mono text-green-600">Cmd+/ / Ctrl+/</code>
              </div>
            </div>
          </div>
        </div>

        <h2>📁 File & Project Shortcuts</h2>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Action</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Mac</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Win/Linux</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">New file</td>
                <td className="px-6 py-4 font-mono text-blue-600">Cmd+N</td>
                <td className="px-6 py-4 font-mono text-blue-600">Ctrl+N</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">Save file</td>
                <td className="px-6 py-4 font-mono text-blue-600">Cmd+S</td>
                <td className="px-6 py-4 font-mono text-blue-600">Ctrl+S</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">Save all</td>
                <td className="px-6 py-4 font-mono text-blue-600">Cmd+Alt+S</td>
                <td className="px-6 py-4 font-mono text-blue-600">Ctrl+K S</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">Close file</td>
                <td className="px-6 py-4 font-mono text-blue-600">Cmd+W</td>
                <td className="px-6 py-4 font-mono text-blue-600">Ctrl+W</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">Reopen closed file</td>
                <td className="px-6 py-4 font-mono text-blue-600">Cmd+Shift+T</td>
                <td className="px-6 py-4 font-mono text-blue-600">Ctrl+Shift+T</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">Toggle sidebar</td>
                <td className="px-6 py-4 font-mono text-blue-600">Cmd+B</td>
                <td className="px-6 py-4 font-mono text-blue-600">Ctrl+B</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">Toggle terminal</td>
                <td className="px-6 py-4 font-mono text-blue-600">Ctrl+`</td>
                <td className="px-6 py-4 font-mono text-blue-600">Ctrl+`</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">Split editor</td>
                <td className="px-6 py-4 font-mono text-blue-600">Cmd+\\</td>
                <td className="px-6 py-4 font-mono text-blue-600">Ctrl+\\</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>🔍 Search & Replace Shortcuts</h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Search</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Find in file</span>
                <code className="font-mono text-orange-600">Cmd+F / Ctrl+F</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Find in project</span>
                <code className="font-mono text-orange-600">Cmd+Shift+F / Ctrl+Shift+F</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Find next</span>
                <code className="font-mono text-orange-600">Cmd+G / F3</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Find previous</span>
                <code className="font-mono text-orange-600">Cmd+Shift+G / Shift+F3</code>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Replace</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Replace in file</span>
                <code className="font-mono text-purple-600">Cmd+H / Ctrl+H</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Replace in project</span>
                <code className="font-mono text-purple-600">Cmd+Shift+H / Ctrl+Shift+H</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Replace next</span>
                <code className="font-mono text-purple-600">Cmd+Alt+Enter</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Replace all</span>
                <code className="font-mono text-purple-600">Cmd+Enter</code>
              </div>
            </div>
          </div>
        </div>

        <h2>🏆 Pro Productivity Tips</h2>

        <div className="space-y-6 my-8">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500 p-6 rounded">
            <div className="flex items-start">
              <Trophy className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-900 mt-0">Tip #1: Chain Commands</h4>
                <p className="text-sm text-green-800 mb-0">
                  Use Command Palette (Cmd+Shift+P) → type what you want → press Enter. 
                  Way faster than hunting through menus. Examples: "format document", "change language mode", "reload window"
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded">
            <div className="flex items-start">
              <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-900 mt-0">Tip #2: Multi-Cursor Magic</h4>
                <p className="text-sm text-blue-800 mb-0">
                  Hold Alt/Option and click to place multiple cursors. Or use Cmd+D repeatedly to select next occurrence. 
                  Edit 10 lines at once instead of one-by-one. <strong>Saves hours.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded">
            <div className="flex items-start">
              <Brain className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-purple-900 mt-0">Tip #3: Keyboard-First Workflow</h4>
                <p className="text-sm text-purple-800 mb-0">
                  Challenge: Go 1 hour without using your mouse. Force yourself to use shortcuts. 
                  After a week, you&apos;ll be 2x faster. After a month, you&apos;ll never go back.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded">
            <div className="flex items-start">
              <Keyboard className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-orange-900 mt-0">Tip #4: Custom Keybindings</h4>
                <p className="text-sm text-orange-800 mb-0">
                  Open Keyboard Shortcuts (Cmd+K Cmd+S) and customize. Map frequently-used commands to easier keys. 
                  Example: Map "Format Document" to Cmd+Shift+F for one-key formatting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2>📚 Practice Challenge</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="text-yellow-900 mt-0">7-Day Shortcut Challenge</h4>
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-yellow-900">Day 1-2: Master the Essential 10</p>
            <p className="font-semibold text-yellow-900">Day 3-4: Add AI-specific shortcuts</p>
            <p className="font-semibold text-yellow-900">Day 5: Code editing shortcuts</p>
            <p className="font-semibold text-yellow-900">Day 6: File & project shortcuts</p>
            <p className="font-semibold text-yellow-900">Day 7: Challenge day - no mouse!</p>
            <p className="text-yellow-800 mt-4">
              <strong>Result:</strong> After 7 days, you&apos;ll be 50-70% faster. After 30 days, keyboard shortcuts will be muscle memory.
            </p>
          </div>
        </div>

        <h2>🔗 Next Steps</h2>
        <p>
          Now that you know the shortcuts, learn advanced workflow optimization:{" "}
          <a href="/tutorial/advanced/lessons/workflow-optimization" className="text-blue-600 hover:text-blue-800">
            Workflow Optimization →
          </a>
        </p>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}

