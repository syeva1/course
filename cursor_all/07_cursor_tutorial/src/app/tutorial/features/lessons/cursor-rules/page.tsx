import { TutorialNavigation } from "@/components/TutorialNavigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CursorRulesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/tutorial/features" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Features
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cursor Rules - Custom AI Instructions
          </h1>
          <p className="text-xl text-gray-600">
            Configure AI behavior with .cursorrules files for consistent, project-specific code generation
          </p>
        </div>

        <TutorialNavigation />

        <div className="prose prose-lg max-w-none mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-blue-900 mt-0">💡 What You&apos;ll Learn</h3>
          <ul className="mb-0">
            <li>Create .cursorrules files to guide AI behavior</li>
            <li>Set project-wide coding standards and conventions</li>
            <li>Examples of effective Cursor Rules</li>
            <li>Team Rules vs. Project Rules</li>
          </ul>
        </div>

        <h2>📜 What are Cursor Rules?</h2>
        <p>
          <strong>Cursor Rules</strong> are custom instructions that tell the AI how to generate code for your project. 
          They ensure consistency across your team and enforce your coding standards automatically.
        </p>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 my-8">
          <h4 className="text-green-900 mt-0">🎯 Perfect For:</h4>
          <ul className="mb-0">
            <li>🎨 Enforcing code style (tabs vs spaces, naming conventions)</li>
            <li>📦 Specifying preferred libraries and frameworks</li>
            <li>🏗️ Defining project architecture patterns</li>
            <li>📝 Setting documentation requirements</li>
            <li>🚫 Avoiding deprecated or unwanted patterns</li>
          </ul>
        </div>

        <h2>📁 Creating a .cursorrules File</h2>
        <p>Create a file named <code>.cursorrules</code> in your project root:</p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-sm">
          <div className="text-green-400">// Project root structure:</div>
          <div className="text-white mt-2">
            my-project/
            <br />
            ├── .cursorrules <span className="text-yellow-400">← Create this file</span>
            <br />
            ├── package.json
            <br />
            ├── src/
            <br />
            └── ...
          </div>
        </div>

        <h2>✍️ Example .cursorrules Files</h2>

        <h3>Example 1: React + TypeScript Project</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-xs overflow-x-auto">
          <pre className="m-0">
{`# React + TypeScript Project Rules

## Code Style
- Use TypeScript for all files (.ts, .tsx)
- Use functional components with hooks
- Use arrow functions: const MyComponent = () => {}
- Use named exports, not default exports
- Use 2 spaces for indentation
- Use single quotes for strings
- Add semicolons at end of statements

## Component Guidelines
- Use TypeScript interfaces for props
- Name components with PascalCase
- Keep components small and focused (< 200 lines)
- Extract complex logic into custom hooks
- Use Tailwind CSS for styling (no CSS modules)

## State Management
- Use React hooks (useState, useEffect, useContext)
- For global state, use Zustand
- Never use Redux

## File Organization
- Components in src/components/
- Hooks in src/hooks/
- Types in src/types/
- Utils in src/utils/

## Documentation
- Add JSDoc comments for complex functions
- Include prop descriptions in TypeScript interfaces
- Add README.md for each major feature

## Testing
- Write tests using Vitest
- Use React Testing Library for component tests
- Aim for 80% coverage

## Avoid
- Class components
- PropTypes (use TypeScript)
- Inline styles (use Tailwind)
- Any type (be specific)
- console.log in production code`}
          </pre>
        </div>

        <h3>Example 2: Next.js App Router Project</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-xs overflow-x-auto">
          <pre className="m-0">
{`# Next.js 15 App Router Rules

## Framework Conventions
- Use Next.js 15 App Router (not Pages Router)
- Server Components by default
- Add "use client" only when necessary
- Use Server Actions for mutations
- Use route handlers for API endpoints

## File Structure
- Pages in src/app/
- Components in src/components/
- Server actions in src/app/actions/
- API routes in src/app/api/

## Data Fetching
- Use async Server Components for data fetching
- Use fetch with Next.js caching
- Use Server Actions for form submissions
- Never use useEffect for data fetching

## Styling
- Use Tailwind CSS
- Use CSS variables for theming
- Mobile-first responsive design

## Performance
- Use next/image for images
- Use next/font for fonts
- Implement loading.tsx and error.tsx
- Use Suspense for streaming

## SEO
- Add metadata to every page
- Use generateMetadata for dynamic pages
- Include OpenGraph and Twitter cards

## TypeScript
- Strict mode enabled
- No any types
- Define return types for functions`}
          </pre>
        </div>

        <h3>Example 3: Python Backend Project</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-xs overflow-x-auto">
          <pre className="m-0">
{`# Python FastAPI Backend Rules

## Code Style
- Follow PEP 8 style guide
- Use type hints for all functions
- Use async/await for I/O operations
- Use 4 spaces for indentation
- Maximum line length: 88 characters (Black formatter)

## Framework
- Use FastAPI for API endpoints
- Use Pydantic for data validation
- Use SQLAlchemy for database ORM
- Use Alembic for migrations

## Project Structure
- API routes in app/routes/
- Models in app/models/
- Schemas in app/schemas/
- Database logic in app/db/
- Business logic in app/services/

## Error Handling
- Use HTTPException for API errors
- Include descriptive error messages
- Log errors with proper severity levels
- Never expose internal errors to clients

## Security
- Use environment variables for secrets
- Validate all user input with Pydantic
- Use OAuth2 with JWT tokens
- Hash passwords with bcrypt

## Testing
- Use pytest for testing
- Mock external dependencies
- Aim for 90% code coverage
- Include integration tests for API endpoints

## Documentation
- Add docstrings to all functions (Google style)
- Keep OpenAPI/Swagger docs up to date
- Include example requests/responses`}
          </pre>
        </div>

        <h2>⚙️ Team Rules vs. Project Rules</h2>
        <p>Cursor 1.7.38 supports <strong>Team Rules</strong> for organization-wide standards:</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h4 className="text-blue-900 mt-0">📁 Project Rules</h4>
            <p className="text-sm mb-2"><code>.cursorrules</code> in project root</p>
            <ul className="text-sm mb-0 space-y-1">
              <li>✅ Project-specific patterns</li>
              <li>✅ File organization</li>
              <li>✅ Architecture decisions</li>
              <li>✅ Committed to git</li>
              <li>✅ Applies to this project only</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h4 className="text-purple-900 mt-0">👥 Team Rules</h4>
            <p className="text-sm mb-2">Settings → Cursor Settings → Rules for Cursor AI</p>
            <ul className="text-sm mb-0 space-y-1">
              <li>✅ Company-wide standards</li>
              <li>✅ Code style preferences</li>
              <li>✅ Security requirements</li>
              <li>✅ Shared across all projects</li>
              <li>✅ Set once per workspace</li>
            </ul>
          </div>
        </div>

        <h2>🎯 Rules Best Practices</h2>
        
        <div className="space-y-4 my-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="text-green-900 mt-0">✅ Effective Rules</h4>
            <ul className="mb-0 text-sm space-y-2">
              <li><strong>Be specific:</strong> &quot;Use Zustand&quot; not &quot;Use good state management&quot;</li>
              <li><strong>Include examples:</strong> Show preferred patterns</li>
              <li><strong>Explain why:</strong> Help AI understand reasoning</li>
              <li><strong>Keep it organized:</strong> Use headers and sections</li>
              <li><strong>Update regularly:</strong> Evolve with your project</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h4 className="text-red-900 mt-0">❌ Ineffective Rules</h4>
            <ul className="mb-0 text-sm space-y-2">
              <li>&quot;Write good code&quot; (too vague)</li>
              <li>&quot;Follow best practices&quot; (unclear)</li>
              <li>Extremely long rules (&gt;1000 lines)</li>
              <li>Contradictory requirements</li>
              <li>Generic rules copied from elsewhere</li>
            </ul>
          </div>
        </div>

        <h2>📝 Rules Template</h2>
        <p>Start with this template and customize for your project:</p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-6 font-mono text-xs overflow-x-auto">
          <pre className="m-0">
{`# [Project Name] Cursor Rules

## Overview
[Brief description of project and tech stack]

## Code Style
- Language: [e.g., TypeScript, Python]
- Formatter: [e.g., Prettier, Black]
- Linter: [e.g., ESLint, Pylint]
- Indentation: [spaces/tabs, size]
- Quotes: [single/double]
- [Other style preferences]

## Framework & Libraries
- Primary framework: [e.g., Next.js, FastAPI]
- Preferred libraries:
  - [Library 1]: [Use case]
  - [Library 2]: [Use case]
- Avoid:
  - [Library to avoid]: [Reason]

## File Organization
- [Directory]: [Purpose]
- [Directory]: [Purpose]
- Naming conventions: [Details]

## Component/Function Guidelines
- [Specific patterns to follow]
- [Size limits]
- [Documentation requirements]

## State Management
- [Approach to use]
- [When to use what]

## Error Handling
- [How to handle errors]
- [Logging approach]

## Testing
- Framework: [e.g., Jest, pytest]
- Coverage target: [e.g., 80%]
- [Testing conventions]

## Security
- [Security requirements]
- [Authentication approach]

## Performance
- [Performance guidelines]
- [Optimization strategies]

## Documentation
- [Documentation requirements]
- [Comment style]

## Avoid
- [Anti-patterns]
- [Deprecated features]
- [Known issues]`}
          </pre>
        </div>

        <h2>⚡ Pro Tips</h2>
        <div className="space-y-4 my-8">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 1:</strong> Start simple and add rules as patterns emerge</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 2:</strong> Reference your rules in prompts: &quot;Follow .cursorrules&quot;</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 3:</strong> Review AI-generated code against rules regularly</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 4:</strong> Share .cursorrules with your team in git</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="m-0"><strong>💡 Tip 5:</strong> Use both Team Rules (global) and Project Rules (specific)</p>
          </div>
        </div>

        <h2>🎓 Practice Exercise</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="text-yellow-900 mt-0">Create Your .cursorrules:</h4>
          <ol className="mb-0">
            <li>Create <code>.cursorrules</code> file in your project root</li>
            <li>Add your code style preferences (indentation, quotes, etc.)</li>
            <li>List your preferred libraries and frameworks</li>
            <li>Define your file organization structure</li>
            <li>Add 3-5 &quot;Avoid&quot; items (anti-patterns)</li>
            <li>Test it: Ask Cursor to create a new component</li>
            <li>Verify the AI follows your rules</li>
          </ol>
        </div>

        <h2>📊 Before vs. After Rules</h2>
        <div className="bg-gradient-to-r from-red-50 to-green-50 border-t-4 border-gray-300 rounded-lg my-8 overflow-hidden">
          <div className="grid md:grid-cols-2 divide-x divide-gray-300">
            <div className="p-6 bg-red-50">
              <h4 className="text-red-900 mt-0">❌ Without Rules</h4>
              <ul className="text-sm text-red-800 mb-0 space-y-2">
                <li>Inconsistent code style</li>
                <li>Mixed patterns across files</li>
                <li>Wrong library choices</li>
                <li>Need to correct AI constantly</li>
                <li>Time spent on code review</li>
              </ul>
            </div>
            <div className="p-6 bg-green-50">
              <h4 className="text-green-900 mt-0">✅ With Rules</h4>
              <ul className="text-sm text-green-800 mb-0 space-y-2">
                <li>Consistent, predictable code</li>
                <li>Follows project conventions</li>
                <li>Uses preferred libraries</li>
                <li>AI &quot;gets it right&quot; first time</li>
                <li>Faster development</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>🐛 Common Issues</h2>
        <div className="space-y-4 my-8">
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">AI doesn&apos;t follow my rules</summary>
            <p className="mt-2 text-gray-700">Rules might be too vague. Be more specific and explicit. Also, mention &quot;follow .cursorrules&quot; in your prompts.</p>
          </details>
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">.cursorrules file not being detected</summary>
            <p className="mt-2 text-gray-700">Ensure file is named exactly <code>.cursorrules</code> (with the dot) and is in project root. Restart Cursor if needed.</p>
          </details>
          <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">Rules are too complex</summary>
            <p className="mt-2 text-gray-700">Start simple with 10-20 rules. Add more as needed. The AI can only process so much context.</p>
          </details>
        </div>

        <h2>🔗 Next Steps</h2>
        <p>
          Now that you&apos;ve set up rules, learn about keyboard shortcuts for maximum speed:{" "}
          <a href="/tutorial/advanced/lessons/cursor-settings" className="text-blue-600 hover:text-blue-800">
            Essential Settings & Shortcuts →
          </a>
        </p>
        </div>

        <TutorialNavigation />
      </div>
    </div>
  );
}

