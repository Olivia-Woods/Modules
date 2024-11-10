// Prototype

// Constructor Function (Car) 
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Method 
Car.prototype.getDetails = function() {
return `${this.year} ${this.make} ${this.model}`;
};

// Cars 
const myCar = new Car ('MG', 'MG3', '2024');
const anotherCar = new Car ('Mercedes', 'AMG', '2024');


// Log 
console.log(myCar.getDetails());
console.log(anotherCar.getDetails());


// Use for arrays, objects, etc. 