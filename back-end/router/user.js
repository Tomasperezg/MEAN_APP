const express = require('express')
const router = new express.Router()
const User = require('../model/user.js')

// new user enroll
router.post('/enroll', async (req, res) => {

    const user = new User(req.body)

   try{
        await user.save()
        res.status(200).send(user)
   }catch(e){
        res.status(400).send(e)
   }
})

// get all users
router.get('/enroll', async (req, res) => {

    try{
        const users = await User.find({})
        res.send(users)
    }catch(e){
        res.status(500).send()
    }
})

// find single user
router.get('/enroll/:id', async (req, res) =>{
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send()
    }
})

// delete user
router.delete('/enroll/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const user = await User.findByIdAndDelete(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router