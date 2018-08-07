var fs = require('fs');

const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');
const Image = require('./app/model/img.model.js');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)
    .then(() => {
        Image.remove(err => {
            if(err) throw err;
            console.log("Removed all documents in 'images' collection.");
            var imageData = fs.readFileSync(__dirname + '/static/assets/images/jsa-header.png');
            
            const image = new Image({
                type: 'image/png',
                data: imageData
            });
            
            image.save()
                .then(img => {
                    console.log('saved an image jsa-header.png to mongodb');
                    
                    Image.findById(img, (err, findOutImage) => {
                        if(err) throw err;
                        try {
                            fs.writeFileSync(__dirname + '/static/assets/tmp/tmp-jsa-header.png', findOutImage.data);
                            console.log('stored an image tmp-jsa-header.png in /static/assets/tmp folder.');
                            console.log('exit');
                            process.exit(0);
                        }catch(e){
                            console.log(e);
                        }
                    });
                }).catch(err => {
                    console.log(err);
                    throw err;
                });
        })
    }).catch(err => {
        console.log('could not connect to mongodb');
        process.exit();
    })