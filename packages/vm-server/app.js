var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const serveStatic = require('serve-static');
var foodTrucksRouter = require('./routes/foodtrucks');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', serveStatic('./public/food-truck-scheduling'));
app.use('/foodtrucks', foodTrucksRouter);

module.exports = app;
