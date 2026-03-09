import { Clock, Star, Play } from "lucide-react";
import Link from "next/link";

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
}

interface LessonCardProps {
  lesson: Lesson;
  index: number;
  basePath?: string;
}

export function LessonCard({ lesson, index, basePath = "/tutorial/basics/lessons" }: LessonCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
            {index}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {lesson.title}
            </h3>
            <p className="text-gray-600">
              {lesson.description}
            </p>
          </div>
        </div>
        <Link
          href={`${basePath}/${lesson.id}`}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Play className="w-4 h-4" />
          <span>Start</span>
        </Link>
      </div>
      
      <div className="flex items-center space-x-4 text-sm">
        <div className="flex items-center space-x-1 text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{lesson.duration}</span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(lesson.difficulty)}`}>
          {lesson.difficulty}
        </span>
        <div className="flex items-center space-x-1 text-yellow-500">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-gray-600">4.8</span>
        </div>
      </div>
    </div>
  );
}

