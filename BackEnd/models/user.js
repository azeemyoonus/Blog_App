const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    email: String,
    password: String,
   
},
    { collection: "users" })

module.exports = mongoose.model('users', User)