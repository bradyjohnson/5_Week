/**
 * Created by williambjohnson on 2/10/15.
 */
var app = angular.module('userProfiles');

app.service('mainService', function($http){

  this.getUsers = function()
  {
    return $http({
      method: 'GET',
      url: 'http://reqr.es/api/users?page=1'
    }).then(function(res))
    return res.data.data;
  }

});