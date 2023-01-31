//import express 
const express = require('express')
//import cors
const cors = require('cors')

//create server app using express
const server = express()

//use cors to define origin
server.use(cors({
    origin:'http://localhost:4200'
}))

//to parse json data
server.use(express.json())

//set up port for server app
server.listen(3000,()=>{
    console.log('Server started at 3000');
})
//ecom front end request resolving

//register api call resolving
server.post('/register',(req,res)=>{
    console.log('Inside register function');
    console.log(req.body);
    res.send('register request recieved')
})
