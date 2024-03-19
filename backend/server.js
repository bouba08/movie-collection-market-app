const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors())
// Middleware
app.use(express.json());

// Routes
app.use('/api/movies', require('./api/movieRoutes'));

// Start server

mongoose.connect(PORT).then(()=>{
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});}).catch((error)=>{
  console.log(error)
})
  