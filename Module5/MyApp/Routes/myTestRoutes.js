// Creating Sub Routes

const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello World! I am making some changes.");
});

router.get("/test2", (req, res) => {
  res.send("Second Test");
});

module.exports = router;
