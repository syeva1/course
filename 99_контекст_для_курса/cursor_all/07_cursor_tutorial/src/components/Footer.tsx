import Link from "next/link";
import { Code2, Github, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Cursor Tutorial</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Master AI-powered development with comprehensive tutorials and real-world examples.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Tutorials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tutorials</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tutorial/basics" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/tutorial/advanced" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Advanced Features
                </Link>
              </li>
              <li>
                <Link href="/tutorial/features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Key Features
                </Link>
              </li>
              <li>
                <Link href="/tutorial/examples" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Real Examples
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://cursor.sh" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cursor Website
                </a>
              </li>
              <li>
                <a href="https://docs.cursor.sh" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/getcursor/cursor" className="text-gray-400 hover:text-white transition-colors text-sm">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Bug Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Feature Requests
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Cursor Tutorial. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

