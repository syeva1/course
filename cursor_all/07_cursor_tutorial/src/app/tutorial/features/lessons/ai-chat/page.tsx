import { TutorialNavigation } from "@/components/TutorialNavigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AIChatPage() {
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
            Cmd+L AI Chat - Your AI Programming Partner
          </h1>
          <p className="text-xl text-gray-600">
            Master the AI Chat interface for questions, debugging, and deep code understanding
          </p>
        </div>

        <TutorialNavigation />

        <div className="prose prose-lg max-w-none mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-blue-900 mt-0">💡 What You&apos;ll Learn</h3>
          <ul className="mb-0">
            <li>Use Cmd+L (Ctrl+L) to open the AI Chat sidebar</li>
            <li>Master @ symbols for providing context</li>
            <li>Ask effective questions for debugging and understanding</li>
            <li>When to use Chat vs. Cmd+K vs. Composer</li>
          </ul>
        </div>

        <h2>💬 What is AI Chat?</h2>
        <p>
          <strong>AI Chat (Cmd+L)</strong> is your conversational AI assistant powered by Claude 4.5 Sonnet. 
          Unlike Cmd+K which edits code directly, Chat is perfect for:
        </p>
        <ul>
          <li>🤔 Understanding complex code</li>
          <li>🐛 Debugging errors</li>
          <li>💡 Getting implementation suggestions</li>
          <li>📚 Learning new concepts</li>
          <li>🔍 Exploring your codebase</li>
        </ul>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 my-8">
          <h4 className="text-green-900 mt-0">🔑 Quick Start:</h4>
          <ol className="mb-0 text-lg">
            <li>Press <code className="bg-green-200 px-2 py-1 rounded">Cmd+L</code> to open Chat</li>
            <li>Type your question in natural language</li>
            <li>Use <strong>@ symbols</strong> to add context (files, folders, docs)</li>
            <li>Get instant answers with code examples</li>
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
                <td className="px-6 py-4 text-gray-900"><strong>Open AI Chat</strong></td>
                <td className="px-6 py-4 font-mono text-blue-600">Cmd+L</td>
                <td className="px-6 py-4 font-mono text-blue-600">Ctrl+L</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>Send message</strong></td>
                <td className="px-6 py-4 font-mono text-green-600">Enter</td>
                <td className="px-6 py-4 font-mono text-green-600">Enter</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>New line in message</strong></td>
                <td className="px-6 py-4 font-mono text-gray-600">Shift+Enter</td>
                <td className="px-6 py-4 font-mono text-gray-600">Shift+Enter</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>New chat</strong></td>
                <td className="px-6 py-4 font-mono text-purple-600">Cmd+Shift+L</td>
                <td className="px-6 py-4 font-mono text-purple-600">Ctrl+Shift+L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>🎯 The Power of @ Symbols</h2>
        <p>
          <strong>@ symbols</strong> are the secret to getting great answers. They give the AI <em>context</em> about your codebase.
        </p>

        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h4 className="text-blue-900 mt-0 font-mono">@Files</h4>
            <p className="text-gray-700">Reference specific files</p>
            <div className="bg-white rounded p-3 font-mono text-sm mt-2">
              How does @src/utils/auth.ts handle authentication?
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="text-green-900 mt-0 font-mono">@Folders</h4>
            <p className="text-gray-700">Reference entire directories</p>
            <div className="bg-white rounded p-3 font-mono text-sm mt-2">
              Explain the structure of @src/components/
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h4 className="text-purple-900 mt-0 font-mono">@Codebase</h4>
            <p className="text-gray-700">Search across your entire project</p>
            <div className="bg-white rounded p-3 font-mono text-sm mt-2">
              @Codebase where do we handle user login?
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
            <h4 className="text-orange-900 mt-0 font-mono">@Docs</h4>
            <p className="text-gray-700">Query official documentation</p>
            <div className="bg-white rounded p-3 font-mono text-sm mt-2">
              @Docs React how do I use useEffect?
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h4 className="text-red-900 mt-0 font-mono">@Web</h4>
            <p className="text-gray-700">Search the internet for current info</p>
            <div className="bg-white rounded p-3 font-mono text-sm mt-2">
              @Web what&apos;s new in Next.js 15?
            </div>
          </div>
        </div>

        <h2>🎯 Real-World Examples</h2>
        
        <h3>Example 1: Debugging an Error</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-green-400">// Bad question (no context):</div>
          <div className="text-red-300 mt-2">Why is my code broken?</div>
          
          <div className="text-green-400 mt-6">// Good question (with context):</div>
          <div className="text-blue-300 mt-2">
            I&apos;m getting &quot;Cannot read property &apos;map&apos; of undefined&quot; in @src/components/UserList.tsx
            <br />
            What&apos;s causing this error?
          </div>
        </div>

        <h3>Example 2: Understanding Code</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-blue-300">
            Explain how @src/lib/api.ts handles API retries and error handling
          </div>
          <div className="text-gray-400 mt-4 italic">// AI will analyze the file and explain the retry logic, error handling patterns, and best practices</div>
        </div>

        <h3>Example 3: Implementation Guidance</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-blue-300">
            @Codebase we need to add rate limiting to our API.
            <br />
            Show me how other endpoints handle rate limiting and suggest where to add it
          </div>
        </div>

        <h3>Example 4: Learning Best Practices</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-blue-300">
            @Docs Next.js what&apos;s the best way to implement server-side authentication in App Router?
          </div>
        </div>

        <h2>✍️ Writing Effective Chat Prompts</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="text-green-900 mt-0">✅ Good Prompts</h4>
            <ul className="mb-0 text-sm space-y-2">
              <li>&quot;Explain how @file.ts works&quot;</li>
              <li>&quot;Why is this error happening?&quot;</li>
              <li>&quot;What&apos;s the best way to...&quot;</li>
              <li>&quot;@Codebase where do we handle...&quot;</li>
              <li>&quot;Show me examples of...&quot;</li>
              <li>&quot;How can I optimize...&quot;</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h4 className="text-red-900 mt-0">❌ Bad Prompts</h4>
            <ul className="mb-0 text-sm space-y-2">
              <li>&quot;Fix my code&quot; (use Cmd+K)</li>
              <li>&quot;Help&quot; (too vague)</li>
              <li>No @ symbols for context</li>
              <li>Asking for file creation (use Composer)</li>
              <li>Multiple unrelated questions</li>
            </ul>
          </div>
        </div>

        <h2>🔄 When to Use What?</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-8">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">I want to...</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-gray-900">Understand how code works</td>
                <td className="px-6 py-4 font-mono text-green-600">Chat (Cmd+L) ⭐</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Debug an error</td>
                <td className="px-6 py-4 font-mono text-green-600">Chat (Cmd+L) ⭐</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Edit existing code</td>
                <td className="px-6 py-4 font-mono text-purple-600">Cmd+K</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Write new code</td>
                <td className="px-6 py-4 font-mono text-blue-600">Tab or Composer</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Get implementation suggestions</td>
                <td className="px-6 py-4 font-mono text-green-600">Chat (Cmd+L) ⭐</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Explore the codebase</td>
                <td className="px-6 py-4 font-mono text-green-600">Chat + @Codebase ⭐</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>⚡ Pro Tips</h2>
        <div className="space-y-4 my-8">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 1:</strong> Always use @ symbols - they 10x the quality of answers</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 2:</strong> Chat remembers conversation history - follow up with clarifying questions</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 3:</strong> Use &quot;Apply&quot; button in chat responses to insert code directly</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 4:</strong> Start new chats (Cmd+Shift+L) for unrelated topics to keep context clean</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 5:</strong> Reference errors directly - copy-paste error messages for faster debugging</p>
          </div>
        </div>

        <h2>🎓 Practice Exercise</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="text-yellow-900 mt-0">Try These Now:</h4>
          <ol className="mb-0">
            <li>Press Cmd+L and ask: &quot;@Codebase what are the main features of this project?&quot;</li>
            <li>Pick a complex file and ask: &quot;Explain @path/to/file.ts in simple terms&quot;</li>
            <li>Find an error in your code and ask Chat to debug it</li>
            <li>Use @Docs to learn about a framework feature you&apos;re unfamiliar with</li>
            <li>Try @Web to search for the latest best practices</li>
          </ol>
        </div>

        <h2>📊 Chat vs. Other Tools - Quick Reference</h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 my-8">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">💬</div>
              <div className="font-bold text-gray-900">Chat (Cmd+L)</div>
              <div className="text-sm text-gray-600 mt-2">Questions, understanding, debugging</div>
            </div>
            <div>
              <div className="text-3xl mb-2">✏️</div>
              <div className="font-bold text-gray-900">Inline (Cmd+K)</div>
              <div className="text-sm text-gray-600 mt-2">Quick edits, refactoring</div>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold text-gray-900">Tab</div>
              <div className="text-sm text-gray-600 mt-2">Writing new code</div>
            </div>
          </div>
        </div>

        <h2>🐛 Common Issues & Solutions</h2>
        <div className="space-y-4 my-8">
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">AI gives generic answers</summary>
            <p className="mt-2 text-gray-700">Use @ symbols to provide file/folder context. Be specific about what you&apos;re asking.</p>
          </details>
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">Chat is slow</summary>
            <p className="mt-2 text-gray-700">Check your internet connection. Large codebases need indexing time. Try referencing specific files instead of @Codebase.</p>
          </details>
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">@Codebase doesn&apos;t work</summary>
            <p className="mt-2 text-gray-700">Wait for indexing to complete (check bottom status bar). Make sure your project isn&apos;t too large (&gt;100MB).</p>
          </details>
        </div>

        <h2>🔗 Next Steps</h2>
        <p>
          Now learn how to make <strong>multi-file changes</strong> with Composer:{" "}
          <a href="/tutorial/features/lessons/composer" className="text-blue-600 hover:text-blue-800">
            Composer Tutorial →
          </a>
        </p>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}

