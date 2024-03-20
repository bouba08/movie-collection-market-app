const mongoose = require('mongoose');

const schema = mongoose.Schema

const movieSchema = new schema({
  title: {
    type: String,
    require: true,
  },
  type: {
      type: String,
      require: true,
  } 

  
});

module.exports = mongoose.model('Movie', movieSchema);

