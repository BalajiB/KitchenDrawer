
var mongoose = require('mongoose');


// var db = require('././config/db');

// mongoose.connect('mongodb://localhost:27017/kido');

var Schema = mongoose.Schema;

var categorySchema = new Schema({
  // _id : Schema.Types.ObjectId,
  text:  String
});

module.exports = mongoose.model('Category', categorySchema);
