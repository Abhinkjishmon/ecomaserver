//import db.js
const db = require('./db')

//register
const register =(uname,email,pswd)=>{

    //check email is in mongoDB - db.users.findOne()
    db.User.findOne({
        email
    }).then((result)=>{
        console.log(result);
    })
}
//export
module.exports = {
    register 
}
