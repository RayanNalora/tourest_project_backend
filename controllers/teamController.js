const teamMembers = require("../data/teamData");

const getTeamMembers = (req, res) => {
  res.json(teamMembers);
};

module.exports = { getTeamMembers };
