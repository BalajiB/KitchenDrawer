angular.module('receiptS', []).factory('ReceiptService', ['$http', function($http) {

    return {
        get : function() {
           return $http.get('/api/receipts');
//        return [
// { "purchaseDate" : "12/12/2015", "product" : "Choc", "quantity" : "12", "price" : "$45"}

// ,{ "purchaseDate" : "1/12/2015", "product" : "Mobile", "quantity" : "5", "price" : "$2500"}

// ,{ "purchaseDate" : "12/6/2015", "product" : "Ipad", "quantity" : "2", "price" : "$1600"}

// ,{ "purchaseDate" : "12/07/2015", "product" : "Macbook", "quantity" : "1", "price" : "$1000"}];
        },


        create : function(receiptsData) {
            return $http.post('/api/receipts', receiptsData);
        },

        delete : function(id) {
            return $http.delete('/api/receipts/' + id);
        }
    }       

}]);
