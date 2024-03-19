const Movie = require('./models/Movie');

//Get movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single movie by ID
const getMovieById = async (req, res) => {
  
};

//Add 
const addMovie = async (req, res) => {
  
};

//Update
const updateMovie = async (req, res) => {
  
};


//Delete 
const deleteMovie = async (req, res) => {
  
};


module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
}