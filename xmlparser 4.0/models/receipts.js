var BusinessUnitSchema = new Schema({
UnitID : String
});

var POSLogDateTimeAttributeSchema = new Schema({
TypeCode : String
});

var POSLogDateTimeSchema = new Schema({
NodeValue : Date,
Attribute : POSLogDateTimeAttributeSchema
});

var RetailTransactionAttributeSchema = new Schema({
TransactionStatus : String
});

var POSIdentityAttributeSchema = new Schema({
POSIDType : String
});


var POSIdentitySchema = new Schema({
Attribute : POSIdentityAttributeSchema,
POSItemID : String
});


var SaleSchema = new Schema({
POSIdentity : POSIdentitySchema,
ExtendedAmount : String
});


var TaxSchema = new Schema({
Amount : String,
Percent : String
});

var LineItemSchema = new Schema({
Sale : SaleSchema,
Tax : TaxSchema
SequenceNumber : Number
});


var RetailTransactionSchema = new Schema({
Attribute : RetailTransactionAttributeSchema,
LineItem : [LineItemSchema],
Total : String
});


var TransactionSchema = new Schema({
BusinessUnit : BusinessUnitSchema,
WorkstationID :  String,
SequenceNumber : Number,
POSLogDateTime : POSLogDateTimeSchema,,
OperatorID : String,
RetailTransaction: RetailTransactionSchema
});

var ReceiptSchema = new Schema({
Transaction : TransactionSchema
});
