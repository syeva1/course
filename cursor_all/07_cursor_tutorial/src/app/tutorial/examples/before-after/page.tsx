import { TutorialNavigation } from "@/components/TutorialNavigation";
import Link from "next/link";
import { ArrowLeft, Clock, TrendingUp, Zap, CheckCircle } from "lucide-react";

export default function BeforeAfterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/tutorial/examples" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Examples
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Before & After - Real Cursor Productivity Gains
          </h1>
          <p className="text-xl text-gray-600">
            See exactly how Cursor transforms development with real before/after examples and time savings
          </p>
        </div>

        <TutorialNavigation />

        <div className="prose prose-lg max-w-none mt-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 mb-8">
          <h3 className="text-green-900 mt-0 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2" />
            Real Productivity Gains
          </h3>
          <p className="mb-0">
            This tutorial shows <strong>actual before/after comparisons</strong> with real time savings. 
            These aren&apos;t marketing claims - these are real workflows developers use daily.
          </p>
        </div>

        <h2>Example 1: Creating a React Component</h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="text-red-900 mt-0 flex items-center">
              <span className="text-2xl mr-2">❌</span> Before Cursor
            </h3>
            <p className="text-sm text-red-800 mb-4"><strong>Time: 5-7 minutes</strong></p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Create file manually</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Type imports one by one</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Write component structure</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Add props interface</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Write JSX manually</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Add styling classes</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Fix syntax errors</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-green-900 mt-0 flex items-center">
              <span className="text-2xl mr-2">✅</span> With Cursor
            </h3>
            <p className="text-sm text-green-800 mb-4"><strong>Time: 30-60 seconds</strong></p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Type component name, Tab completes structure</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">AI adds all imports automatically</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Props interface generated with types</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">JSX structure complete</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">No syntax errors</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-300 rounded-lg p-6 text-center my-8">
          <p className="text-2xl font-bold text-green-900 mb-2">⚡ 6-10x Faster</p>
          <p className="text-sm text-green-800 mb-0">Saved: 4-6 minutes per component × 10 components/day = <strong>40-60 minutes saved daily</strong></p>
        </div>

        <h2>Example 2: Adding Error Handling</h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="text-red-900 mt-0 flex items-center">
              <span className="text-2xl mr-2">❌</span> Manual Approach
            </h3>
            <p className="text-sm text-red-800 mb-4"><strong>Time: 3-4 minutes</strong></p>
            <div className="bg-white rounded p-4 font-mono text-xs overflow-x-auto">
              <pre className="m-0">{`// Original code
const data = await fetch(url)
  .then(r => r.json());

// Steps to add error handling:
// 1. Convert to async/await
// 2. Add try-catch
// 3. Add response.ok check
// 4. Add error logging
// 5. Add error types
// 6. Test error cases`}</pre>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-green-900 mt-0 flex items-center">
              <span className="text-2xl mr-2">✅</span> With Cmd+K
            </h3>
            <p className="text-sm text-green-800 mb-4"><strong>Time: 10 seconds</strong></p>
            <div className="bg-white rounded p-4 font-mono text-xs overflow-x-auto">
              <pre className="m-0">{`// 1. Select code
// 2. Press Cmd+K
// 3. Type: "add try-catch error handling"
// 4. Press Enter
// ✅ Done!

try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(\`HTTP \${response.status}\`);
  }
  return await response.json();
} catch (error) {
  console.error('Fetch failed:', error);
  throw error;
}`}</pre>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-lg p-6 text-center my-8">
          <p className="text-2xl font-bold text-purple-900 mb-2">⚡ 18-24x Faster</p>
          <p className="text-sm text-purple-800 mb-0">Saved: 3-4 minutes per refactor × 20 refactors/day = <strong>60-80 minutes saved daily</strong></p>
        </div>

        <h2>Example 3: Writing Tests</h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="text-red-900 mt-0 flex items-center">
              <span className="text-2xl mr-2">❌</span> Writing Tests Manually
            </h3>
            <p className="text-sm text-red-800 mb-4"><strong>Time: 10-15 minutes per test file</strong></p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Set up test file structure</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Write imports and setup</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Create mock data</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Write each test case</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Add assertions</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Debug failing tests</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-green-900 mt-0 flex items-center">
              <span className="text-2xl mr-2">✅</span> With Cursor Chat
            </h3>
            <p className="text-sm text-green-800 mb-4"><strong>Time: 1-2 minutes</strong></p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Cmd+L: &quot;Write tests for @utils/api.ts&quot;</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">AI generates complete test file</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Includes setup, mocks, and assertions</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Edge cases covered</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Click Apply to insert</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-300 rounded-lg p-6 text-center my-8">
          <p className="text-2xl font-bold text-blue-900 mb-2">⚡ 5-15x Faster</p>
          <p className="text-sm text-blue-800 mb-0">Saved: 8-14 minutes per test file × 5 files/day = <strong>40-70 minutes saved daily</strong></p>
        </div>

        <h2>Example 4: Building a Complete Feature</h2>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8">
          <h3 className="text-gray-900 mb-4">Task: Add &quot;Forgot Password&quot; Feature</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-red-900 text-sm font-semibold mb-3">❌ Without Cursor: 2-3 hours</h4>
              <ol className="text-sm space-y-2 text-gray-700">
                <li>1. Create form component (15 min)</li>
                <li>2. Add validation logic (20 min)</li>
                <li>3. Create API endpoint (25 min)</li>
                <li>4. Add email service (30 min)</li>
                <li>5. Create reset page (20 min)</li>
                <li>6. Add database logic (20 min)</li>
                <li>7. Write tests (30 min)</li>
                <li>8. Fix bugs and edge cases (20 min)</li>
              </ol>
            </div>
            
            <div>
              <h4 className="text-green-900 text-sm font-semibold mb-3">✅ With Cursor Composer: 20-30 minutes</h4>
              <ol className="text-sm space-y-2 text-gray-700">
                <li>1. Cmd+I: &quot;Create forgot password feature with email, reset form, API route, and database&quot;</li>
                <li>2. Review generated files (5 min)</li>
                <li>3. Cmd+K to refine details (5 min)</li>
                <li>4. Test and adjust (10 min)</li>
                <li className="font-semibold text-green-800">✅ Done in 20-30 minutes!</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-lg p-6 text-center my-8">
          <p className="text-2xl font-bold text-orange-900 mb-2">⚡ 4-6x Faster</p>
          <p className="text-sm text-orange-800 mb-0">Saved: 1.5-2.5 hours per feature × 2 features/week = <strong>3-5 hours saved weekly</strong></p>
        </div>

        <h2>Example 5: Debugging</h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="text-red-900 mt-0 flex items-center">
              <span className="text-2xl mr-2">❌</span> Traditional Debugging
            </h3>
            <p className="text-sm text-red-800 mb-4"><strong>Time: 30-60 minutes</strong></p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Read error message</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Google the error</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Read Stack Overflow</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Try solutions one by one</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Debug with console.log</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Eventually fix it</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-green-900 mt-0 flex items-center">
              <span className="text-2xl mr-2">✅</span> With Cursor Chat
            </h3>
            <p className="text-sm text-green-800 mb-4"><strong>Time: 2-5 minutes</strong></p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Cmd+L: Paste error + &quot;@file.ts why is this failing?&quot;</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">AI explains the exact issue</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Provides the fix</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Apply fix with one click</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="m-0">Problem solved</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-100 to-pink-100 border border-red-300 rounded-lg p-6 text-center my-8">
          <p className="text-2xl font-bold text-red-900 mb-2">⚡ 6-30x Faster</p>
          <p className="text-sm text-red-800 mb-0">Saved: 25-55 minutes per bug × 3 bugs/day = <strong>75-165 minutes saved daily</strong></p>
        </div>

        <h2>📊 Total Time Saved Daily</h2>

        <div className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 border-2 border-green-400 rounded-lg p-8 my-8">
          <h3 className="text-center text-gray-900 text-2xl font-bold mb-6">Average Daily Time Savings</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-gray-900 font-semibold mb-4">Time Saved Per Task:</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Components</span>
                  <span className="font-semibold text-green-700">40-60 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Refactoring</span>
                  <span className="font-semibold text-green-700">60-80 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Testing</span>
                  <span className="font-semibold text-green-700">40-70 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Debugging</span>
                  <span className="font-semibold text-green-700">75-165 min</span>
                </div>
                <div className="border-t-2 border-gray-300 pt-2 mt-2 flex justify-between font-bold text-lg">
                  <span className="text-gray-900">Daily Total:</span>
                  <span className="text-green-700">3.5-6 hours</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-gray-900 font-semibold mb-4">Weekly & Monthly:</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Per Week (5 days)</span>
                  <span className="font-semibold text-blue-700">17-30 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Per Month (20 days)</span>
                  <span className="font-semibold text-blue-700">70-120 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Per Year (240 days)</span>
                  <span className="font-semibold text-blue-700">840-1440 hours</span>
                </div>
                <div className="border-t-2 border-gray-300 pt-2 mt-2">
                  <p className="text-purple-800 font-bold text-center mb-0">
                    That&apos;s 4-7 months of work saved per year! 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-200 to-orange-200 rounded-lg p-6 text-center">
            <p className="text-2xl font-bold text-orange-900 mb-2">
              <Zap className="inline w-8 h-8 mr-2" />
              50-70% Faster Overall
            </p>
            <p className="text-sm text-orange-800 mb-0">
              Most developers report being <strong>50-70% faster</strong> after mastering Cursor. 
              Some power users report <strong>2-3x productivity gains</strong>.
            </p>
          </div>
        </div>

        <h2>🎓 Key Takeaways</h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <ul className="space-y-3 mb-0">
            <li>✅ <strong>Tab completion</strong> saves 4-6 minutes per component</li>
            <li>✅ <strong>Cmd+K</strong> saves 3-4 minutes per refactor</li>
            <li>✅ <strong>Cmd+L Chat</strong> saves 25-55 minutes per debug session</li>
            <li>✅ <strong>Composer</strong> saves 1.5-2.5 hours per feature</li>
            <li>✅ <strong>Overall:</strong> 3.5-6 hours saved per day</li>
            <li>✅ <strong>ROI:</strong> Pays for itself in &lt;1 day</li>
          </ul>
        </div>

        <h2>🚀 Start Measuring Your Own Gains</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="text-yellow-900 mt-0">Try This Exercise:</h4>
          <ol className="mb-0 space-y-2">
            <li>Pick a task you do regularly (e.g., create a component)</li>
            <li>Time yourself doing it manually</li>
            <li>Time yourself doing it with Cursor</li>
            <li>Calculate: <code>(manual_time - cursor_time) / manual_time × 100 = % faster</code></li>
            <li>Multiply by how often you do that task</li>
          </ol>
          <p className="mt-4 text-yellow-800 font-semibold mb-0">
            You&apos;ll likely find 40-80% time savings on most tasks!
          </p>
        </div>

        <h2>🔗 Next Steps</h2>
        <p>
          Now go apply these techniques and start tracking your time savings. 
          Return to the <a href="/tutorial" className="text-blue-600 hover:text-blue-800">main tutorials</a> to master each feature.
        </p>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}

