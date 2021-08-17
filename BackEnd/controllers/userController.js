var userServices = require('../services/user-service')
var bcrypt = require('bcrypt')
var postServices= require('../services/posts-service')
exports.createUser = async (req, res) => {
    let user = req.body;
    user.password = await bcrypt.hash(user.password, 10)

    try {
        let data = {
            "response": await userServices.createUser(user)
        }
        res.send(data)
    }
    catch (e) {
        res.status(404).send({ "error": e });
    }

}

exports.userLogin = async (req, res) => {
    let loginData = req.body;
    await userServices.userLogin(loginData).then((response) => {
        let data = {
            "response": response
        }
        res.send(data)
    }).catch((err) => {
        res.status(404).send({ "error": err });
    })



}
exports.addPost = async (req, res) => {   
    try {
        let data = {
            "response": await postServices.addPost(req.body)
        }
        res.send(data)
    }
    catch(e){
        res.status(404).send({ "error": e });
    }
}
