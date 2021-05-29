//require('dotenv').config()
const express = require('express');
const app = express();

//routers
const reviewsRouter = require('./routes/reviews');

//load DB
require('./db/db')

app.use('', reviewsRouter);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));
}

app.get('/*', function(req,res) {
    res.sendFile(`${__dirname}/frontend/build/index.html`);
});

app.listen(`${process.env.PORT}`)