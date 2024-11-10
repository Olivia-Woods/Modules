// Ternary Operator Example: Conditionally Appending Text to a String
// This example demonstrates using the ternary operator '? :' to replace an if...else statement for concise conditional logic.

// Ternary Operator '? :'
// Syntax: condition ? expression_if_true : expression_if_false;
// The ternary operator evaluates a condition:
// - If true, it executes the expression immediately after '?'
// - If false, it executes the expression after ':'

// Example 1: Original Code
let a = 2, b = 3; // Step 1: Initialize variables a and b with values 2 and 3.
let result1 = `${a} + ${b} is `; // Step 2: Create a string showing the sum of a and b.
result1 += (a + b < 10) ? 'less than 10' : 'greater than 10'; // Step 3: Use the ternary operator to check if the sum is less than 10 and append the appropriate message.
console.log(result1); // Step 4: Output result1, which will show "2 + 3 is less than 10".

// Example 2: Rewrite 1
let c = 2, d = 12; // Step 1: Initialize variables c and d with values 2 and 12.
let result2 = `${c} + ${d} is `; // Step 2: Create a string showing the sum of c and d.
result2 += (c + d < 10) ? 'less than 10' : 'greater than 10'; // Step 3: Use the ternary operator to append 'less than 10' if true; otherwise, append 'greater than 10'.
console.log(result2); // Step 4: Output result2, which will show "2 + 12 is greater than 10".

// Example 3: Rewrite 2
let e = 1, f = 2; // Step 1: Initialize variables e and f with values 1 and 2.
let result3 = `${e} + ${f} is `; // Step 2: Create a string showing the sum of e and f.
result3 += (e + f < 10) ? 'less than 10' : 'greater than 10'; // Step 3: Use the ternary operator to add the correct message based on the sum.
console.log(result3); // Step 4: Output result3, which will show "1 + 2 is less than 10".

// Example 4: Rewrite 3 (Shorthand)
let g = 2, h = 3; // Step 1: Initialize variables g and h with values 2 and 3.
let result4 = `${g} + ${h} is ` + ((g + h < 10) ? 'less than 10' : 'greater than 10'); // Step 2: Use the ternary operator inline to check if g + h < 10 and append the appropriate message directly.
console.log(result4); // Step 3: Output result4, which will show "2 + 3 is less than 10".

// Additional Note on `+=` Operator:
// The `+=` operator is used to update a variable's value by adding (for numbers) or concatenating (for strings) another value to it.
// For example, `result += 'text';` appends 'text' to the current value of `result`.