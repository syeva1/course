#!/usr/bin/env node

// Test Anthropic streaming to identify the root cause
const Anthropic = require('@anthropic-ai/sdk');

async function testAnthropicStreaming() {
  console.log('🔍 Testing Anthropic streaming to identify root cause...');
  
  const anthropicApiKey = process.env.Claude_My_Secret_Key;
  if (!anthropicApiKey) {
    console.error('❌ Claude_My_Secret_Key not found in environment');
    return;
  }

  const anthropic = new Anthropic({
    apiKey: anthropicApiKey,
  });

  try {
    console.log('📡 Creating streaming request...');
    const stream = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 100,
      messages: [{ role: 'user', content: 'Say hello' }],
      stream: true,
    });

    console.log('✅ Stream object created');
    console.log('Type of stream:', typeof stream);
    console.log('Stream constructor:', stream.constructor.name);
    console.log('Has Symbol.asyncIterator:', typeof stream[Symbol.asyncIterator] === 'function');
    console.log('Stream keys:', Object.keys(stream));
    
    if (stream[Symbol.asyncIterator]) {
      console.log('🔄 Testing iteration...');
      let chunkCount = 0;
      for await (const chunk of stream) {
        chunkCount++;
        console.log(`Chunk ${chunkCount}:`, chunk.type, chunk.delta?.type || 'no delta');
        if (chunkCount >= 3) break; // Just test a few chunks
      }
      console.log('✅ Streaming iteration successful');
    } else {
      console.log('❌ Stream is not async iterable');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Stack:', error.stack);
  }
}

testAnthropicStreaming();
