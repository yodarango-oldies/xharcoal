require('dotenv').config()
const express = require('express');
const app = express();

//routers
const reviewsRouter = require('./routes/reviews');

//load DB
require('./db/db')

app.use('', reviewsRouter);

app.listen(`${process.env.PORT}`)