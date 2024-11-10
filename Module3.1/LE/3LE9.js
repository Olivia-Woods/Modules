// 9. Use the following variables to understand how JavaScript stores objects by reference.
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// a) Create a new moreSports variable equal to teamSports.
let moreSports = [...teamSports]; // Using spread operator to create a shallow copy of the array.
moreSports.push('Basketball'); // Add a new sport value to the end of the array.
moreSports.unshift('Soccer'); // Add a new sport value to the beginning of the array.

// Checking Values
console.log('Original teamSports:', teamSports);
console.log('New moreSports:', moreSports); 

// b) Create a new dog2 variable equal to dog1 and give it a new value.
let dog2 = dog1; // dog2 is now equal to 'Bingo'
dog2 = 'Rex'; // Change dog2's value to 'Rex'

// Checking Values
console.log('dog1:', dog1); 
console.log('dog2:', dog2);

// c) Create a new cat2 variable equal to cat1 and change its name property.
let cat2 = { ...cat1 }; // Using spread operator to create a shallow copy of the cat1 object.
cat2.name = 'Whiskers'; // Change the name property of the cat2 object.

// Checking Values
console.log('Original cat1:', cat1);
console.log('New cat2:', cat2);     

// d) Explain why the originals haven't changed
console.log("Why didn't the originals change?");
console.log("teamSports remains the same because moreSports is a separate copy.");
console.log("dog1 remains 'Bingo' because it's a primitive value, and dog2 is now a new string.");
console.log("cat1 remains the same because cat2 is a shallow copy of cat1.");

// e) The spread operator ensures that moreSports and cat2 are independent of the originals.