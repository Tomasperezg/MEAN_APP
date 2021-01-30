const mongoose = require('mongoose')


const Item = mongoose.model('Item', {
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
    }
})

module.exports = Item