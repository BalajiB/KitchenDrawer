var fs = require('fs');
var util = require('util');
var path = require('path');

var xml2js = require('xml2js');

var jsonQuery = require('json-query');
//
// var mongoose = require('mongoose');
//
// mongoose.connect('mongodb://localhost:27017/kido');


var xsd = require('libxml-xsd');
var schemaPath = __dirname + "/POSLogOriginal.xsd";
var logDirPath = __dirname + "/LogFiles/";
var logArchiveDirPath = __dirname + "/LogFilesArchive/"+ Date.now();
// var Receipt = require('./models/receipt');
var xpath = require('xpath')
, dom = require('xmldom').DOMParser;
var select = xpath.useNamespaces({"plog": "http://www.nrf-arts.org/IXRetail/namespace/"});

fs.mkdirSync(logArchiveDirPath);

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/kido';

var insertReceipt = function(db, transactionItem,  callback) {
  console.log("inserting receipt into database");

  // db.collection('receipts').insertOne({});
  db.collection('receipts').insertOne(transactionItem, function(err, result) {
    if(err){
      console.log(err);
    }
    else{
      console.log("receipt has been inserted successfully");
    }
    // console.log(result);
    callback();
  });
};

xsd.parseFile(schemaPath, function(error, schema){

  fs.readdir(logDirPath, function(err, items) {

    for (var i=0; i<items.length; i++) {

      // console.log(items);
      var filePath = logDirPath + "/" + items[i];
      schema.validateFile(filePath, function(err, validationErrors){

        if(validationErrors){
          console.log("processing file" + filePath + "failed.");
          console.log("Validation errors : " + validationErrors.join("\n"));
        }
        else{

          console.log("parsing file '" + filePath + "' has been successfull");

          var parser = xml2js.Parser({explicitArray : false, charkey:'NodeValue', attrkey:'Attribute', mergeAttrs : true});

          fs.readFile(filePath, "utf-8",  function(err, data) {

            var doc = new dom().parseFromString(data.toString())

            var nodes = select('//plog:Transaction', doc);

            parser.parseString(nodes[0], function (err1, result) {

              var transaction = result.Transaction;

              MongoClient.connect(url, function(err, db) {

                insertReceipt(db, transaction,  function() {
                  db.close();
                });
              });
              // //
              // var newFileName = path.basename(filePath);
              // var newFilePath = logArchiveDirPath + "/" + newFileName;
              //
              // fs.rename(filePath, newFilePath , function(error){
              //   console.log("File has been archived successfully.");
              //   console.log("Source : " + filePath);
              //   console.log("Target : " + newFilePath);
              //
              // });

            });
          });

        }
      });
    }
  });

});
