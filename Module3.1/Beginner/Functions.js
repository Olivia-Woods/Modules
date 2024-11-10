// JavaScript Notes on Functions

// Function Declaration
// A function declaration defines a named function. It is hoisted, meaning it can be called before its declaration.

function greet(name) {
    return `Hello, ${name}!`;
  }
  
  console.log(greet('Olivia')); // Output: Hello, Olivia!
  
  // Function Expression
  // A function expression defines a function as part of a larger expression. It is not hoisted, so it cannot be called before it is defined.
  
  const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
  };
  
  console.log(sayGoodbye('Olivia')); // Output: Goodbye, Olivia!
  
  // Arrow Functions
  // Arrow functions provide a shorter syntax for writing functions. They do not have their own `this` context and are not hoisted.
  
  const add = (a, b) => {
    return a + b;
  };
  
  console.log(add(2, 3)); // Output: 5
  
  // If the function body contains a single expression, you can omit the curly braces and the return keyword.
  const subtract = (a, b) => a - b;
  
  console.log(subtract(5, 2)); // Output: 3
  
  // Arrow functions with a single parameter do not require parentheses.
  const square = n => n * n;
  
  console.log(square(4)); // Output: 16
  
  // Immediately Invoked Function Expression (IIFE)
  // An IIFE is a function that runs as soon as it is defined.
  
  (function() {
    console.log('This function runs immediately!');
  })(); // Output: This function runs immediately!
  
  // Functions as First-Class Citizens
  // Functions in JavaScript are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
  
  function performOperation(operation, a, b) {
    return operation(a, b);
  }
  
  const multiply = (a, b) => a * b;
  
  console.log(performOperation(multiply, 3, 4)); // Output: 12
  
  // Higher-Order Functions
  // A higher-order function is a function that takes another function as an argument, returns a function, or both.
  
  function createMultiplier(multiplier) {
    return function(number) {
      return number * multiplier;
    };
  }
  
  const double = createMultiplier(2);
  console.log(double(5)); // Output: 10
  
  const triple = createMultiplier(3);
  console.log(triple(5)); // Output: 15