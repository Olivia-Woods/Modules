function addNumbers(req, res) {
  const { num1, num2 } = req.query;
  const num1Num = parseInt(num1, 10);
  const num2Num = parseInt(num2, 10);
  const result = num1Num + num2Num;

  // Validate Inputs
  if (Number.isNaN(num1Num) || Number.isNaN(num2Num)) {
    return res.status(400).json({
      error: "The inputs are not correct numbers",
    });
  }

  // Send Result as JSON
  res.json({ result });
}

module.exports = {
  addNumbers,
};
