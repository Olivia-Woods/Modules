// JavaScript Notes on Objects: Properties

// Object with Properties
// Define an object with key-value pairs.
const individual = {
    name: 'Olivia',
    age: 25,
    city: 'Perth',
    occupation: 'Pilates Instructor'
};

console.log(individual.name);

// Object with Operations: Get/Set or Delete the Value of a Property Key
// Get the value of a property
console.log(`The value of the age property is: ${individual.age}.`);
console.log(`The value of the occupation property is: ${individual.occupation}.`);

// Set the value of a property
individual.age = 26;
console.log(`Setting the new value of the age property to: ${individual.age}.`);
individual.occupation = 'Software Engineer'; // Update the occupation
console.log(`Setting the new value of the occupation property to: ${individual.occupation}.`);

// Delete a property
delete individual.city;
console.log(`Deleting the 'city' property gives us: ${individual.city}.`); 

// Objects: Property Existence Test
// Use the 'in' operator to check if a property exists in an object.
console.log('name' in individual); // Output: true
console.log('city' in individual); // Output: false
console.log('occupation' in individual); // Output: true

// Iterating Over Objects
// Use a 'for...in' loop to iterate over an object's properties.
for (let key in individual) {
    console.log(`${key}: ${individual[key]}`);
}

// Object References/Pass by Reference
// Objects are passed by reference, so changes to one reference affect the original object.
const anotherIndividual = individual; // anotherIndividual references the same object as individual
anotherIndividual.name = 'Pete'; // Change the name property of the referenced object

// Print the change in the original object's property
console.log(`The original object's property name has changed from Olivia to: ${individual.name}.`);

// Iterating Over Objects to Show Changes Made
for (let key in individual) {
    console.log(`${key}: ${individual[key]}`);
}

// Part 2 
// Objects: Shallow Copy
// A shallow copy creates a new object that is a copy of the original object's properties.
// Changes to the copied object do not affect the original object for primitive values (like strings, numbers, etc.).

// Use Object.assign() to create a shallow copy of an object.
const copiedIndividual = Object.assign({}, individual); // Create a new object with the same properties as 'individual'

// Modify the name and occupation properties of the copied object.
copiedIndividual.name = 'Sienna'; // Change the name of the copied individual to 'Sienna'
copiedIndividual.occupation = 'Designer'; // Change the occupation of the copied individual

// Log the name and occupation of the original individual.
// This will still output 'Pete' for name and 'Software Engineer' for occupation.
console.log(`Original individual is still named: ${individual.name}.`); // Output: Pete
console.log(`Original individual's occupation is still: ${individual.occupation}.`); // Output: Software Engineer

// Log the name and occupation of the copied individual.
// This will output 'Sienna' for name and 'Designer' for occupation as we changed them in the copied object.
console.log(`Shallow copied individual is named: ${copiedIndividual.name}.`); // Output: Sienna
console.log(`Shallow copied individual's occupation is: ${copiedIndividual.occupation}.`); // Output: Designer

// Part 3
// Shallow Copy with Object Spread
// The spread operator (...) can also be used to create a shallow copy of an object.
// It copies the properties of the original object into a new object.

const spreadCopiedIndividual = { ...individual }; // Create a new object with the same properties using the spread operator

// Modify the age property of the copied object.
spreadCopiedIndividual.age = 88; // Change the age of the copied individual to 88

// Log the age and occupation of the original individual.
// This will still output 26 for age and 'Software Engineer' for occupation.
console.log(`The original age is still: ${individual.age}.`); // Output: 26
console.log(`The original occupation is still: ${individual.occupation}.`); // Output: Software Engineer

// Log the age of the copied individual.
// This will output 88 as we changed the age in the copied object.
console.log(`The shallow copy with object spread is now: ${spreadCopiedIndividual.age}.`); // Output: 88

// Log the final results of the spread copied individual
console.log("Final properties of the spread copied individual:");
for (let key in spreadCopiedIndividual) {
    console.log(`${key}: ${spreadCopiedIndividual[key]}`);
}

// Part 4
// Objects: Deep Clone
// A deep clone creates a new object that is a completely independent copy of the original object.
// This means that nested objects will also be copied, and changes to nested objects in the copy do not affect the original.

const deepClonedIndividual = JSON.parse(JSON.stringify(individual)); // Create a deep clone using JSON methods

// Modify the age property of the deep cloned object.
deepClonedIndividual.age = 32; // Change the age of the cloned individual to 32

// Log the age and occupation of the original individual.
// This will still output 26 for age and 'Software Engineer' for occupation.
console.log(`Original age after deep clone remains: ${individual.age}.`); // Output: 26
console.log(`Original occupation after deep clone remains: ${individual.occupation}.`); // Output: Software Engineer

// Log the age of the deep cloned individual.
// This will output 32 as we changed the age in the deep cloned object.
console.log(`The deep clone age has been modified to: ${deepClonedIndividual.age}.`); // Output: 32