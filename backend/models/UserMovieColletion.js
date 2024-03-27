const mongoose = require('mongoose');

const userMovieCollectionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  // Other fields like date added, ratings, etc.
});

module.exports = mongoose.model('UserMovieCollection', userMovieCollectionSchema);
