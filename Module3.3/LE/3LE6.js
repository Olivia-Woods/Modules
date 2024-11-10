// Extending JavaScript Functions with a Custom delay Method for Delayed Execution

// Step 1: Add the delay method to the Function prototype
Function.prototype.delay = function(ms) {
  // Save the original function context
  const originalFunction = this;

  // Return a new function that calls the original after ms milliseconds
  return function(...args) {
    setTimeout(() => {
      originalFunction.apply(this, args); // Using apply to allow multiple arguments
    }, ms);
  };
};

// Testing each part of the requirement:

// a) Testing the delay method with the example multiply function with two parameters
function multiply(a, b) {
console.log(a * b); // Output the product of two numbers
}

// Using the delay method to print the result after 500 milliseconds
multiply.delay(500)(4, 2); 
// Output: 8 after 500ms
// Reason: `multiply` function is delayed by 500ms and then logs 4 * 2

// b) `apply` is already used in the delay method, allowing the delayed function to accept any number of parameters
// Testing with three parameters to confirm flexibility

function add(a, b, c) {
console.log(a + b + c); // Output the sum of three numbers
}

// Delay the addition for 700 milliseconds
add.delay(700)(2, 4, 10); 
// Output: 16 after 700ms
// Reason: `add` function is delayed by 700ms and then logs 2 + 4 + 10

// c) Modify multiply to take 4 parameters and test that the delay still works

function multiplyFour(a, b, c, d) {
console.log(a * b * c * d); // Output the product of four numbers
}

// Using delay with four parameters
multiplyFour.delay(1000)(2, 4, 6, 8); 
// Output: 384 after 1000ms
// Reason: `multiplyFour` function is delayed by 1000ms and then logs 2 * 4 * 6 * 8