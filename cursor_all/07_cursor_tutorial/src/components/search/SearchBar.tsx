"use client";

import { useState, useRef, useEffect } from 'react';
import { Search, Loader2, Sparkles } from 'lucide-react';
import { VoiceButton } from './VoiceButton';
import Link from 'next/link';

interface SearchBarProps {
  placeholder?: string;
  autoFocus?: boolean;
  showSuggestions?: boolean;
  onSearch?: (query: string) => void;
  className?: string;
}

interface Suggestion {
  text: string;
  category: string;
}

const POPULAR_SEARCHES: Suggestion[] = [
  { text: "What's new in Cursor 1.7?", category: "Latest Features" },
  { text: "How do I use Tab completion?", category: "Basics" },
  { text: "Cmd+K shortcuts", category: "Keyboard Shortcuts" },
  { text: "Best React Cursor rules", category: "Tips & Tricks" },
  { text: "How to use Composer?", category: "Features" },
  { text: "Cursor vs VS Code", category: "Comparisons" },
];

export function SearchBar({
  placeholder = "Ask anything about Cursor...",
  autoFocus = false,
  showSuggestions = true,
  onSearch,
  className = "",
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [showSuggestionsList, setShowSuggestionsList] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>(POPULAR_SEARCHES);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestionsList(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check if there's a query parameter on page load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('q');
    if (queryParam) {
      setQuery(queryParam);
      setHasSearched(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setHasSearched(true);
      if (onSearch) {
        onSearch(query);
      } else {
        // Navigate to search page
        window.location.href = `/search?q=${encodeURIComponent(query)}`;
      }
      setShowSuggestionsList(false);
    }
  };

  const handleVoiceTranscript = (transcript: string) => {
    setQuery(transcript);
  };

  const handleSuggestionClick = (suggestionText: string) => {
    setQuery(suggestionText);
    setHasSearched(true);
    setShowSuggestionsList(false);
    if (onSearch) {
      onSearch(suggestionText);
    } else {
      window.location.href = `/search?q=${encodeURIComponent(suggestionText)}`;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim() && showSuggestions) {
      // Filter suggestions based on input
      const filtered = POPULAR_SEARCHES.filter(s =>
        s.text.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.length > 0 ? filtered : POPULAR_SEARCHES);
      setShowSuggestionsList(true);
    } else if (!value.trim()) {
      setSuggestions(POPULAR_SEARCHES);
      setShowSuggestionsList(showSuggestions);
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center bg-white rounded-xl shadow-lg border-2 border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all duration-200">
          {/* Search Icon */}
          <div className="absolute left-4 text-gray-400">
            <Search className="w-5 h-5" />
          </div>

          {/* Input Field */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => showSuggestions && setShowSuggestionsList(true)}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className="flex-1 pl-12 pr-32 py-4 text-gray-900 placeholder-gray-400 bg-transparent border-none focus:outline-none text-base"
            autoComplete="off"
          />

          {/* Voice Button */}
          <div className="absolute right-16 flex items-center space-x-2">
            {isVoiceActive && (
              <span className="text-sm text-gray-500 animate-pulse">
                Listening...
              </span>
            )}
            <VoiceButton
              onTranscript={handleVoiceTranscript}
              onStart={() => setIsVoiceActive(true)}
              onEnd={() => setIsVoiceActive(false)}
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            disabled={!query.trim()}
            className="absolute right-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">Ask AI</span>
          </button>
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestionsList && suggestions.length > 0 && !hasSearched && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              💡 Popular Searches
            </div>
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion.text)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-gray-900 group-hover:text-blue-600 font-medium">
                      {suggestion.text}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {suggestion.category}
                    </div>
                  </div>
                  <Search className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quick Tips */}
      {!query && !showSuggestionsList && !hasSearched && (
        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          <span className="text-sm text-gray-500">Try:</span>
          {POPULAR_SEARCHES.slice(0, 3).map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion.text)}
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              "{suggestion.text}"
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

