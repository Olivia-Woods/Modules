// Timing Decorator
// Step 1: Create the measureTime decorator
function measureTime(fn) {
    // Return a new function that wraps the original function
    return function(...args) {
        // Record the start time
        const start = performance.now();
        // Call the original function with its arguments and store the result
        const result = fn.apply(this, args);
        // Record the end time
        const end = performance.now();
        // Log the execution time
        console.log(`Function ${fn.name} took ${(end - start).toFixed(2)} milliseconds`);
        // Return the result of the original function
        return result;
    };
}

// Explanation:
// The measureTime function is a decorator. It takes a function 'fn' as its argument
// and returns a new function that "wraps" the original function.
// When the new function is called, it records the start time, calls the original
// function with its arguments, records the end time, logs the execution duration,
// and returns the result of the original function.

// Step 2: Apply the measureTime decorator to a function

// Decorate the fibonacci function
const fibonacci = measureTime(function(n) {
    // Calculate the nth Fibonacci number (recursive implementation)
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

// Explanation:
// Here, the 'fibonacci' function is passed to the measureTime decorator. The decorator
// returns a new function that measures and logs the execution time before returning
// the result of the original 'fibonacci' function.

// Call the decorated function
console.log(fibonacci(10));  // Adjust the number for longer execution time if needed

// Explanation:
// When the decorated 'fibonacci' function is called, it will log the time it took to
// execute and then return the result of the original Fibonacci calculation.