const mongoose = require('mongoose')
const uniqid = require('uniqid')


const productSchema = new mongoose.Schema({
    id: {type: String,default: () => uniqid()},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    quantity: {type: Number, required: true},
    rating: {type: Number, required: true},
    date: {type: Date, default: Date.now}


})

module.exports = mongoose.model('Product', productSchema)