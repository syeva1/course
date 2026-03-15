import { TutorialNavigation } from "@/components/TutorialNavigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TabCompletionPage() {
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
            Tab Completion - Your AI Pair Programmer
          </h1>
          <p className="text-xl text-gray-600">
            Master Cursor's intelligent Tab completion for lightning-fast coding
          </p>
        </div>

        <TutorialNavigation />

        <div className="prose prose-lg max-w-none mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-blue-900 mt-0">💡 What You&apos;ll Learn</h3>
          <ul className="mb-0">
            <li>How Tab completion predicts your next 1-15 lines of code</li>
            <li>When to trust the AI vs. when to override it</li>
            <li>Keyboard shortcuts to accept, reject, or partially accept suggestions</li>
            <li>Real-world productivity gains (30-50% faster coding)</li>
          </ul>
        </div>

        <h2>🚀 What is Tab Completion?</h2>
        <p>
          Tab completion is Cursor&apos;s <strong>most powerful feature</strong>. Unlike simple autocomplete, 
          it uses Claude 4.5 Sonnet to predict <em>entire blocks of code</em> based on:
        </p>
        <ul>
          <li>Your current file context</li>
          <li>Your codebase patterns</li>
          <li>Common programming patterns</li>
          <li>Your recent edits</li>
        </ul>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-8 font-mono text-sm">
          <div className="text-green-400 mb-2">// Example: Type this line...</div>
          <div className="text-white">function calculateTotal(items) {"{"}</div>
          <div className="text-gray-500 italic mt-2">// Press Tab to accept this suggestion ↓</div>
          <div className="text-blue-300 mt-1 ml-4">return items.reduce((sum, item) =&gt; sum + item.price, 0);</div>
          <div className="text-white">{"}"}</div>
        </div>

        <h2>⌨️ Essential Keyboard Shortcuts</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-6">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Shortcut</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">When to Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>Accept suggestion</strong></td>
                <td className="px-6 py-4 font-mono text-blue-600">Tab</td>
                <td className="px-6 py-4 text-gray-600">When the AI is spot-on</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>Accept one word</strong></td>
                <td className="px-6 py-4 font-mono text-blue-600">Cmd+→ / Ctrl+→</td>
                <td className="px-6 py-4 text-gray-600">For partial acceptance</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>Reject suggestion</strong></td>
                <td className="px-6 py-4 font-mono text-blue-600">Esc</td>
                <td className="px-6 py-4 text-gray-600">When you want to write it yourself</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>See next suggestion</strong></td>
                <td className="px-6 py-4 font-mono text-blue-600">Alt+]</td>
                <td className="px-6 py-4 text-gray-600">Cycle through alternatives</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>See previous suggestion</strong></td>
                <td className="px-6 py-4 font-mono text-blue-600">Alt+[</td>
                <td className="px-6 py-4 text-gray-600">Go back to previous option</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>🎯 Real-World Examples</h2>
        
        <h3>Example 1: Writing React Components</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-green-400">// You type:</div>
          <div className="text-white mt-2">const UserProfile = {"({ user }) => {"}</div>
          <div className="text-gray-500 italic mt-3">// Tab suggests (press Tab to accept):</div>
          <div className="text-blue-300 mt-1 ml-4">return (</div>
          <div className="text-blue-300 ml-6">&lt;div className=&quot;profile&quot;&gt;</div>
          <div className="text-blue-300 ml-8">&lt;img src={"{user.avatar}"} alt={"{user.name}"} /&gt;</div>
          <div className="text-blue-300 ml-8">&lt;h2&gt;{"{user.name}"}&lt;/h2&gt;</div>
          <div className="text-blue-300 ml-8">&lt;p&gt;{"{user.bio}"}&lt;/p&gt;</div>
          <div className="text-blue-300 ml-6">&lt;/div&gt;</div>
          <div className="text-blue-300 ml-4">);</div>
          <div className="text-white mt-1">{"}"};</div>
        </div>

        <h3>Example 2: API Error Handling</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-green-400">// You type:</div>
          <div className="text-white mt-2">try {"{"}</div>
          <div className="text-white ml-4">const response = await fetch(&apos;/api/users&apos;);</div>
          <div className="text-gray-500 italic mt-3">// Tab suggests complete error handling:</div>
          <div className="text-blue-300 ml-4">if (!response.ok) {"{"}</div>
          <div className="text-blue-300 ml-8">throw new Error(`HTTP error! status: ${"{response.status}"}`);{" "}</div>
          <div className="text-blue-300 ml-4">{"}"}</div>
          <div className="text-blue-300 ml-4">const data = await response.json();</div>
          <div className="text-blue-300 ml-4">return data;</div>
          <div className="text-white">{"}"} catch (error) {"{"}</div>
          <div className="text-blue-300 ml-4">console.error(&apos;Failed to fetch users:&apos;, error);</div>
          <div className="text-blue-300 ml-4">throw error;</div>
          <div className="text-white">{"}"}</div>
        </div>

        <h2>⚡ Pro Tips for Maximum Productivity</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="text-green-900 mt-0 flex items-center">
              <span className="text-2xl mr-2">✅</span> Do This
            </h4>
            <ul className="mb-0 text-sm">
              <li>Write descriptive function names first</li>
              <li>Add comments to guide the AI</li>
              <li>Review suggestions before accepting</li>
              <li>Use Tab for boilerplate code</li>
              <li>Cycle through alternatives (Alt+[ / Alt+])</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h4 className="text-red-900 mt-0 flex items-center">
              <span className="text-2xl mr-2">❌</span> Avoid This
            </h4>
            <ul className="mb-0 text-sm">
              <li>Blindly accepting every suggestion</li>
              <li>Using Tab for complex business logic</li>
              <li>Ignoring type errors in suggestions</li>
              <li>Fighting with the AI repeatedly</li>
              <li>Forgetting to test the generated code</li>
            </ul>
          </div>
        </div>

        <h2>🔧 Configuring Tab Completion</h2>
        <p>Open Settings (Cmd+, or Ctrl+,) and search for &quot;tab&quot;:</p>
        <ul>
          <li><strong>Enable/Disable:</strong> Toggle &quot;Cursor Tab&quot; on/off</li>
          <li><strong>Suggestion Delay:</strong> Adjust how quickly suggestions appear (default: 150ms)</li>
          <li><strong>Show Inline Suggestions:</strong> Choose whether to see ghost text</li>
        </ul>

        <h2>📊 Measuring Your Productivity Gains</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h4 className="text-purple-900 mt-0">Real Developer Results:</h4>
          <ul className="mb-0">
            <li>📈 <strong>30-50% faster</strong> for repetitive code patterns</li>
            <li>🎯 <strong>70% acceptance rate</strong> for boilerplate code</li>
            <li>⚡ <strong>10x faster</strong> for writing tests and types</li>
            <li>🧠 <strong>Less mental fatigue</strong> - focus on logic, not syntax</li>
          </ul>
        </div>

        <h2>🎓 Practice Exercise</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="text-yellow-900 mt-0">Try This Now:</h4>
          <ol className="mb-0">
            <li>Create a new file <code>utils.ts</code></li>
            <li>Type: <code>export function debounce</code></li>
            <li>Let Tab complete the entire debounce function</li>
            <li>Review the code - does it make sense?</li>
            <li>Try Alt+] to see alternative implementations</li>
          </ol>
        </div>

        <h2>🔗 Next Steps</h2>
        <p>
          Now that you&apos;ve mastered Tab completion, learn how to make <strong>precise edits</strong> with{" "}
          <a href="/tutorial/features/lessons/inline-edit" className="text-blue-600 hover:text-blue-800">
            Cmd+K Inline Editing →
          </a>
        </p>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}

