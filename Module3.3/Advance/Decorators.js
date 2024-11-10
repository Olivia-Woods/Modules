// A decorator is a function that wraps another function to extend or modify its behavior.

// Basic Function Decorator - Logging User Actions
// Purpose: The logAction decorator logs information about when a function is called, 
// including the function’s name and the arguments that were passed to it.

// Example 1: Create the logAction decorator
function logAction(fn) {
    // Return a new function that wraps the original function
    return function(...args) {
        // Log the function name and its arguments
        console.log(`Called ${fn.name} with arguments:`, args);
        // Call the original function and return its result
        return fn(...args);
    };
}

// Step 2: Apply the logAction decorator to functions

// Decorate the login function
const login = logAction(function(username, password) {
    console.log(`${username} logged in successfully.`);
});

// Decorate the purchase function
const purchase = logAction(function(item, quantity) {
    console.log(`Purchased ${quantity} of ${item}.`);
});

// Call the decorated functions
login('JohnDoe', 'password123'); // This will log the function call and execute the function
purchase('Laptop', 1);           // This will log the function call and execute the function

// Notes on logAction:
// - The decorator logs the name of the function being called and its arguments before executing the function itself.
// - The decorator itself is not responsible for messages like “JohnDoe logged in successfully.” 
// - Instead, it is the logAction function that enables those messages to be logged along with the function call details.
// - The decorator acts as a layer added to a function to track or modify its behavior without changing the function’s code directly.


// Example 2: Basic Function We Want to Extend
function sayHello(name) {
    return `Hello, ${name}!`;
}

// Decorator Function to Add Logging
function withLogging(func) {
    return function(...args) {
        console.log(`Calling ${func.name} with arguments: ${args}`);
        const result = func(...args);
        console.log(`Result: ${result}`);
        return result;
    };
}

// Using the Decorator
const loggedSayHello = withLogging(sayHello);
loggedSayHello("Olivia"); // Logs: Calling sayHello with arguments: Olivia
                           // Logs: Result: Hello, Olivia!
// Output: Hello, Olivia!

// Notes:
// - `sayHello` is the basic function we want to enhance.
// - `withLogging` is the decorator function that takes `sayHello` and adds logging.
// - `loggedSayHello` is a new function created by `withLogging(sayHello)`, with logging added.