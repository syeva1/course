import Anthropic from '@anthropic-ai/sdk';
import { searchSimilarContent } from './vector-db';
import { getSearchConfig } from './config';

const anthropic = new Anthropic({
  apiKey: process.env.Claude_My_Secret_Key,
});

export interface SimpleRAGResponse {
  answer: string;
  sources: Array<{
    title: string;
    url: string;
    snippet: string;
    relevance: number;
  }>;
  relatedQuestions: string[];
  responseTimeMs: number;
}

/**
 * Simple non-streaming RAG function that should work reliably
 */
export async function answerQuestionSimple(
  question: string,
  options: {
    maxSources?: number;
    temperature?: number;
  } = {}
): Promise<SimpleRAGResponse> {
  const startTime = Date.now();
  const config = getSearchConfig();
  const { maxSources = config.maxSources, temperature = 0.3 } = options;

  try {
    // 1. Search for relevant content
    console.log(`🔍 Searching for: "${question}"`);
    const searchResults = await searchSimilarContent(question, {
      matchCount: Math.min(maxSources, config.maxSources),
      matchThreshold: config.matchThreshold,
    });
    
    console.log(`📊 Found ${searchResults.length} search results`);

    if (searchResults.length === 0) {
      return {
        answer: "I couldn't find specific information about that in the Cursor documentation. Could you rephrase your question or ask about a different Cursor feature?",
        sources: [],
        relatedQuestions: [
          "What's new in Cursor 1.7?",
          "How do I use Tab completion?",
          "What are the main Cursor keyboard shortcuts?"
        ],
        responseTimeMs: Date.now() - startTime,
      };
    }

    // 2. Build context from search results
    const context = searchResults
      .map((result, i) => `
[Source ${i + 1}: ${result.metadata.title}]
${result.content}
---
`)
      .join('\n');

    // 3. Generate answer with Claude
    const systemPrompt = `You are a Cursor AI expert. Answer questions about Cursor using this context:

${context}

Format as clean markdown:
- # Title with relevant emoji
- ## Main sections with bullet points
- **Bold** key terms, \`code\` for shortcuts
- Include keyboard shortcuts (Cmd+K, Cmd+L, Cmd+I, Tab)
- Add 💡 Pro Tips for valuable insights
- Be concise but comprehensive
- Use active voice and clear language

Focus on practical, actionable advice.`;

    const response = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 1000,
      temperature: 0.1,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: question,
        },
      ],
    });

    const fullAnswer = response.content[0].type === 'text' ? response.content[0].text : '';

    // 4. Format sources
    const sources = searchResults.slice(0, 5).map(result => {
      const content = result.content;
      const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 20);
      const bestSentence = sentences[0] || content.slice(0, 120);
      const snippet = bestSentence.length > 120 
        ? bestSentence.slice(0, 120) + '...'
        : bestSentence;
      
      let url = result.metadata.url;
      if (url && url.includes('/tutorial/') && !url.includes('/search')) {
        url = '/tutorial';
      } else if (!url) {
        url = '/tutorial';
      }
      
      return {
        title: result.metadata.title,
        url: url,
        snippet: snippet.trim(),
        relevance: Math.round(result.similarity * 100) / 100,
      };
    });

    // 5. Generate related questions
    const relatedQuestions = [
      "What's new in Cursor 1.7?",
      "How do I use Tab completion?",
      "What are the main Cursor keyboard shortcuts?",
      "How do I use Cmd+K for inline editing?",
      "What is Cursor's AI Chat feature?"
    ];

    return {
      answer: fullAnswer,
      sources,
      relatedQuestions,
      responseTimeMs: Date.now() - startTime,
    };

  } catch (error: any) {
    console.error('Error in simple RAG pipeline:', error);
    
    let errorMessage = "I'm sorry, I encountered an error while processing your question. Please try again.";
    
    if (error.message?.includes('timeout')) {
      errorMessage = "The search is taking too long. Please try a simpler question.";
    } else if (error.message?.includes('API key') || error.message?.includes('OPENAI_API_KEY')) {
      errorMessage = "AI service is temporarily unavailable. Please try again later.";
    } else if (error.message?.includes('database') || error.message?.includes('Supabase')) {
      errorMessage = "Search database is temporarily unavailable. Please try again later.";
    } else if (error.message?.includes('Claude') || error.message?.includes('Claude_My_Secret_Key')) {
      errorMessage = "AI service is temporarily unavailable. Please try again later.";
    }

    return {
      answer: errorMessage,
      sources: [],
      relatedQuestions: ["What's new in Cursor 1.7?", "How do I use Tab completion?"],
      responseTimeMs: Date.now() - startTime,
    };
  }
}
