// Deconstructing, or destructuring, arrays allows you to extract elements from an array into distinct variables. 
// Destructuring Array
const colors = ['red', 'green', 'blue', 'yellow'];

// Extract the first two colors.
const [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor); 

// Capture the rest of the colors into a new array.
const [first, second, ...restColors] = colors;

console.log(restColors);

// Deconstructing objects allows you to extract properties from an object into individual variables.
// Destructuring Object
const student = {
    name: 'John',
    age: 21,
    course: 'Computer Science',
    year: 2023
};

// Grab the values name and age.
const { name, age } = student;

console.log(name); 
console.log(age);

// Bonus: grab all the rest of the values except year.
const { year, ...restOfStudent } = student;

console.log(restOfStudent);