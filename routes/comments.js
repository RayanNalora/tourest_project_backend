const express = require("express");
const router = express.Router();

const comments = require("../data/comments");

router.get("/:tripId", (req, res) => {
    const tripId = Number(req.params.tripId);
  
    const filtered = comments.filter(
      (c) => Number(c.tripId) === tripId
    );
  
    res.json(filtered);
  });
  

// 🔹 POST new comment
router.post("/", (req, res) => {
  const newComment = {
    id: comments.length + 1,
    tripId: Number(req.body.tripId),
    name: req.body.name,
    text: req.body.text,
  };

  comments.push(newComment);

  res.status(201).json(newComment);
});

module.exports = router;
