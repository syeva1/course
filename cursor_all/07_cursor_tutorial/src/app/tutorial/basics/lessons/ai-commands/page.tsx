import { TutorialNavigation } from "@/components/TutorialNavigation";
import { CodeExample } from "@/components/CodeExample";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageSquare, Code2, Zap, Brain, FileText, Search, Settings, Sparkles } from "lucide-react";

export default function AICommandsLesson() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/tutorial/basics" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Basics
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Commands & Features
          </h1>
          <p className="text-xl text-gray-600">
            Master Cursor's AI capabilities including Claude 4.5 Sonnet, Composer, codebase context, and advanced code generation.
          </p>
        </div>

        <TutorialNavigation />

        <div className="space-y-8 mt-8">
          {/* AI Features Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">AI Features Overview</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Cursor's AI features are powered by Claude 4.5 Sonnet and designed to understand your entire codebase context.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">AI Chat</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Natural language conversations with Claude 4.5 Sonnet for code generation, debugging, and explanations.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Access:</strong> Cmd+L (Mac) / Ctrl+L (Windows)
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100">
                <div className="flex items-center mb-4">
                  <Code2 className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Composer</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Multi-file editing with AI that understands your entire project structure and maintains context.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Access:</strong> Cmd+I (Mac) / Ctrl+I (Windows)
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-green-100">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Codebase Context</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  AI that understands your entire project, dependencies, and can reference specific files and functions.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Access:</strong> @-mentions in chat
                </div>
              </div>
            </div>
          </div>

          {/* AI Chat Commands */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-900">AI Chat Commands</h2>
            </div>

            <p className="text-gray-600 mb-6">
              The AI Chat (Cmd+L / Ctrl+L) is your primary interface for interacting with Claude 4.5 Sonnet.
            </p>

            <div className="space-y-8">
              {/* Basic Chat Commands */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Chat Commands</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Code Generation</h4>
                    <CodeExample
                      language="text"
                      code={`Create a React component for a user profile card with:
- User avatar
- Name and email
- Edit button
- TypeScript types
- Responsive design`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will generate a complete, working React component with all requested features.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Code Explanation</h4>
                    <CodeExample
                      language="text"
                      code={`Explain this function and suggest improvements:

const processUserData = (users) => {
  return users.filter(user => user.active)
    .map(user => ({
      ...user,
      fullName: \`\${user.firstName} \${user.lastName}\`
    }))
    .sort((a, b) => a.fullName.localeCompare(b.fullName));
}`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will explain the function's purpose, identify potential issues, and suggest improvements.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Debugging Help</h4>
                    <CodeExample
                      language="text"
                      code={`I'm getting an error "Cannot read property 'map' of undefined" in this code. Help me fix it:

const UserList = ({ users }) => {
  return (
    <div>
      {users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  );
};`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will identify the issue and provide a solution with proper error handling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advanced Chat Features */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Chat Features</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">@-mentions for Files</h4>
                    <CodeExample
                      language="text"
                      code={`@components/Button.tsx How can I add a loading state to this button component?`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Reference specific files in your project for context-aware suggestions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">@-mentions for Functions</h4>
                    <CodeExample
                      language="text"
                      code={`@utils/formatDate Can you optimize this function for better performance?`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Reference specific functions or variables for targeted improvements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Best Practices */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Chat Best Practices</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Be Specific</h4>
                      <p className="text-gray-600 text-sm">Provide clear, detailed requirements for better results.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Include Context</h4>
                      <p className="text-gray-600 text-sm">Mention your tech stack, project structure, and constraints.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Iterate and Refine</h4>
                      <p className="text-gray-600 text-sm">Ask follow-up questions to improve the generated code.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Composer Commands */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Composer Commands</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Composer (Cmd+I / Ctrl+I) is Cursor's revolutionary multi-file editing feature that understands your entire codebase.
            </p>

            <div className="space-y-8">
              {/* Multi-file Creation */}
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Multi-file Creation</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Complete Feature Development</h4>
                    <CodeExample
                      language="text"
                      code={`Create a complete authentication system with:

Files to create:
- components/LoginForm.tsx
- components/RegisterForm.tsx
- components/ProtectedRoute.tsx
- context/AuthContext.tsx
- hooks/useAuth.ts
- types/auth.ts
- utils/auth.ts

Features needed:
- Email/password login
- User registration
- Protected routes
- JWT token handling
- Form validation
- Error handling
- TypeScript types`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Composer will create all files with proper imports, types, and consistent code style.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">API Integration</h4>
                    <CodeExample
                      language="text"
                      code={`Create a complete API integration for a blog system:

- API client with axios
- React Query hooks for data fetching
- TypeScript types for API responses
- Error handling and loading states
- Caching and invalidation strategies`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Composer understands your existing project structure and creates consistent API patterns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Multi-file Refactoring */}
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Multi-file Refactoring</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">State Management Migration</h4>
                    <CodeExample
                      language="text"
                      code={`Refactor the entire user management system from useState to Redux Toolkit:

- Create Redux store with user slice
- Update all components to use Redux
- Create selectors for user data
- Add middleware for async actions
- Update all imports and dependencies`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Composer will update all related files while maintaining functionality.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Component Restructuring</h4>
                    <CodeExample
                      language="text"
                      code={`Break down the large Dashboard component into smaller, reusable components:

- Extract header, sidebar, and main content
- Create custom hooks for data fetching
- Implement proper prop drilling or context
- Add proper TypeScript interfaces
- Maintain all existing functionality`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Composer understands component relationships and creates a clean architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Composer Best Practices */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Composer Best Practices</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Effective Prompts:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Be specific about file structure</li>
                      <li>• Mention your tech stack and patterns</li>
                      <li>• Include requirements and constraints</li>
                      <li>• Specify naming conventions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Review Generated Code:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Check imports and dependencies</li>
                      <li>• Verify TypeScript types</li>
                      <li>• Test functionality</li>
                      <li>• Follow your coding standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Codebase Context Features */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Codebase Context Features</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Cursor's AI understands your entire codebase and can reference specific files, functions, and project patterns.
            </p>

            <div className="space-y-8">
              {/* @-mentions */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">@-mentions for Context</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">File References</h4>
                    <CodeExample
                      language="text"
                      code={`@components/UserCard.tsx How can I add a loading skeleton to this component?`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will analyze the specific file and provide context-aware suggestions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Function References</h4>
                    <CodeExample
                      language="text"
                      code={`@utils/formatCurrency Can you add support for different currencies and locales?`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will understand the function's current implementation and extend it appropriately.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Multiple References</h4>
                    <CodeExample
                      language="text"
                      code={`@components/Button.tsx @components/Input.tsx Create a consistent design system for these components`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will analyze multiple files and create consistent patterns across them.
                    </p>
                  </div>
                </div>
              </div>

              {/* Codebase Search */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Codebase Search</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Find Similar Patterns</h4>
                    <CodeExample
                      language="text"
                      code={`Find all components that use the useAuth hook and show me how they handle authentication errors`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will search your codebase and show you patterns and implementations.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Analyze Dependencies</h4>
                    <CodeExample
                      language="text"
                      code={`What dependencies does the UserProfile component have? Are there any circular dependencies?`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will analyze your project structure and identify dependency issues.
                    </p>
                  </div>
                </div>
              </div>

              {/* Context-Aware Suggestions */}
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Context-Aware Suggestions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Project-Specific Code</h4>
                    <CodeExample
                      language="text"
                      code={`Create a new API endpoint that follows the same patterns as the existing user endpoints`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will analyze your existing API patterns and create consistent code.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Style Consistency</h4>
                    <CodeExample
                      language="text"
                      code={`Update this component to match the styling patterns used in the rest of the project`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will understand your project's styling conventions and apply them consistently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced AI Features */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Advanced AI Features</h2>
            </div>

            <div className="space-y-8">
              {/* Code Generation Patterns */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Code Generation Patterns</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">React Patterns</h4>
                    <CodeExample
                      language="text"
                      code={`Create a custom hook for form validation with:
- Field validation rules
- Error messages
- Dirty state tracking
- Submit handling
- TypeScript support`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">API Patterns</h4>
                    <CodeExample
                      language="text"
                      code={`Create a REST API client with:
- Request/response interceptors
- Error handling
- Loading states
- Caching strategy
- TypeScript types`}
                    />
                  </div>
                </div>
              </div>

              {/* Debugging Assistance */}
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Debugging Assistance</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Error Analysis</h4>
                    <CodeExample
                      language="text"
                      code={`I'm getting this error: "Maximum update depth exceeded". Help me debug this React component:

[Paste your component code here]`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will analyze the error and provide specific solutions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Performance Issues</h4>
                    <CodeExample
                      language="text"
                      code={`This component is re-rendering too often. Help me optimize it for better performance:

[Paste your component code here]`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will identify performance bottlenecks and suggest optimizations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Code Review */}
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Code Review</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Security Review</h4>
                    <CodeExample
                      language="text"
                      code={`Review this authentication code for security vulnerabilities:

[Paste your auth code here]`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will identify potential security issues and suggest improvements.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Code Quality</h4>
                    <CodeExample
                      language="text"
                      code={`Review this code for best practices and suggest improvements:

[Paste your code here]`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      The AI will analyze code quality and suggest improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <p className="text-gray-700 mb-6">
              Now that you understand Cursor's AI features, learn about file management and code generation:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/tutorial/basics/lessons/file-management"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">File Management</h3>
                <p className="text-gray-600 text-sm">Learn efficient file and project management</p>
              </Link>
              <Link 
                href="/tutorial/basics/lessons/code-generation"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Code Generation</h3>
                <p className="text-gray-600 text-sm">Master AI-powered code generation techniques</p>
              </Link>
            </div>
          </div>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}