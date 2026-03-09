import { TutorialNavigation } from "@/components/TutorialNavigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContextSymbolsPage() {
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
            @ Symbols - Context is Everything
          </h1>
          <p className="text-xl text-gray-600">
            Master @ symbols to give AI perfect context for better results
          </p>
        </div>

        <TutorialNavigation />

        <div className="prose prose-lg max-w-none mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-blue-900 mt-0">💡 What You&apos;ll Learn</h3>
          <ul className="mb-0">
            <li>All 5 @ symbol types and when to use each</li>
            <li>How @ symbols 10x your AI accuracy</li>
            <li>Advanced @ combinations for power users</li>
            <li>Pro tips from real developers</li>
          </ul>
        </div>

        <h2>🎯 Why @ Symbols Matter</h2>
        <p>
          <strong>@ symbols are the secret to getting 10x better AI responses.</strong> Without context, 
          the AI guesses. With @ symbols, it <em>knows</em>.
        </p>

        <div className="bg-gradient-to-r from-red-50 to-green-50 border-t-4 border-gray-300 rounded-lg my-8 overflow-hidden">
          <div className="grid md:grid-cols-2 divide-x divide-gray-300">
            <div className="p-6 bg-red-50">
              <h4 className="text-red-900 mt-0">❌ Without @ Symbols</h4>
              <div className="bg-white rounded p-3 font-mono text-sm text-gray-700">
                How do I handle authentication?
              </div>
              <p className="text-sm text-red-800 mt-3 mb-0">
                Result: Generic answer about authentication that may not match your codebase
              </p>
            </div>
            <div className="p-6 bg-green-50">
              <h4 className="text-green-900 mt-0">✅ With @ Symbols</h4>
              <div className="bg-white rounded p-3 font-mono text-sm text-gray-700">
                How do I handle authentication like @src/lib/auth.ts?
              </div>
              <p className="text-sm text-green-800 mt-3 mb-0">
                Result: Specific answer using your exact patterns, types, and conventions
              </p>
            </div>
          </div>
        </div>

        <h2>📚 The 5 @ Symbol Types</h2>

        <div className="space-y-8 my-8">
          {/* @Files */}
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">📄</span>
              <div>
                <h3 className="m-0 text-blue-900 font-mono text-xl">@Files</h3>
                <p className="m-0 text-sm text-gray-600">Reference specific files</p>
              </div>
            </div>
            
            <div className="bg-gray-900 text-gray-100 rounded p-4 font-mono text-sm mb-4">
              <div className="text-green-400">// Examples:</div>
              <div className="text-white mt-2">Explain @src/lib/api.ts</div>
              <div className="text-white mt-1">Update @components/Button.tsx to use variants</div>
              <div className="text-white mt-1">How does @utils/auth.ts validate tokens?</div>
            </div>

            <div className="bg-blue-50 rounded p-4">
              <p className="m-0"><strong>When to use:</strong> When you need to reference a specific file&apos;s code, logic, or patterns</p>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Pro Tips:</p>
              <ul className="text-sm space-y-1 mb-0">
                <li>✅ Type @ and start typing - autocomplete will help</li>
                <li>✅ Can reference multiple files: @file1.ts @file2.ts</li>
                <li>✅ Works in Chat, Composer, and Cmd+K prompts</li>
              </ul>
            </div>
          </div>

          {/* @Folders */}
          <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">📁</span>
              <div>
                <h3 className="m-0 text-green-900 font-mono text-xl">@Folders</h3>
                <p className="m-0 text-sm text-gray-600">Reference entire directories</p>
              </div>
            </div>
            
            <div className="bg-gray-900 text-gray-100 rounded p-4 font-mono text-sm mb-4">
              <div className="text-green-400">// Examples:</div>
              <div className="text-white mt-2">Explain the structure of @src/components/</div>
              <div className="text-white mt-1">Create a new component following @components/ patterns</div>
              <div className="text-white mt-1">Refactor @src/utils/ to use TypeScript</div>
            </div>

            <div className="bg-green-50 rounded p-4">
              <p className="m-0"><strong>When to use:</strong> When you need context about multiple related files or overall structure</p>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Pro Tips:</p>
              <ul className="text-sm space-y-1 mb-0">
                <li>✅ Great for understanding project structure</li>
                <li>✅ Helps AI learn your naming conventions</li>
                <li>✅ Use for &quot;create similar to what&apos;s in @folder/&quot;</li>
              </ul>
            </div>
          </div>

          {/* @Codebase */}
          <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">🗂️</span>
              <div>
                <h3 className="m-0 text-purple-900 font-mono text-xl">@Codebase</h3>
                <p className="m-0 text-sm text-gray-600">Semantic search across your entire project</p>
              </div>
            </div>
            
            <div className="bg-gray-900 text-gray-100 rounded p-4 font-mono text-sm mb-4">
              <div className="text-green-400">// Examples:</div>
              <div className="text-white mt-2">@Codebase where do we handle user authentication?</div>
              <div className="text-white mt-1">@Codebase find all database queries</div>
              <div className="text-white mt-1">@Codebase show me error handling patterns</div>
            </div>

            <div className="bg-purple-50 rounded p-4">
              <p className="m-0"><strong>When to use:</strong> When you don&apos;t know where something is or need to find patterns across files</p>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Pro Tips:</p>
              <ul className="text-sm space-y-1 mb-0">
                <li>✅ Requires codebase indexing (check status bar)</li>
                <li>✅ Searches by meaning, not exact text</li>
                <li>✅ Can be slow on large projects (&gt;100MB)</li>
                <li>⚠️ Works best with specific questions</li>
              </ul>
            </div>
          </div>

          {/* @Docs */}
          <div className="bg-white border-2 border-orange-200 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">📖</span>
              <div>
                <h3 className="m-0 text-orange-900 font-mono text-xl">@Docs</h3>
                <p className="m-0 text-sm text-gray-600">Query official documentation</p>
              </div>
            </div>
            
            <div className="bg-gray-900 text-gray-100 rounded p-4 font-mono text-sm mb-4">
              <div className="text-green-400">// Examples:</div>
              <div className="text-white mt-2">@Docs React explain useEffect</div>
              <div className="text-white mt-1">@Docs Next.js how do I use App Router?</div>
              <div className="text-white mt-1">@Docs TypeScript what are utility types?</div>
            </div>

            <div className="bg-orange-50 rounded p-4">
              <p className="m-0"><strong>When to use:</strong> When you need authoritative answers from official framework/library docs</p>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Supported Docs:</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>✅ React</div>
                <div>✅ Next.js</div>
                <div>✅ TypeScript</div>
                <div>✅ Vue</div>
                <div>✅ Python</div>
                <div>✅ Node.js</div>
                <div>✅ And 100+ more...</div>
              </div>
            </div>
          </div>

          {/* @Web */}
          <div className="bg-white border-2 border-red-200 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">🌐</span>
              <div>
                <h3 className="m-0 text-red-900 font-mono text-xl">@Web</h3>
                <p className="m-0 text-sm text-gray-600">Search the internet for current info</p>
              </div>
            </div>
            
            <div className="bg-gray-900 text-gray-100 rounded p-4 font-mono text-sm mb-4">
              <div className="text-green-400">// Examples:</div>
              <div className="text-white mt-2">@Web what&apos;s new in Next.js 15?</div>
              <div className="text-white mt-1">@Web best practices for React Server Components 2025</div>
              <div className="text-white mt-1">@Web how to fix [specific error message]</div>
            </div>

            <div className="bg-red-50 rounded p-4">
              <p className="m-0"><strong>When to use:</strong> When you need the latest information, breaking changes, or recent best practices</p>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Pro Tips:</p>
              <ul className="text-sm space-y-1 mb-0">
                <li>✅ Great for checking latest versions/updates</li>
                <li>✅ Useful for obscure error messages</li>
                <li>⚠️ Slower than other @ types</li>
                <li>⚠️ Requires internet connection</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>🔥 Advanced @ Combinations</h2>
        <p>You can combine multiple @ symbols for ultra-precise context:</p>

        <div className="space-y-4 my-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="font-mono text-sm mb-2 text-gray-800">
              Create a new API route similar to @src/app/api/users/route.ts but for posts.
              Follow the patterns in @src/app/api/ and use types from @src/types/
            </p>
            <p className="text-xs text-gray-600 mb-0">💡 Combines @File + @Folder + @Folder for perfect context</p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded">
            <p className="font-mono text-sm mb-2 text-gray-800">
              @Codebase where do we validate user input? Then update @src/lib/validation.ts
              to follow the same pattern for email validation
            </p>
            <p className="text-xs text-gray-600 mb-0">💡 Combines @Codebase search + @File editing</p>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded">
            <p className="font-mono text-sm mb-2 text-gray-800">
              @Docs Next.js explain the new caching in App Router, then apply it to @src/app/
            </p>
            <p className="text-xs text-gray-600 mb-0">💡 Combines @Docs learning + @Folder application</p>
          </div>
        </div>

        <h2>📊 @ Symbol Comparison</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-8">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">@ Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Scope</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Speed</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-mono text-blue-600">@Files</td>
                <td className="px-4 py-3">Single file</td>
                <td className="px-4 py-3">⚡⚡⚡ Fast</td>
                <td className="px-4 py-3">Specific code</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-green-600">@Folders</td>
                <td className="px-4 py-3">Directory</td>
                <td className="px-4 py-3">⚡⚡ Medium</td>
                <td className="px-4 py-3">Structure/patterns</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-purple-600">@Codebase</td>
                <td className="px-4 py-3">Entire project</td>
                <td className="px-4 py-3">⚡ Slower</td>
                <td className="px-4 py-3">Finding things</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-orange-600">@Docs</td>
                <td className="px-4 py-3">External docs</td>
                <td className="px-4 py-3">⚡⚡ Medium</td>
                <td className="px-4 py-3">Learning APIs</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-red-600">@Web</td>
                <td className="px-4 py-3">Internet</td>
                <td className="px-4 py-3">⚡ Slowest</td>
                <td className="px-4 py-3">Latest info</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>⚡ Pro Tips from Power Users</h2>
        <div className="space-y-4 my-8">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 1:</strong> Start narrow (@File), expand if needed (@Folder → @Codebase)</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 2:</strong> Use @Files to teach AI your coding style and patterns</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 3:</strong> @Codebase is expensive - use it when you really don&apos;t know where code is</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 4:</strong> Combine @Docs with your files: &quot;@Docs React + @myComponent.tsx&quot;</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 5:</strong> @Web is best for &quot;what&apos;s new in X 2025&quot; type questions</p>
          </div>
        </div>

        <h2>🎓 Practice Exercise</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="text-yellow-900 mt-0">Master @ Symbols:</h4>
          <ol className="mb-0">
            <li>Use @Files: &quot;Explain @[pick any file in your project]&quot;</li>
            <li>Use @Folders: &quot;What&apos;s the structure of @src/?&quot;</li>
            <li>Use @Codebase: &quot;@Codebase where do we handle errors?&quot;</li>
            <li>Use @Docs: &quot;@Docs [your framework] explain [concept]&quot;</li>
            <li>Use @Web: &quot;@Web what&apos;s new in [your tech stack] 2025?&quot;</li>
            <li>Combine: Use 2-3 @ symbols in one prompt</li>
          </ol>
        </div>

        <h2>🐛 Common Issues</h2>
        <div className="space-y-4 my-8">
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">@ autocomplete doesn&apos;t work</summary>
            <p className="mt-2 text-gray-700">Wait a second after typing @ for autocomplete to load. Check that indexing is complete (bottom status bar).</p>
          </details>
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">@Codebase returns no results</summary>
            <p className="mt-2 text-gray-700">Codebase not indexed yet, or your project is too large. Be more specific with your search query.</p>
          </details>
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">@Docs doesn&apos;t have my library</summary>
            <p className="mt-2 text-gray-700">Use @Web instead to search the internet for that library&apos;s docs.</p>
          </details>
        </div>

        <h2>🔗 Next Steps</h2>
        <p>
          Learn how to customize AI behavior with <strong>Cursor Rules</strong>:{" "}
          <a href="/tutorial/features/lessons/cursor-rules" className="text-blue-600 hover:text-blue-800">
            Cursor Rules Tutorial →
          </a>
        </p>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}

