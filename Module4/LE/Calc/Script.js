// Variables to Store FIRST Number, SECOND Number, and the Selected Operator
let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultDisplayed = false; // Tracks if a result has just been displayed to reset input if needed.

// Function to Handle Number Input
function inputNumber(num) {
  // If a result was just displayed, start fresh with the new input.
  if (resultDisplayed) {
    firstNumber = num;
    resultDisplayed = false;
  } else {
    // Otherwise, append the number to the current input.
    firstNumber += num;
  }
  updateDisplay(firstNumber); // Update the calculator display with the current input.
}

// Function to SET the Operator (+, -, *, /) and prepare for the SECOND number!
function setOperator(op) {
  operator = op; // Store the chosen operator
  secondNumber = firstNumber; // Move the current input to secondNumber.
  firstNumber = ""; // Reset firstNumber for the next input.
}

// Function to Perform the Calculation
function calculate() {
  let result;
  const num1 = parseFloat(secondNumber); // Convert secondNumber to a float. Number not STRING.
  const num2 = parseFloat(firstNumber); // Convert firstNumber to a float.

  // Perform Calculation based on the Operator
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
      result = num2 !== 0 ? num1 / num2 : "Error"; // Handle Division by Zero
      break;
    default:
      result = firstNumber; // If NO operator - display the current input.
  }

  updateDisplay(result); // Display the RESULT
  resultDisplayed = true; // Set flag so next input will reset if needed. Boolean.
}

// Function to RESET the calculator to its INITIAL STATE
function resetCalculator() {
  firstNumber = ""; // Clear first number
  secondNumber = ""; // Clear second number
  operator = ""; // Clear operator
  updateDisplay(0); // Reset the display to 0
}

// Function to Update the Calculator Display
function updateDisplay(value) {
  document.getElementById("display").innerText = value; // Update display element with the provided value
}
