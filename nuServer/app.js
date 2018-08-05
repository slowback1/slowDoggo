const express = require('express');
var mongoose = require('mongoose');
const port = 8082;
mongoose.connect("mongodb://localhost:27017/data");

const app = express();


var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});
var doggoImgSchema = new mongoose.Schema({
    name: String
})
var DoggoImg = mongoose.model('DoggoImg', doggoImgSchema);

app.get('/', (req, res) => res.send('e'));

app.get('/doggo', (req,res) =>  {
    DoggoImg.find({}, function(err, doggoImg) {
        res.send(doggoImg).json();
    });    
}

app.post('/doggo', (req,res) => {
    console.log(req);
})

app.listen(port, function() {
    console.log("server is running on ", port);
});