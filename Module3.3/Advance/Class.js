// Basic Class Creation
// Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Mehthod to Greet
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // Method to Celebrate Birthday
    birthday() {
        this.age += 1; 
        // += Take the current value of this.age. Add 1 to it. Assign the new value back to this.age.
    console.log(`Happy Birthday! You are now ${this.age} years old!`);
    }
}

// Create an Instance
const sienna = new Person("Sienna", 18);

// Call Methods
sienna.greet();
sienna.birthday();

