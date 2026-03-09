import { TutorialNavigation } from "@/components/TutorialNavigation";
import { CodeExample } from "@/components/CodeExample";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bug, Search, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";

export default function DebuggingAILesson() {
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
            AI-Assisted Debugging
          </h1>
          <p className="text-xl text-gray-600">
            Master the art of using Cursor's AI to identify, analyze, and fix complex bugs efficiently.
          </p>
        </div>

        <TutorialNavigation />

        <div className="space-y-8 mt-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Bug className="w-8 h-8 text-red-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">The Power of AI Debugging</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Debugging with AI assistance can dramatically reduce the time spent finding and fixing issues. Cursor's AI can analyze error messages, trace execution paths, and suggest solutions based on context.
            </p>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why AI Debugging is Effective</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Pattern Recognition:</strong> AI can identify common bug patterns and their solutions</li>
                <li><strong>Context Analysis:</strong> Understands your codebase and can trace issues across files</li>
                <li><strong>Multiple Perspectives:</strong> Suggests different approaches to solving the same problem</li>
                <li><strong>Learning from Examples:</strong> Draws from vast knowledge of similar issues and solutions</li>
              </ul>
            </div>
          </div>

          {/* Debugging Workflow */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The AI Debugging Workflow</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Error Analysis</h3>
                <p className="text-gray-600 mb-4">Start by sharing the error message and context with Cursor:</p>
                <CodeExample
                  language="text"
                  code={`I'm getting this error in my React application:

Error: Cannot read property 'map' of undefined
   at UserList.js:15:25
   at Array.map (<anonymous>)
   at UserList (UserList.js:15:25)

Here's the relevant code:
[Paste your UserList component code]

The error happens when I try to render the user list. Can you help me identify the issue and fix it?`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Context Gathering</h3>
                <p className="text-gray-600 mb-4">Provide relevant context to help AI understand the issue:</p>
                <CodeExample
                  language="text"
                  code={`The error occurs in this specific scenario:
- User clicks "Load Users" button
- API call is made to /api/users
- Component tries to render the list before data arrives
- The users state is undefined initially

Here's the component code and the API call function:
[Include relevant code snippets]`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Solution Implementation</h3>
                <p className="text-gray-600 mb-4">AI will suggest multiple solutions - evaluate and implement the best one:</p>
                <CodeExample
                  language="jsx"
                  code={`// AI-suggested solution with explanation
const UserList = () => {
  const [users, setUsers] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Add loading state and error handling
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};`}
                />
              </div>
            </div>
          </div>

          {/* Common Bug Types */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Bug Types & AI Solutions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Null/Undefined Errors</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Problem:</h4>
                    <CodeExample
                      language="javascript"
                      code={`// Common null/undefined error
const user = getUser();
console.log(user.name); // Error if user is null`}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">AI Solution:</h4>
                    <CodeExample
                      language="javascript"
                      code={`// AI-suggested fix
const user = getUser();
if (user && user.name) {
  console.log(user.name);
} else {
  console.log('User not found');
}`}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Async/Await Issues</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Problem:</h4>
                    <CodeExample
                      language="javascript"
                      code={`// Forgetting await
const data = fetchData(); // Returns Promise, not data
console.log(data); // [object Promise]`}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">AI Solution:</h4>
                    <CodeExample
                      language="javascript"
                      code={`// AI-suggested fix
const data = await fetchData();
console.log(data); // Actual data

// Or with proper error handling
try {
  const data = await fetchData();
  console.log(data);
} catch (error) {
  console.error('Failed to fetch data:', error);
}`}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. State Management Issues</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Problem:</h4>
                    <CodeExample
                      language="jsx"
                      code={`// State not updating
const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1); // May not work in rapid succession
  setCount(count + 1);
};`}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">AI Solution:</h4>
                    <CodeExample
                      language="jsx"
                      code={`// AI-suggested fix
const [count, setCount] = useState(0);

const increment = () => {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
};

// Or use useCallback for better performance
const increment = useCallback(() => {
  setCount(prevCount => prevCount + 1);
}, []);`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Debugging Techniques */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Debugging Techniques</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Debugging</h3>
                <CodeExample
                  language="text"
                  code={`My React application is running slowly. I suspect there are performance issues with:

1. Unnecessary re-renders
2. Heavy computations in render
3. Large lists without virtualization
4. Memory leaks

Here's the main component and its dependencies:
[Include component code]

Can you analyze the performance bottlenecks and suggest optimizations?`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Memory Leak Detection</h3>
                <CodeExample
                  language="text"
                  code={`I'm experiencing memory leaks in my application. The memory usage keeps growing over time.

Potential issues:
- Event listeners not being cleaned up
- Timers/intervals not cleared
- Large objects not being garbage collected
- Circular references

Here's the code that might be causing issues:
[Include relevant code]

Can you help me identify and fix the memory leaks?`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Race Condition Debugging</h3>
                <CodeExample
                  language="text"
                  code={`I'm experiencing race conditions in my async code. Sometimes the data loads in the wrong order or gets overwritten.

The issue seems to happen when:
- Multiple API calls are made simultaneously
- User navigates quickly between pages
- State updates happen out of order

Here's the problematic code:
[Include async code]

Can you help me identify the race conditions and implement proper solutions?`}
                />
              </div>
            </div>
          </div>

          {/* Debugging Tools Integration */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Integrating with Debugging Tools</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser DevTools Integration</h3>
                <CodeExample
                  language="text"
                  code={`I'm debugging a frontend issue and have these console errors:

Console Errors:
- Uncaught TypeError: Cannot read property 'length' of undefined
- Warning: Can't perform a React state update on an unmounted component
- Failed to load resource: 404 (Not Found) for /api/users

I've set breakpoints in the DevTools and can see the call stack. Here's the relevant code and the values I'm seeing in the debugger:

[Include code and debugger information]

Can you help me trace through this step by step?`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Log Analysis</h3>
                <CodeExample
                  language="text"
                  code={`I have these server logs from my Node.js application:

[2024-01-15 10:30:15] ERROR: Database connection failed
[2024-01-15 10:30:16] WARN: Retrying connection attempt 1/3
[2024-01-15 10:30:17] ERROR: Database connection failed
[2024-01-15 10:30:18] WARN: Retrying connection attempt 2/3
[2024-01-15 10:30:19] ERROR: Database connection failed
[2024-01-15 10:30:20] FATAL: Max retry attempts reached

Here's my database configuration and connection code:
[Include relevant code]

What could be causing this issue and how can I fix it?`}
                />
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Debugging Best Practices</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-3">✅ Do This</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Provide complete error messages and stack traces</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Include relevant code context and dependencies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Describe the expected vs actual behavior</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Test solutions in isolation before implementing</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-3">❌ Avoid This</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Providing incomplete or vague error descriptions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Not testing AI suggestions before implementing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Ignoring the root cause for quick fixes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Not learning from the debugging process</span>
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
              Try these debugging exercises to improve your AI-assisted debugging skills:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Exercise 1: Fix the Memory Leak</h3>
                <p className="text-gray-600 mb-2">Debug this React component that has a memory leak:</p>
                <CodeExample
                  language="jsx"
                  code={`const Timer = () => {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  }, []);
  
  return <div>{time}</div>;
};`}
                />
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Exercise 2: Debug the API Call</h3>
                <p className="text-gray-600 mb-2">Fix this async function that's not working correctly:</p>
                <CodeExample
                  language="javascript"
                  code={`const fetchUserData = async (userId) => {
  const response = await fetch(\`/api/users/\${userId}\`);
  const data = await response.json();
  return data;
};`}
                />
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Great Debugging Skills! 🐛</h2>
            <p className="text-gray-600 mb-6">
              You've mastered AI-assisted debugging! Next, let's learn about workflow optimization techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tutorial/advanced/lessons/workflow-optimization"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next Lesson: Workflow Optimization
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
