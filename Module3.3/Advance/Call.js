// Call

// The call method invokes a function immediately and allows you to 
// specify the this value and pass arguments individually.

const person1 = {
    name: "Alice",
    greet: function(greeting) {
      console.log(`${greeting}, my name is ${this.name}`);
    }
  };
  
  const person2 = {
    name: "Bob"
  };
  
  // Using call to invoke greet in the context of person2
  person1.greet.call(person2, "Hello"); // Output: Hello, my name is Bob

  // In this example, person1.greet.call(person2, "Hello") invokes the greet function with person2 
  // as the this value and “Hello” as the argument for the greeting parameter.