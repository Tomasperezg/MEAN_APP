const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    userEmail: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email invalid') 
             }
        }
    }
})


module.exports = User