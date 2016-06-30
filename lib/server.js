const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const engine = require('ejs-mate')
const cookieParser = require('cookie-parser')

const userRoutes = require('../routes/user');
const tweetsRoutes = require('../routes/tweet');

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser('my secret'))

app.use('/users', userRoutes);
app.use('/tweets', tweetsRoutes);


module.exports = app;
