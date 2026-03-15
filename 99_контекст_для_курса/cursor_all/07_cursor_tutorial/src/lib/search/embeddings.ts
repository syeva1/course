import OpenAI from 'openai';

// Lazy initialization to avoid build-time errors
let openai: OpenAI | null = null;

function getOpenAI(): OpenAI {
  if (!openai) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY environment variable is not set');
    }
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openai;
}

/**
 * Generate embeddings for text using OpenAI's text-embedding-3-small model
 * Cost: ~$0.02 per 1M tokens (very cheap!)
 * 
 * @param text - The text to embed
 * @param dimensions - Number of dimensions (1536 for full precision, 512 for speed)
 */
export async function generateEmbedding(text: string, dimensions: number = 1536): Promise<number[]> {
  try {
    const openaiClient = getOpenAI();
    const response = await openaiClient.embeddings.create({
      model: 'text-embedding-3-small',
      input: text.slice(0, 8000), // Limit to ~8K chars to stay within token limits
      encoding_format: 'float',
      dimensions: dimensions, // Configurable dimensions
    });

    return response.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw new Error('Failed to generate embedding');
  }
}

/**
 * Generate embeddings for multiple texts in batch
 * More efficient for bulk operations
 * 
 * @param texts - Array of texts to embed
 * @param dimensions - Number of dimensions (1536 for full precision, 512 for speed)
 */
export async function generateEmbeddingsBatch(texts: string[], dimensions: number = 1536): Promise<number[][]> {
  try {
    const openaiClient = getOpenAI();
    // OpenAI allows up to 2048 inputs per request
    const batchSize = 2048;
    const embeddings: number[][] = [];

    for (let i = 0; i < texts.length; i += batchSize) {
      const batch = texts.slice(i, i + batchSize).map(t => t.slice(0, 8000));
      
      const response = await openaiClient.embeddings.create({
        model: 'text-embedding-3-small',
        input: batch,
        encoding_format: 'float',
        dimensions: dimensions, // Configurable dimensions
      });

      embeddings.push(...response.data.map(d => d.embedding));
      
      // Small delay between batches to avoid rate limits
      if (i + batchSize < texts.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    return embeddings;
  } catch (error) {
    console.error('Error generating embeddings batch:', error);
    throw new Error('Failed to generate embeddings batch');
  }
}

/**
 * Calculate cosine similarity between two embeddings
 * Returns a value between -1 and 1 (1 = identical, 0 = orthogonal, -1 = opposite)
 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Embeddings must have same length');
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

