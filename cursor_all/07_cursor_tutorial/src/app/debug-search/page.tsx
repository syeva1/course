"use client";

import { useState } from 'react';

export default function DebugSearch() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testSearch = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      console.log('Testing search with query:', query);
      
      const response = await fetch('/api/search/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: query }),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}`);
      }

      setResult(data);
    } catch (err: any) {
      console.error('Search error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const testHealth = async () => {
    try {
      const response = await fetch('/api/search/health');
      const data = await response.json();
      console.log('Health check:', data);
      setResult({ type: 'health', data });
    } catch (err: any) {
      console.error('Health check error:', err);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Search Debug Page</h1>
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Search</h2>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter search query"
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <button
              onClick={testSearch}
              disabled={loading || !query.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test Search'}
            </button>
          </div>
          <button
            onClick={testHealth}
            className="px-6 py-2 bg-green-600 text-white rounded-lg"
          >
            Test Health Check
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <strong>Error:</strong> {error}
          </div>
        )}

        {result && (
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Result:</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
