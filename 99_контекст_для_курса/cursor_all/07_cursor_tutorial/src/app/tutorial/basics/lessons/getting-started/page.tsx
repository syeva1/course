import Link from "next/link";
import { Zap, Clock, CheckCircle, ArrowRight, Download, Play, Sparkles } from "lucide-react";
import { TutorialNavigation } from "@/components/TutorialNavigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started with Cursor 1.7",
  description: "Be 10x faster in 10 minutes. Real quick wins, no fluff.",
};

export default function GettingStartedLesson() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href="/tutorial/basics"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4 inline-block"
          >
            ← Back to Basics
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started with Cursor 1.7</h1>
          <p className="text-xl text-gray-600">Be 10x faster in 10 minutes. Real quick wins, no fluff.</p>
        </div>

        <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 mb-8">
          <h3 className="text-green-900 mt-0 flex items-center">
            <Zap className="w-6 h-6 mr-2" />
            Why Cursor?
          </h3>
          <p className="mb-0 text-lg">
            Cursor is <strong>VS Code + AI superpowers</strong>. Write code 30-50% faster with Tab completion, 
            fix bugs in seconds with Cmd+K, and build entire features with Composer. 
            You'll be productive in 10 minutes.
          </p>
        </div>

        <h2>⚡ The 10-Minute Quick Start</h2>
        <p>Follow these 4 steps to go from zero to productive. Total time: ~10 minutes.</p>

        {/* Step 1: Install */}
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-md my-8">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 text-xl">1</div>
            <div>
              <h3 className="m-0 text-blue-900">Install Cursor</h3>
              <p className="m-0 text-sm text-gray-600 flex items-center">
                <Clock className="w-4 h-4 mr-1" /> 2 minutes
              </p>
            </div>
          </div>

          <ol className="mb-4 space-y-2">
            <li>Go to <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">cursor.sh</a></li>
            <li>Click <strong>&quot;Download&quot;</strong> (auto-detects your OS)</li>
            <li>Install and open Cursor</li>
            <li>Sign in with GitHub (recommended) or email</li>
          </ol>

          <div className="bg-blue-50 rounded p-4 text-sm">
            <p className="m-0"><strong>💡 Pro Tip:</strong> Cursor is a fork of VS Code. If you use VS Code, you can import all your settings, extensions, and themes on first launch!</p>
          </div>
        </div>

        {/* Step 2: First Win */}
        <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-md my-8">
          <div className="flex items-center mb-4">
            <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 text-xl">2</div>
            <div>
              <h3 className="m-0 text-green-900">Your First Quick Win - Tab Completion</h3>
              <p className="m-0 text-sm text-gray-600 flex items-center">
                <Clock className="w-4 h-4 mr-1" /> 2 minutes
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-4">Let&apos;s write a function in <strong>30 seconds</strong> that would normally take 3 minutes:</p>

          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm mb-4">
            <div className="text-green-400">// 1. Create a new file: utils.ts</div>
            <div className="text-green-400">// 2. Type this line and press Tab to accept the AI suggestion:</div>
            <div className="text-white mt-3">export function formatCurrency(amount</div>
            <div className="text-blue-300 mt-3 italic">// ✨ Cursor suggests (press Tab to accept):</div>
            <div className="text-green-300 mt-1">: number, currency: string = &apos;USD&apos;): string {"{"}
              <br />
              <span className="ml-4">return new Intl.NumberFormat(&apos;en-US&apos;, {"{"}</span>
              <br />
              <span className="ml-8">style: &apos;currency&apos;,</span>
              <br />
              <span className="ml-8">currency,</span>
              <br />
              <span className="ml-4">{"})"}.format(amount);</span>
              <br />
              {"}"}
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <p className="m-0 text-sm">You typed 29 characters</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <p className="m-0 text-sm">AI wrote 174 characters for you</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <p className="m-0 text-sm">Saved ~2.5 minutes</p>
            </div>
          </div>

          <div className="bg-green-50 rounded p-4">
            <p className="m-0 text-sm"><strong>🎯 What just happened?</strong> Tab completion predicted your entire function based on the name. This works for React components, API calls, database queries, tests - everything!</p>
          </div>
        </div>

        {/* Step 3: Second Win */}
        <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow-md my-8">
          <div className="flex items-center mb-4">
            <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 text-xl">3</div>
            <div>
              <h3 className="m-0 text-purple-900">Your Second Win - Cmd+K Inline Edit</h3>
              <p className="m-0 text-sm text-gray-600 flex items-center">
                <Clock className="w-4 h-4 mr-1" /> 3 minutes
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-4">Edit code by <strong>describing what you want in English</strong>:</p>

          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm mb-4">
            <div className="text-green-400">// 1. Select this code:</div>
            <div className="text-white mt-2">
              function getData(url) {"{"}
              <br />
              <span className="ml-4">return fetch(url).then(r =&gt; r.json());</span>
              <br />
              {"}"}
            </div>
            <div className="text-yellow-400 mt-4">// 2. Press Cmd+K (Mac) or Ctrl+K (Windows)</div>
            <div className="text-yellow-400">// 3. Type: &quot;add try-catch error handling and TypeScript types&quot;</div>
            <div className="text-yellow-400">// 4. Press Enter</div>
            <div className="text-blue-400 mt-4">// ✨ Result:</div>
            <div className="text-green-300 mt-2">
              async function getData(url: string): Promise&lt;any&gt; {"{"}
              <br />
              <span className="ml-4">try {"{"}</span>
              <br />
              <span className="ml-8">const response = await fetch(url);</span>
              <br />
              <span className="ml-8">if (!response.ok) {"{"}</span>
              <br />
              <span className="ml-12">throw new Error(`HTTP error! status: ${"{response.status}"}`);</span>
              <br />
              <span className="ml-8">{"}"}</span>
              <br />
              <span className="ml-8">return await response.json();</span>
              <br />
              <span className="ml-4">{"}"} catch (error) {"{"}</span>
              <br />
              <span className="ml-8">console.error(&apos;Failed to fetch:&apos;, error);</span>
              <br />
              <span className="ml-8">throw error;</span>
              <br />
              <span className="ml-4">{"}"}</span>
              <br />
              {"}"}
            </div>
          </div>

          <div className="bg-purple-50 rounded p-4">
            <p className="m-0 text-sm"><strong>💪 Use Cmd+K for:</strong> Adding types, error handling, refactoring, converting syntax, adding comments, extracting functions, optimizing code - anything!</p>
          </div>
        </div>

        {/* Step 4: Third Win */}
        <div className="bg-white border-2 border-orange-200 rounded-lg p-6 shadow-md my-8">
          <div className="flex items-center mb-4">
            <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 text-xl">4</div>
            <div>
              <h3 className="m-0 text-orange-900">Your Third Win - Cmd+L AI Chat</h3>
              <p className="m-0 text-sm text-gray-600 flex items-center">
                <Clock className="w-4 h-4 mr-1" /> 3 minutes
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-4">Ask questions about your code, get debugging help, or learn new concepts:</p>

          <div className="space-y-4 mb-4">
            <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400">// Press Cmd+L (Mac) or Ctrl+L (Windows) and try:</div>
              <div className="text-blue-300 mt-3">
                How do I add authentication to a Next.js app?
              </div>
            </div>

            <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400">// Or ask about your code with @ symbols:</div>
              <div className="text-blue-300 mt-3">
                @package.json what testing libraries should I add?
              </div>
            </div>

            <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400">// Debug errors by pasting error messages:</div>
              <div className="text-red-300 mt-3">
                I&apos;m getting &quot;Cannot read property &apos;map&apos; of undefined&quot; - how do I fix it?
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded p-4">
            <p className="m-0 text-sm"><strong>🧠 Pro Tip:</strong> Use @ symbols to give context. Try @Files, @Folders, @Codebase, @Docs, and @Web for laser-accurate answers!</p>
          </div>
        </div>

        <h2>🎓 Real-World Workflow Example</h2>
        <p>Here&apos;s how a real developer uses Cursor to build a feature in 15 minutes:</p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-blue-900 mt-0">Task: Add a &quot;Contact Form&quot; to a React app</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <p className="m-0 text-sm font-semibold text-gray-900">Open Composer (Cmd+I)</p>
                <p className="m-0 text-sm text-gray-600">Type: &quot;Create a contact form with name, email, message fields. Add validation and a submit handler. Create ContactForm.tsx and types.ts&quot;</p>
                <p className="m-0 text-xs text-gray-500 mt-1">⏱️ 30 seconds to write prompt</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <p className="m-0 text-sm font-semibold text-gray-900">Review generated files</p>
                <p className="m-0 text-sm text-gray-600">Composer creates ContactForm.tsx with full validation, types.ts with TypeScript interfaces, and connects everything</p>
                <p className="m-0 text-xs text-gray-500 mt-1">⏱️ 20 seconds to review</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <p className="m-0 text-sm font-semibold text-gray-900">Refine with Cmd+K</p>
                <p className="m-0 text-sm text-gray-600">Select the form, Cmd+K, type: &quot;add loading state and success message&quot;</p>
                <p className="m-0 text-xs text-gray-500 mt-1">⏱️ 15 seconds</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
              <div>
                <p className="m-0 text-sm font-semibold text-gray-900">Test and style</p>
                <p className="m-0 text-sm text-gray-600">Use Tab completion to write CSS faster, Cmd+L to ask about accessibility best practices</p>
                <p className="m-0 text-xs text-gray-500 mt-1">⏱️ 2-3 minutes</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded p-4 mt-4">
            <p className="m-0 text-sm"><strong>Total time: ~5 minutes</strong> vs. 30-45 minutes manually. That&apos;s 6-9x faster!</p>
          </div>
        </div>

        <h2>⚡ Essential Keyboard Shortcuts</h2>
        <p>Memorize these 5 shortcuts - they&apos;re 90% of what you need:</p>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-6">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Shortcut</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Mac</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Windows/Linux</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Use For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              <tr className="hover:bg-blue-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Tab</td>
                <td className="px-6 py-4 font-mono text-blue-600">Tab</td>
                <td className="px-6 py-4 font-mono text-blue-600">Tab</td>
                <td className="px-6 py-4 text-gray-600">Accept AI code suggestions</td>
              </tr>
              <tr className="hover:bg-purple-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Inline Edit</td>
                <td className="px-6 py-4 font-mono text-purple-600">Cmd+K</td>
                <td className="px-6 py-4 font-mono text-purple-600">Ctrl+K</td>
                <td className="px-6 py-4 text-gray-600">Edit selected code</td>
              </tr>
              <tr className="hover:bg-green-50">
                <td className="px-6 py-4 font-semibold text-gray-900">AI Chat</td>
                <td className="px-6 py-4 font-mono text-green-600">Cmd+L</td>
                <td className="px-6 py-4 font-mono text-green-600">Ctrl+L</td>
                <td className="px-6 py-4 text-gray-600">Ask questions, debug</td>
              </tr>
              <tr className="hover:bg-orange-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Composer</td>
                <td className="px-6 py-4 font-mono text-orange-600">Cmd+I</td>
                <td className="px-6 py-4 font-mono text-orange-600">Ctrl+I</td>
                <td className="px-6 py-4 text-gray-600">Multi-file editing</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Settings</td>
                <td className="px-6 py-4 font-mono text-gray-600">Cmd+,</td>
                <td className="px-6 py-4 font-mono text-gray-600">Ctrl+,</td>
                <td className="px-6 py-4 text-gray-600">Configure Cursor</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>🚀 Quick Configuration Tips</h2>
        <p>Three settings to enable right now for the best experience:</p>

        <div className="space-y-4 my-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="m-0 text-sm"><strong>1. Enable Cursor Tab:</strong> Settings → Cursor Tab → ✅ Enable</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="m-0 text-sm"><strong>2. Set AI Model:</strong> Settings → Models → Choose &quot;claude-4.5-sonnet&quot; (best quality)</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0 text-sm"><strong>3. Enable Codebase Indexing:</strong> Settings → Features → ✅ Index codebase for @Codebase</p>
          </div>
        </div>

        <h2>💡 Common Beginner Mistakes</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h4 className="text-red-900 mt-0">❌ Don&apos;t Do This</h4>
            <ul className="mb-0 text-sm space-y-2">
              <li>Accepting every Tab suggestion blindly</li>
              <li>Using Chat instead of Cmd+K for edits</li>
              <li>Not using @ symbols for context</li>
              <li>Forgetting to test AI-generated code</li>
              <li>Not learning the keyboard shortcuts</li>
            </ul>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="text-green-900 mt-0">✅ Do This Instead</h4>
            <ul className="mb-0 text-sm space-y-2">
              <li>Review Tab suggestions before accepting</li>
              <li>Use Cmd+K for quick edits, Chat for questions</li>
              <li>Always add @Files/@Folders to prompts</li>
              <li>Test and review all generated code</li>
              <li>Practice shortcuts daily</li>
            </ul>
          </div>
        </div>

        <h2>🎯 What You&apos;ve Learned</h2>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 my-8">
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
              <p className="m-0">Installed Cursor and signed in</p>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
              <p className="m-0">Used Tab completion to write code 30-50% faster</p>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
              <p className="m-0">Used Cmd+K to edit code with natural language</p>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
              <p className="m-0">Used Cmd+L to ask questions and debug</p>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
              <p className="m-0">Learned the 5 essential keyboard shortcuts</p>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
              <p className="m-0">Saw a real-world workflow example</p>
            </div>
          </div>
        </div>

        <h2>🔗 Next Steps - Deep Dive into Features</h2>
        <p>You&apos;re now ready to master each feature individually. Here&apos;s the recommended path:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Link 
            href="/tutorial/features/lessons/tab-completion"
            className="block p-6 bg-white border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all no-underline"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="m-0 text-blue-900">Tab Completion</h3>
              <ArrowRight className="w-5 h-5 text-blue-600" />
            </div>
            <p className="m-0 text-sm text-gray-600">Master multi-line AI predictions</p>
          </Link>

          <Link 
            href="/tutorial/features/lessons/inline-edit"
            className="block p-6 bg-white border-2 border-purple-200 rounded-lg hover:border-purple-400 hover:shadow-lg transition-all no-underline"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="m-0 text-purple-900">Cmd+K Inline Edit</h3>
              <ArrowRight className="w-5 h-5 text-purple-600" />
            </div>
            <p className="m-0 text-sm text-gray-600">Surgical code edits with AI</p>
          </Link>

          <Link 
            href="/tutorial/features/lessons/ai-chat"
            className="block p-6 bg-white border-2 border-green-200 rounded-lg hover:border-green-400 hover:shadow-lg transition-all no-underline"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="m-0 text-green-900">Cmd+L AI Chat</h3>
              <ArrowRight className="w-5 h-5 text-green-600" />
            </div>
            <p className="m-0 text-sm text-gray-600">Your AI programming partner</p>
          </Link>

          <Link 
            href="/tutorial/features/lessons/composer"
            className="block p-6 bg-white border-2 border-orange-200 rounded-lg hover:border-orange-400 hover:shadow-lg transition-all no-underline"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="m-0 text-orange-900">Composer</h3>
              <ArrowRight className="w-5 h-5 text-orange-600" />
            </div>
            <p className="m-0 text-sm text-gray-600">Multi-file AI editing</p>
          </Link>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h3 className="text-yellow-900 mt-0 flex items-center">
            <Sparkles className="w-6 h-6 mr-2" />
            Start Coding Now!
          </h3>
          <p className="mb-0">
            You have everything you need to be 10x faster. Open a project and try Tab completion, Cmd+K, and Cmd+L on real code. 
            The more you use it, the faster you&apos;ll get!
          </p>
        </div>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}
