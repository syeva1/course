import { Suspense } from 'react';
import { SearchResults } from '@/components/search/SearchResults';
import { SearchBar } from '@/components/search/SearchBar';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'AI Search - Cursor Tutorial',
  description: 'Search our comprehensive Cursor tutorials and documentation with AI-powered answers',
};

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search Cursor Documentation
          </h1>
          <p className="text-gray-600">
            Ask anything about Cursor and get AI-powered answers with sources
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar autoFocus={true} />
        </div>

        {/* Results */}
        <Suspense fallback={<SearchLoadingSkeleton />}>
          <SearchResults />
        </Suspense>
      </div>
    </div>
  );
}

function SearchLoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
}

