const express = require('express');
const router = express.Router();
const Review = require('../models/reviews')

router.use(express.json())
router.use(express.urlencoded({extended : false}));


router.post('/reviews', async (req, res)=>{

    try {
        const newReview = new Review({...req.body});
        const x = await newReview.save();

        res.send(x);

    } catch (error) {
        console.log(erro)
    }
});

router.get('/reviews', async (req, res)=>{

    try {
        const reviews = await Review.find({});
        res.send(reviews)
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = router;