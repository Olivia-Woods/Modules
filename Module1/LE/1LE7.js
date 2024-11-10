// Using the Functions from Exercise 4

// Write a Specification Comment for Each Function
// 	1.	Description: A brief summary of what the function does.
//	2.	Parameters: Detailed information about each parameter, including its type and purpose.
//	3.	Return Value: Information about what the function returns, including its type.
//	4.	Exceptions/Errors: Any errors or exceptions that the function might throw (optional, depending on the language and function complexity).

function add(a, b) {
    return a + b;
}
// Adds two numbers. 
// Paramater (0) a - The first number to add.
// Paramater (1) b - The second number to add.
// Return Value - The sum of the two numbers. 

function subtract(a, b) {
    return a - b;
}
// Subtracts the second number from the first number. 
// Paramater (0) a - The number to be subtracted from.
// Paramater (1) b - The number to subtract.
// Return Value - The difference of the two numbers.

function multiply(a, b) {
    return a * b;
}
// Multiplies two numbers. 
// Paramater (0) a - The first number to multiply.
// Paramater (1) b - The second number to multiply.
// Return Value - The product of the two numbers.

function divide(a, b) {
    return a / b;
}
// Divides the first number by the second number.
// Paramater (0) a - The dividend.
// Paramater (1) b - The divisor.
// Return Value - The product of the two numbers.
// Throws error if the divisor is zero. 


// Output Results 
console.log("addition: ", add(15, 5));            // 20 
console.log("subtraction: ", subtract(35, 5));    // 30
console.log("multiplication: ", multiply(10, 4)); // 40
console.log("division: ", divide(100, 2));        // 50
