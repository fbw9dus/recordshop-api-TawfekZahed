/** EXTERNAL DEPENDENCIES */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const infoRouter = require('./routes/records')

/** ROUTERS */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

/** INIT */
const app = express();

/** LOGGING */
// app.use(logger('dev'));

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/** STATIC FILES*/

var { DataStore } = require('notarealdb')

/** ROUTES */
app.use('/records', infoRouter);


/** EXPORT PATH */
module.exports = app;
