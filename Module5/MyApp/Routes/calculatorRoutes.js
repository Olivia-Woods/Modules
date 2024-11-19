const express = require("express");
const router = express.Router();
const { addNumbers } = require("./controllers/calculatorController"); // Import addNumbers Function

// Use addNumbers directly as the Route Handler
router.get("/add", addNumbers);

module.exports = router;
