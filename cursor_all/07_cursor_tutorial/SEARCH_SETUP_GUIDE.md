# 🚀 AI Search System - Complete Setup Guide

## 📋 Overview

You now have a **world-class AI-powered search system** for your Cursor tutorial website!

### Features:
- ✅ Voice search (free, built into browsers!)
- ✅ Semantic search using vector embeddings
- ✅ AI-generated answers with Claude 3.5 Haiku
- ✅ Source citations from your tutorials
- ✅ Related questions suggestions
- ✅ User feedback system
- ✅ Mobile-first responsive design
- ✅ Optimized for Vercel serverless

---

## 🛠️ Setup Instructions

### **Step 1: Set Up Supabase** (5 minutes)

1. **Create Supabase Project:**
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Choose a name and region
   - Wait 2-3 minutes for setup

2. **Enable pgvector Extension:**
   - Go to "Database" → "Extensions"
   - Search for "vector"
   - Click "Enable" on `pgvector`

3. **Run Database Schema:**
   - Go to "SQL Editor"
   - Click "New Query"
   - Copy/paste contents of `db/schema/search-schema.sql`
   - Click "Run"
   - Verify no errors

4. **Get API Keys:**
   - Go to "Project Settings" → "API"
   - Copy these 3 values:
     - `Project URL` → NEXT_PUBLIC_SUPABASE_URL
     - `anon public key` → NEXT_PUBLIC_SUPABASE_ANON_KEY
     - `service_role key` → SUPABASE_SERVICE_ROLE_KEY (⚠️ keep secret!)

---

### **Step 2: Get OpenAI API Key** (2 minutes)

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up / Log in
3. Go to "API Keys"
4. Click "Create new secret key"
5. Copy the key (starts with `sk-...`)
6. **Set usage limit:** Go to Billing → Usage limits → Set $10/month

**Cost:** ~$2/month for embeddings (very cheap!)

---

### **Step 3: Get Anthropic API Key** (2 minutes)

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up / Log in
3. Go to "API Keys"
4. Click "Create Key"
5. Copy the key (starts with `sk-ant-...`)
6. **Add credits:** Settings → Billing → Purchase credits ($5 minimum, $100 recommended)
7. **Set budget alert:** Billing → Set alert at $50

**Cost:** ~$30/month for 5,000 searches (using Claude 3.5 Haiku)

---

### **Step 4: Configure Environment Variables**

Add these to your `.env.local` file:

```bash
# AI Search System
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

OPENAI_API_KEY=sk-your_openai_key_here
ANTHROPIC_API_KEY=sk-ant-your_anthropic_key_here
```

**For Vercel:**
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add all 5 variables above
4. Select: Production, Preview, Development
5. Save and redeploy

---

### **Step 5: Index Your Tutorials** (2 minutes)

```bash
# Extract content from tutorial pages
npm run index:tutorials

# This creates: indexed-tutorials.json
# Review it to verify content extraction

# Upload to Supabase (generates embeddings + uploads)
npm run db:seed

# This will take 1-2 minutes
# Cost: ~$0.02 for embeddings
```

---

### **Step 6: Test Locally** (1 minute)

```bash
# Start dev server
npm run dev

# Check health endpoint
npm run search:health

# Should return:
# {
#   "status": "healthy",
#   "services": {
#     "anthropic": true,
#     "openai": true,
#     "supabase": true
#   }
# }

# Test search in browser
# Go to: http://localhost:3000
# Use the search bar in the hero section
# Or go to: http://localhost:3000/search
```

---

### **Step 7: Deploy to Vercel**

```bash
# Commit changes
git add .
git commit -m "Add AI search system with voice support"
git push origin main

# Vercel will auto-deploy
# Wait 2-3 minutes
```

**After deploy:**
1. Go to your site (e.g., cursortutorial.ai)
2. Test the search bar
3. Try voice search (click mic icon)
4. Ask a question like "How do I use Tab completion?"

---

## 🎯 Using the Search System

### **For Users:**

**Text Search:**
1. Type question in search bar
2. Click "Ask AI" or press Enter
3. Get instant answer with sources

**Voice Search:**
1. Click microphone icon
2. Speak your question
3. Watch it transcribe in real-time
4. Answer appears automatically

**Popular Questions:**
- "What's new in Cursor 1.7?"
- "How do I use Tab completion?"
- "Cmd+K shortcuts"
- "Best React Cursor rules"
- "How to use Composer?"

### **For You (Admin):**

**View Analytics:**
```sql
-- In Supabase SQL Editor:

-- Most popular searches
SELECT query, COUNT(*) as count
FROM search_queries
WHERE created_at > NOW() - INTERVAL '7 days'
GROUP BY query
ORDER BY count DESC
LIMIT 10;

-- Average response time
SELECT AVG(response_time_ms) as avg_ms
FROM search_queries;

-- User satisfaction
SELECT 
  COUNT(CASE WHEN was_helpful THEN 1 END)::FLOAT / COUNT(*) * 100 as helpful_rate
FROM search_queries
WHERE was_helpful IS NOT NULL;
```

