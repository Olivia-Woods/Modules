// 5. Rewrite the following function using: 
// a) function expression syntax, and 
// b) arrow function syntax.
// Test each version to make sure they work the same.

function getGreeting(name) { // Function Declaration
    return 'Hello ' + name + '! This is using function declaration.';
}

// a) Function Expression Syntax
const getGreetingExpression = function(name) { // Assigning an anonymous function to the variable getGreetingExpression.
    return 'Hello ' + name + '! This is using function expression.';
};

// b) Arrow Function Syntax
const getGreetingArrow = (name) => { // Using an arrow function.
    return 'Hello ' + name + '! This is using an arrow function.';
};

// Concise Arrow Function Syntax
const getGreetingConcise = (name) => 'Hello ' + name + '! This is also using a concise arrow function.';

// Testing
console.log(getGreeting('Olivia')); // Output: Hello Olivia! This is using function declaration.
console.log(getGreetingExpression('Aaron')); // Output: Hello Aaron! This is using function expression.
console.log(getGreetingArrow('Muskan')); // Output: Hello Muskan! This is using an arrow function.
console.log(getGreetingConcise('IOD')); // Output: Hello IOD! This is also using a concise arrow function.

// Use function declarations for reusable functions that can be called anywhere in the scope (hoisted).
// Use function expressions for specific contexts, like callbacks or event handlers, where hoisting is not needed.
// Use arrow functions for concise syntax, especially when you want to maintain the lexical `this` context.
// Consistency in style within similar contexts enhances code readability and maintainability.
