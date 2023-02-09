//import mongoose in db.jd file
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

//Using mongoose define a connection string
mongoose.connect('mongodb://localhost:27017/meanecom',()=>{
    console.log('MongoDB connected successfully !!!!!!!!');
})

//create model for the project
//collection -users
const User = mongoose.model('User',{
    username:String,
    email:String,
    password:String
})

const Product = mongoose.model('Product',{
        id: Number,
        title: String,
        price: Number,
        description: String,
        category: String,
        image: String,
        rating: {
          rate: Number,
          count: Number
        }
})

//export model
module.exports = { 
    User,
    Product
}