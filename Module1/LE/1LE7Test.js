// Write 3 Unit Tests for Each Function (Include Both Expected and Non-Typical Test Values (Such as Zero or Negative Numbers).

// Unit Tests 
// Function to Simulate Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
      throw new Error("Cannot Divide by Zero");
  }
  return a / b;
}

// Function to Run Tests
function runTests() {

// Tests for Addition Function
  // Adding Two Positive Numbers
  // Purpose: This test checks that the add function correctly adds two positive numbers.
  if (add(4, 6) === 10) {
    console.log('Test Passed: Adds two positive numbers!');
  } else {
    console.log('Test Failed: Adds two positive numbers!');
  }

  // Adding A Positive and A Negative Number 
  // Purpose: This test checks that the add function correctly adds a positive number and a negative number.
  if (add(8, -2) === 6) {
    console.log('Test Passed: Adds a positive and a negative number!');
  } else {
    console.log('Test Failed: Adds a positive and a negative number!');
  }

  // Adding Two Negative Numbers
  // Purpose: This test checks that the add function correctly adds two negative numbers.
  if (add(-2, -4) === -6) {
    console.log('Test Passed: Adds two negative numbers!');
  } else {
    console.log('Test Failed: Adds two negative numbers!');
  }

// Tests for Subtract Function
  // Subtracting Two Positive Numbers
  // Purpose: This test checks that the subtract function correctly subtracts two positive numbers.
  if (subtract(35, 5) === 30) {
    console.log('Test Passed: Subtracts two positive numbers!');
  } else {
    console.log('Test Failed: Subtracts two positive numbers!');
  }

  // Subtracting a Negative Number
  // Purpose: This test checks that the subtract function correctly subtracts a negative number (effectively adding).
  if (subtract(10, -5) === 15) {
    console.log('Test Passed: Subtracts a negative number!');
  } else {
    console.log('Test Failed: Subtracts a negative number!');
  }

  // Subtracting Zero
  // Purpose: This test checks that the subtract function correctly handles subtraction of zero.
  if (subtract(20, 0) === 20) {
    console.log('Test Passed: Subtracts zero!');
  } else {
    console.log('Test Failed: Subtracts zero!');
  }

// Tests for Multiply Function
  // Multiplying Two Positive Numbers
  // Purpose: This test checks that the multiply function correctly multiplies two positive numbers.
  if (multiply(10, 4) === 40) {
    console.log('Test Passed: Multiplies two positive numbers!');
  } else {
    console.log('Test Failed: Multiplies two positive numbers!');
  }

  // Multiplying by Zero
  // Purpose: This test checks that the multiply function returns zero when multiplied by zero.
  if (multiply(7, 0) === 0) {
    console.log('Test Passed: Multiplies by zero!');
  } else {
    console.log('Test Failed: Multiplies by zero!');
  }

  // Multiplying Two Negative Numbers
  // Purpose: This test checks that the multiply function correctly multiplies two negative numbers.
  if (multiply(-3, -5) === 15) {
    console.log('Test Passed: Multiplies two negative numbers!');
  } else {
    console.log('Test Failed: Multiplies two negative numbers!');
  }

// Tests for Divide Function
  // Dividing Two Positive Numbers
  // Purpose: This test checks that the divide function correctly divides two positive numbers.
  if (divide(100, 2) === 50) {
    console.log('Test Passed: Divides two positive numbers!');
  } else {
    console.log('Test Failed: Divides two positive numbers!');
  }

  // Dividing by a Negative Number
  // Purpose: This test checks that the divide function correctly divides by a negative number.
  if (divide(10, -2) === -5) {
    console.log('Test Passed: Divides by a negative number!');
  } else {
    console.log('Test Failed: Divides by a negative number!');
  }

  // Division by Zero
  // Purpose: This test checks that the divide function throws an error when attempting to divide by zero.
  try {
    divide(10, 0);
    console.log('Test Failed: Should throw an error when dividing by zero!');
  } catch (error) {
    console.log('Test Passed: Throws error when dividing by zero!');
  }
}

// Run Tests
runTests();