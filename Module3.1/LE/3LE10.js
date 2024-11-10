// 10. Constructor function to create a new Person object.
function Person(name, age) {
    this.name = name;  // Assign the name to the Person object.
    this.age = age;    // Assign the age to the Person object.
    this.human = true; // A property to indicate that the object is a human.
}

// a) Create a new person using the constructor function.
let person1 = new Person('Olivia', 26);

// b) Create a second person with different name and age values.
let person2 = new Person('Sienna', 18);

// c) Print out the properties of each person object to the console.
console.log('Person 1:', person1); 
console.log('Person 2:', person2); 

// d) Rewrite the constructor function as a class called PersonClass.
class PersonClass {
    constructor(name, age) {
        this.name = name;  
        this.age = age;   
        this.human = true; 
    }

    // e) Add a canDrive method that returns true if the person is old enough to drive.
    canDrive() {
        return this.age >= 16;
    }
}

// Create a third person using the class.
let person3 = new PersonClass('Lana', 12);

// Print the properties of the third person object to the console.
console.log('Person 3:', person3);

// Check if each person can drive.
console.log(`${person1.name} can drive: ${person1.age >= 16}`); 
console.log(`${person2.name} can drive: ${person2.age >= 16}`); 
console.log(`${person3.name} can drive: ${person3.canDrive()}`); 