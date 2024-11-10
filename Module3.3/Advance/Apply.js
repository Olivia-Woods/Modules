// The apply method is similar to call, but it takes an array of arguments instead of listing them individually.

// Example 1: Changing the context of a greeting function
const person1 = {
  name: "Alice",
  greet: function(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
  }
};

const person2 = {
  name: "Bob"
};

// Using apply to invoke greet in the context of person2
person1.greet.apply(person2, ["Hi", "!"]); // Output: Hi, my name is Bob!
person1.greet.apply(person1, ["Howdy", "!!!"]);
 // The reason you need to use person1.greet.apply rather than person2.greet.apply is because the greet function is only defined in person1.

// In this example, person1.greet.apply(person2, ["Hi", "!"]) invokes the greet function with 
// person2 as the this value and ["Hi", "!"] as the array of arguments for the greeting and punctuation parameters.


// Example 2: Changing the context of a multiplication function with a different factor
const calculator = {
  factor: 2,
  multiply: function(a, b) {
    console.log(`The product of ${a} and ${b}, multiplied by ${this.factor}, is ${a * b * this.factor}`);
  }
};

const newContext = { factor: 3 };

// Here, apply lets us use multiply with newContext, which has a different factor property
calculator.multiply.apply(newContext, [4, 5]); // Output: The product of 4 and 5, multiplied by 3, is 60
calculator.multiply.apply(newContext, [8,10]);