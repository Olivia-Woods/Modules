// 3. Use the following animals array for the below tasks.
const animals = ['Tiger', 'Giraffe'];
console.log(`Initial Array:`, animals);

// a) Add 2 new values to the end.
animals.push('Elephant', 'Zebra');
console.log('After Adding to the End:', animals); 

// b) Add 2 new values to the beginning.
animals.unshift('Lion', 'Bear');
console.log('After Adding to the Beginning:', animals);

// c) Sort the values alphabetically.
animals.sort();
console.log('After Sorting Alphabetically:', animals); 

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue.
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2); // Calculate the middle index.
  animals[middleIndex] = newValue; // Replace the middle animal.
}

replaceMiddleAnimal('Monkey'); // Replace the middle animal with 'Monkey'.
console.log('After Replacing Middle Animal:', animals);

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string.
function findMatchingAnimals(beginsWith) {
  // Filter the animals array based on whether the animal name starts with the beginsWith string (case insensitive).
  return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
}

// Testing the findMatchingAnimals function.
console.log('Animals Starting with "B":', findMatchingAnimals('b'));
console.log('Animals Starting with "E":', findMatchingAnimals('e')); 
console.log('Animals Starting with "T":', findMatchingAnimals('t')); 
console.log('Animals Starting with "M":', findMatchingAnimals('m')); 