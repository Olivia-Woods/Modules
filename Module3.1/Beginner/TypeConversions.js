// JavaScript Notes on Type Conversions

// String Conversion: Converting other data types to strings.
let num = 123;
let str = String(num); // Converts number to string
console.log(typeof str); // Output: string

let bool = true;
let boolStr = String(bool); // Converts boolean to string
console.log(typeof boolStr); // Output: string

// Numeric Conversion: Converting other data types to numbers.
let strNum = "456";
let numConverted = Number(strNum); // Converts string to number
console.log(typeof numConverted); // Output: number

let boolNum = Number(bool); // Converts boolean to number (true to 1, false to 0)
console.log(boolNum); // Output: 1

// Boolean Conversion: Converting other data types to booleans.
let zero = 0;
let emptyStr = "";
let someStr = "Hello";
let numBool = Boolean(num); // Converts number to boolean (0 to false, others to true)
let zeroBool = Boolean(zero); // Converts 0 to boolean false
let emptyStrBool = Boolean(emptyStr); // Converts empty string to boolean false
let someStrBool = Boolean(someStr); // Converts non-empty string to boolean true

console.log(numBool); // Output: true
console.log(zeroBool); // Output: false
console.log(emptyStrBool); // Output: false
console.log(someStrBool); // Output: true

// String Comparison in JavaScript

// When comparing values of different types using >, <, ==, and !=,
// JavaScript converts the values to numbers.

console.log('5' > 3); // true ('5' is converted to number 5)
console.log('01' == 1); // true ('01' is converted to number 1)
console.log(false == 0); // true (false is converted to number 0)
console.log(true == 1); // true (true is converted to number 1)

// For strict equality (===) and strict inequality (!==), no type conversion is performed.
console.log('5' === 5); // false (different types)
console.log(false === 0); // false (different types)

// String Comparison: Lexicographical Order

// To see whether one string is greater than another, JavaScript uses dictionary or 
// lexicographical order. In other words, strings are compared letter-by-letter.

console.log('apple' > 'banana'); // false (compares 'a' to 'b')
console.log('grape' < 'grapefruit'); // true (compares 'grape' to 'grapefruit')
console.log('Zebra' < 'apple'); // true ('Z' has a lower ASCII value than 'a')

// Truthy and Falsey Values in JavaScript

// Falsey values in JavaScript include:
// false, 0, "", null, undefined, NaN (Not-a-Number)

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Truthy values in JavaScript include all values that are not falsey:
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean([])); // true (empty array)
console.log(Boolean({})); // true (empty object)
console.log(Boolean(function(){})); // true (empty function)