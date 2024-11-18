const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
  console.log(req.query);
  const { num1, num2 } = req.query;
  const num1Num = parseInt(num1, 10);
  const num2Num = parseInt(num2, 10);
  res.send(`${num1Num + num2Num}`);
});

module.exports = router;
