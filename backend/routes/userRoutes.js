const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const userMovieController = require('../controllers/UserMovieController');

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUserById);
router.delete('/users/:id', userController.deleteUserById);

router.post('/users/:userId/movies', userMovieController.addMovieToCollection);
router.get('/users/:userId/movies', userMovieController.getMoviesInUserCollection);
router.delete('/users/:userId/movies/:movieId', userMovieController.removeMovieFromCollection);

module.exports = router;
