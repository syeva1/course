// Test script to check if search is working
const testQueries = [
  "What is Cursor?",
  "How does Tab completion work?",
  "What is Cmd+K?"
];

console.log('Testing search functionality...');
console.log('If your site is deployed, you can test these queries:');
testQueries.forEach((query, i) => {
  console.log(`${i + 1}. ${query}`);
});

console.log('\nTo test manually:');
console.log('1. Go to your deployed website');
console.log('2. Use the search bar');
console.log('3. Try asking: "What is Cursor?"');
console.log('4. The search should generate embeddings on-demand and return results');

console.log('\nIf search is not working, the issue might be:');
console.log('- Missing API keys in Vercel environment variables');
console.log('- Network connectivity issues');
console.log('- Database permissions');
