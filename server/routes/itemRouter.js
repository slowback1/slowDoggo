var express = require('express');
var app = express();
var itemRouter = express.Router();

var Item = require('../models/Item');

itemRouter.route('/add/post').post(function(req,res) {
    var item = new Item(req.body);
    item.save().then(item => {
        res.json('Item added successfully');
    }).catch(err => {
        res.status(400).send('unable to save to database');
    });
});

itemRouter.route('/').get(function(req, res) {
    Item.find(function(err, itms) {
        err ? console.log(err) : res.json(itms);
    });
});

itemRouter.route('/edit/:id').get(function(req,res) {
    var id = req.params.id;
    Item.findById(id, function(err, item) {
        res.json(item);
    });
});

itemRouter.route('/update/:id').post(function(req,res) {
    Item.findById(req.params.id, function(err, item) {
        if(!item) {
            return next(new Error('could not load document'));
        }
        else {
            item.item = req.body.item;
            item.save().then(item => {
                res.json('update complete');
            }).catch(err => {
                res.status(400).send('unable to update the database');
            });
        }
    });
});
itemRouter.route('/delete/:id').get(function(req, res) {
    Item.findByIdAndRemove({_id: req.params.id}, function(err, item) {
        if(err) res.json(err);
        else res.json('successfully removed');
    });
});

module.exports = itemRouter;