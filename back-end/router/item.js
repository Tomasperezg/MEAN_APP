const express = require('express')
const router = new express.Router()
const Item = require('../model/item')

// Need CRUD commands
// add a new Item
router.post('/item', async (req, res) => {
    const item = new Item(req.body)

    try{
        await item.save()
        res.send(item)

    }catch(e){
        res.status(400).send(e)
    }
})

// find single item
router.get('/item/:id', async (req, res) => {
    const _id = req.params.id

    try{
        const item = await Item.findById(_id)
        if(!item){
            return res.status(404).send()
        }
        res.send(item)
    }catch(e){
        res.status(404).send()
    }
})

// find all items
router.get('/item', async (req, res) => {
    try{
        const items = await Item.find({})
        res.send(items)
    }catch(e){
        res.status(500).send()
    }
})

// delete item
router.delete('/item/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const item = await Item.findByIdAndDelete(_id)
        if(!item){
            return res.status(404).send()
        }
        res.send(item)
    }catch(e){
        res.status(500).send()
    }
})

// update item
router.patch('/item/:id', async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowUpdates = ['Item_name', 'ImageUrl', 'description', 'itemId']
    const isvalidUpdate = updates.every((update) => allowUpdates.includes(update))

    if(!isvalidUpdate){
        return res.status(400).send({"error": "invalid update"})
    }

    try{
        const item = await Item.findById(_id)
        updates.forEach((update) => item[update] = req.body[update])
        await item.save()

        if(!item){
            return res.status(404).send()
        }
        res.send(item)
    }catch(e){
        res.status(400).send(e)
    }



})

module.exports = router