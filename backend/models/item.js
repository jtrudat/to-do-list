//DEPENDENCIES
const mongoose = require('mongoose')
const { Schema } = mongoose

//SCHEMA PARAMETERS FOR EACH NEW MODEL ITEM
const itemSchema = new Schema({
    todoItem: String,
    date : String,
    });

//EXPORT AND MODEL COLLECTION WILL BE KNOWN AS items IN MONGODB
const Item = mongoose.model('Item', itemSchema)
module.exports = Item