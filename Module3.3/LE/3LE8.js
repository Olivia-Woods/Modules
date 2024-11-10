// Implementing a String Validation Decorator for Enhanced Argument Checking in JavaScript

// a) Create a decorator function to validate that all arguments are strings
function validateStringArg(fn) {
    // Return a new function that checks arguments
    return function(...args) {
      // Check each argument to ensure it is a string
      for (let arg of args) {
        if (typeof arg !== "string") {
          throw new Error(`Invalid argument: ${arg}. All arguments must be strings.`);
        }
      }
      // Call the original function if all arguments are valid
      return fn(...args);
    };
  }
  
  // b) Extend orderItems to accept multiple item names using the rest operator
  function orderItems(...itemNames) {
    return `Order placed for: ${itemNames.join(", ")}`;
  }
  
  // c) Create a decorated version of orderItems using validateStringArg
  const validatedOrderItems = validateStringArg(orderItems);
  
  // d) Testing the decorated function with try-catch to handle errors
  try {
    console.log(validatedOrderItems("Apple Watch", "MacBook")); // Should work: "Order placed for: Apple Watch, MacBook"
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log(validatedOrderItems("iPhone", 123)); // Should throw an error
  } catch (error) {
    console.error(error.message); // Expected output: "Invalid argument: 123. All arguments must be strings."
  }
  
  try {
    console.log(validatedOrderItems("AirPods", "iPad", "HomePod")); // Should work: "Order placed for: AirPods, iPad, HomePod"
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log(validatedOrderItems(456, "Apple Watch")); // Should throw an error
  } catch (error) {
    console.error(error.message); // Expected output: "Invalid argument: 456. All arguments must be strings."
  }