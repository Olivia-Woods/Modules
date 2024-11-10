// Bind

// The bind method creates a new function that has its this value set to a specified object. 
// Unlike call and apply, it does not immediately execute the function. 
// Instead, it returns a new function that can be called later with the this value and any preset arguments.

const person = {
    name: "Alice",
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  const greetPerson = person.greet.bind(person);
  greetPerson(); // Output: Hello, my name is Alice
  greetPerson()

 // In this example, bind sets the this value of the greet function to the person object, 
 // so when greetPerson is called later, it correctly uses person as its context.