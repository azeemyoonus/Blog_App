const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title: String,
    category: String,
    content: String,
    type: String,
    time: { type: Date, default: Date.now },
},
    { collection: "posts" })

module.exports = mongoose.model('posts', Post)