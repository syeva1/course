import { TutorialNavigation } from "@/components/TutorialNavigation";
import { CodeExample } from "@/components/CodeExample";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain, Target, Zap, CheckCircle, XCircle } from "lucide-react";

export default function PromptEngineeringLesson() {
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
            Advanced Prompt Engineering
          </h1>
          <p className="text-xl text-gray-600">
            Master the art of writing effective prompts for complex AI interactions and better code generation.
          </p>
        </div>

        <TutorialNavigation />

        <div className="space-y-8 mt-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">The Art of Prompt Engineering</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Prompt engineering is the skill of crafting effective instructions for AI systems. A well-written prompt can mean the difference between getting exactly what you need and receiving generic, unhelpful responses.
            </p>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Prompt Engineering Matters</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Precision:</strong> Get exactly what you need, not what the AI thinks you want</li>
                <li><strong>Efficiency:</strong> Reduce back-and-forth iterations and clarifications</li>
                <li><strong>Quality:</strong> Generate higher-quality, more maintainable code</li>
                <li><strong>Context:</strong> Help AI understand your specific requirements and constraints</li>
              </ul>
            </div>
          </div>

          {/* Core Principles */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Principles of Effective Prompts</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Be Specific and Detailed</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Vague Prompt</h4>
                    <CodeExample
                      language="text"
                      code={`Create a function that handles user data`}
                    />
                    <p className="text-red-700 text-sm mt-2">Too generic - what kind of user data? What operations?</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Specific Prompt</h4>
                    <CodeExample
                      language="text"
                      code={`Create a TypeScript function that validates user registration data including email format, password strength, and required fields. Include proper error handling and return validation results.`}
                    />
                    <p className="text-green-700 text-sm mt-2">Clear requirements and expected behavior</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Provide Context and Constraints</h3>
                <CodeExample
                  language="text"
                  code={`Create a React component for a shopping cart that:
- Uses TypeScript with strict typing
- Implements Redux for state management
- Follows Material-UI design patterns
- Handles loading states and error conditions
- Is fully responsive for mobile and desktop
- Includes accessibility features (ARIA labels, keyboard navigation)
- Has unit tests using Jest and React Testing Library`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Use Examples and Patterns</h3>
                <CodeExample
                  language="text"
                  code={`Create a data fetching hook similar to this pattern:

// Example pattern:
const useUserData = (userId: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // ... implementation
};

I need a similar hook for fetching product data with the same error handling and loading states.`}
                />
              </div>
            </div>
          </div>

          {/* Advanced Techniques */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Prompting Techniques</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Chain of Thought Prompting</h3>
                <p className="text-gray-600 mb-4">Guide the AI through a logical reasoning process:</p>
                <CodeExample
                  language="text"
                  code={`I need to optimize this database query. Let's think through this step by step:

1. First, analyze the current query performance bottlenecks
2. Identify which indexes might be missing
3. Consider query structure improvements
4. Suggest specific optimizations
5. Provide the optimized query with explanations

Current query:
SELECT * FROM users u 
JOIN orders o ON u.id = o.user_id 
WHERE u.created_at > '2023-01-01' 
AND o.status = 'completed'
ORDER BY o.created_at DESC;`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Role-Based Prompting</h3>
                <CodeExample
                  language="text"
                  code={`You are a senior software architect with 10+ years of experience in microservices architecture. 

I'm building a new e-commerce platform and need to design the user authentication service. Please:

1. Design the service architecture
2. Define the API contracts
3. Suggest security best practices
4. Consider scalability requirements
5. Provide implementation recommendations

The service needs to handle 100k+ concurrent users and integrate with our existing user management system.`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Iterative Refinement</h3>
                <p className="text-gray-600 mb-4">Start broad, then narrow down with follow-up prompts:</p>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Initial Prompt:</h4>
                    <CodeExample
                      language="text"
                      code={`Create a user authentication system`}
                    />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Follow-up 1:</h4>
                    <CodeExample
                      language="text"
                      code={`Make it use JWT tokens and include password hashing with bcrypt`}
                    />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Follow-up 2:</h4>
                    <CodeExample
                      language="text"
                      code={`Add rate limiting and account lockout after 5 failed attempts`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Context Management */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Context Management Strategies</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">File Context</h3>
                <CodeExample
                  language="text"
                  code={`Looking at the attached file (UserService.ts), I need to add a method that:

1. Follows the same error handling pattern as existing methods
2. Uses the same logging approach with the logger instance
3. Maintains consistency with the existing code style
4. Includes proper TypeScript types like the other methods

Add a method to update user preferences that validates the input and updates the database.`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Context</h3>
                <CodeExample
                  language="text"
                  code={`In this Next.js project with TypeScript and Tailwind CSS, I need to create a new page component that:

- Follows the existing routing structure in /pages
- Uses the same layout component as other pages
- Implements the design system defined in /styles/globals.css
- Uses the same API client pattern from /lib/api
- Includes proper SEO metadata like other pages`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Framework-Specific Context</h3>
                <CodeExample
                  language="text"
                  code={`Create a React component using the same patterns as the existing codebase:

- Use functional components with hooks (not class components)
- Follow the naming convention: PascalCase for components
- Use the custom Button and Input components from /components/ui
- Implement the same error boundary pattern
- Use the theme context for styling
- Include PropTypes or TypeScript interfaces`}
                />
              </div>
            </div>
          </div>

          {/* Common Pitfalls */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Pitfalls to Avoid</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-3">❌ What Not to Do</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Asking for too much at once</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Being vague about requirements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Not providing enough context</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Ignoring existing code patterns</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-3">✅ Best Practices</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Break complex tasks into steps</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Be specific about requirements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Provide relevant context</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Reference existing patterns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Exercises */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice Exercises</h2>
            <p className="text-gray-600 mb-6">
              Try these exercises to improve your prompt engineering skills:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Exercise 1: Refactor This Prompt</h3>
                <p className="text-gray-600 mb-2">Take this vague prompt and make it specific and actionable:</p>
                <CodeExample
                  language="text"
                  code={`Original: "Make this code better"

Your task: Rewrite this to be specific about what "better" means, what the code does, and what improvements you want.`}
                />
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Exercise 2: Context-Rich Prompt</h3>
                <p className="text-gray-600 mb-2">Write a prompt that includes all necessary context for a complex task:</p>
                <CodeExample
                  language="text"
                  code={`Task: Create a data visualization component

Requirements:
- Framework: React with TypeScript
- Charting library: Chart.js
- Data: Real-time stock prices
- Styling: Tailwind CSS
- State management: Redux Toolkit
- Performance: Handle 1000+ data points efficiently`}
                />
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Excellent Work! 🎯</h2>
            <p className="text-gray-600 mb-6">
              You've mastered prompt engineering! Next, let's learn about AI-assisted debugging techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tutorial/advanced/lessons/debugging-ai"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next Lesson: AI-Assisted Debugging
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
