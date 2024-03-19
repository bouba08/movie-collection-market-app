const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  plot: {
    type: String,
    required: true
  },
  cast: [{
    type: String,
    required: true
  }],
  rating: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  awards: {
    type: [String]
  },
  boxOffice: {
    type: Number
  },
});

module.exports = mongoose.model('Movie', movieSchema);
