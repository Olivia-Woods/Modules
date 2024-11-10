// Initialize the colors array
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Slice the array to get the first 3 colors
let firstThreeColors = colors.slice(0, 3);
console.log("First 3 colors:", firstThreeColors);

// Use splice to remove the last 2 colors and replace them with 'cyan' and 'magenta'
colors.splice(-2, 2, 'cyan', 'magenta');
console.log("Array after splicing:", colors);

// Use concat to merge the colors array with another array ['black', 'white']
let mergedArray = colors.concat(['black', 'white']);
console.log("Merged array:", mergedArray);

// Sort the combined array alphabetically
let sortedArray = mergedArray.sort();
console.log("Sorted array:", sortedArray);

// Reverse the sorted array
let reversedArray = sortedArray.reverse();
console.log("Reversed sorted array:", reversedArray);

// Initialize the numbers array
let numbers = [1, 2, 3, 4, 5];

// Add the number 6 to the end using push()
numbers.push(6);
console.log("Array after push:", numbers);

// Remove the first number using shift()
numbers.shift();
console.log("Array after shift:", numbers);

// Use map() to create a new array where each number is multiplied by 2
let multipliedNumbers = numbers.map(number => number * 2);
console.log("Array after map (multiplied by 2):", multipliedNumbers);

// Use reduce() to find the sum of all numbers in the numbers array
let sumOfNumbers = numbers.reduce((sum, number) => sum + number, 0);
console.log("Sum of all numbers:", sumOfNumbers);

// Find the index of the number 4 in the array
let indexOfFour = numbers.indexOf(4);
console.log("Index of number 4:", indexOfFour);

// Filter the array to only include numbers greater than 2
let filteredNumbers = numbers.filter(number => number > 2);
console.log("Filtered array (numbers greater than 2):", filteredNumbers);