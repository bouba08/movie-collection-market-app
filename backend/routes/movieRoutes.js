const express = require("express")
const movieController = require("../controllers/movieController")


const router = express.Router()

router.post("/movie", movieController.addMovie)
router.get("/movies", movieController.getAllMovies)
router.get("/movies/:id", movieController.getMovieById)
router.delete("/movies/:id", movieController.deleteMovie)
router.patch("/movies/:id", movieController.updateMovie)

module.exports = router