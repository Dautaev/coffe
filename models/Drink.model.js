const mongoose = require('mongoose')

const drinkSchema = mongoose.Schema({
    name: String,
    price: Number,
    instock: Boolean,
    presenceOfСaffeine: Boolean,
    volyme: Number,
    description: String
})
const Drink = mongoose.model('Drink', drinkeSchema)
module.exports = Drink