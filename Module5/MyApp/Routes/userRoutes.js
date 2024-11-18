const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Anthony Albanese", country: "AU" },
  { id: 2, name: "Joe Biden", country: "US" },
  { id: 3, name: "Chris Hipkins", country: "NZ" },
  { id: 4, name: "Lee Hsien Loong", country: "SG" },
];

// Route to get ALL users
router.get("/", (req, res) => {
  res.json(users);
});

// Route to get a user by ID
router.get("/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const user = users.find((user) => user.id.toString() === id);
  res.json(user);
});

module.exports = router;
