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

//login
const login =(uname,pswd)=>{
    console.log('Inside login function body');
    //check uname,pswd in mongodb
    return db.User.findOne({
        //check db.js
        username:uname,
        password:pswd
    }).then(
        (result)=>{
            if(result){
                return {
                    statusCode:200,
                    message:'Login successfull...'
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'Invalid Username / Password'
                }
            }
        }
    )
}

//products
const allProducts = ()=>{
  return db.Product.find().then(
    (result)=>{
        if(result){
            return{
                statusCode: 200,
                products: result
            }
        }
        else{
            return{
                statusCode: 400,
                message: "No data is present"
            }
        }
    }
  )
}


//export
module.exports = {
    register,
    login,
    allProducts
}
