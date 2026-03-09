import Link from "next/link";
import { ArrowRight, Clock, Users, Star } from "lucide-react";

const tutorials = [
  {
    title: "Getting Started",
    description: "Learn the basics of Cursor and set up your development environment",
    duration: "30 min",
    students: "2.5k",
    rating: 4.9,
    href: "/tutorial/basics",
    color: "blue"
  },
  {
    title: "Advanced Features",
    description: "Master advanced Cursor features and AI-powered workflows",
    duration: "45 min",
    students: "1.8k",
    rating: 4.8,
    href: "/tutorial/advanced",
    color: "purple"
  },
  {
    title: "Real Examples",
    description: "Build real projects using Cursor with step-by-step guidance",
    duration: "60 min",
    students: "3.2k",
    rating: 4.9,
    href: "/tutorial/examples",
    color: "green"
  }
];

export function TutorialOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Tutorials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From beginner to expert, our tutorials cover everything you need to know about Cursor.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <Link
                key={index}
                href={tutorial.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300"
              >
                <div className="h-2 bg-blue-500"></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {tutorial.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{tutorial.students}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{tutorial.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
