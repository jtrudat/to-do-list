//Dependencies
const express = require('express');
const mongoose = require('mongoose')
const cors = require("cors")


//Configuration
require('dotenv').config()
const app = express();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

//Initialize middleware
app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

//Routes
app.get('/', (req, res) => res.send("Hello from server"))
const router = require('./routes/item-route-controller')
app.use('/todos', router);


//Errors
app.use('/*', (req, res)=>{
    res.send('<h1><b>sorry item not found</b></h1><a href="http://localhost:3000"><button>redirect to listings</button></a>')
    console.log('not routed, no item')
} )


// setting up port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});