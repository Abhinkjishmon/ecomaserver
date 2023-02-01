//import db.js
const db = require('./db')

//register
const register = (uname, email, pswd) => {
    console.log('inside register function in data service');

    //check email is in mongoDB - db.users.findOne()
    return db.User.findOne({
        email
    }).then((result) => {
        console.log(result);
        if (result) {
            return {
                statusCode: 401,
                message: 'Email already registered'
            }
        }
        else {
            //to add new user
            const newUser = new db.User({
                username: uname,
                email: email,
                password: pswd
            })
            //to save new user in mongodb use save()
            newUser.save()
            return {
                statusCode: 200,
                message:'Registration successfull.....'
            }
        }
    })
}
//export
module.exports = {
    register
}
