//DEPENDENCIES
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const router = require('./routes/item-route-controller')

app.use(bodyParser.json())
app.use('/todos', router)

mongoose.connect('mongodb+srv://trudat:passwordpassword@cluster0.5rud2jy.mongodb.net/todolist?retryWrites=true&w=majority')
.then(()=>{
    app.listen(4001)
    console.log('mongodb connected on atlas and server listening on 4001')
})