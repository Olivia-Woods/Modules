const express = require("express");
const router = express.Router();
const friends = require("../models/friends"); // Path

// Route 1: Get ALL Friends
router.get("/", (req, res) => {
  res.json(friends);
});

// Route 2: Filter Friends by Gender or Starting Letter
router.get("/filter", (req, res) => {
  const { gender, letter } = req.query;
  let matchingFriends = [...friends];

  if (gender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender === gender
    );
  }
  if (letter) {
    matchingFriends = matchingFriends.filter((friend) =>
      friend.name.startsWith(letter)
    );
  }

  matchingFriends.length > 0
    ? res.json(matchingFriends)
    : res.status(404).json({ error: "No Friends Matching Criteria" });
});

// Route 3: Get Friend by ID
router.get("/:id", (req, res) => {
  const friendId = parseInt(req.params.id);
  const friend = friends.find((f) => f.id === friendId);

  friend
    ? res.json(friend)
    : res.status(404).json({ error: "Friend Not Found" });
});

// Route 4: Update A Friend by ID
router.put("/:id", (req, res) => {
  const friendId = parseInt(req.params.id);
  const updatedFriend = req.body;
  const friendIndex = friends.findIndex((f) => f.id === friendId);

  if (friendIndex !== -1) {
    friends[friendIndex] = { ...friends[friendIndex], ...updatedFriend };
    res.json(friends[friendIndex]);
  } else {
    res.status(404).json({ error: "Friend Not Found" });
  }
});

// Route 5: Get Specific Headers Info
router.get("/info", (req, res) => {
  const {
    "user-agent": userAgent,
    "content-type": contentType,
    accept,
  } = req.headers;
  res.json({ userAgent, contentType, accept });
});

module.exports = router;
