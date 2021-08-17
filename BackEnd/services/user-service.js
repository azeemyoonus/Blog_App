var User = require('../models/user')
var bcrypt = require('bcrypt')
exports.createUser = (data) => {
    let user = new User(data);
    return new Promise((resolve, reject) => {
        user.save().then((res) => {
            resolve(res)
        }).catch((err) => {
            console.error(err)
            reject(err)
        })
    })

}

exports.userLogin = async (data) => {
    return new Promise(async (resolve, reject) => {
        let response={}
        user = await User.findOne({ email: data.email })
        console.log("user",user);
        if (user) {
            status = await bcrypt.compare(data.password, user.password);
            if (status) {
                response.status=true
                response.user = user;
                resolve(response)
            }
            else{
                response.status=false
                reject(response)
            }

        }

    })
}