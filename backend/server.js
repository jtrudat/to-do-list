//DEPENDENCIES - ENSURE NODEMON/EXPRESS/MONGOOSE INSTALLED
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

//MIDDLEWARE
const router = require('./routes/item-route-controller')

//ALL INCOMING TRAFFIC GOES THROUGH APP.USE PARAMETERS
app.use(bodyParser.json())

//FORWARDING ALL TRAFFIC TO THE ROUTER CONTROLLER
app.use('/todos', router)


//ATLAS DATABASE CONNECTION AND SERVER PORT
mongoose.connect('mongodb+srv://trudat:passwordpassword@cluster0.5rud2jy.mongodb.net/todolist?retryWrites=true&w=majority')
.then(()=>{
    app.listen(4001)
    console.log('mongodb connected on atlas and server listening on 4001')
})