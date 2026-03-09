import { TutorialNavigation } from "@/components/TutorialNavigation";
import { CodeExample } from "@/components/CodeExample";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code2, Zap, Brain, FileText, Settings, Sparkles, Wand2, Target } from "lucide-react";

export default function CodeGenerationLesson() {
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
            AI-Powered Code Generation
          </h1>
          <p className="text-xl text-gray-600">
            Master Cursor's code generation capabilities with Claude 4.5 Sonnet, Composer, and advanced AI features.
          </p>
        </div>

        <TutorialNavigation />

        <div className="space-y-8 mt-8">
          {/* Code Generation Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Code Generation Overview</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Cursor's code generation is powered by Claude 4.5 Sonnet and understands your entire codebase context for intelligent, relevant code creation.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                <div className="flex items-center mb-4">
                  <Wand2 className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Smart Generation</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Context-aware code creation</li>
                  <li>• Follows project patterns</li>
                  <li>• Maintains code consistency</li>
                  <li>• Understands dependencies</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-green-100">
                <div className="flex items-center mb-4">
                  <Code2 className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Multi-file Support</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Generate complete features</li>
                  <li>• Create related files</li>
                  <li>• Update existing code</li>
                  <li>• Maintain relationships</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Intelligent Patterns</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Learns from your codebase</li>
                  <li>• Suggests best practices</li>
                  <li>• Adapts to your style</li>
                  <li>• Provides explanations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Basic Code Generation */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Basic Code Generation</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Start with simple code generation using natural language prompts in AI Chat.
            </p>

            <div className="space-y-8">
              {/* Simple Components */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Simple Components</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Basic React Component</h4>
                    <CodeExample
                      language="text"
                      code={`Create a simple button component with:
- Click handler
- Disabled state
- Loading state
- TypeScript types`}
                    />
                    <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h5 className="font-medium text-gray-900 mb-2">Generated Code:</h5>
                      <CodeExample
                        language="tsx"
                        code={`interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  loading = false,
  children
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={\`px-4 py-2 rounded font-medium transition-colors \${
        disabled || loading
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }\`}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};`}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Custom Hook</h4>
                    <CodeExample
                      language="text"
                      code={`Create a custom hook for managing form state with:
- Form data object
- Validation errors
- Submit handler
- Reset function
- TypeScript support`}
                    />
                    <div className="mt-4 bg-green-50 rounded-lg p-4 border border-green-200">
                      <h5 className="font-medium text-gray-900 mb-2">Generated Code:</h5>
                      <CodeExample
                        language="tsx"
                        code={`interface UseFormProps<T> {
  initialValues: T;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
  onSubmit: (values: T) => void | Promise<void>;
}

export const useForm = <T extends Record<string, any>>({
  initialValues,
  validate,
  onSubmit
}: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate) {
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset
  };
};`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* API Integration */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">API Integration</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">API Client</h4>
                    <CodeExample
                      language="text"
                      code={`Create an API client for user management with:
- GET /users endpoint
- POST /users endpoint
- PUT /users/:id endpoint
- DELETE /users/:id endpoint
- Error handling
- TypeScript types`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">React Query Hook</h4>
                    <CodeExample
                      language="text"
                      code={`Create a React Query hook for fetching users with:
- useQuery for GET
- useMutation for POST/PUT/DELETE
- Optimistic updates
- Error handling
- Loading states`}
                    />
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Generation Best Practices</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Be Specific</h4>
                      <p className="text-gray-600 text-sm">Include details about props, types, styling, and behavior.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Mention Your Stack</h4>
                      <p className="text-gray-600 text-sm">Specify React, TypeScript, styling library, etc.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Include Requirements</h4>
                      <p className="text-gray-600 text-sm">Mention accessibility, performance, or specific patterns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Code Generation */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Advanced Code Generation</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Use Composer for complex, multi-file code generation that understands your entire project.
            </p>

            <div className="space-y-8">
              {/* Complete Features */}
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Complete Feature Development</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">User Authentication System</h4>
                    <CodeExample
                      language="text"
                      code={`Create a complete authentication system with:

Files to create:
- components/auth/LoginForm.tsx
- components/auth/RegisterForm.tsx
- components/auth/ProtectedRoute.tsx
- context/AuthContext.tsx
- hooks/useAuth.ts
- types/auth.ts
- utils/auth.ts
- services/authService.ts

Features:
- Email/password login
- User registration
- JWT token handling
- Protected routes
- Form validation
- Error handling
- Loading states
- TypeScript types
- Responsive design`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Composer will create all files with proper imports, types, and consistent code style.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Dashboard with Data Visualization</h4>
                    <CodeExample
                      language="text"
                      code={`Create a dashboard with:

Components:
- DashboardLayout.tsx
- StatsCard.tsx
- Chart.tsx
- DataTable.tsx
- FilterBar.tsx

Features:
- Real-time data fetching
- Interactive charts
- Data filtering
- Export functionality
- Responsive design
- Loading states
- Error handling`}
                    />
                  </div>
                </div>
              </div>

              {/* Code Refactoring */}
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Code Refactoring</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Component Refactoring</h4>
                    <CodeExample
                      language="text"
                      code={`Refactor this large component into smaller, reusable components:

Current: UserProfile.tsx (500+ lines)
Break it down into:
- UserProfileHeader.tsx
- UserProfileDetails.tsx
- UserProfileActions.tsx
- UserProfileSettings.tsx
- hooks/useUserProfile.ts
- types/userProfile.ts

Maintain all existing functionality and improve code organization.`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">State Management Migration</h4>
                    <CodeExample
                      language="text"
                      code={`Migrate from useState to Redux Toolkit:

Current: Multiple components using useState for user data
Create:
- store/userSlice.ts
- store/index.ts
- hooks/useAppDispatch.ts
- hooks/useAppSelector.ts

Update all components to use Redux while maintaining functionality.`}
                    />
                  </div>
                </div>
              </div>

              {/* Pattern Implementation */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Pattern Implementation</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Observer Pattern</h4>
                    <CodeExample
                      language="text"
                      code={`Implement the Observer pattern for a notification system:

Create:
- types/observer.ts
- utils/NotificationSubject.ts
- hooks/useNotification.ts
- components/NotificationCenter.tsx

Features:
- Subscribe/unsubscribe to notifications
- Multiple notification types
- Priority handling
- Auto-dismiss functionality`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Factory Pattern</h4>
                    <CodeExample
                      language="text"
                      code={`Create a factory for different chart types:

Create:
- types/chart.ts
- factories/ChartFactory.ts
- components/charts/LineChart.tsx
- components/charts/BarChart.tsx
- components/charts/PieChart.tsx
- components/ChartRenderer.tsx

Features:
- Dynamic chart creation
- Consistent interface
- Easy to extend
- TypeScript support`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Context-Aware Generation */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Context-Aware Generation</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Leverage Cursor's understanding of your codebase for intelligent, context-aware code generation.
            </p>

            <div className="space-y-8">
              {/* @-mentions for Context */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Using @-mentions for Context</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">File-Specific Generation</h4>
                    <CodeExample
                      language="text"
                      code={`@components/Button.tsx Create a loading variant of this button that matches the existing design system`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      AI will analyze the existing Button component and create a loading variant that matches its style.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Function Extension</h4>
                    <CodeExample
                      language="text"
                      code={`@utils/formatDate Add support for relative time formatting (e.g., "2 hours ago") to this function`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      AI will understand the current function and extend it with new functionality.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Multiple File Context</h4>
                    <CodeExample
                      language="text"
                      code={`@components/UserCard.tsx @components/UserList.tsx Create a UserGrid component that combines the layout of UserList with the design of UserCard`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      AI will analyze both components and create a new one that combines their best features.
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Pattern Recognition */}
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Pattern Recognition</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Following Existing Patterns</h4>
                    <CodeExample
                      language="text"
                      code={`Create a new API endpoint that follows the same patterns as the existing user endpoints in this project`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      AI will analyze your existing API patterns and create consistent code.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Style Consistency</h4>
                    <CodeExample
                      language="text"
                      code={`Create a new form component that matches the styling and validation patterns used in the existing forms`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      AI will understand your form patterns and create consistent styling and validation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Architecture Consistency</h4>
                    <CodeExample
                      language="text"
                      code={`Add a new feature to the dashboard that follows the same architecture as the existing features`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      AI will understand your project architecture and create code that fits seamlessly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dependency-Aware Generation */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Dependency-Aware Generation</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Import Management</h4>
                    <CodeExample
                      language="text"
                      code={`Create a new utility function that uses the existing date formatting utilities and follows the same import patterns`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      AI will automatically include the correct imports and follow your project's import conventions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Type Integration</h4>
                    <CodeExample
                      language="text"
                      code={`Create a new API service that uses the existing User type and follows the same error handling patterns`}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      AI will use your existing types and maintain consistency with your error handling approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Quality and Testing */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Code Quality and Testing</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Generate high-quality code with proper testing, documentation, and error handling.
            </p>

            <div className="space-y-8">
              {/* Test Generation */}
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Generation</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Unit Tests</h4>
                    <CodeExample
                      language="text"
                      code={`Create comprehensive unit tests for the UserProfile component including:
- Rendering tests
- User interaction tests
- Error state tests
- Loading state tests
- Accessibility tests`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Integration Tests</h4>
                    <CodeExample
                      language="text"
                      code={`Create integration tests for the authentication flow including:
- Login success/failure scenarios
- Token handling
- Protected route access
- Logout functionality`}
                    />
                  </div>
                </div>
              </div>

              {/* Documentation Generation */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Documentation Generation</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">JSDoc Comments</h4>
                    <CodeExample
                      language="text"
                      code={`Add comprehensive JSDoc comments to the useAuth hook including:
- Description of the hook
- Parameter documentation
- Return value documentation
- Usage examples
- Error handling notes`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">README Updates</h4>
                    <CodeExample
                      language="text"
                      code={`Update the README.md to include documentation for the new authentication system including:
- Installation instructions
- Usage examples
- API reference
- Configuration options`}
                    />
                  </div>
                </div>
              </div>

              {/* Error Handling */}
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Error Handling</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Robust Error Handling</h4>
                    <CodeExample
                      language="text"
                      code={`Add comprehensive error handling to the API client including:
- Network error handling
- HTTP status code handling
- Retry logic for failed requests
- User-friendly error messages
- Logging for debugging`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Error Boundaries</h4>
                    <CodeExample
                      language="text"
                      code={`Create error boundaries for the React application including:
- Global error boundary
- Feature-specific error boundaries
- Error reporting
- Fallback UI components
- Recovery mechanisms`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <p className="text-gray-700 mb-6">
              Now that you understand code generation, explore advanced Cursor features and settings:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/tutorial/advanced/lessons/cursor-settings"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Essential Settings</h3>
                <p className="text-gray-600 text-sm">Configure Cursor for maximum productivity</p>
              </Link>
              <Link 
                href="/tutorial/advanced/lessons/prompt-engineering"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Prompt Engineering</h3>
                <p className="text-gray-600 text-sm">Master advanced prompting techniques</p>
              </Link>
            </div>
          </div>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}