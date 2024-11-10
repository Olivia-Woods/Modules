// JavaScript Notes on Data Types

// Number: Represents integers and floating-point numbers. 
// You can perform arithmetic operations with numbers using +, -, /, and *.
const integer = 123; // An integer number
const float = 12.34; // A floating-point number
console.log(1 / 0); // Infinity - result of division by zero

// String: Text data wrapped in quotes.
const singleQuote = 'Hello'; // String with single quotes
const doubleQuote = "World"; // String with double quotes

// Template literals (backticks) allow for embedding variables and expressions.
const name = "Olivia"; // A variable containing a string
const greeting = `Hello, ${name}! Welcome to the coding world.`; // Using template literals
console.log(greeting); // Output: Hello, Olivia! Welcome to the coding world.

// Boolean: Represents true or false values.
let isActive = true; // Boolean value true
let isInactive = false; // Boolean value false

// Null: Represents an intentional absence of value.
let emptyValue = null; // Null value

// Undefined: Indicates a variable exists but has no assigned value.
let uninitialized; // Declaration without initialization
console.log(uninitialized); // Output: undefined

// Object: A collection of key-value pairs. Used to store data collections.
const person = {
  name: 'Olivia', // A string key-value pair
  age: 26, // A number key-value pair
  isStudent: true, // A boolean key-value pair
  address: { // A nested object
    street: '123 Main St',
    city: 'Perth',
    zipCode: 6000
  },
  hobbies: ['Pilates', 'Coding', 'Reading'] // An array (which is also an object)
};

console.log(person); // Output the whole object

// Accessing object properties
console.log(person.name); // Output: Olivia
console.log(person.address.city); // Output: Perth
console.log(person.hobbies[1]); // Output: Coding

// Arrays: A special type of object with numeric keys (indexes) and a specific length.
const numbers = [1, 2, 3, 4, 5]; // An array of numbers
console.log(numbers[0]); // Output: 1 (accessing the first element of the array)
console.log(numbers.length); // Output: 5 (length of the array)