const UserMovieCollection = require('../models/UserMovieCollection');

// Add a movie to a user's collection
const addMovieToCollection = async (req, res) => {
  try {
    const { userId, movieId } = req.body;
    const newUserMovieCollection = new UserMovieCollection({ user: userId, movie: movieId });
    await newUserMovieCollection.save();
    res.status(201).json(newUserMovieCollection);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add movie to collection' });
  }
};

// Get all movies in a user's collection
const getMoviesInUserCollection = async (req, res) => {
  try {
    const movies = await UserMovieCollection.find({ user: req.params.userId }).populate('movie');
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user movie collection' });
  }
};

// Remove a movie from a user's collection
const removeMovieFromCollection = async (req, res) => {
  try {
    const deletedMovie = await UserMovieCollection.findOneAndDelete({ user: req.params.userId, movie: req.params.movieId });
    if (!deletedMovie) {
      return res.status(404).json({ error: 'Movie not found in user collection' });
    }
    res.status(200).json({ message: 'Movie removed from user collection' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove movie from collection' });
  }
};

module.exports = {
  addMovieToCollection,
  getMoviesInUserCollection,
  removeMovieFromCollection
};
