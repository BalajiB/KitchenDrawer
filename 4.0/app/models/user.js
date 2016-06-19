
var mongoose = require('mongoose');


// var db = require('././config/db');

// mongoose.connect('mongodb://localhost:27017/kido'); 

var Schema = mongoose.Schema;

var userSchema = new Schema({
  title:  String,
  firstName: String,
  lastName: String,
  //location : String,
  phone: String,
  dob: { type: Date, default: Date.now }  
});

module.exports = mongoose.model('User', userSchema);