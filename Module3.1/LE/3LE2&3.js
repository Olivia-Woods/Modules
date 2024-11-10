// 2. Which of the below are not giving the right answer? Why are they not correct?
let three = "3";
let four = "4";
let thirty = "30";

// What is the value of the following expressions?
let addition = three + four // 34. The + operator is used for both numeric addition and string concatenation. 
// If either operand is a string, the other operand is converted to a string, and the two strings are concatenated.
let multiplication = three * four // 12 Converts to Number. The * operator is only used for numeric multiplication.
let division = three / four // 0.75 Converts to Number. The / operator is used for numeric division.
let subtraction = three - four // -1 Converts to Number. The - operator is used for numeric subtraction.
let lessThan1 = three < four // true. The < operator compares the two values. JavaScript converts three and four to numbers for comparison.
let lessThan2 = thirty < four // true. Compares the strings lexicographically. The comparison “30” < “4” is based on the first character of each string.
// Since "3" (the first character of "30") is less than "4", the result is true.)
// Since "3" (unicode value 51) is less than "4" (unicode value 52), the result is true.

console.log("Addition:", addition); // "34"
console.log("Multiplication:", multiplication); // 12
console.log("Division:", division); // 0.75
console.log("Subtraction:", subtraction); // -1
console.log("LessThan1:", lessThan1); // true
console.log("LessThan2:", lessThan2); // true (based on lexicographical comparison)

// 3. Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true') // 0 is a falsy value in JavaScript. NO
// In JavaScript, the condition inside an if statement is evaluated to determine whether it’s “truthy” or “falsy”. 
// The value 0 is considered “falsy”. (false 0 "" null undefined NaN)
if ("0") console.log('#2 zero is true') // "0" is a non-empty string, and non-empty strings are truthy values in JavaScript. YES
if (null) console.log('null is true') // null is a falsy value in JavaScript. NO
if (-1) console.log('negative is true') // -1 is a non-zero number, and non-zero numbers are truthy values in JavaScript. YES
if (1) console.log('positive is true') // 1 is a non-zero number, and non-zero numbers are truthy values in JavaScript. YES

if (-0) console.log('my own test') // In JavaScript, -0 is also considered a falsy value, just like 0. 