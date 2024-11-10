// JavaScript Notes on Conditionals, Loops, and Arrays

// Conditionals
// Conditionals are used to perform different actions based on different conditions.

// 1. If Statement
const age = 18;
if (age >= 18) {
    console.log('You are an adult.'); // Output: You are an adult.
}

// 2. If...Else Statement
const age2 = 16;
if (age2 >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are a minor.'); // Output: You are a minor.
}

// 3. Else If Statement
const score = 75;
if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B');
} else if (score >= 70) {
    console.log('Grade: C'); // Output: Grade: C
} else {
    console.log('Grade: D or F');
}

// 4. Switch Statement
const fruit = 'banana';
switch (fruit) {
    case 'apple':
        console.log('You chose an apple.');
        break;
    case 'banana':
        console.log('You chose a banana.'); // Output: You chose a banana.
        break;
    default:
        console.log('Unknown fruit.');
}

// Loops
// Loops allow you to execute a block of code multiple times.

// 1. For Loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

// 2. While Loop
let count = 0;
while (count < 5) {
    console.log(count); // Output: 0, 1, 2, 3, 4
    count++;
}

// 3. Do...While Loop
let num = 0;
do {
    console.log(num); // Output: 0, 1, 2, 3, 4
    num++;
} while (num < 5);

// Arrays
// Arrays are used to store multiple values in a single variable.

// 1. Creating Arrays
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // Output: ['apple', 'banana', 'cherry']