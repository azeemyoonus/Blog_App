var postServices = require('../services/posts-service')

exports.addPost = async (req, res) => {
    console.log(req.body)
    try {
        let data = {
            "response": await postServices.addPost(req.body)
        }
        res.send(data)
    }
    catch (e) {
        res.status(404).send({ "error": e });
    }
}
exports.getAllPost = async (req, res) => {
    try {
        let data = {
            "response": await postServices.getAllPosts()
        }
        res.send(data);
    }
    catch (e) {
        res.status(404).send({ "error": e });
    }
}

exports.deletePost = async (req, res) => {
    console.log(req.params.id);
    try {
        let data = {
            "response": await postServices.deletePost(req.params.id)
        }
        res.send(data);
    }
    catch (e) {
        res.status(404).send({ "error": e });
    }
}

exports.getPostById = async (req, res) => {
    try {
        let data = {
            "response": await postServices.getPostById(req.params.id)
        }
        res.send(data)
    }
    catch (e) {
        res.status(404).send({ "error": e });
    }
}
exports.updatePost = async (req, res) => {
    console.log(req.params.id,req.body)
    try {
        let data = {
            "response": await postServices.updatePost(req.params.id,req.body)
        }
        res.send(data)
    }
    catch (e) {
        res.status(404).send({ "error": e });
    }
}