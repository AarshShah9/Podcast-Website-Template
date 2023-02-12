require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // to suppress deprecation warning

const episodeRoutes = require("./routes/episodes");

const app = express();

// middleware
app.use(express.json()); // looks to see if the request has any json data
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/episodes", episodeRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB and now listening for requests!");
    });
  })
  .catch((err) => {
    console.log("Error connecting to DB: ", err);
  });
