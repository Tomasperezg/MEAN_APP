const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    userEmail: {
        unique: true,
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
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User