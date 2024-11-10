// JavaScript Notes on Common Operators

// 1. Arithmetic Operators
// Used to perform basic mathematical operations.
const a = 10;
const b = 5;
console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus (Remainder): 0
console.log(++a);    // Increment: 11
console.log(--b);    // Decrement: 4

// 2. Assignment Operators
// Used to assign values to variables.
let x = 10;
x += 5; // x = x + 5; (15)
x -= 3; // x = x - 3; (12)
x *= 2; // x = x * 2; (24)
x /= 4; // x = x / 4; (6)
x %= 3; // x = x % 3; (0)

// 3. Comparison Operators
// Used to compare two values and return a boolean result.
console.log(a == b); // Equal: false
console.log(a === b); // Strict Equal (checks type): false
console.log(a != b); // Not Equal: true
console.log(a !== b); // Strict Not Equal: true
console.log(a > b); // Greater than: true
console.log(a < b); // Less than: false
console.log(a >= b); // Greater than or equal: true
console.log(a <= b); // Less than or equal: false

// 4. Logical Operators
// Used to combine multiple boolean expressions.
const bool1 = true;
const bool2 = false;
console.log(bool1 && bool2); // AND: false
console.log(bool1 || bool2); // OR: true
console.log(!bool1); // NOT: false

// 5. Bitwise Operators
// Used to perform bit-level operations on binary numbers.
console.log(a & b); // Bitwise AND
console.log(a | b); // Bitwise OR
console.log(a ^ b); // Bitwise XOR
console.log(~a); // Bitwise NOT
console.log(a << 1); // Left Shift
console.log(a >> 1); // Right Shift

// 6. Ternary Operator
// A shorthand way to write an if-else statement.
const age = 20;
const canVote = (age >= 18) ? 'Yes' : 'No'; // Output: 'Yes'

// 7. typeof Operator
// Used to determine the data type of a variable.
console.log(typeof a); // Output: 'number'
console.log(typeof 'hello'); // Output: 'string'
console.log(typeof true); // Output: 'boolean'
console.log(typeof null); // Output: 'object' (this is a known quirk in JS)