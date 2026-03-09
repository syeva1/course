import { TutorialNavigation } from "@/components/TutorialNavigation";
import { CodeExample } from "@/components/CodeExample";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap, Target, Clock, CheckCircle } from "lucide-react";

export default function PerformanceOptimizationLesson() {
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
            Performance & Best Practices
          </h1>
          <p className="text-xl text-gray-600">
            Optimize your AI usage and follow industry best practices for maximum efficiency.
          </p>
        </div>

        <TutorialNavigation />

        <div className="space-y-8 mt-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Optimizing AI Performance</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Learn how to get the most out of Cursor's AI capabilities while maintaining high performance and following industry best practices.
            </p>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Optimization Areas</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Prompt Efficiency:</strong> Write effective prompts that get better results faster</li>
                <li><strong>Context Management:</strong> Provide the right amount of context without overwhelming the AI</li>
                <li><strong>Model Selection:</strong> Choose the right AI model for your specific needs</li>
                <li><strong>Workflow Optimization:</strong> Streamline your development process</li>
              </ul>
            </div>
          </div>

          {/* Prompt Optimization */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Prompt Optimization Techniques</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Efficient Prompt Structure</h3>
                <CodeExample
                  language="text"
                  code={`Effective prompt structure:

1. CONTEXT: Brief background information
2. TASK: Clear, specific instruction
3. CONSTRAINTS: Any limitations or requirements
4. FORMAT: Desired output format
5. EXAMPLES: Reference examples if helpful

Example:
"Context: I'm building a React component for user authentication.
Task: Create a login form with email and password fields.
Constraints: Use TypeScript, include validation, and follow Material-UI patterns.
Format: Complete functional component with proper types.
Example: Similar to our existing UserProfile component."`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Context Optimization</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">✅ Good Context</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Relevant file references</li>
                      <li>• Specific function/component names</li>
                      <li>• Current project structure</li>
                      <li>• Technology stack details</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">❌ Avoid</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Entire codebase dumps</li>
                      <li>• Irrelevant file contents</li>
                      <li>• Too much historical context</li>
                      <li>• Vague references</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Model Selection */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Model Selection</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Choosing the Right Model</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">GPT-4 (Recommended for Complex Tasks)</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-green-600 mb-1">Best For:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Complex code generation</li>
                          <li>• Architecture decisions</li>
                          <li>• Debugging complex issues</li>
                          <li>• Code refactoring</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-600 mb-1">Performance:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Higher accuracy</li>
                          <li>• Better context understanding</li>
                          <li>• More detailed responses</li>
                          <li>• Slower but more thorough</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">GPT-3.5 Turbo (Good for Simple Tasks)</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-green-600 mb-1">Best For:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Quick code completions</li>
                          <li>• Simple refactoring</li>
                          <li>• Basic explanations</li>
                          <li>• Rapid prototyping</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-600 mb-1">Performance:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Faster responses</li>
                          <li>• Lower cost</li>
                          <li>• Good for simple tasks</li>
                          <li>• Less context awareness</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Model Configuration</h3>
                <CodeExample
                  language="json"
                  title="settings.json - Model Configuration"
                  code={`{
  "cursor.ai.model": "gpt-4",
  "cursor.ai.temperature": 0.1,
  "cursor.ai.maxTokens": 4000,
  "cursor.ai.systemMessage": "You are an expert software developer. Provide clear, concise, and accurate solutions.",
  "cursor.ai.includeCodeContext": true,
  "cursor.ai.includeFileContext": true
}`}
                />
              </div>
            </div>
          </div>

          {/* Workflow Optimization */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Workflow Optimization</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Efficient Development Patterns</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Start with Structure</h4>
                      <p className="text-gray-600">Ask AI to create the basic structure first, then iterate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Iterative Refinement</h4>
                      <p className="text-gray-600">Use follow-up prompts to improve and add features</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Batch Similar Tasks</h4>
                      <p className="text-gray-600">Group related requests to maintain context</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Context Management</h3>
                <CodeExample
                  language="text"
                  code={`Effective context management strategies:

1. Use file references instead of pasting entire files
   "Looking at the UserService.ts file, add error handling to the login method"

2. Provide relevant imports and dependencies
   "Using the existing API client from /lib/api, create a new endpoint"

3. Reference existing patterns
   "Following the same pattern as the ProductCard component, create a UserCard"

4. Include specific constraints
   "Using TypeScript and following our existing naming conventions"`}
                />
              </div>
            </div>
          </div>

          {/* Performance Monitoring */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Monitoring</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tracking AI Usage</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Monitor response times and quality</li>
                  <li>Track which prompts work best</li>
                  <li>Identify patterns in successful interactions</li>
                  <li>Adjust model settings based on performance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimization Metrics</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Response Time</h4>
                    <p className="text-sm text-gray-600">Track how quickly AI responds</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Accuracy</h4>
                    <p className="text-sm text-gray-600">Measure code quality and correctness</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Efficiency</h4>
                    <p className="text-sm text-gray-600">Iterations needed to get desired result</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Best Practices</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Code Quality Standards</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Always review AI-generated code before committing</li>
                  <li>Use AI to generate tests for your code</li>
                  <li>Maintain consistent coding standards across the team</li>
                  <li>Document complex AI-generated logic</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Considerations</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Never share sensitive data in AI prompts</li>
                  <li>Review AI suggestions for security vulnerabilities</li>
                  <li>Use AI to identify potential security issues</li>
                  <li>Follow secure coding practices in AI-generated code</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Team Collaboration</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Share effective prompts with your team</li>
                  <li>Document AI-assisted workflows</li>
                  <li>Use consistent AI model settings</li>
                  <li>Regularly review and update AI configurations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Issues & Solutions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Issues</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Slow AI Responses</h4>
                    <p className="text-gray-700 mb-2">If AI is responding slowly:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Check your internet connection</li>
                      <li>Try using GPT-3.5 for simpler tasks</li>
                      <li>Reduce the amount of context in prompts</li>
                      <li>Restart Cursor if issues persist</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-400 bg-red-50 p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Poor Code Quality</h4>
                    <p className="text-gray-700 mb-2">If AI generates low-quality code:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Provide more specific requirements</li>
                      <li>Include better examples in prompts</li>
                      <li>Use GPT-4 for complex tasks</li>
                      <li>Break down complex requests into smaller parts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimized! 🚀</h2>
            <p className="text-gray-600 mb-6">
              You've mastered performance optimization and best practices for Cursor. These techniques will help you get the most out of AI-assisted development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tutorial/examples"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Real Examples
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
