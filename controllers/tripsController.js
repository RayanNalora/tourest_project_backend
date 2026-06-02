const trips = require("../data/tripsData");

// كل الرحلات
const getTrips = (req, res) => {
  res.json(trips);
};

// رحلة واحدة حسب ID
const getTripById = (req, res) => {
  const trip = trips.find(t => t.id === Number(req.params.id));

  if (!trip) {
    return res.status(404).json({ message: "Trip not found" });
  }

  res.json(trip);
};

module.exports = { getTrips, getTripById };
