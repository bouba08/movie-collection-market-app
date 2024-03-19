const express = require('express');
const dotenv = require('dotenv'); // Import dotenv module
const app = express();
const PORT = process.env.PORT || 5000;

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.json());


const movieRoutes = require('./api/movieRoutes');// Pass TMDB API key to movie routes
movieRoutes.setApiKey(process.env.TMDB_API_KEY); // Pass TMDB API key to movie routes

app.use('/api/movies', movieRoutes);// Routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);// Start server
});
