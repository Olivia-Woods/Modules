// JavaScript Notes on Objects: Methods

// Define methods using function expressions within objects.
const user = {
    name: 'Olivia',
    greet() {
      return `Hello, ${this.name}!`; // Uses 'this' to access the object's property
    }
  };
  console.log(user.greet()); // Output: Hello, Olivia!
  
  // Methods with Context
  // When methods are assigned to variables, they lose their context ('this').
  const user2 = {
    name: 'Pete',
    greet() {
      return `Hello, ${this.name}!`; // 'this' refers to user2
    }
  };
  
  const greet = user2.greet; // 'this' is lost here
  console.log(greet()); // Output: Hello, undefined
  
  // Use bind() to maintain context
  const boundGreet = user2.greet.bind(user2); // Binds 'this' to user2
  console.log(boundGreet()); // Output: Hello, Pete!
  
  // Object Generation in ES6
  // Use concise property notation to create objects.
  const createIndividual = (name, age, city) => {
    return { name, age, city }; // ES6 shorthand for { name: name, age: age, city: city }
  };
  
  const individual3 = createIndividual('Sienna', 28, 'Sydney');
  console.log(individual3); // Output: { name: 'Sienna', age: 28, city: 'Sydney' }