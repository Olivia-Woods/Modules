// Customizable Counter Decorator

// 1. Creating the makeCounter function as a decorator.
// This decorator function creates and returns a function (a "closure") that 
// remembers and manipulates its own "currentCount" variable.

function makeCounter(startFrom = 0, incrementBy = 1) {
    // Initialize the counter to start from the specified startFrom argument.
    let currentCount = startFrom;

    // Return a function that increments the counter by the specified incrementBy value.
    return function() {
        currentCount += incrementBy;
        console.log(currentCount); // Display current count
        return currentCount;
    };
}

// Part A: Testing Counter Independence
// Create two counters to check if they maintain their own counts.

let counter1 = makeCounter(); // Defaults to starting from 0, incrementing by 1
let counter2 = makeCounter(); // Also defaults to 0, incrementing by 1

// Testing counter1 to see if it increments independently
console.log("Counter 1 Tests:");
counter1(); // Expected output: 1
counter1(); // Expected output: 2
counter1();

// Testing counter2 to ensure it's independent of counter1
console.log("Counter 2 Tests:");
counter2(); // Expected output: 1 (since it's independent)
counter2(); // Expected output: 2
counter2();

// Part B: Modifying makeCounter with a Starting Value
// Passing a starting point for the counter.

let counter3 = makeCounter(5); // Starts from 5, incrementing by 1
console.log("Counter 3 Starting from 5:");
counter3(); // Expected output: 6
counter3(); // Expected output: 7
counter3(); 

// Part C: Modifying makeCounter with a Custom Increment Value
// Now the counter can take an increment value.

let counter4 = makeCounter(10, 5); // Starts from 10, increments by 5
console.log("Counter 4 Starting from 10, Incrementing by 5:");
counter4(); // Expected output: 15
counter4(); // Expected output: 20
counter4();

// Explanation Notes
// 1. makeCounter is a "decorator" because it generates and customizes a new function (counter).
// 2. Each call to makeCounter creates a unique function with its own `currentCount`.
// 3. The `startFrom` argument sets the initial counter value, and `incrementBy` determines the step for each increment.
// 4. The inner function has access to `currentCount` (a closure), maintaining its own count independently.