const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ mssg: "Hello World" });
});

// Listen for requests
app.listen(4000, () => {
  console.log("Now listening for requests!");
});

// const cors = require("cors");
// const mongoose = require("mongoose");

// require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

// // const exercisesRouter = require("./routes/exercises");
// // const usersRouter = require("./routes/users");

// // app.use("/users", usersRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });
