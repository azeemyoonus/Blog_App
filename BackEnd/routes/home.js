var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var postController = require('../controllers/postController')
// router.get('/', function (req, res, next) {
//     res.send("show all posts of all users")

// });

router.post('/login', userController.userLogin);

router.post('/signUp', userController.createUser)

router.post('/addPost', postController.addPost)

router.get('/getAllPost', postController.getAllPost)

router.delete('/deletePost/:id', postController.deletePost);

router.get('/post/:id', postController.getPostById)

router.put('/editPost/:id', postController.updatePost)

module.exports = router;