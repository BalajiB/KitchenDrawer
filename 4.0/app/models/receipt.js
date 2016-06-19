
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LineItemSchema = new Schema({
  Sale : {
    POSIdentity : {
        POSIDType : String,
      POSItemID : String
    },
    ExtendedAmount : String
  },
  Tax : {
    Amount : String,
    Percent : String
  },
  SequenceNumber : Number,
  Category : {
    _id : Schema.Types.ObjectId,
    text : String
  }
});



var ReceiptSchema = new Schema({
  // Transaction : {
    _id : Schema.Types.ObjectId,
    BusinessUnit : {
      UnitID : String
    },
    WorkstationID :  String,
    SequenceNumber : Number,
    POSLogDateTime : {
      NodeValue : Date,
      TypeCode : String
    },
    OperatorID : String,
    RetailTransaction: {
      TransactionStatus : String,
      LineItem : [LineItemSchema],
      Total : String
    }
  // }
});


module.exports = mongoose.model('Receipt', ReceiptSchema);
