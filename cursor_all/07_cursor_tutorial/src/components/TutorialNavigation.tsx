"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Zap, Target, Lightbulb } from "lucide-react";

const navItems = [
  { href: "/tutorial", label: "Overview", icon: BookOpen },
  { href: "/tutorial/basics", label: "Basics", icon: Zap },
  { href: "/tutorial/advanced", label: "Advanced", icon: Target },
  { href: "/tutorial/features", label: "Features", icon: Target },
  { href: "/tutorial/examples", label: "Examples", icon: Lightbulb },
];

export function TutorialNavigation() {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
      <div className="flex flex-wrap gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
