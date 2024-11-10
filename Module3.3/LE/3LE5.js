// Cloning in JavaScript with Object Methods and setTimeout

// Step 1: Define the Car Object
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  // Description Method - Prints Car Details
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

// Call the Description Method 
car.description(); 
// Output: This car is a Porsche 911 from 1964
// Direct call to car.description()

// Step 2: Use setTimeout with car.description
// This will fail because `this` loses context and is undefined in setTimeout
setTimeout(car.description, 200); 
// Output: undefined or error depending on the environment
// Using setTimeout directly with car.description - `this` loses context

// a) Fix the setTimeout call by wrapping car.description in a function
setTimeout(function() {
  car.description(); 
  // Output: This car is a Porsche 911 from 1964
  // Wrapped in an anonymous function - `this` refers to `car`
}, 400);

// OR using an arrow function
setTimeout(() => car.description(), 600); 
// Output: This car is a Porsche 911 from 1964
// Using arrow function - inherits `this` from the outer scope, so `this` refers to `car`

// b) Create a clone of the original car and override the year property
let newCar = { ...car, year: 2024 };

// Call description on newCar to confirm the year has changed
newCar.description(); 
// Output: This car is a Porsche 911 from 2024
// Cloning `car` to newCar and changing `year` - shows 2024 as expected for newCar

// c) Does the delayed description() call use the original values or the new values from b)?
// The previous setTimeout calls will still use the original `car` object properties
// because `setTimeout` was called with `car.description`, which is still bound to the original `car` object.

// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
setTimeout(car.description.bind(car), 800); 
// Output: This car is a Porsche 911 from 1964
// Using .bind to explicitly set `this` to `car` - preserves original values

// e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value
let anotherCar = { ...car, model: "Cayenne" };

// Test to ensure setTimeout still uses the original bound `car`
setTimeout(car.description.bind(car), 1000); 
// Output: This car is a Porsche 911 from 1964
// Testing with anotherCar - still uses original `car` values due to bind