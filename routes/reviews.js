require('dotenv').config()

const express      = require('express');
const router       = express.Router();
const Review       = require('../models/reviews')
const UniqueCode   = require('../models/UniqueCodes');
const NewOrder     = require('../models/Orders');
const OrderSpecs   = require('../models/OrderSpecs')
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

router.post('/purchase-confirmation', async (req,res)=>{

    const orderInfo = {
        TimeCreated    : req.body.create_time,
        OrderId        : req.body.id,
        OrderStatus    : req.body.status,
        PayerEmail     : req.body.payer.email_address,
        PayerId        : req.body.payer.payer_id,
        PayerName      : req.body.payer.name.given_name + ' ' + req.body.payer.name.surname,
        ItemDescription : req.body.purchase_units[0].description,
        OrderLink      : req.body.links[0].href

    }
    const msg = {
        to: orderInfo.PayerEmail, // Change to your recipient
        from: 'xharccoal@gmail.com', // Change to your verified sender
        subject: `thank you for your purchase`,
        text: `from contact form`,
        html: `
        <h4>Created at: ${orderInfo.TimeCreated}</h4>
        <h4>Order Id: ${orderInfo.OrderId}</h4>
        <h4>Order Status: ${orderInfo.OrderStatus}</h4>
        <h4>Payer Email: ${orderInfo.PayerEmail}</h4>
        <h4>Payer Id: ${orderInfo.PayerId}</h4>
        <h4>Payer Name: ${orderInfo.PayerName}</h4>
        <h4>Item Description: ${orderInfo.ItemDescription}</h4>
        <a href = '${orderInfo.OrderLink}'>see your order</a>
        `
      }
      const newOrderCreated = new NewOrder(orderInfo)
      try {
          await sgMail.send(msg);
          await newOrderCreated.save()
          res.status(200)
          console.log(req.body)
      } catch (error) {
          console.log(error)
      }
})

router.post('/new-order', async (req, res)=>{

    const specsInfo = {
        name         : req.body.name,
        phone        : req.body.phone,
        email        : req.body.email,
        colorOne     : req.body.colorOne,
        colorTwo     : req.body.colorTwo,
        colorThree   : req.body.colorThree,
        domainOne    : req.body.domainOne,
        domainTwo    : req.body.domainTwo,
        domainThree  : req.body.domainThree
    }
    const msg = {

        to: 'paradymuseless@gmail.com', // Change to your recipient
        from: 'xharccoal@gmail.com', // Change to your verified sender
        subject: `thank you for your purchase`,
        text: `from contact form`,
        html: `
        <h4>Name: ${specsInfo.name}</h4>
        <h4>Phone: ${specsInfo.phone}</h4>
        <h4>Email: ${specsInfo.email}</h4>
        <h4>Main Color: ${specsInfo.colorOne}</h4>
        <h4>Secondary Color: ${specsInfo.colorTwo}</h4>
        <h4>Third Color: ${specsInfo.colorThree}</h4>
        <h4>First Domain: ${specsInfo.domainOne}</h4>
        <h4>${specsInfo.domainTwo}</h4>
        <h4>${specsInfo.domainThree}</h4>
        `
      }

      const newOrderSpecs = new OrderSpecs({...req.body});
    try {
        await newOrderSpecs.save();

        await sgMail.send(msg);
        res.redirect('/store/checkout');
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;