// Fibonacci Sequence Generators in JavaScript

// a) printFibonacci using setInterval
// This function outputs Fibonacci numbers every second indefinitely.
function printFibonacci() {
    let a = 0, b = 1;
  
    const intervalId = setInterval(() => {
      console.log(a);
  
      // Calculate the next Fibonacci number
      const next = a + b;
      a = b;
      b = next;
    }, 1000);
  }
  // Call the function to see output
  // Uncomment the line below to test this function
  // printFibonacci();
  
// b) printFibonacciTimeouts using nested setTimeout
// This function uses nested setTimeout to print Fibonacci numbers every second indefinitely.
  function printFibonacciTimeouts(a = 0, b = 1) {
    console.log(a);
  
    // Schedule the next number after 1 second
    setTimeout(() => {
      printFibonacciTimeouts(b, a + b);
    }, 1000);
  }
  // Uncomment the line below to test this function
  // printFibonacciTimeouts();
  
// c) printFibonacciWithLimit using setInterval
// This function prints Fibonacci numbers every second using setInterval, 
// and stops after reaching the specified limit.
function printFibonacciWithLimit(limit) {
    let a = 0, b = 1, count = 0;
  
    const intervalId = setInterval(() => {
      if (count >= limit) {
        // Stop printing after reaching the limit
        clearInterval(intervalId);
        return;
      }
  
      console.log(a);
  
      // Calculate the next Fibonacci number
      const next = a + b;
      a = b;
      b = next;
      count++; // Increment count to keep track of printed numbers
    }, 1000);
  }
  // Uncomment the line below to test this function with a limit of 5 numbers
  // printFibonacciWithLimit(5);
  
// d) printFibonacciTimeoutsWithLimit using nested setTimeout
// This function uses nested setTimeout to print Fibonacci numbers every second,
// and stops after reaching the specified limit.
  function printFibonacciTimeoutsWithLimit(limit, a = 0, b = 1, count = 0) {
    if (count >= limit) return; // Stop when the limit is reached
  
    console.log(a);
    
    // Schedule the next number after 1 second
    setTimeout(() => {
      printFibonacciTimeoutsWithLimit(limit, b, a + b, count + 1);
    }, 1000);
  }
  
  // Uncomment the line below to test this function with a limit of 10 numbers
  printFibonacciTimeoutsWithLimit(5);