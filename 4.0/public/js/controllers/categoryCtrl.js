angular.module('CategoryCtrl', ['ngMaterial']).controller('CategoryController', function($scope, $routeParams, ProductService, CategoryService) {
  $scope.date = new Date();
    CategoryService.get().success(function(categories) {
      $scope.categories = categories;
    });
});
