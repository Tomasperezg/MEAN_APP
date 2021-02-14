const mongoose = require('mongoose')


const itemSchema = new mongoose.Schema({
    Item_name: {
        type: String,
        required: true,
        trim: true,
    },
    ImageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    itemId: {
        type: Number,
        required: true,
        unique: true
    },
    details:[{
        bed_num: {
            type: Number,
            required: false
        },
        bath_num: {
            type: Number,
            required: false
        }
    }],
    gallery: [] 
   
}, {
    timestamps: true
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item