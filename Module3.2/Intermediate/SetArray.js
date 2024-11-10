// Create a Set with the names of your classmates.
const classmatesSet = new Set(['Alice', 'Bob', 'Charlie', 'Dave']);

// Method 1: Using Array.from() to convert Set to Array.
const classmatesArrayFrom = Array.from(classmatesSet);
console.log('Using Array.from():', classmatesArrayFrom); // Output: ['Alice', 'Bob', 'Charlie', 'Dave']

// Method 2: Using the spread operator to convert Set to Array.
const classmatesArraySpread = [...classmatesSet];
console.log('Using spread operator:', classmatesArraySpread); // Output: ['Alice', 'Bob', 'Charlie', 'Dave']