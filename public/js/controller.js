/* jshint esversion: 6 */

angular.module('myApp')
.controller('homeController', ['$scope', 'testProvider', function($scope, testProvider){
  $scope.tempObj = "hello world stuff";
  $scope.testData = [];
  testProvider.getData()
  .then((data)=>{
    console.log('data in controller', data)
    $scope.testData = data;
  })
}])