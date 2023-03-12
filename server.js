require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const { CLIENT_URL, PORT, MONGO_URI, cookie } = require('./config');
const cookieSession = require('cookie-session');
const expressSession = require('express-session')
const mongoose = require('mongoose')
const server = require('http').createServer(app);
const passport = require('passport');

app.use(
    cors({
      origin: CLIENT_URL,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    })
  );

  
app.set('trust proxy', 1);
app.use(expressSession(cookie));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/index.route'));

mongoose.connect(MONGO_URI, (err) => {
    !err && console.log('connected to database');
    err && console.log(err.message);
  });

server.listen(PORT, () => console.log('Server is running' + PORT));