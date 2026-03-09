import { Code2, Zap, Brain, Terminal, GitBranch, Shield } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "AI Code Generation",
    description: "Generate code instantly with natural language prompts and intelligent suggestions.",
    color: "blue"
  },
  {
    icon: Brain,
    title: "Smart Completions",
    description: "Get context-aware code completions that understand your entire codebase.",
    color: "purple"
  },
  {
    icon: Terminal,
    title: "Integrated Terminal",
    description: "Run commands and manage your development workflow without leaving the editor.",
    color: "green"
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description: "Seamlessly work with Git repositories with built-in version control features.",
    color: "orange"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with optimized AI models and caching.",
    color: "yellow"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your code stays private with enterprise-grade security and privacy controls.",
    color: "red"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Cursor?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cursor combines the power of AI with a familiar development environment 
              to supercharge your coding productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
