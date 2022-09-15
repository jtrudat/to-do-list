//DEPENDENCIES
const express = require('express')
const router = express.Router()
const Item = require('../models/item.js')

//CREATE
router.post('/', (req, res)=>{
    const createdItem ={
        title : req.body.title,
        description : req.body.description
    }
    new Item(createdItem)
    .save()
    res.status(201).json(createdItem)
})

//READ
router.get('/', (req, res)=>{
    console.log('queried all database docs')
    Item.find()
    .then((results)=>{
        res.json(results)
    })
})

//UPDATE

//DELETE


//EXPORT
module.exports = router