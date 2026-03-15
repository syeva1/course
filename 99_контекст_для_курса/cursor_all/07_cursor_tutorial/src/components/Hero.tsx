import { ArrowRight, Code2, Zap, Brain } from "lucide-react";
import Link from "next/link";
import { SearchBar } from "./search/SearchBar";

export function Hero() {

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Top section with badge and title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8 shadow-lg">
              <Zap className="w-5 h-5 mr-3" />
              AI-Powered Development
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight mb-8">
              Master{" "}
              <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Cursor 0.45.14
              </span>
              <br />
              Development
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              Complete Cursor 0.45.14 tutorial with Browser Control, Hooks, Team Rules,
              <br />
              Sandboxed Terminals, and latest AI features.
              <br />
              <span className="text-lg text-gray-500 mt-4 block">
                Learn next-generation AI-assisted development with comprehensive guides and real-world examples.
              </span>
            </p>
          </div>

          {/* AI Search Bar - Front and Center */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center mb-3">
                  <Brain className="w-8 h-8 mr-4 text-blue-600" />
                  Ask AI About Cursor
                </h2>
                <p className="text-gray-600 text-lg">Voice-enabled • Instant answers • Powered by Claude 4.5 Haiku</p>
              </div>
              <SearchBar 
                placeholder="How do I use Tab completion?"
                showSuggestions={true}
                className="text-xl"
              />
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/tutorial/basics"
              className="inline-flex items-center px-10 py-5 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Learning
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center px-10 py-5 bg-white text-gray-700 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Features
              <Brain className="w-6 h-6 ml-3 text-blue-600" />
            </Link>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Feature highlights */}
            <div className="space-y-8">
              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Code2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI Code Generation</h3>
                  <p className="text-sm text-gray-600">Generate code with natural language prompts</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tab Completion</h3>
                  <p className="text-sm text-gray-600">Smart autocomplete for faster coding</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI Chat</h3>
                  <p className="text-sm text-gray-600">Ask questions and get instant help</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <ArrowRight className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Actions</h3>
                  <p className="text-sm text-gray-600">Streamlined development workflow</p>
                </div>
              </div>
            </div>

            {/* Right Column - Code Demo */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="text-sm text-gray-500 ml-4 font-medium">cursor-tutorial.tsx</div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 font-mono text-sm leading-relaxed">
                  <div className="text-blue-600 mb-4">// Generated with Cursor AI</div>
                  <div className="text-gray-800 mb-2">
                    <span className="text-purple-600">const</span>{" "}
                    <span className="text-green-600">TutorialApp</span>{" "}
                    <span className="text-gray-600">= () =&gt; {"{"}</span>
                  </div>
                  <div className="text-gray-800 ml-4 mb-2">
                    <span className="text-purple-600">return</span>{" "}
                    <span className="text-gray-600">&lt;</span>
                    <span className="text-red-600">div</span>
                    <span className="text-gray-600">&gt;</span>
                  </div>
                  <div className="text-gray-800 ml-8 mb-2">
                    <span className="text-gray-600">&lt;</span>
                    <span className="text-red-600">h1</span>
                    <span className="text-gray-600">&gt;</span>
                    <span className="text-yellow-600">Hello Cursor!</span>
                    <span className="text-gray-600">&lt;/</span>
                    <span className="text-red-600">h1</span>
                    <span className="text-gray-600">&gt;</span>
                  </div>
                  <div className="text-gray-800 ml-4 mb-2">
                    <span className="text-gray-600">&lt;/</span>
                    <span className="text-red-600">div</span>
                    <span className="text-gray-600">&gt;</span>
                  </div>
                  <div className="text-gray-800">
                    <span className="text-gray-600">{"}"}</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600 font-medium">Tutorials</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600 font-medium">Examples</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900">10k+</div>
                <div className="text-gray-600 font-medium">Students</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600 font-medium">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
