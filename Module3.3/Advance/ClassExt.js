// Sub Class 
// Define Animal Class
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method to Make Sound
    makeSound() {
        console.log("BANG")
    }
}

// Define the Dog Class Extending Animal 
class Dog extends Animal {
    // Override makeSound
    makeSound() {
        console.log("Bark Bark");
    }

    // Add New Method
    fetch() {
        console.log(`${this.name} is fetching the ball. Good boy!`);
    }
}

// Create and Instance of Dog Class 
const buddy = new Dog("Buddy");

// Call Make Sound and Fetch
buddy.makeSound();
buddy.fetch();


