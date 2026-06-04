const services = require("../data/servicesData");

const getServices = (req, res) => {
  res.json(services);
};

module.exports = { getServices };
