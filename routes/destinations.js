const express = require("express");
const router = express.Router();

const {
  getDestinations,
  addDestination,
  deleteDestination
} = require("../controllers/destinationsController");

router.get("/", getDestinations);
router.post("/", addDestination);
router.delete("/:id", deleteDestination);

module.exports = router;
