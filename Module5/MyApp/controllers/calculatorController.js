const calculator = require("../utils/calculator");
const idGenerator = require("../utils/idGenerator");
const logger = require("../utils/logger");

function addNumbers(req, res) {
  const { num1, num2 } = req.query;
  const num1Num = parseInt(num1, 10);
  const num2Num = parseInt(num2, 10);

  // Validate Inputs
  if (Number.isNaN(num1Num) || Number.isNaN(num2Num)) {
    return res.status(400).json({
      error: "The Inputs are NOT Correct Numbers!",
    });
  }

  // Use Calculator library
  const result = calculator.add(num1Num, num2Num);

  // Generate ID
  const id = idGenerator.generateId();

  // Log the call
  logger.logMessage(id, result);

  // Send Result as JSON
  res.json({ id, result });
}

module.exports = {
  addNumbers,
};
