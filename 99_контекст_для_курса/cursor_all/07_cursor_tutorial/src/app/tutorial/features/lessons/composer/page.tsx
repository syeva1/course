import { TutorialNavigation } from "@/components/TutorialNavigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComposerPage() {
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
            Composer - Multi-File AI Editing
          </h1>
          <p className="text-xl text-gray-600">
            Build features across multiple files with AI assistance
          </p>
        </div>

        <TutorialNavigation />

        <div className="prose prose-lg max-w-none mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-blue-900 mt-0">💡 What You&apos;ll Learn</h3>
          <ul className="mb-0">
            <li>Use Composer for multi-file features and refactors</li>
            <li>When to use Composer vs. Chat vs. Cmd+K</li>
            <li>Write effective Composer prompts</li>
            <li>Review and accept changes across files</li>
          </ul>
        </div>

        <h2>🎼 What is Composer?</h2>
        <p>
          <strong>Composer</strong> is Cursor&apos;s most powerful feature. It can create, modify, and delete files across your entire codebase in a single command.
        </p>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 my-8">
          <h4 className="text-purple-900 mt-0">🎯 Perfect For:</h4>
          <ul className="mb-0">
            <li>✨ Creating new features that span multiple files</li>
            <li>🔄 Large refactors across the codebase</li>
            <li>📦 Generating boilerplate (components, tests, configs)</li>
            <li>🏗️ Scaffolding entire features or modules</li>
            <li>🔗 Creating files that need to work together</li>
          </ul>
        </div>

        <h2>⌨️ Opening Composer</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-6">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Method</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Shortcut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>Open Composer</strong></td>
                <td className="px-6 py-4 font-mono text-blue-600">Cmd+I (Mac) / Ctrl+I (Win)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900"><strong>Or click icon</strong></td>
                <td className="px-6 py-4 text-gray-600">Top-right toolbar (Composer icon)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>🎯 Real-World Examples</h2>
        
        <h3>Example 1: Create a Complete Feature</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-green-400">// Composer prompt:</div>
          <div className="text-white mt-2">
            Create a user authentication system with:
            <br />
            - Login component (src/components/Login.tsx)
            <br />
            - Auth context (src/context/AuthContext.tsx)
            <br />
            - API routes (src/app/api/auth/route.ts)
            <br />
            - Types (src/types/auth.ts)
            <br />
            <br />
            Use NextAuth.js and follow our project conventions
          </div>
          <div className="text-blue-400 mt-4">// Composer will:</div>
          <div className="text-green-300 mt-1">
            ✅ Create all 4 files
            <br />
            ✅ Add proper imports between them
            <br />
            ✅ Follow your codebase patterns
            <br />
            ✅ Add TypeScript types
          </div>
        </div>

        <h3>Example 2: Refactor Across Files</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-green-400">// Composer prompt:</div>
          <div className="text-white mt-2">
            Rename UserService to AccountService across the entire codebase.
            <br />
            Update all imports, usages, and file names.
          </div>
          <div className="text-blue-400 mt-4">// Composer will:</div>
          <div className="text-green-300 mt-1">
            ✅ Rename UserService.ts → AccountService.ts
            <br />
            ✅ Update class name and exports
            <br />
            ✅ Fix all imports in other files
            <br />
            ✅ Update all usages
          </div>
        </div>

        <h3>Example 3: Generate Test Suite</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-green-400">// Composer prompt:</div>
          <div className="text-white mt-2">
            Generate comprehensive tests for @src/lib/api.ts
            <br />
            Create tests/ directory with unit tests, integration tests, and mocks
          </div>
        </div>

        <h3>Example 4: Add Feature to Existing Code</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-green-400">// Composer prompt:</div>
          <div className="text-white mt-2">
            Add dark mode support to our app.
            <br />
            Update @src/app/layout.tsx, create @src/components/ThemeToggle.tsx,
            <br />
            and add theme context in @src/context/ThemeContext.tsx
          </div>
        </div>

        <h2>✍️ Writing Great Composer Prompts</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="text-green-900 mt-0">✅ Good Composer Prompts</h4>
            <ul className="mb-0 text-sm space-y-2">
              <li>Specific file paths and names</li>
              <li>&quot;Create X in src/path/to/file.ts&quot;</li>
              <li>&quot;Refactor X to use pattern Y&quot;</li>
              <li>&quot;Add feature Z to @existing/file.ts&quot;</li>
              <li>Clear requirements and constraints</li>
              <li>Reference existing patterns with @</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h4 className="text-red-900 mt-0">❌ Bad Composer Prompts</h4>
            <ul className="mb-0 text-sm space-y-2">
              <li>&quot;Make it better&quot; (too vague)</li>
              <li>&quot;Fix everything&quot; (unclear scope)</li>
              <li>No file paths specified</li>
              <li>Asking questions (use Chat)</li>
              <li>Small single-file edits (use Cmd+K)</li>
            </ul>
          </div>
        </div>

        <h2>📋 The Composer Workflow</h2>
        <div className="space-y-4 my-8">
          <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
              <h4 className="m-0 text-blue-900">Open Composer (Cmd+I)</h4>
            </div>
            <p className="ml-11 mb-0 text-gray-700">Press Cmd+I or click the Composer icon</p>
          </div>

          <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
              <h4 className="m-0 text-green-900">Write Your Prompt</h4>
            </div>
            <p className="ml-11 mb-0 text-gray-700">Be specific about files, features, and requirements</p>
          </div>

          <div className="bg-white border-l-4 border-purple-500 p-6 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
              <h4 className="m-0 text-purple-900">Add Context with @</h4>
            </div>
            <p className="ml-11 mb-0 text-gray-700">Reference existing files, folders, or docs</p>
          </div>

          <div className="bg-white border-l-4 border-orange-500 p-6 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</span>
              <h4 className="m-0 text-orange-900">Review Changes</h4>
            </div>
            <p className="ml-11 mb-0 text-gray-700">Cursor shows a diff of all proposed changes</p>
          </div>

          <div className="bg-white border-l-4 border-pink-500 p-6 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</span>
              <h4 className="m-0 text-pink-900">Accept or Modify</h4>
            </div>
            <p className="ml-11 mb-0 text-gray-700">Accept all, accept some, or refine your prompt</p>
          </div>
        </div>

        <h2>🔄 Composer vs. Other Tools</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-8">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Task</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Best Tool</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-gray-900">Create multiple new files</td>
                <td className="px-6 py-4 font-mono text-purple-600">Composer ⭐</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Refactor across files</td>
                <td className="px-6 py-4 font-mono text-purple-600">Composer ⭐</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Edit single file</td>
                <td className="px-6 py-4 font-mono text-blue-600">Cmd+K</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Quick code completion</td>
                <td className="px-6 py-4 font-mono text-green-600">Tab</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Ask questions</td>
                <td className="px-6 py-4 font-mono text-orange-600">Chat (Cmd+L)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Scaffold entire feature</td>
                <td className="px-6 py-4 font-mono text-purple-600">Composer ⭐</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>⚡ Pro Tips</h2>
        <div className="space-y-4 my-8">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 1:</strong> Start with small Composer tasks to understand how it works</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 2:</strong> Always review diffs carefully before accepting changes</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 3:</strong> Use @ to reference existing files/patterns you want to follow</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 4:</strong> Break huge tasks into smaller Composer prompts</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 5:</strong> You can iterate - accept changes, then run Composer again to refine</p>
          </div>
        </div>

        <h2>🎓 Practice Exercise</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="text-yellow-900 mt-0">Try This Challenge:</h4>
          <ol className="mb-0">
            <li>Open Composer (Cmd+I)</li>
            <li>Type: &quot;Create a simple TODO feature with:
              <ul>
                <li>TodoList component in src/components/TodoList.tsx</li>
                <li>TodoItem component in src/components/TodoItem.tsx</li>
                <li>useTodos hook in src/hooks/useTodos.ts</li>
                <li>Type definitions in src/types/todo.ts</li>
              </ul>
            </li>
            <li>Review the generated files</li>
            <li>Accept the changes and test them</li>
          </ol>
        </div>

        <h2>⚠️ Common Pitfalls</h2>
        <div className="space-y-4 my-8">
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">Composer creates too many files</summary>
            <p className="mt-2 text-gray-700">Be more specific about scope. Say &quot;only create&quot; or &quot;modify existing files only&quot;</p>
          </details>
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">Changes don&apos;t match my coding style</summary>
            <p className="mt-2 text-gray-700">Add @ references to existing files with your style, or add a .cursorrules file</p>
          </details>
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">Composer is too slow</summary>
            <p className="mt-2 text-gray-700">Break large tasks into smaller prompts. Wait for codebase indexing to complete.</p>
          </details>
        </div>

        <h2>🎬 Composer Best Practices</h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 my-8">
          <ul className="mb-0 space-y-3">
            <li>✅ <strong>Be Explicit:</strong> Name files and paths clearly</li>
            <li>✅ <strong>Provide Examples:</strong> Use @ to reference similar code</li>
            <li>✅ <strong>Review Everything:</strong> Never blindly accept all changes</li>
            <li>✅ <strong>Use Git:</strong> Commit before big Composer changes</li>
            <li>✅ <strong>Iterate:</strong> Run Composer multiple times to refine</li>
            <li>✅ <strong>Test:</strong> Always test generated code thoroughly</li>
          </ul>
        </div>

        <h2>🔗 Next Steps</h2>
        <p>
          Master advanced context with the <strong>@ symbols deep dive</strong>:{" "}
          <a href="/tutorial/features/lessons/context-symbols" className="text-blue-600 hover:text-blue-800">
            @ Symbols Tutorial →
          </a>
        </p>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}

