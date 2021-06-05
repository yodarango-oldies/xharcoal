const mongoose = require('mongoose');

const orderSpecsSchema = new mongoose.Schema({
    name            : String,
    phone           : String,
    email           : String,
    colorOne        : String,
    colorTwo        : String,
    colorThree      : String,
    domainOne       : String,
    domainTwo       : String,
    domainThree     : String,
    date            : Date
})

const OrderSpecs = mongoose.model('OrderSpecs', orderSpecsSchema);

module.exports = OrderSpecs;