const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const destinationsRoutes = require("./routes/destinations");
const tripsRoutes = require("./routes/trips");

app.use("/destinations", destinationsRoutes);
app.use("/trips", tripsRoutes);

const commentsRoutes = require("./routes/comments");

app.use("/api/comments", commentsRoutes);
app.listen(5000, () => {
  console.log("Server running on 5000");
});
