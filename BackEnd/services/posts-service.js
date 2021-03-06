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

exports.deletePost =(id)=>{
    return new Promise((resolve, reject)=>{
        Post.findByIdAndRemove(id).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}
exports.getPostById=(id)=>{
    return new Promise((resolve, reject)=>{
        Post.findById(id).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}
exports.updatePost=(id, data)=>{
    return new Promise((resolve,reject)=>{
        Post.findByIdAndUpdate(id, data).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}