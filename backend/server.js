//DEPENDENCIES - ENSURE NODEMON/EXPRESS/MONGOOSE INSTALLED
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

//MIDDLEWARE FOR ALL INCOMING TRAFFIC GOES THROUGH APP.USE PARAMETERS
app.use(bodyParser.json())
app.use(cors())

//FORWARDING ALL TRAFFIC TO THE ROUTER CONTROLLER
const router = require('./routes/item-route-controller')
app.use('/todos', router)

//Errors
app.use('/*', (req, res)=>{
    res.send('<h1><b>sorry item not found</b></h1><a href="http://localhost:3000"><button>redirect to listings</button></a>')
    console.log('not routed, no item')
} )

//ATLAS DATABASE CONNECTION AND SERVER PORT
mongoose.connect('mongodb+srv://trudat:passwordpassword@cluster0.5rud2jy.mongodb.net/todolist?retryWrites=true&w=majority')
.then(()=>{
    app.listen(4001)
    console.log('mongodb connected on atlas and server listening on 4001')
})