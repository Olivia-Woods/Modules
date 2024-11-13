// Variables to store the first number, second number, and the selected operator
let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultDisplayed = false; // Tracks if a result has just been displayed to reset input if needed

// Function to handle number input
function inputNumber(num) {
  // If a result was just displayed, start fresh with the new input
  if (resultDisplayed) {
    firstNumber = num;
    resultDisplayed = false;
  } else {
    // Otherwise, append the number to the current input
    firstNumber += num;
  }
  updateDisplay(firstNumber); // Update the calculator display with the current input
}

// Function to set the operator (+, -, *, /) and prepare for the second number
function setOperator(op) {
  operator = op; // Store the chosen operator
  secondNumber = firstNumber; // Move the current input to secondNumber
  firstNumber = ""; // Reset firstNumber for the next input
}

// Function to perform the calculation based on the selected operator
function calculate() {
  let result;
  const num1 = parseFloat(secondNumber); // Convert secondNumber to a float
  const num2 = parseFloat(firstNumber); // Convert firstNumber to a float

  // Perform the calculation based on the operator
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error"; // Handle division by zero
      break;
    default:
      result = firstNumber; // If no operator, just display the current input
  }

  updateDisplay(result); // Display the result of the calculation
  resultDisplayed = true; // Set flag so next input will reset if needed
}

// Function to reset the calculator to its initial state
function resetCalculator() {
  firstNumber = ""; // Clear first number
  secondNumber = ""; // Clear second number
  operator = ""; // Clear operator
  updateDisplay(0); // Reset the display to 0
}

// Function to update the calculator display
function updateDisplay(value) {
  document.getElementById("display").innerText = value; // Update display element with the provided value
}
