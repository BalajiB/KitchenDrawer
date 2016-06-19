
// grab the nerd model we just created
var User = require('./models/user');
var Receipt = require('./models/receipt');
// var Product = require('./models/product');
var Category = require('./models/category');

module.exports = function(app) {

  app.get('/api/users', function(req, res) {
    User.find(function(err, users) {

      if (err)
      res.send(err);

      res.json(users); // return all nerds in JSON format
    });

  });

  app.get('/api/receipts', function(req, res) {
    Receipt.find(function(err, receipts) {

      if (err)
      res.send(err);

      res.json(receipts); // return all nerds in JSON format
    });});

    app.get('/api/categories', function(req, res) {
      Category.find(function(err, categories) {

        if (err)
        res.send(err);

        res.json(categories); // return all nerds in JSON format
      });});

      app.post('/api/categories/add', function(req, res) {
        var category = new Category({ text: req.body.text});
        category.save(function(error, category){
          console.log(error);
          res.json(category);
        });

        //res.json(true); // return all nerds in JSON format
      });



      app.post('/api/products/addCategory', function(req, res) {
        console.log(req.body.receiptId);
        //
        Receipt.update({"_id" : req.body.receiptId ,  'RetailTransaction.LineItem.Sale.POSIdentity.POSItemID': req.body.productId},
        {'$set': {
            'RetailTransaction.LineItem.$.Category' :  {_id : req.body.categoryId, text: req.body.categoryText}
        }},{
          upsert : true
        }, function(err, updatedC) {
          console.log(updatedC);
        });
        // Receipt.findById(req.body.receiptId, function(err, receipt) {
        //   // console.log(receipt.RetailTransaction);
        //
        //   if (err)
        //   res.send(err);
        //
        //   var product = receipt.RetailTransaction.LineItem.filter(function(item){
        //     if(item.Sale.POSIdentity.POSItemID == req.body.productId){
        //       item.category = {"id" : req.body.categoryId, "text" : req.body.categoryText}
        //       receipt.RetailTransaction.LineItem[item] = item;
        //     }
        //   });
        //
        //   // console.log(product);
        //   receipt.markModified('RetailTransaction.LineItem.category');
        //   console.log(JSON.stringify(receipt));
        //
        //   receipt.save(function(error, receiptSaved){
        //
        //               var product1 = receiptSaved.RetailTransaction.LineItem.filter(function(item){
        //                 return item.Sale.POSIdentity.POSItemID == req.body.productId
        //               });
        //     if(error){
        //       res.json(false); // return all nerds in JSON format
        //     }
        //     else{
        //       res.json(true);
        //     }
        //   });
        //
        // });
      });

        app.get('/api/products/:receiptId', function(req, res) {
          // console.log(req.params.receiptId);
          Receipt.findById(req.params.receiptId, function(err, receipt) {
            // console.log(receipt.RetailTransaction);

            if (err)
            res.send(err);
            var products = [];
            for (var i = 0; i < receipt.RetailTransaction.LineItem.length; i++) {
              //     array[i]
              //   }
              // for (var lineItem in receipt.RetailTransaction.LineItem) {
              var currentItem = receipt.RetailTransaction.LineItem[i];
              if(currentItem['Sale']){
                // console.log(currentItem);
                products.push(currentItem);
              }
            }

            res.json(products); // return all nerds in JSON format
          });});


          app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
          });

        };
