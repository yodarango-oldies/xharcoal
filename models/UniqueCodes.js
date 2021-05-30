const mongoose = require('mongoose');

const uniqueCodeSchema = new mongoose.Schema({
    code: {
        type: String,
       required: true
    },
    created: {
        type: Date,
       required: true
    },
})

const UniqueCode = mongoose.model('UniqueCode', uniqueCodeSchema);

module.exports = UniqueCode;