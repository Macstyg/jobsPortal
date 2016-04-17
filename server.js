'use strict';
var express    = require('express'),
    mongoose   = require('mongoose'),
    morgan     = require('morgan'),
    config     = require('./config'),
    path       = require('path'),
    app        = express(),
    apiCtrl    = require('./controllers/apiCtrl')(app, express);

mongoose
  .connect(config.database)
  .connection.on('open', () => {
    console.log('Connected to DB');
  });
  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected');
  });

app
  .use(morgan('dev'))
  .use(express.static('public'))
  .use('/api', apiCtrl)
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
  })

app.listen(config.port);
console.log(`Server running on port ${config.port}`);
