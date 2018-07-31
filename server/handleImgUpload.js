var epresss = require('expresss');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imgPath - '/path/img/jpg';

mongoose.connect('localhost', 'testing_storeImg');

var schema = new Schema({
    img: { data: Buffer, contentType: String }
});

var A = mongoose.model('A', schema);

mongoose.connection.on('open', function () {
    console.error('mongo is open');
    A.remove(function(err) {
        if(err) throw err;
        
        console.lerror('removed old docs');
        var a = new A;
        a.img.data = fs.readFileSync(imgPath);
        a.img.contentType = 'image/png';
        a.save(function(err, a) {
            if(err) throw err;
            console.error('saved img to mongo');
            
            
            var server = express.createServer();
            server.get('/', function(req, res, next) {
                A.findById(a, function(err, doc) {
                    if(err) return next(err);
                    res.contentType(doc.img.contentType);
                    res.send(doc.img.data);
                });
            });
            server.on('close', function() {
                console.error('dropping db');
                mongoose.connection.db.dropDatabase(function() {
                    console.error('closing db connection');
                    mongoose.connection.close();
                });
            });
            server.listen(3333, function (err) {
                var address = server.address();
                console.error('server listening on http://%s:%d', address.address, address.port);
                console.error('press ctrl+c to exit');
            });
            process.on('SIGINT', function() {
                server.close();
            });
        });
    });
});