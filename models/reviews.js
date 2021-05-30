const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true},
    avatar: {
        type: String,
        required: true},
    stars: {
        type: String,
        required: true},
    comment: {
        type: String,
        required: true},
    date: {
        type: Date,
        required: true}
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;