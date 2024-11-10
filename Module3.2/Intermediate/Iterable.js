// Exercise 1: Iterating through Iterables
// Task: Write a program to loop through the following iterable objects using a for..of loop.

// Array
const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']

// Using for..of to iterate through the array.
// for..of loops over iterable objects such as arrays, sets, and maps.
for (const animal of animalsArr) {
  console.log(animal); 
}

// Set 
const animalSet = new Set(['cat', 'dog', 'rabbit', 'turtle'])

// Using for..of to iterate through the set.
// Sets are also iterable objects, and for..of can be used to loop through their elements.
for (const animal of animalSet) {
  console.log(animal); // Outputs each animal in the set
}

// Map 
const animalMap = new Map([['bird', 'parrot'], ['fish', 'goldfish'], ['insect', 'bee']])

// Using for..of to iterate through the map.
// Maps are iterable objects as well, and for..of can be used to loop through their entries.
// Each entry in a map is an array with two elements: the key and the value.
for (const [key, value] of animalMap) {
  console.log(key, value); // Outputs each key-value pair in the map
}

// What happens when you try to use for..of with a regular object?
// Regular objects are not iterable by default, so using for..of on them will result in an error

const animalObj = {
  mammal: 'whale',
  reptile: 'lizard',
  bird: 'eagle'
};

// Uncommenting the following lines will throw an error because animalObj is not iterable.
// for (const item of animalObj) {
//   console.log(item); 
// }

// How would you make an object iterable?
// To make an object iterable, you can implement the [Symbol.iterator] method on the object.
const iterableAnimalObj = {
  mammal: 'whale',
  reptile: 'lizard',
  bird: 'eagle',
  [Symbol.iterator]: function* () {
    for (let key of Object.keys(this)) {
      yield [key, this[key]]; // Yields each key-value pair as an array.
    }
  }
};

// Using for..of to iterate through the custom iterable object.
for (const [key, value] of iterableAnimalObj) {
  console.log(key, value); // Outputs each key-value pair in the object.
}