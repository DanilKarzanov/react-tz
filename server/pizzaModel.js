const {Schema, model} = require('mongoose')

const Pizza = new Schema({
    username: {type: String, unique: true, required: true},
    id: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    name: {type: String, required: true},
    types: {type: Array, required: true},
    sizes: {type: Array, required: true},
    price: {type: Number, required: true}
})

module.exports = model('Pizza', Pizza)