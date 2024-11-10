// 1. What are the results of these expressions?
"" + 1 + 0 // Adding a number to a string results in string concatenation.
"" - 1 + 0 // Subtracting a number from a string will convert the string to a number.
true + false // In JavaScript, true is 1 and false is 0. 
!true // ! is the logical NOT operator.
6 / "3" // Division will convert the string "3" to the number 3.
"2" * "3" // Multiplication will convert both strings to numbers. 
4 + 5 + "px" // The addition is performed from left to right, then 9 is concatenated with the string. 
"$" + 4 + 5 // Result is $45.
"4" - 2 // Subtraction will convert the string "4" to the number 4.
"4px" - 2 // Subtraction will attempt to convert "4px" to a number but fail, resulting in NaN (Not a Number).
" -9 " + 5 // String concatenation results in " -9 " followed by 5.
" -9 " - 5 // Subtraction will convert the string " -9 " to the number -9.
null + 1 // null is converted to 0. 
undefined + 1 // undefined is converted to NaN. NaN + 1 gives NaN.
undefined == null // undefined is equal to null. Result is true.
undefined === null // Equal value and equal type. Result is false.
" \t \n" - 2 // Subtraction will convert the string " \t \n" to 0. 
// " \t \n" == 0 is true in JavaScript. Whitespace-only strings convert to 0.

console.log("" + 1 + 0);          // "10"
console.log("" - 1 + 0);          // -1
console.log(true + false);        // 1
console.log(!true);               // false
console.log(6 / "3");             // 2
console.log("2" * "3");           // 6
console.log(4 + 5 + "px");        // "9px"
console.log("$" + 4 + 5);         // "$45"
console.log("4" - 2);             // 2
console.log("4px" - 2);           // NaN
console.log(" -9 " + 5);          // " -9 5"
console.log(" -9 " - 5);          // -14
console.log(null + 1);            // 1
console.log(undefined + 1);       // NaN
console.log(undefined == null);   // true
console.log(undefined === null);  // false
console.log(" \t \n" - 2);        // -2