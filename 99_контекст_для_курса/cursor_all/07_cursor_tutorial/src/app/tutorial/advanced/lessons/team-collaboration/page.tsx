import { TutorialNavigation } from "@/components/TutorialNavigation";
import { CodeExample } from "@/components/CodeExample";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Users, GitBranch, MessageSquare, CheckCircle } from "lucide-react";

export default function TeamCollaborationLesson() {
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
            Team Collaboration
          </h1>
          <p className="text-xl text-gray-600">
            Use Cursor effectively in team environments and enhance collaborative development workflows.
          </p>
        </div>

        <TutorialNavigation />

        <div className="space-y-8 mt-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Collaborative Development with Cursor</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Cursor can significantly enhance team collaboration by providing consistent AI assistance, standardized code generation, and improved code review processes.
            </p>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Team Benefits</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Consistent Code Quality:</strong> AI helps maintain coding standards across the team</li>
                <li><strong>Faster Onboarding:</strong> New team members can learn codebase patterns quickly</li>
                <li><strong>Improved Code Reviews:</strong> AI can help identify potential issues before review</li>
                <li><strong>Knowledge Sharing:</strong> AI can explain complex code to team members</li>
              </ul>
            </div>
          </div>

          {/* Shared Configuration */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Shared Team Configuration</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Workspace Settings</h3>
                <CodeExample
                  language="json"
                  title=".vscode/settings.json - Team Configuration"
                  code={`{
  "cursor.ai.enabled": true,
  "cursor.ai.model": "gpt-4",
  "cursor.ai.temperature": 0.1,
  "cursor.ai.systemMessage": "You are helping our development team. Follow our coding standards and best practices.",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
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
  }
}`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Team Guidelines</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use consistent AI model settings across the team</li>
                  <li>Agree on coding standards and formatting rules</li>
                  <li>Share common AI prompts and templates</li>
                  <li>Document team-specific AI workflows</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Code Review Integration */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Enhanced Code Reviews</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pre-Review AI Analysis</h3>
                <CodeExample
                  language="text"
                  code={`AI prompts for code review preparation:

1. "Review this code for potential bugs, performance issues, and security vulnerabilities"

2. "Check this code against our team's coding standards and suggest improvements"

3. "Analyze this function for complexity and suggest refactoring opportunities"

4. "Verify that this code follows our established patterns and conventions"

5. "Generate test cases for this function to ensure good coverage"`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Review Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">AI Pre-Review</h4>
                      <p className="text-gray-600">Use AI to analyze code before human review</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Human Review</h4>
                      <p className="text-gray-600">Team members review with AI insights</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">AI-Assisted Fixes</h4>
                      <p className="text-gray-600">Use AI to implement suggested improvements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Git Integration */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Git Workflow Integration</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI-Generated Commit Messages</h3>
                <CodeExample
                  language="text"
                  code={`AI prompts for commit messages:

1. "Generate a clear, descriptive commit message for these changes: [paste git diff]"

2. "Create a commit message following conventional commits format for: [describe changes]"

3. "Write a commit message that explains both what was changed and why"

4. "Generate a commit message suitable for a pull request with these changes"`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Branch Management</h3>
                <CodeExample
                  language="bash"
                  code={`# AI-assisted branch naming
git checkout -b feature/ai-generated-branch-name

# AI-generated commit messages
git add .
git commit -m "$(cursor --generate-commit-message)"

# AI-assisted merge conflict resolution
git merge feature-branch
# Use AI to help resolve conflicts`}
                />
              </div>
            </div>
          </div>

          {/* Documentation */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Documentation</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Code Documentation</h3>
                <CodeExample
                  language="text"
                  code={`AI prompts for documentation:

1. "Generate comprehensive JSDoc comments for this function"

2. "Create API documentation for this endpoint including parameters and responses"

3. "Write a README section explaining how to use this module"

4. "Generate inline comments explaining the complex logic in this code"

5. "Create a changelog entry for these recent changes"`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Team Knowledge Base</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use AI to generate onboarding documentation</li>
                  <li>Create troubleshooting guides for common issues</li>
                  <li>Generate architecture decision records (ADRs)</li>
                  <li>Maintain up-to-date API documentation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Communication */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Communication</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI-Assisted Communication</h3>
                <CodeExample
                  language="text"
                  code={`AI prompts for team communication:

1. "Draft a clear explanation of this technical decision for the team"

2. "Write a status update for this feature development"

3. "Generate a summary of the changes in this pull request"

4. "Create a technical specification for this new feature"

5. "Draft a response to this code review comment"`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Meeting Preparation</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use AI to generate meeting agendas</li>
                  <li>Create technical discussion points</li>
                  <li>Prepare code examples for demonstrations</li>
                  <li>Generate follow-up action items</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Best Practices</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-3">✅ Do This</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Share AI prompts and templates with the team</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use consistent AI model settings</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Document team-specific AI workflows</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Review AI-generated code before committing</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-3">❌ Avoid This</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0">•</span>
                      <span>Blindly accepting all AI suggestions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0">•</span>
                      <span>Using different AI models inconsistently</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0">•</span>
                      <span>Not reviewing AI-generated code</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0">•</span>
                      <span>Over-relying on AI for critical decisions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Team Collaboration Mastered! 👥</h2>
            <p className="text-gray-600 mb-6">
              You've learned how to use Cursor effectively in team environments. These practices will improve your team's productivity and code quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tutorial/advanced/lessons/performance-optimization"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next Lesson: Performance & Best Practices
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
