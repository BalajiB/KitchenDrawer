angular.module('userS', []).factory('UserService', ['$http', function($http) {

    return {
        get : function() {
           return $http.get('/api/users');
        
    //     return      [{ "title" : "Mr", "firstName" : "hasrha", "lastName" : "sri1", "dob" : "12/12/1999", "phone" : "+0112365478" },
    // { "title" : "Mr", "firstName" : "hasrha", "lastName" : "sri2", "dob" : "12/12/1999", "phone" : "+0112365478" },
    // { "title" : "Mr", "firstName" : "hasrha", "lastName" : "sri3", "dob" : "12/12/1999", "phone" : "+0112365478" }];   

        },


        create : function(usersData) {
            return $http.post('/api/users', usersData);
        },

        delete : function(id) {
            return $http.delete('/api/users/' + id);
        }
    }       

}]);
