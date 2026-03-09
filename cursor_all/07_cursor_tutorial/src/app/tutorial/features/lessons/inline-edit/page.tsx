import { TutorialNavigation } from "@/components/TutorialNavigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function InlineEditPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/tutorial/features" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Features
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cmd+K Inline Edit - Surgical Code Changes
          </h1>
          <p className="text-xl text-gray-600">
            Make precise AI-powered edits without leaving your code
          </p>
        </div>

        <TutorialNavigation />

        <div className="prose prose-lg max-w-none mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-blue-900 mt-0">💡 What You&apos;ll Learn</h3>
          <ul className="mb-0">
            <li>Use Cmd+K (Ctrl+K) for instant code modifications</li>
            <li>Write effective edit prompts for best results</li>
            <li>When to use inline edit vs. Chat vs. Tab completion</li>
            <li>Advanced techniques for refactoring and debugging</li>
          </ul>
        </div>

        <h2>🎯 What is Cmd+K Inline Edit?</h2>
        <p>
          <strong>Cmd+K</strong> (Ctrl+K on Windows/Linux) is Cursor&apos;s most precise tool. 
          It lets you select code and describe how to change it in plain English.
        </p>
        
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 my-8">
          <h4 className="text-purple-900 mt-0">🔑 The Magic Formula:</h4>
          <ol className="mb-0 text-lg">
            <li><strong>Select</strong> the code you want to change</li>
            <li>Press <code className="bg-purple-200 px-2 py-1 rounded">Cmd+K</code></li>
            <li><strong>Describe</strong> what you want in natural language</li>
            <li>Press <strong>Enter</strong> and watch the magic happen ✨</li>
          </ol>
        </div>

        <h2>⌨️ Essential Shortcuts</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-6">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Mac</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Windows/Linux</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>Open inline edit</strong></td>
                <td className="px-6 py-4 font-mono text-blue-600">Cmd+K</td>
                <td className="px-6 py-4 font-mono text-blue-600">Ctrl+K</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>Accept changes</strong></td>
                <td className="px-6 py-4 font-mono text-green-600">Cmd+Enter</td>
                <td className="px-6 py-4 font-mono text-green-600">Ctrl+Enter</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>Reject changes</strong></td>
                <td className="px-6 py-4 font-mono text-red-600">Cmd+Backspace</td>
                <td className="px-6 py-4 font-mono text-red-600">Ctrl+Backspace</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>Cancel</strong></td>
                <td className="px-6 py-4 font-mono text-gray-600">Esc</td>
                <td className="px-6 py-4 font-mono text-gray-600">Esc</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>🎯 Real-World Examples</h2>
        
        <h3>Example 1: Quick Refactoring</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-green-400">// Original code (select this):</div>
          <div className="text-white mt-2">
            function calc(a, b) {"{"}
            <br />
            <span className="ml-4">return a + b;</span>
            <br />
            {"}"}
          </div>
          <div className="text-yellow-400 mt-4">// Press Cmd+K and type: &quot;add TypeScript types&quot;</div>
          <div className="text-blue-400 mt-4">// Result:</div>
          <div className="text-green-300 mt-2">
            function calc(a: number, b: number): number {"{"}
            <br />
            <span className="ml-4">return a + b;</span>
            <br />
            {"}"}
          </div>
        </div>

        <h3>Example 2: Add Error Handling</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-green-400">// Original code:</div>
          <div className="text-white mt-2">
            const data = await fetch(url).then(r =&gt; r.json());
          </div>
          <div className="text-yellow-400 mt-4">// Cmd+K: &quot;add try-catch error handling&quot;</div>
          <div className="text-blue-400 mt-4">// Result:</div>
          <div className="text-green-300 mt-2">
            try {"{"}
            <br />
            <span className="ml-4">const response = await fetch(url);</span>
            <br />
            <span className="ml-4">if (!response.ok) throw new Error(&apos;Failed to fetch&apos;);</span>
            <br />
            <span className="ml-4">const data = await response.json();</span>
            <br />
            {"}"} catch (error) {"{"}
            <br />
            <span className="ml-4">console.error(&apos;Fetch error:&apos;, error);</span>
            <br />
            <span className="ml-4">throw error;</span>
            <br />
            {"}"}
          </div>
        </div>

        <h3>Example 3: Convert to Modern Syntax</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-green-400">// Old callback-based code:</div>
          <div className="text-white mt-2">
            fs.readFile(&apos;data.txt&apos;, function(err, data) {"{"}
            <br />
            <span className="ml-4">if (err) console.error(err);</span>
            <br />
            <span className="ml-4">console.log(data);</span>
            <br />
            {"}"});
          </div>
          <div className="text-yellow-400 mt-4">// Cmd+K: &quot;convert to async/await&quot;</div>
          <div className="text-blue-400 mt-4">// Result:</div>
          <div className="text-green-300 mt-2">
            try {"{"}
            <br />
            <span className="ml-4">const data = await fs.promises.readFile(&apos;data.txt&apos;);</span>
            <br />
            <span className="ml-4">console.log(data);</span>
            <br />
            {"}"} catch (err) {"{"}
            <br />
            <span className="ml-4">console.error(err);</span>
            <br />
            {"}"}
          </div>
        </div>

        <h2>✍️ Writing Effective Prompts</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="text-green-900 mt-0">✅ Good Prompts</h4>
            <ul className="mb-0 text-sm space-y-2">
              <li>&quot;add TypeScript types&quot;</li>
              <li>&quot;convert to arrow function&quot;</li>
              <li>&quot;add error handling&quot;</li>
              <li>&quot;optimize this loop&quot;</li>
              <li>&quot;add JSDoc comments&quot;</li>
              <li>&quot;make this function async&quot;</li>
              <li>&quot;extract to separate function&quot;</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h4 className="text-red-900 mt-0">❌ Bad Prompts</h4>
            <ul className="mb-0 text-sm space-y-2">
              <li>&quot;fix&quot; (too vague)</li>
              <li>&quot;make it better&quot; (unclear)</li>
              <li>&quot;change stuff&quot; (no direction)</li>
              <li>Very long explanations (be concise)</li>
              <li>Multiple unrelated changes</li>
            </ul>
          </div>
        </div>

        <h2>🔄 Cmd+K vs. Chat vs. Tab</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-8">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Use Case</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Best Tool</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-gray-900">Modify existing code</td>
                <td className="px-6 py-4 font-mono text-purple-600">Cmd+K ⭐</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Write new code</td>
                <td className="px-6 py-4 font-mono text-blue-600">Tab</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Ask questions</td>
                <td className="px-6 py-4 font-mono text-green-600">Chat (Cmd+L)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Multi-file changes</td>
                <td className="px-6 py-4 font-mono text-orange-600">Composer</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Quick refactoring</td>
                <td className="px-6 py-4 font-mono text-purple-600">Cmd+K ⭐</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Debug issues</td>
                <td className="px-6 py-4 font-mono text-green-600">Chat (Cmd+L)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>⚡ Pro Tips</h2>
        <div className="space-y-4 my-8">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 1:</strong> Select more context than needed - the AI uses surrounding code for better results</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 2:</strong> Use Cmd+K for refactoring, Chat for understanding</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 3:</strong> Chain multiple Cmd+K edits: accept first change, then Cmd+K again on the result</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 4:</strong> If you don&apos;t like the result, press Cmd+Z to undo and try a different prompt</p>
          </div>
        </div>

        <h2>🎓 Practice Exercise</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="text-yellow-900 mt-0">Try These Challenges:</h4>
          <ol className="mb-0">
            <li>Take any function and use Cmd+K to &quot;add TypeScript types&quot;</li>
            <li>Select a fetch call and use Cmd+K to &quot;add error handling&quot;</li>
            <li>Choose a regular function and Cmd+K to &quot;convert to arrow function&quot;</li>
            <li>Pick undocumented code and Cmd+K to &quot;add JSDoc comments&quot;</li>
          </ol>
        </div>

        <h2>🐛 Common Issues & Solutions</h2>
        <div className="space-y-4 my-8">
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">AI makes wrong changes</summary>
            <p className="mt-2 text-gray-700">Select more surrounding code for context, or be more specific in your prompt</p>
          </details>
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">Changes are too aggressive</summary>
            <p className="mt-2 text-gray-700">Use phrases like &quot;only add&quot; or &quot;minimal changes&quot; in your prompt</p>
          </details>
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">Cmd+K doesn&apos;t work</summary>
            <p className="mt-2 text-gray-700">Make sure you&apos;ve selected some code first, or check if Cursor is indexed</p>
          </details>
        </div>

        <h2>🔗 Next Steps</h2>
        <p>
          Master the <strong>AI Chat interface</strong> for asking questions and debugging:{" "}
          <a href="/tutorial/features/lessons/ai-chat" className="text-blue-600 hover:text-blue-800">
            Cmd+L AI Chat Tutorial →
          </a>
        </p>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}

