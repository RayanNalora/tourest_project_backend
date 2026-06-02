const express = require("express"); // 👈 هذا ناقص عندك
const router = express.Router();

const { getTrips, getTripById } = require("../controllers/tripsController");

router.get("/", getTrips);
router.get("/:id", getTripById);

module.exports = router;
