let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultDisplayed = false;

function inputNumber(num) {
  if (resultDisplayed) {
    firstNumber = num;
    resultDisplayed = false;
  } else {
    firstNumber += num;
  }
  updateDisplay(firstNumber);
}

function setOperator(op) {
  operator = op;
  secondNumber = firstNumber;
  firstNumber = "";
}

function calculate() {
  let result;
  const num1 = parseFloat(secondNumber);
  const num2 = parseFloat(firstNumber);

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
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;
    default:
      result = firstNumber;
  }

  updateDisplay(result);
  resultDisplayed = true;
}

function resetCalculator() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  updateDisplay(0);
}

function updateDisplay(value) {
  document.getElementById("display").innerText = value;
}
