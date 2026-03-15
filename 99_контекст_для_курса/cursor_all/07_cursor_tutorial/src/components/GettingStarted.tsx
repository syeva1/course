import { Download, Play, Code2, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Download Cursor",
    description: "Get the latest version of Cursor for your operating system",
    icon: Download,
    action: "Download Now"
  },
  {
    number: 2,
    title: "Install & Setup",
    description: "Install Cursor and configure your development environment",
    icon: Code2,
    action: "View Guide"
  },
  {
    number: 3,
    title: "Start Learning",
    description: "Begin with our comprehensive tutorial series",
    icon: Play,
    action: "Start Tutorial"
  }
];

export function GettingStarted() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Steps
            </h2>
            <p className="text-xl text-gray-600">
              Ready to transform your development workflow? Follow these simple steps.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {step.description}
                      </p>
                    </div>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      {step.action}
                    </button>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-8 bg-gray-200 ml-6 mt-4"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of developers who are already using Cursor to build amazing applications faster than ever before.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
