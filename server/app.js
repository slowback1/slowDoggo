    var doggoSchema = new mongoose.Schema({
        name: String
    });
    var Doggo = mongoose.model('Doggo', doggoSchema);
    var testDoggo = new Doggo({name: 'testDoggo' });
    console.log(testDoggo.nane);
    
    doggoSchema.methods.speak = function() {
        var greeting = this.name ? "woof name is " + this.name : "I don't have a name";
        console.log(greeting);
    }
    var Doggo = mongoose.model('Doggo', doggoSchema);
    
    var fluffy = new Doggo({name: 'fluffy'});

    
    Doggo.find({name: /^fluff/ }, function(err, doggo) {
        if (err) console.error(err);
        console.log(doggo);
    });