import { TutorialNavigation } from "@/components/TutorialNavigation";
import { CodeExample } from "@/components/CodeExample";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Code2, Database, CreditCard, Users, ShoppingCart } from "lucide-react";

export default function EcommercePlatformTutorial() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/tutorial/examples" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Examples
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            E-commerce Platform Tutorial
          </h1>
          <p className="text-xl text-gray-600">
            Build a complete online store with React, Node.js, and Stripe integration using Cursor's AI assistance.
          </p>
        </div>

        <TutorialNavigation />

        <div className="space-y-8 mt-8">
          {/* Project Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What We'll Build</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <ShoppingCart className="w-4 h-4 text-blue-600" />
                    <span>Product catalog with search and filtering</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-green-600" />
                    <span>User authentication and profiles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4 text-purple-600" />
                    <span>Secure payment processing with Stripe</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Database className="w-4 h-4 text-orange-600" />
                    <span>Order management and inventory tracking</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Frontend:</strong> React with TypeScript</li>
                  <li><strong>Backend:</strong> Node.js with Express</li>
                  <li><strong>Database:</strong> PostgreSQL with Prisma ORM</li>
                  <li><strong>Payments:</strong> Stripe API</li>
                  <li><strong>Styling:</strong> Tailwind CSS</li>
                  <li><strong>Deployment:</strong> Vercel + Railway</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 1: Project Setup */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Project Setup</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Let's start by creating the project structure and setting up the development environment.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Initialize the Project</h3>
                <CodeExample
                  language="bash"
                  code={`# Create project directory
mkdir ecommerce-platform
cd ecommerce-platform

# Initialize package.json
npm init -y

# Install dependencies
npm install react react-dom next typescript @types/react @types/node
npm install tailwindcss postcss autoprefixer
npm install prisma @prisma/client
npm install stripe
npm install @stripe/stripe-js`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Prompt for Project Structure</h3>
                <CodeExample
                  language="text"
                  code={`Create a Next.js project structure for an e-commerce platform with the following features:

- User authentication (login/register)
- Product catalog with categories
- Shopping cart functionality
- Checkout process with Stripe
- Admin dashboard for product management
- Order history and tracking

Please create the folder structure and initial configuration files. Use TypeScript and Tailwind CSS for styling.`}
                />
              </div>
            </div>
          </div>

          {/* Step 2: Database Schema */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold mr-4">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Database Schema Design</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Design the database schema using Prisma ORM with AI assistance.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Prompt for Database Schema</h3>
                <CodeExample
                  language="text"
                  code={`Create a Prisma schema for an e-commerce platform with the following entities:

1. User (id, email, password, firstName, lastName, role, createdAt, updatedAt)
2. Product (id, name, description, price, images, categoryId, stock, isActive, createdAt, updatedAt)
3. Category (id, name, description, slug, createdAt, updatedAt)
4. Cart (id, userId, productId, quantity, createdAt, updatedAt)
5. Order (id, userId, total, status, shippingAddress, billingAddress, createdAt, updatedAt)
6. OrderItem (id, orderId, productId, quantity, price, createdAt, updatedAt)

Include proper relationships, indexes, and constraints. Use appropriate data types and add validation rules.`}
                />
              </div>
            </div>
          </div>

          {/* Step 3: Authentication System */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold mr-4">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Authentication System</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Implement secure user authentication with Next.js API routes and JWT tokens.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Prompt for Auth API</h3>
                <CodeExample
                  language="text"
                  code={`Create a complete authentication system for a Next.js e-commerce app with:

1. User registration with email validation
2. User login with JWT tokens
3. Password hashing with bcrypt
4. Protected API routes
5. Middleware for route protection
6. Logout functionality

Use Next.js API routes, Prisma for database operations, and include proper error handling and validation.`}
                />
              </div>
            </div>
          </div>

          {/* Step 4: Product Management */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold mr-4">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Product Management</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Create product catalog with search, filtering, and admin management features.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Prompt for Product API</h3>
                <CodeExample
                  language="text"
                  code={`Create a comprehensive product management API for an e-commerce platform with:

1. Get all products with pagination and filtering
2. Search products by name and description
3. Filter by category, price range, and availability
4. Get single product details
5. Admin endpoints for CRUD operations
6. Image upload functionality
7. Inventory management

Include proper validation, error handling, and TypeScript types.`}
                />
              </div>
            </div>
          </div>

          {/* Step 5: Shopping Cart */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-semibold mr-4">
                5
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Implement shopping cart functionality with persistent storage and real-time updates.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Prompt for Cart Context</h3>
                <CodeExample
                  language="text"
                  code={`Create a React context for shopping cart management with:

1. Add/remove items from cart
2. Update quantities
3. Calculate totals and taxes
4. Persist cart data in localStorage
5. Sync with backend when user is logged in
6. Clear cart after successful checkout

Include TypeScript types, error handling, and optimistic updates.`}
                />
              </div>
            </div>
          </div>

          {/* Step 6: Stripe Integration */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold mr-4">
                6
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Stripe Payment Integration</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Integrate Stripe for secure payment processing with checkout sessions and webhooks.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Prompt for Stripe Integration</h3>
                <CodeExample
                  language="text"
                  code={`Create a complete Stripe payment integration for an e-commerce platform with:

1. Create checkout sessions
2. Handle payment success/failure
3. Process webhooks for payment events
4. Store payment intents in database
5. Handle refunds and disputes
6. Send confirmation emails

Include proper error handling, security measures, and TypeScript types.`}
                />
              </div>
            </div>
          </div>

          {/* Deployment */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold mr-4">
                7
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Deployment</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Deploy your e-commerce platform to production with Vercel and Railway.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Prompt for Deployment</h3>
                <CodeExample
                  language="text"
                  code={`Create deployment configuration for an e-commerce platform with:

1. Vercel configuration for frontend deployment
2. Railway configuration for backend and database
3. Environment variables setup
4. Database migrations
5. Stripe webhook configuration
6. Domain and SSL setup

Include step-by-step deployment instructions and troubleshooting tips.`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Deployment Checklist</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Set up PostgreSQL database on Railway</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Configure environment variables</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Run database migrations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Deploy backend to Railway</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Deploy frontend to Vercel</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Configure Stripe webhooks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Congratulations! 🎉</h2>
            <p className="text-gray-600 mb-6">
              You've built a complete e-commerce platform! This project demonstrates advanced AI-assisted development techniques and real-world application architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tutorial/examples"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore More Examples
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/tutorial/advanced"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Advanced Tutorials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}