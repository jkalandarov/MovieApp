const express = require('express');
const logger = require('morgan');

require('dotenv').config();

const routes = require('./routes/index');

const app = express();
app.use(logger('api'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// router
app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 404).json({
        message: '404 - No such route exists',
    });
});

// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
        message: '500 - Internal Server Error'
    });
});

module.exports = app;