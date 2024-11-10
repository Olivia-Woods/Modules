// Question 6: 
// (a) Complete the `inigo` object by adding a `lastName` property and including it in the greeting.
// (b) Complete the `getCatchPhrase` method so that if the `person` argument has 6 fingers, it returns his famous catchphrase.
// (c) Update `getCatchPhrase` to use arrow function syntax and a conditional operator.

// Creating objects for Westley and Count Rugen with properties name, lastName, and numFingers.
const westley = { 
    name: 'Westley', 
    lastName: 'Western', 
    numFingers: 5   
};

const rugen = { 
    name: 'Count Rugen', 
    lastName: 'Row', 
    numFingers: 6       
};

// Creating an object for Inigo with greeting and catchphrase methods.
const inigo = { 
    firstName: 'Inigo',
    lastName: 'IOD',

    // Method to greet a person with their name and last name.
    greeting(person) { 
        // Using template literals to create a greeting message.
        const greeting = `Hello ${person.name} ${person.lastName}, my name is ${this.firstName} ${this.lastName}. `;
        // Logging the greeting message combined with the catchphrase.
        console.log(greeting + this.getCatchPhrase(person));
    },

    // Arrow function to determine the catchphrase based on the person's number of fingers.
    getCatchPhrase: (person) => 
        person.numFingers === 6 
            ? 'I have a catchphrase for you!' // Returns this if true.
            : 'Nice to meet you.' // Returns this if false. 
};

// Calling the greeting method on the inigo object, passing in the westley object as the argument.
inigo.greeting(westley); // Output: Hello Westley Western, my name is Inigo IOD. Nice to meet you.
// Calling the greeting method on the inigo object, passing in the rugen object as the argument.
inigo.greeting(rugen);   // Output: Hello Count Rugen Row, my name is Inigo IOD. I have a catchphrase for you!