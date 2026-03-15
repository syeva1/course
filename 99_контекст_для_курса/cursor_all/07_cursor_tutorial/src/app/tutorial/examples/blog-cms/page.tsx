import { TutorialNavigation } from "@/components/TutorialNavigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Search, Image, MessageCircle } from "lucide-react";

export default function BlogCMSTutorial() {
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
            Blog CMS Tutorial
          </h1>
          <p className="text-xl text-gray-600">
            Develop a content management system for blogging with Next.js and Sanity using Cursor's AI assistance.
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
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Rich content editor</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Search className="w-4 h-4 text-green-600" />
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Image className="w-4 h-4 text-purple-600" />
                    <span>Image management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-orange-600" />
                    <span>Comment system</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Frontend:</strong> Next.js with TypeScript</li>
                  <li><strong>CMS:</strong> Sanity.io</li>
                  <li><strong>Styling:</strong> Tailwind CSS</li>
                  <li><strong>Deployment:</strong> Vercel</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon! 🚀</h2>
            <p className="text-gray-600 mb-6">
              This detailed tutorial is being developed. In the meantime, you can explore other examples or learn the basics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tutorial/examples"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Other Examples
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/tutorial/basics"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Learn the Basics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
