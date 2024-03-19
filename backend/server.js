require("dotenv").config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use("/api/movies", require("./routes/movieRoutes"));

// Start server

mongoose.connect(process.env.PORT)
  .then(() => {
    app.listen(4000, () => {
      console.log(`Server is running on port 4000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
