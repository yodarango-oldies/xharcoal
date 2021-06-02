const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    TimeCreated    : String,
    OrderId        : String,
    OrderStatus    : String,
    PayerEmail     : String,
    PayerId        : String,
    PayerName      : String,
    ItemDescription : String,
    OrderLink      : String
})

const NewOrder = mongoose.model('Order', orderSchema);

module.exports = NewOrder