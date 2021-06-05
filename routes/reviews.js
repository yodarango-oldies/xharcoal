//require('dotenv').config()

const express      = require('express');
const router       = express.Router();
const Review       = require('../models/reviews')
const UniqueCode   = require('../models/UniqueCodes');
const NewOrder     = require('../models/Orders');
const OrderSpecs   = require('../models/OrderSpecs')
const sgMail       = require('@sendgrid/mail');

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
      to: 'xharccoal@gmail.com', // Change to your recipient
      from: 'xharccoal@gmail.com', // Change to your verified sender
      subject: `${req.body.name} has sent a contact form`,
      text: `from contact form`,
      html: `
      <img src = "http://cdn.mcauto-images-production.sendgrid.net/24432b2dc9ca8556/015b9b89-48fb-45bb-b74e-5428c7ebe06f/10000x10000.png" style="width: 350px; display: block; margin: 2rem auto;">

      <h1 style= "font: 600 2rem Arial; color: purple; text-align: center; width: 90%; max-width: 500px; margin: auto; line-height: 2em;">has sent you a contact form.</h1>
      
      <p style= "font: 400 1.2rem Arial; color: #242424; text-align: center; width: 90%; max-width: 500px; margin: auto; line-height: 2em; ">Here is their information:</p>
      <h1>name: ${req.body.name}</h1>
      <h4>email: ${req.body.email}</h4>
      <h4>phone number: ${req.body.phone}</h4>
      <h5>comapny: ${req.body.company}</h5>
      <p>message: ${req.body.message}</p>
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
      to: 'xharccoal@gmail.com', // Change to your recipient
      from: 'xharccoal@gmail.com', // Change to your verified sender
      subject: `${req.body.name} has a question`,
      text: `from contact form`,
      html: `
      <img src = "http://cdn.mcauto-images-production.sendgrid.net/24432b2dc9ca8556/015b9b89-48fb-45bb-b74e-5428c7ebe06f/10000x10000.png" style="width: 350px; display: block; margin: 2rem auto;">

      <h1 style= "font: 600 2rem Arial; color: purple; text-align: center; width: 90%; max-width: 500px; margin: auto; line-height: 2em;">${req.body.name} has a question </h1>
      
      <p style= "font: 400 1.2rem Arial; color: #242424; text-align: center; width: 90%; max-width: 500px; margin: auto; line-height: 2em; ">Here is their question:</p>
      <p>${req.body.message}</p>
      <br><br>
      <p style= "font: 400 1.2rem Arial; color: #242424; text-align: center; width: 90%; max-width: 500px; margin: auto; line-height: 2em; ">Respomd to ${req.body.email} or ${req.body.phone}</p>
      `
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
        text: `new purchase email`,
        html: `

        <img src = "http://cdn.mcauto-images-production.sendgrid.net/24432b2dc9ca8556/015b9b89-48fb-45bb-b74e-5428c7ebe06f/10000x10000.png" style="width: 350px; display: block; margin: 2rem auto;">

        <h1 style= "font: 600 2rem Arial; color: purple; text-align: center; width: 90%; max-width: 500px; margin: auto; line-height: 2em;">Thank you, ${orderInfo.PayerName} for your purchase!</h1>
        
        <p style= "font: 400 1.2rem Arial; color: #242424; text-align: center; width: 90%; max-width: 500px; margin: auto; line-height: 2em; ">You will be receiving an email from Xharcoal soon once your blog is set up! 😊</p>
        
        <h1 style= "font: 600 1.8rem Arial; color: #242424; text-align: center; width: 90%; max-width: 500px; margin: auto; line-height: 2em;"> <br><br> So, what is next?</h1>
          
         <p style= "font: 400 1.2rem Arial; color: #242424; text-align: center; width: 90%; max-width: 500px; margin: auto; line-height: 2em;" >Literally just wait! No extra payments are due at the moment. The price for hosting, $25 USD, is not due until after a year of service. You will be sent an invoice to ${orderInfo.PayerEmail} after every year you have owened your blog, therefore make sure that you notify Xharcoal should you change your email address. </p>
        
         <p style= "font: 400 1.2rem Arial; color: #3399ff; text-align: center; width: 90%; max-width: 500px; margin: auto; line-height: 2em;" > <br>if you have any questions in the mean time do not doubt to contact Xharcoal!</p>
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
        domainThree  : req.body.domainThree,
        date         : Date.now()
    }
    const msg = {

        to: 'xharccoal@gmail.com', // Change to your recipient
        from: 'xharccoal@gmail.com', // Change to your verified sender
        subject: `${req.body.name} has made a purchase`,
        text: `from contact form`,
        html: 
        `
        <img src = "http://cdn.mcauto-images-production.sendgrid.net/24432b2dc9ca8556/015b9b89-48fb-45bb-b74e-5428c7ebe06f/10000x10000.png" style="width: 350px; display: block; margin: 2rem auto;">

        <h1 style= "font: 600 2rem Arial; color: purple; text-align: center; width: 90%; max-width: 500px; margin: auto; line-height: 2em;">Great, you have a new order</h1>
        
        <p style= "font: 400 1.2rem Arial; color: #242424; text-align: center; width: 90%; max-width: 500px; margin: auto; line-height: 2em; ">Here are their blog preferences: </p>
        <h4>Name: ${specsInfo.name}</h4>
        <h4>Phone: ${specsInfo.phone}</h4>
        <h4>Email: ${specsInfo.email}</h4>
        <h4>Main Color: ${specsInfo.colorOne}</h4>
        <h4>Secondary Color: ${specsInfo.colorTwo}</h4>
        <h4>Third Color: ${specsInfo.colorThree}</h4>
        <h4>First Domain: ${specsInfo.domainOne}</h4>
        <h4>Scond Domain: ${specsInfo.domainTwo}</h4>
        <h4>Third Domain: ${specsInfo.domainThree}</h4>
        `
      }

      const newOrderSpecs = new OrderSpecs(specsInfo);
      console.log(req.body)

    try {

        await newOrderSpecs.save();
        await sgMail.send(msg);
        res.redirect('/store/checkout');
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;