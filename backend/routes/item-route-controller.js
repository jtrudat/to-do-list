const express = require('express')

const router = express.Router()

const Item = require('../models/item.js')


router.post('/', (req, res)=>{
    const createdItem ={
        title : req.body.title,
        description : req.body.description
    }
    new Item(createdItem)
    .save()
    res.status(201).json(createdItem)
})

router.get('/', (req, res)=>{
    console.log('queried all database docs')
    Item.find()
    .then((results)=>{
        res.json(results)
    })
})

module.exports = router