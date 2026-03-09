import { TutorialNavigation } from "@/components/TutorialNavigation";
import { LessonCard } from "@/components/LessonCard";
import Link from "next/link";
import { ArrowRight, Code2, Zap, Target, Lightbulb, Settings } from "lucide-react";

const advancedLessons = [
  {
    id: "cursor-settings",
    title: "Essential Cursor Settings",
    description: "Master the most functional settings for maximum productivity and AI performance",
    duration: "20 min",
    difficulty: "Advanced"
  },
  {
    id: "prompt-engineering",
    title: "Advanced Prompt Engineering",
    description: "Master the art of writing effective prompts for complex AI interactions",
    duration: "25 min",
    difficulty: "Advanced"
  },
  {
    id: "debugging-ai",
    title: "AI-Assisted Debugging",
    description: "Use Cursor's AI to identify, analyze, and fix complex bugs",
    duration: "30 min",
    difficulty: "Advanced"
  },
  {
    id: "workflow-optimization",
    title: "Workflow Optimization",
    description: "Streamline your development process with advanced Cursor techniques",
    duration: "20 min",
    difficulty: "Advanced"
  },
  {
    id: "custom-configurations",
    title: "Custom Configurations",
    description: "Configure Cursor for your specific development needs and preferences",
    duration: "15 min",
    difficulty: "Intermediate"
  },
  {
    id: "team-collaboration",
    title: "Team Collaboration",
    description: "Use Cursor effectively in team environments and code reviews",
    duration: "20 min",
    difficulty: "Advanced"
  },
  {
    id: "performance-optimization",
    title: "Performance & Best Practices",
    description: "Optimize your AI usage and follow industry best practices",
    duration: "18 min",
    difficulty: "Advanced"
  }
];

export default function AdvancedTutorials() {
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
            Advanced Cursor Tutorials
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Master advanced techniques and workflows to become a Cursor power user.
          </p>
        </div>

        <TutorialNavigation />

        <div className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advancedLessons.map((lesson, index) => (
              <LessonCard 
                key={lesson.id} 
                lesson={lesson} 
                index={index + 1}
                basePath="/tutorial/advanced/lessons"
              />
            ))}
          </div>
        </div>

        {/* Advanced Features Overview */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Code2 className="w-8 h-8 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Advanced AI Techniques</h3>
              </div>
              <p className="text-gray-600">
                Learn sophisticated prompt engineering, context management, and AI workflow optimization.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Zap className="w-8 h-8 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Debugging Mastery</h3>
              </div>
              <p className="text-gray-600">
                Master AI-assisted debugging, error analysis, and complex problem-solving techniques.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Workflow Optimization</h3>
              </div>
              <p className="text-gray-600">
                Optimize your development workflow with advanced Cursor features and integrations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Settings className="w-8 h-8 text-orange-600" />
                <h3 className="text-lg font-semibold text-gray-900">Custom Configurations</h3>
              </div>
              <p className="text-gray-600">
                Configure Cursor for your specific needs, team requirements, and development environment.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Lightbulb className="w-8 h-8 text-yellow-600" />
                <h3 className="text-lg font-semibold text-gray-900">Best Practices</h3>
              </div>
              <p className="text-gray-600">
                Follow industry best practices for AI-assisted development and team collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Prerequisites</h3>
          <p className="text-gray-600 mb-4">
            Before starting these advanced tutorials, make sure you're comfortable with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Basic Cursor interface and navigation</li>
            <li>Using the chat panel and AI edit mode</li>
            <li>File management and project organization</li>
            <li>Basic code generation and editing</li>
            <li>Your chosen programming language and framework</li>
          </ul>
        </div>
      </div>
    </div>
  );
}