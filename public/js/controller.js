/* jshint esversion: 6 */

angular.module('myApp')
.controller('homeController', ['$scope', 'testProvider', 'topicsProvider', function($scope, testProvider, topicsProvider){
  $scope.tempObj = "hello world stuff";
  $scope.testData = [];
  $scope.topicsData = [];

  testProvider.getData()
  .then((data)=>{
    console.log('data in controller', data)
    $scope.testData = data;
  })

  topicsProvider.getData()
  .then((data)=>{
    console.log('topicsProvider data', data)
    data.forEach(function(item){
      $scope.topicsData += item.name
    })
    //$scope.topicsData = data
  })

}])
