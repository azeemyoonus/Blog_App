var Post = require("../models/post")

exports.addPost = (data) => {
    let post = new Post(data);
    return new Promise((resolve, reject) => {
        post.save().then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })

}
exports.getAllPosts = () => {
    return new Promise((resolve, reject) => {
        Post.find({}).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}