angular.module('productS', []).factory('ProductService', ['$http', function($http) {

    return {
        get : function(receiptId) {
          // alert(receiptId+"asdfas");
           return $http.get('/api/products/'+receiptId);
        },
        addCategory : function(receiptId, productId, categoryId, categoryText){
          return $http.post('/api/products/addCategory', {receiptId : receiptId, productId : productId, categoryId : categoryId, categoryText : categoryText});
        }
    };

}]);
