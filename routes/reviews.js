///require('dotenv').config()
const express = require('express');
const router = express.Router();
const Review = require('../models/reviews')
const UniqueCode = require('../models/UniqueCodes');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SEND_GRID);


router.use(express.json())
router.use(express.urlencoded({extended : false}));


router.post('/reviews', async (req, res)=>{

    try {
        const newReview = new Review({...req.body, date: Date.now()});
        await newReview.save();

        res.redirect(`/`)

    } catch (error) {
        console.log(error)
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

router.post('/contact', async (req, res)=>{
    const msg = {
      to: 'paradymuseless@gmail.com', // Change to your recipient
      from: 'xharccoal@gmail.com', // Change to your verified sender
      subject: `${req.body.name} has sent a contact form`,
      text: `from contact form`,
      html: `<h1>${req.body.name}</h1>
      <h4>${req.body.email}</h4>
      <h4>${req.body.phone}</h4>
      <h5>${req.body.company}</h5>
      <p>${req.body.message}</p>
      <p>preferred contact medium: ${req.body.contactVia}</p>`,
    }
    try {
        await sgMail.send(msg);
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
})

router.post('/question', async (req, res)=>{
    const msg = {
      to: 'paradymuseless@gmail.com', // Change to your recipient
      from: 'xharccoal@gmail.com', // Change to your verified sender
      subject: `${req.body.name} has a question`,
      text: `from contact form`,
      html: `<h1>${req.body.name}</h1>
      <h4>${req.body.email}</h4>
      <h4>${req.body.phone}</h4>
      <p>${req.body.message}</p>`
    }
    try {
        await sgMail.send(msg);
        res.redirect('/store')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;