import { TutorialNavigation } from "@/components/TutorialNavigation";
import { LessonCard } from "@/components/LessonCard";
import Link from "next/link";
import { ArrowRight, Code2, Globe, Smartphone, Database, Zap, Shield } from "lucide-react";

const exampleProjects = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Build a complete online store with React, Node.js, and Stripe integration",
    duration: "2 hours",
    difficulty: "Advanced",
    features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Processing"]
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "Create a collaborative task management system with real-time updates",
    duration: "1.5 hours",
    difficulty: "Intermediate",
    features: ["Real-time Updates", "Team Collaboration", "Project Tracking", "Notifications"]
  },
  {
    id: "blog-cms",
    title: "Blog CMS",
    description: "Develop a content management system for blogging with Next.js and Sanity",
    duration: "1 hour",
    difficulty: "Intermediate",
    features: ["Content Editor", "SEO Optimization", "Image Management", "Comment System"]
  },
  {
    id: "api-dashboard",
    title: "API Dashboard",
    description: "Build a monitoring dashboard for API endpoints with analytics",
    duration: "1.5 hours",
    difficulty: "Advanced",
    features: ["Real-time Monitoring", "Analytics", "Alert System", "Performance Metrics"]
  },
  {
    id: "mobile-app",
    title: "Mobile App (React Native)",
    description: "Create a cross-platform mobile app with React Native and Expo",
    duration: "2 hours",
    difficulty: "Advanced",
    features: ["Cross-platform", "Push Notifications", "Offline Support", "Native Features"]
  },
  {
    id: "data-visualization",
    title: "Data Visualization Tool",
    description: "Build an interactive data visualization dashboard with D3.js",
    duration: "1.5 hours",
    difficulty: "Advanced",
    features: ["Interactive Charts", "Data Filtering", "Export Options", "Responsive Design"]
  }
];

export default function ExampleProjects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/tutorial" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            ← Back to Tutorials
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Real-World Project Examples
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Learn by building complete, production-ready applications with Cursor's AI assistance.
          </p>
        </div>

        <TutorialNavigation />

        <div className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {exampleProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {index === 0 && <Globe className="w-8 h-8 text-blue-600" />}
                      {index === 1 && <Code2 className="w-8 h-8 text-green-600" />}
                      {index === 2 && <Database className="w-8 h-8 text-purple-600" />}
                      {index === 3 && <Zap className="w-8 h-8 text-orange-600" />}
                      {index === 4 && <Smartphone className="w-8 h-8 text-pink-600" />}
                      {index === 5 && <Shield className="w-8 h-8 text-indigo-600" />}
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                      {project.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {project.difficulty}
                    </span>
                    <Link
                      href={`/tutorial/examples/${project.id}`}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Start Building
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Learning Path</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Start with Basics</h3>
                <p className="text-gray-600">Complete the <Link href="/tutorial/basics" className="text-blue-600 hover:underline">basics tutorial</Link> to understand Cursor's core features before diving into complex projects.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Choose Your Project</h3>
                <p className="text-gray-600">Pick a project that matches your skill level and interests. Each project includes step-by-step instructions and AI prompts.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Follow Along</h3>
                <p className="text-gray-600">Each project includes detailed prompts and code examples. Use Cursor's AI to generate and modify code as you build.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Customize & Extend</h3>
                <p className="text-gray-600">Once you complete a project, experiment with additional features and customizations using AI assistance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mt-8 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Full-Stack Development</h3>
              <p className="text-sm text-gray-600">Build complete applications with frontend, backend, and database integration.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">AI-Assisted Coding</h3>
              <p className="text-sm text-gray-600">Learn to effectively use AI for complex development tasks and problem-solving.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Best Practices</h3>
              <p className="text-sm text-gray-600">Follow industry standards for code organization, testing, and deployment.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Real-World Skills</h3>
              <p className="text-sm text-gray-600">Gain practical experience with tools and technologies used in production.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Problem Solving</h3>
              <p className="text-sm text-gray-600">Develop skills to tackle complex development challenges with AI assistance.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Project Management</h3>
              <p className="text-sm text-gray-600">Learn to break down large projects into manageable tasks and milestones.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}