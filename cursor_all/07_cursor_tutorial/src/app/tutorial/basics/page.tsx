import { TutorialNavigation } from "@/components/TutorialNavigation";
import { LessonCard } from "@/components/LessonCard";
import { CodeExample } from "@/components/CodeExample";

const lessons = [
  {
    id: "getting-started",
    title: "Getting Started with Cursor",
    description: "Install Cursor and set up your development environment",
    duration: "10 min",
    difficulty: "Beginner"
  },
  {
    id: "interface",
    title: "Understanding the Interface",
    description: "Navigate Cursor's interface and understand its layout",
    duration: "15 min",
    difficulty: "Beginner"
  },
  {
    id: "ai-commands",
    title: "Basic AI Commands",
    description: "Learn essential AI commands for code generation and editing",
    duration: "20 min",
    difficulty: "Beginner"
  },
  {
    id: "file-management",
    title: "File Management",
    description: "Efficiently manage files and projects in Cursor",
    duration: "15 min",
    difficulty: "Beginner"
  },
  {
    id: "code-generation",
    title: "Code Generation",
    description: "Generate code using AI prompts and examples",
    duration: "25 min",
    difficulty: "Intermediate"
  }
];

export default function BasicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cursor Basics
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your journey with Cursor by learning the fundamentals of AI-powered development.
          </p>
        </div>

        <TutorialNavigation />

        <div className="space-y-6 mt-8">
          {lessons.map((lesson, index) => (
            <LessonCard key={lesson.id} lesson={lesson} index={index + 1} />
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Start Example
          </h2>
          <p className="text-gray-600 mb-6">
            Here's a simple example of how to get started with Cursor:
          </p>
          
          <CodeExample
            language="bash"
            code={`# Install Cursor
# Visit https://cursor.sh and download for your platform

# Open a project
cursor my-project

# Start chatting with AI
# Press Cmd+K (Mac) or Ctrl+K (Windows/Linux)
# Type: "Create a simple React component"`}
          />
        </div>
      </div>
    </div>
  );
}