---

## 📊 Cost Breakdown

### **Per Search:**
- Embedding query: $0.00001
- Retrieve from DB: $0 (free)
- Claude 3.5 Haiku: ~$0.006
- **Total: ~$0.006 per search**

### **Monthly Costs:**

| Searches/Month | Embeddings | Claude | Supabase | Total |
|----------------|------------|--------|----------|-------|
| 1,000          | $2         | $6     | $0       | $8    |
| 5,000          | $2         | $30    | $0       | $32   |
| 10,000         | $2         | $60    | $0       | $62   |
| 50,000         | $2         | $300   | $25      | $327  |

**Initial Setup:**
- Indexing embeddings: ~$0.02 (one-time)
- Storage: Free tier (up to 500MB)

---

## 🔧 Maintenance

### **Re-index Tutorials:**

When you update tutorial content:

```bash
# Re-index and upload
npm run index:tutorials
npm run db:seed
```

### **Update Single Tutorial:**

```typescript
// In scripts/update-single-tutorial.ts
import { updateContent } from '../src/lib/search/vector-db';

await updateContent(
  'chunk-id-here',
  'Updated content...',
  { /* updated metadata */ }
);
```

### **Clear All Content:**

```sql
-- In Supabase SQL Editor:
DELETE FROM cursor_content WHERE metadata->>'source' = 'tutorial';
```

---

## 🐛 Troubleshooting

### **Search returns "Service not configured"**
- ✅ Check all 5 environment variables are set in `.env.local`
- ✅ Restart dev server: `npm run dev`
- ✅ Check Vercel environment variables (if deployed)

### **"Failed to search content"**
- ✅ Verify Supabase schema is installed
- ✅ Check database has content: `SELECT COUNT(*) FROM cursor_content;`
- ✅ Run health check: `npm run search:health`

### **Voice search not working**
- ✅ Use Chrome or Safari (Firefox has limited support)
- ✅ Allow microphone permissions
- ✅ Use HTTPS (required for production)

### **Slow responses**
- ✅ Check your network connection
- ✅ Verify region: Supabase region should match your users
- ✅ Check Anthropic API status

### **High costs**
- ✅ Check usage in Anthropic dashboard
- ✅ Implement rate limiting (see `src/app/api/search/ask/route.ts`)
- ✅ Set budget alerts

---

## 🚀 Next Steps (Optional)

### **1. Add External Content Sources:**

Create scrapers for:
- Cursor official docs
- Cursor changelog
- Community Cursor rules

See: `scripts/scrape-cursor-docs.ts` (template provided)

### **2. Improve Search Quality:**

- Add more tutorial content
- Curate high-quality Cursor rules
- Fine-tune similarity thresholds
- Add category filters

### **3. Advanced Features:**

- Conversation history (multi-turn chat)
- Search suggestions (autocomplete)
- Voice output (text-to-speech)
- Search analytics dashboard
- A/B testing different AI models

### **4. Automation:**

Set up cron jobs (Vercel Cron or GitHub Actions):
- Daily: Re-index changelog
- Weekly: Scrape community content
- Monthly: Clean old analytics

---

## 📚 File Reference

| File | Purpose |
|------|---------|
| `src/lib/search/supabase-client.ts` | Supabase connection |
| `src/lib/search/embeddings.ts` | OpenAI embeddings |
| `src/lib/search/vector-db.ts` | Vector search functions |
| `src/lib/search/rag.ts` | RAG pipeline (main logic) |
| `src/lib/voice/speech-recognition.ts` | Voice search |
| `src/components/search/SearchBar.tsx` | Search UI component |
| `src/components/search/VoiceButton.tsx` | Voice button |
| `src/components/search/SearchResults.tsx` | Results display |
| `src/app/api/search/ask/route.ts` | Search API endpoint |
| `src/app/api/search/health/route.ts` | Health check |
| `src/app/api/search/feedback/route.ts` | User feedback |
| `src/app/search/page.tsx` | Search page |
| `scripts/index-tutorials.ts` | Content indexing |
| `scripts/upload-to-supabase.ts` | Upload to DB |
| `db/schema/search-schema.sql` | Database schema |

---

## 🎉 You're Done!

Your AI search system is now live with:
- ✅ Voice search
- ✅ Semantic understanding
- ✅ AI-generated answers
- ✅ Source citations
- ✅ Mobile-friendly
- ✅ Cost-optimized

**Test it now:** https://cursortutorial.ai (or your domain)

Questions? Check the troubleshooting section above or review the inline code comments.

---

**Built with:**
- Supabase (PostgreSQL + pgvector)
- OpenAI (text-embedding-3-small)
- Anthropic (Claude 3.5 Haiku)
- Next.js 15 + React 19
- Web Speech API (voice)
- Vercel (hosting)

**Total cost:** ~$32/month for 5,000 searches 🎯

