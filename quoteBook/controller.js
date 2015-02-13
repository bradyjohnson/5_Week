/**
 * Created by williambjohnson on 2/11/15.
 */
var app = angular.module('quoteBook');

app.controller('MainController', function($scope, mainService) {
  $scope.quotes = mainService.getData()
  $scope.addQuote = function(){
    mainService.addData($scope.quote)
    $scope.quote = {}
  }
  $scope.removeQuote = function(index){
    mainService.removeData(index)
  }
  $scope.filter = function(){
    if ($scope.showFilter){
      $scope.showFilter = false;
    }else{
      $scope.showFilter = true;


    }
  }


  //$scope.show =
  //$scope.author =
  //$scope.text =
  //$scope.search =



});