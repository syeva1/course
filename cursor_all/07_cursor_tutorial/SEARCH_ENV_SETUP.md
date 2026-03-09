# AI Search System - Environment Variables Setup

## Required API Keys

Add these to your `.env.local` file:

```bash
# ============================================
# AI SEARCH SYSTEM
# ============================================

# Supabase (Vector Database)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# OpenAI (Embeddings for semantic search)
OPENAI_API_KEY=sk-your_openai_api_key_here

# Anthropic (Claude 3.5 Haiku for AI responses)
ANTHROPIC_API_KEY=sk-ant-your_anthropic_api_key_here
```

## Setup Instructions

### 1. Supabase (FREE - Vector Database)

1. **Create account:** https://supabase.com
2. **Create new project:**
   - Choose region closest to your users
   - Wait 2-3 minutes for setup
3. **Get credentials:**
   - Go to Project Settings → API
   - Copy `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - Copy `anon/public key` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Copy `service_role key` → `SUPABASE_SERVICE_ROLE_KEY` (keep secret!)

### 2. OpenAI (Embeddings - ~$2/month)

1. **Create account:** https://platform.openai.com
2. **Add payment method:** Settings → Billing
3. **Create API key:** API Keys → Create new secret key
4. **Copy key:** `sk-...` → `OPENAI_API_KEY`
5. **Set usage limit:** Billing → Usage limits → $10/month

### 3. Anthropic (Claude 3.5 Haiku - ~$30/month for 5K searches)

1. **Create account:** https://console.anthropic.com
2. **Add payment method:** Settings → Billing
3. **Purchase credits:** $5 minimum, $100 recommended
4. **Create API key:** Settings → API Keys → Create Key
5. **Copy key:** `sk-ant-...` → `ANTHROPIC_API_KEY`
6. **Set budget alert:** Settings → Billing → Set alerts

## Vercel Environment Variables

After local testing, add these same variables to Vercel:

1. Go to your project dashboard
2. Settings → Environment Variables
3. Add all 5 variables above
4. Make sure to add for: Production, Preview, and Development
5. Redeploy after adding

## Security Notes

⚠️ **NEVER commit `.env.local` to git!**
⚠️ **SUPABASE_SERVICE_ROLE_KEY** bypasses Row Level Security - keep it secret!
⚠️ **ANTHROPIC_API_KEY** has spending limits - monitor usage!

## Testing

After adding variables, test with:

```bash
# Test that all env vars are loaded
npm run dev

# Check the API health endpoint
curl http://localhost:3000/api/search/health
```

## Estimated Costs

| Service | Free Tier | Your Usage | Cost |
|---------|-----------|------------|------|
| Supabase | 500MB, 2GB bandwidth | ~30MB, ~1GB | $0 |
| OpenAI Embeddings | None | ~20K tokens/month | ~$2 |
| Anthropic Claude | None | ~5K searches | ~$30 |
| **TOTAL** | | | **~$32/month** |

## Next Steps

Once you have all API keys:

1. Add to `.env.local`
2. Run `npm run setup:database` (creates Supabase schema)
3. Run `npm run index:tutorials` (indexes your content)
4. Run `npm run dev` (start development)
5. Test search at http://localhost:3000

