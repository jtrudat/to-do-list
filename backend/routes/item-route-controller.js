//DEPENDENCIES
const express = require('express')
const router = express.Router()
const Item = require('../models/item.js')

//CREATE
router.post('/', (req, res)=>{
    const createdItem ={
        todoItem : req.body.todoItem,
        date : req.body.date
    }
    new Item(createdItem)
    .save()
    res.status(201).json(createdItem)
    console.log(createdItem)
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
router.put('/:id', (req, res)=>{
    Item.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedItem)=>{
        console.log('item updated')
        res.json(updatedItem)
    })
})

//DELETE
router.delete('/:id', (req, res)=>{
    Item.findByIdAndDelete(req.params.id)
    .then((deletedItem)=>{
        console.log('item successfully deleted')
        res.json(deletedItem)
    })
})

//EXPORT
module.exports = router