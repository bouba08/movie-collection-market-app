const Movie = require("../models/Movie");

// Get all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      todos:movies
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get single movie by ID
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Add a new movie
const addMovie = async (req, res) => {
  try {
    const { title } = req.body
    const { type } = req.body

    console.log(title)
    console.log(type)
    const newMovie = Movie({
        title,
        type
    });

    const saveMovie = await newMovie.save();
    res.status(200 ).json(saveMovie);
  }
    catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a movie by ID
const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500)
    .json({ error: 'Internal server error' });
  }
};

// Delete a movie by ID
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie
};