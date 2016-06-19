angular.module('categoryS', []).factory('CategoryService', ['$http', function($http) {

    return {
        get : function() {
           return $http.get('/api/categories');
        },
        create : function(text) {
            return $http.post('/api/categories/add', {text : text});
        }
    }

}]);
