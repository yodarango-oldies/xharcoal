const express = require('express');
const router = express.Router();
const Review = require('../models/reviews')
const UniqueCode = require('../models/UniqueCodes');

router.use(express.json())
router.use(express.urlencoded({extended : false}));


router.post('/reviews', async (req, res)=>{

    try {
        const newReview = new Review({...req.body, date: Date.now()});
        await newReview.save();

        res.redirect('/');

    } catch (error) {
        console.log(erro)
    }
});

router.post('/unique-code', async (req, res)=>{

    try {
        const newCode = new UniqueCode({...req.body, created: Date.now()});
        await newCode.save();

        res.send(newCode);

    } catch (error) {
        console.log(error)
    }
});

router.get('/reviews', async (req, res)=>{

    try {
        const reviews = await Review.find({}).sort({date: -1}).exec();
        res.send(reviews)
    } catch (error) {
        console.log(error)
    }
    
})
router.get('/unique-code', async (req, res)=>{

    try {
        const uniqueCode = await UniqueCode.find({});
        res.send(uniqueCode)
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = router;