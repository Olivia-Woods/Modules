// Fetching Data with Async/Await in Node.js: Single and Multiple URL Handling with Error Management

// Node.js Setup
import fetch from 'node-fetch';
globalThis.fetch = fetch;

// a) Rewrite fetchURLData using async/await
async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Fetch error: ${error.message}`);
  }
}

// b) Testing the async/await function with valid and invalid URLs

// Valid URL test
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log("Valid URL Test:", data))
  .catch(error => console.error("Valid URL Test Error:", error.message));

// Invalid URL test
fetchURLData('https://jsonplaceholder.typicode.com/invalid-url')
  .then(data => console.log("Invalid URL Test:", data))
  .catch(error => console.error("Invalid URL Test Error:", error.message));

// c) Extended function to handle an array of URLs using Promise.all
async function fetchMultipleURLs(urls) {
  try {
    const fetchPromises = urls.map(url => fetchURLData(url)); // Create an array of promises
    const results = await Promise.all(fetchPromises); // Wait for all promises to resolve
    return results;
  } catch (error) {
    throw new Error(`Error in fetching multiple URLs: ${error.message}`);
  }
}

// Testing fetchMultipleURLs with valid and invalid URLs
const urls = [
  'https://jsonplaceholder.typicode.com/todos/1', // valid
  'https://jsonplaceholder.typicode.com/todos/2', // valid
  'https://jsonplaceholder.typicode.com/invalid-url' // invalid
];

fetchMultipleURLs(urls)
  .then(data => console.log("Multiple URLs Test:", data))
  .catch(error => console.error("Multiple URLs Test Error:", error.message));