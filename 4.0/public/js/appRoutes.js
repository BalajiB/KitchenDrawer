 angular.module('appRoutes', ['ngRoute']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

     $routeProvider

         .when('/users', {
             templateUrl: 'views/users.html',
             controller: 'UserController'
         })
         .when('/receipts', {
             templateUrl: 'views/receipts.html',
             controller: 'ReceiptController'
         })

     .when('/products/:param', {
         templateUrl: 'views/products.html',
         controller: 'ProductController'
     })

     .when('/categories', {
             templateUrl: 'views/categories.html',
             controller: 'CategoryController'
         })
         .when('/underConstruction', {
             templateUrl: 'views/underConstruction.html',
             controller: 'ReceiptController'

         });

     $locationProvider.html5Mode(true);

 }]);
