var app = angular.module('userProfiles'); //wow

app.service('mainService', function($http, $q) {

    this.getUsers = function(){
        return $http({
            method: 'GET',
            url: 'http://reqr.es/api/users?page=1'
        }).then(function(response){
            var deferred = $q.defer();
            deferred.resolve(response.data.data);
            return deferred.promise;
        },  function(err){
            var deferred = $q.defer();
            deferred.reject(err);
            return deferred.promise;
        });
    };
});