import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({ 
  children, 
  className = "", 
  hover = false,
  padding = "md" 
}: CardProps) {
  const baseClasses = "bg-white rounded-lg border border-gray-200";
  const hoverClasses = hover ? "hover:shadow-lg hover:border-gray-300 transition-all duration-300" : "";
  
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
}

