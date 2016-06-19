angular.module('ReceiptCtrl', []).controller('ReceiptController', function($scope,$location, ReceiptService) {


    // $scope.users = [{ "title" : "Mr", "firstName" : "hasrha", "lastName" : "sri", "dob" : "12/12/1999", "phone" : "+0112365478" },
    // { "title" : "Mr", "firstName" : "hasrha", "lastName" : "sri", "dob" : "12/12/1999", "phone" : "+0112365478" },
    // { "title" : "Mr", "firstName" : "hasrha", "lastName" : "sri", "dob" : "12/12/1999", "phone" : "+0112365478" }];
//
// $scope.receipts =         [
// { "purchaseDate" : "12/12/2015", "product" : "Choc", "quantity" : "12", "price" : "$45"}
//
// ,{ "purchaseDate" : "1/12/2015", "product" : "Mobile", "quantity" : "5", "price" : "$2500"}
//
// ,{ "purchaseDate" : "12/6/2015", "product" : "Ipad", "quantity" : "2", "price" : "$1600"}
//
// ,{ "purchaseDate" : "12/07/2015", "product" : "Macbook", "quantity" : "1", "price" : "$1000"}];


 ReceiptService.get().success(function(data){
$scope.receipts	= data;
$scope.displayProduct = function(receiptId){
  var url = '/products/' + receiptId;
   $location.path(url);
    // $scope.$apply();
};
});
//
//  $scope.onEReady =function() {
//  	// alert(isLast);
//  	// if(isLast){
//     // alert('test');
// 	$('.suggest').magicSuggest({
//         placeholder: 'Add this receipt to a category.',
//         data: ['Electronics', 'Appliances', 'Furinture', 'Foods']
//     });
//  	// };
//
// };

});
