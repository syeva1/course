import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";

interface Tutorial {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  lessons: string[];
}

interface TutorialCardProps {
  tutorial: Tutorial;
}

export function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <Link
      href={tutorial.href}
      className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300"
    >
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="text-4xl">{tutorial.icon}</div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
          {tutorial.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {tutorial.description}
        </p>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900 text-sm">Lessons included:</h4>
          <ul className="space-y-1">
            {tutorial.lessons.slice(0, 3).map((lesson, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                {lesson}
              </li>
            ))}
            {tutorial.lessons.length > 3 && (
              <li className="text-sm text-gray-500 ml-4">
                +{tutorial.lessons.length - 3} more lessons
              </li>
            )}
          </ul>
        </div>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>2-3 hours</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>Beginner</span>
            </div>
          </div>
          <span className="text-blue-600 font-semibold group-hover:text-blue-700">
            Start Learning →
          </span>
        </div>
      </div>
    </Link>
  );
}
