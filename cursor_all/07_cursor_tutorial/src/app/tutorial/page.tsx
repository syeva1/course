import { TutorialNavigation } from "@/components/TutorialNavigation";
import { TutorialCard } from "@/components/TutorialCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursor Tutorial - Complete Guide to AI-Powered Development",
  description: "Master Cursor AI editor with our comprehensive tutorial. Learn Claude 4.5 Sonnet, Composer, AI chat, code generation, and advanced features. Free step-by-step guide for developers.",
  keywords: [
    "Cursor tutorial",
    "Cursor AI editor guide",
    "Claude 4.5 Sonnet tutorial",
    "AI code generation",
    "Composer Cursor tutorial",
    "AI-assisted development",
    "Cursor features guide",
    "AI programming tutorial",
    "Cursor vs VS Code",
    "AI development tools"
  ],
  openGraph: {
    title: "Cursor Tutorial - Complete Guide to AI-Powered Development",
    description: "Master Cursor AI editor with our comprehensive tutorial. Learn Claude 4.5 Sonnet, Composer, AI chat, code generation, and advanced features.",
    type: "website",
  },
};

const tutorials = [
  {
    id: "basics",
    title: "Cursor Basics Tutorial",
    description: "Learn Cursor AI editor fundamentals: installation, interface, AI chat, Composer, and code generation with Claude 4.5 Sonnet",
    icon: "🚀",
    href: "/tutorial/basics",
    lessons: [
      "Getting Started with Cursor AI Editor",
      "Understanding the Cursor Interface",
      "AI Commands & Claude 4.5 Sonnet",
      "File Management & Navigation",
      "AI-Powered Code Generation"
    ]
  },
  {
    id: "advanced",
    title: "Advanced Cursor Features",
    description: "Master advanced Cursor capabilities: settings optimization, prompt engineering, debugging with AI, and workflow automation",
    icon: "⚡",
    href: "/tutorial/advanced",
    lessons: [
      "Essential Cursor Settings",
      "Advanced Prompt Engineering",
      "AI-Assisted Debugging",
      "Workflow Optimization",
      "Custom Configurations",
      "Team Collaboration",
      "Performance Optimization"
    ]
  },
  {
    id: "features",
    title: "Essential Cursor Features",
    description: "Master the 6 core features: Tab completion, Cmd+K inline edit, Cmd+L chat, Composer, @ symbols, and .cursorrules",
    icon: "🎯",
    href: "/tutorial/features",
    lessons: [
      "Tab Completion - AI Pair Programmer",
      "Cmd+K Inline Edit - Surgical Changes",
      "Cmd+L AI Chat - Ask & Debug",
      "Composer - Multi-file Editing",
      "@ Symbols - Context Mastery",
      "Cursor Rules - Custom Instructions"
    ]
  },
  {
    id: "examples",
    title: "Real-World Cursor Examples",
    description: "See Cursor AI editor in action: React apps, APIs, databases, testing, and deployment with AI assistance",
    icon: "💡",
    href: "/tutorial/examples",
    lessons: [
      "E-commerce Platform with Cursor",
      "Task Management App",
      "Blog CMS Development",
      "API Dashboard Creation",
      "Mobile App Development",
      "Data Visualization Tools"
    ]
  }
];

export default function TutorialPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Cursor AI Editor Tutorial
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master Cursor AI editor with Claude 4.5 Sonnet, Composer, and AI-assisted development. 
            Comprehensive tutorials from beginner to expert level.
          </p>
        </div>

        <TutorialNavigation />

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      </div>
    </div>
  );
}
