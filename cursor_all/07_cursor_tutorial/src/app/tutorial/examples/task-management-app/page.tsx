import { TutorialNavigation } from "@/components/TutorialNavigation";
import { CodeExample } from "@/components/CodeExample";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Users, Clock, Bell } from "lucide-react";

export default function TaskManagementAppTutorial() {
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
            Task Management App Tutorial
          </h1>
          <p className="text-xl text-gray-600">
            Create a collaborative task management system with real-time updates using Cursor's AI assistance.
          </p>
        </div>

        <TutorialNavigation />

        <div className="space-y-8 mt-8">
          {/* Project Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What We'll Build</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>Real-time collaboration features</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span>Project tracking and deadlines</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Bell className="w-4 h-4 text-purple-600" />
                    <span>Notification system</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span>Task status management</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Frontend:</strong> React with TypeScript</li>
                  <li><strong>Backend:</strong> Node.js with Express</li>
                  <li><strong>Database:</strong> MongoDB with Mongoose</li>
                  <li><strong>Real-time:</strong> Socket.io</li>
                  <li><strong>Authentication:</strong> JWT with Passport</li>
                  <li><strong>Styling:</strong> Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 1: Project Setup */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Project Setup</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Let's start by creating the project structure and setting up the development environment.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Initialize the Project</h3>
                <CodeExample
                  language="bash"
                  code={`# Create project directory
mkdir task-management-app
cd task-management-app

# Initialize package.json
npm init -y

# Install dependencies
npm install react react-dom next typescript @types/react @types/node
npm install tailwindcss postcss autoprefixer
npm install mongoose socket.io socket.io-client
npm install jsonwebtoken passport passport-jwt
npm install bcryptjs`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Prompt for Project Structure</h3>
                <CodeExample
                  language="text"
                  code={`Create a Next.js project structure for a task management application with:

- User authentication and authorization
- Real-time task updates using Socket.io
- Project and task management
- Team collaboration features
- Notification system
- Responsive design with Tailwind CSS

Please create the folder structure and initial configuration files.`}
                />
              </div>
            </div>
          </div>

          {/* Step 2: Database Schema */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold mr-4">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Database Schema Design</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Design the database schema using Mongoose with AI assistance for a task management system.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Prompt for Database Schema</h3>
                <CodeExample
                  language="text"
                  code={`Create Mongoose schemas for a task management application with:

1. User (id, email, password, firstName, lastName, avatar, createdAt, updatedAt)
2. Project (id, name, description, ownerId, members, status, createdAt, updatedAt)
3. Task (id, title, description, projectId, assigneeId, status, priority, dueDate, createdAt, updatedAt)
4. Comment (id, taskId, userId, content, createdAt, updatedAt)
5. Notification (id, userId, type, message, read, createdAt, updatedAt)

Include proper relationships, validation, and middleware.`}
                />
              </div>
            </div>
          </div>

          {/* Step 3: Real-time Features */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold mr-4">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Real-time Features</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Implement real-time collaboration using Socket.io for live updates and notifications.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Prompt for Socket.io Setup</h3>
                <CodeExample
                  language="text"
                  code={`Create a Socket.io server for a task management application with:

1. User connection and disconnection handling
2. Real-time task updates (create, update, delete)
3. Project collaboration (user joins/leaves project)
4. Live notifications for task assignments
5. Real-time comments on tasks
6. Typing indicators for collaborative editing

Include proper error handling and room management.`}
                />
              </div>
            </div>
          </div>

          {/* Step 4: Frontend Components */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold mr-4">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Frontend Components</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Build React components for the task management interface with real-time updates.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Prompt for React Components</h3>
                <CodeExample
                  language="text"
                  code={`Create React components for a task management application:

1. TaskBoard - Main dashboard with project and task lists
2. TaskCard - Individual task display with status updates
3. ProjectSidebar - Project navigation and team members
4. TaskModal - Create/edit task form
5. NotificationCenter - Real-time notifications
6. UserProfile - User settings and preferences

Use TypeScript, Tailwind CSS, and include real-time updates with Socket.io.`}
                />
              </div>
            </div>
          </div>

          {/* Step 5: Authentication */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-semibold mr-4">
                5
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Authentication System</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Implement secure user authentication with JWT tokens and protected routes.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Prompt for Authentication</h3>
                <CodeExample
                  language="text"
                  code={`Create a complete authentication system for the task management app:

1. User registration with email validation
2. User login with JWT tokens
3. Password hashing with bcrypt
4. Protected API routes
5. Middleware for route protection
6. Password reset functionality
7. Email verification

Use Next.js API routes, MongoDB, and include proper error handling.`}
                />
              </div>
            </div>
          </div>

          {/* Step 6: Deployment */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold mr-4">
                6
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Deployment</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Deploy your task management application to production with Vercel and MongoDB Atlas.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Deployment Checklist</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Set up MongoDB Atlas database</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Configure environment variables</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Deploy frontend to Vercel</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Deploy backend to Railway</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Configure Socket.io for production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Task Management App Complete! ✅</h2>
            <p className="text-gray-600 mb-6">
              You've built a complete task management application with real-time collaboration! This project demonstrates advanced AI-assisted development techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tutorial/examples"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore More Examples
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/tutorial/advanced"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Advanced Tutorials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
