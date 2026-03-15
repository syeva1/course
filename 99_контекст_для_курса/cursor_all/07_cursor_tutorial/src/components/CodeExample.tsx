"use client";

import { useState } from "react";
import { Copy, Check, ChevronDown, ChevronRight } from "lucide-react";

interface CodeExampleProps {
  language: string;
  code: string;
  title?: string;
  description?: string;
}

export function CodeExample({ language, code, title, description }: CodeExampleProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguageColor = (lang: string) => {
    const colors: { [key: string]: string } = {
      javascript: "bg-yellow-100 text-yellow-800",
      typescript: "bg-blue-100 text-blue-800",
      python: "bg-green-100 text-green-800",
      bash: "bg-gray-100 text-gray-800",
      json: "bg-purple-100 text-purple-800",
      html: "bg-orange-100 text-orange-800",
      css: "bg-pink-100 text-pink-800",
      sql: "bg-indigo-100 text-indigo-800",
    };
    return colors[lang.toLowerCase()] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {(title || description) && (
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          {title && (
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
          )}
          {description && (
            <p className="text-gray-600 text-sm">{description}</p>
          )}
        </div>
      )}
      
      <div className="bg-gray-900">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <span className={`px-2 py-1 rounded text-xs font-medium ${getLanguageColor(language)}`}>
              {language.toUpperCase()}
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 px-3 py-1 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-sm">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="text-sm">Copy</span>
              </>
            )}
          </button>
        </div>
        
        {isExpanded && (
          <div className="p-4 overflow-x-auto">
            <pre className="text-sm text-gray-100 font-mono leading-relaxed">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

