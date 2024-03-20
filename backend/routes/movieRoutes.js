const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');


router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', movieController.addMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

router.post("/movie", movieController.addMovie)
router.get("/movies", movieController.getAllMovies)
router.get("/movies/:id", movieController.getMovieById)
router.delete("/movies/:id", movieController.deleteMovie)
router.patch("/movies/:id", movieController.updateMovie)

module.exports = router
