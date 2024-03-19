const express = require("express")
const movieController = require("../controllers/movieController")


const router = express.Router()

router.post("/movie", movieController.createMovie)
router.get("/movies", movieController.getMovie)
router.get("/movies/:id", movieController.getMovie)
router.delete("/movies/:id", movieController.deleteMovie)
router.patch("/movies/:id", movieController.editMovie)

module.exports = router