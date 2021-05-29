const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: String,
    avatar: String,
    stars: String,
    comment: String
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;