angular.module('UserCtrl', []).controller('UserController', function($scope,UserService) {

    
    // $scope.users = [{ "title" : "Mr", "firstName" : "hasrha", "lastName" : "sri", "dob" : "12/12/1999", "phone" : "+0112365478" },
    // { "title" : "Mr", "firstName" : "hasrha", "lastName" : "sri", "dob" : "12/12/1999", "phone" : "+0112365478" },
    // { "title" : "Mr", "firstName" : "hasrha", "lastName" : "sri", "dob" : "12/12/1999", "phone" : "+0112365478" }];   

 UserService.get().success(function(data){
$scope.users	= data;
});
});