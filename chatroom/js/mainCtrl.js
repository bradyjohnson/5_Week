var app = angular.module('chatroom').controller('mainCtrl', function(Sscope, parseService, $interval){
  $scope.getParseData = function(){
    parseService.getData().then(function(response){
      $scope.messages = response.data.results;
    });
  };

  $scope.postData = function(message){
    parseService.postData(message).then(function(response){
      delete $scope.message;
    });
  };

$scope.getParseData();
$interval($scope.getParseData, 1500);
});



//
//app.controller('mainCtrl', function($scope, parseService){
//
//  $scope.getParseData = function(){
//    parseService.getData().then(function(results){
//      $scope.messages = results
//    })
//  }
//
//  $scope.getParseData();
//  setInterval(function(){
//    $scope.getParseData();
//  }, 1500)
//
//  $scope.postData = function(){
//    parseService.postData($scope.message)
//    delete $scope.message;
//  }
//
//  $scope.formatDate = function(dateString){
//    return new Date(dateString).toLocaleString();
//  }
//
//});



//In your controller you'll have a getParseData function and a postData function, but should be placed on $scope.
//The getParseData function will call the getData method on the parseService object. You'll then save the result of that request to
//your controllers $scope as messages ($scope.messages)
//The postData function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
//pass that text to the postData method on the parseService object which will then post it to the parse backend.
//uncomment this code when your getParseData function is finished
//This goes and gets new data every second, which mimicking a chat room experience.
// setInterval(function(){
//   $scope.getParseData();
// }, 1500)


