//DEPENDENCIES
const express = require('express')
const router = express.Router()
const Item = require('../models/item.js')
const PORT = process.env.PORT

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

//READ SINGLE ITEM
router.get('/:id', (req, res)=>{
    Item.findById(req.params.id)
        .then((singleItem)=>{
        res.json(singleItem)
    })
    .catch(err =>{
        res.send(`<h1><b>sorry item not found</b></h1><a href="http://localhost:3000"><button>⬅️redirect back to listings</button></a>`)
        console.log('no good server route')
    } )
})

//UPDATE
router.put('/:id', (req, res)=>{
    Item.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedItem)=>{
        console.log('item updated', updatedItem)
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

//Errors
router.get('/*', (req, res)=>{
    res.send(`<h1><b>sorry item not found</b></h1><a href="http://localhost:${PORT}"><button>⬅️redirect to listings</button></a>`)
    console.log('no good server route')
} )

//EXPORT
module.exports = router