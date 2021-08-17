var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
// router.get('/', function (req, res, next) {
//     res.send("show all posts of all users")

// });

router.post('/login', userController.userLogin);

router.post('/signUp', userController.createUser)

router.post('/addPost', userController.addPost)

router.get('/getAllPost', userController.getAllPost)

module.exports = router;