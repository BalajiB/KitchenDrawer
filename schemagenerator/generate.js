var fs = require('fs');

var mongoose = require('mongoose');
var generator = require('mongoose-gen');

// load json
//var data = fs.readFileSync('buJson.json', {encoding: 'utf8'});
var json = 
{
  "Root": {
  "type": "object",
  "properties": {
    "BusinessUnit": {
      "type": "object",
      "properties": {
        "UnitID": {
          "type": "string"
        }
      },
      "required": [
        "UnitID"
      ]
    },
    "WorkstationID": {
      "type": "string"
    },
    "SequenceNumber": {
      "type": "string"
    },
    "POSLogDateTime": {
      "type": "object",
      "properties": {
        "_": {
          "type": "string"
        },
        "attribute": {
          "type": "object",
          "properties": {
            "TypeCode": {
              "type": "string"
            }
          },
          "required": [
            "TypeCode"
          ]
        }
      },
      "required": [
        "_",
        "attribute"
      ]
    },
    "OperatorID": {
      "type": "string"
    },
    "RetailTransaction": {
      "type": "object",
      "properties": {
        "attribute": {
          "type": "object",
          "properties": {
            "TransactionStatus": {
              "type": "string"
            }
          },
          "required": [
            "TransactionStatus"
          ]
        },
        "LineItem": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "Tax": {
                "type": "object",
                "properties": {
                  "Amount": {
                    "type": "string"
                  },
                  "Percent": {
                    "type": "string"
                  }
                },
                "required": [
                  "Amount",
                  "Percent"
                ]
              },
              "SequenceNumber": {
                "type": "string"
              }
            },
            "required": [
              "Tax",
              "SequenceNumber"
            ]
          }
        },
        "Total": {
          "type": "string"
        }
      },
      "required": [
        "attribute",
        "LineItem",
        "Total"
      ]
    }
  },
  "required": [
    "BusinessUnit",
    "WorkstationID",
    "SequenceNumber",
    "POSLogDateTime",
    "OperatorID",
    "RetailTransaction"
  ]
}};


// Generate the Schema object.
var schema = new mongoose.Schema(generator.convert(json));


console.log(generator.convert(json));