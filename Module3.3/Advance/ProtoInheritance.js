// Prototype Inheritance Example

// Step 1: Define the Animal prototype
function Animal(name, species) {
    // Constructor function for the Animal object
    this.name = name; // Assign the name property
    this.species = species; // Assign the species property
}

// Adding a method to the Animal prototype
Animal.prototype.speak = function() {
    // This method outputs a greeting
    console.log(`${this.name} says: Hello!`);
};

// Step 2: Create an instance of Animal
const lion = new Animal('Leo', 'Lion'); // Create a new Animal instance
lion.speak();  // Output: Leo says: Hello!

// Step 3: Define the Dog subclass
function Dog(name, breed) {
    // Call the Animal constructor to initialize name and species
    Animal.call(this, name, 'Dog'); // Inherit properties from Animal
    this.breed = breed; // Add a new property for breed
}

// Set Dog prototype to an object created from Animal prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Set the constructor property

// Adding a method specific to Dog
Dog.prototype.bark = function() {
    // This method outputs a barking sound
    console.log(`${this.name} barks: Woof! Woof!`);
};

// Step 4: Create an instance of Dog
const buddy = new Dog('Buddy', 'Golden Retriever'); // Create a new Dog instance
buddy.speak(); // Output: Buddy says: Hello! (inherited from Animal)
buddy.bark();  // Output: Buddy barks: Woof! Woof! (specific to Dog)

// Summary of Prototype Inheritance
// - Prototype inheritance allows objects to share properties and methods efficiently.
// - Constructors and prototype methods can create complex hierarchies and behaviors, 
// enabling developers to create rich applications.