//DEPENDENCIES - ENSURE NODEMON/EXPRESS/MONGOOSE INSTALLED
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const path = require('path')

//Configuration - PORTS and Server
require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

// FOR FRONTEND DEPLOYMENT ONLY Have Node serve the files for the built React app
    app.use(express.static(path.resolve(__dirname, './frontend/todo/build')))
    

//MIDDLEWARE FOR ALL INCOMING TRAFFIC GOES THROUGH APP.USE PARAMETERS
app.use(bodyParser.json())
app.use(cors())

//FORWARDING ALL TRAFFIC TO THE ROUTER CONTROLLER
const router = require('./routes/item-route-controller')
app.use('/todos', router)

//Errors
app.use('/*', (req, res)=>{
    res.send(`<h1><b>sorry item not found</b></h1><a href="http://localhost:${PORT}/todos"><button>⬅️redirect to listings</button></a>`)
    console.log('not routed, no item')
} )

//BACKEND DATABASE CONNECTION AND PORT LISTENING
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    app.listen(PORT)
    console.log(`mongodb connected on atlas and server listening on ${PORT}`)
})