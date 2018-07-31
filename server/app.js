var express = require('express');
var app = express();
var port = 8082;
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

const mongoURL = './data';


mongoose.Promise = require('bluebird');
mongoose.connect(`${mongoURL}`)
    .then(() => {
        console.log('start');
    }).catch(err => {
        console.error('app starting error: ', err.stack);
        process.exit(1);
    });
    
    var itemRouter = require('./routes/itemRouter');
    
    app.use(express.static('public'));
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use('/items', itemRouter);

app.listen(port, function() {
    console.log('server is running on port: ', port);
})