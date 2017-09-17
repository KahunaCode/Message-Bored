/* jshint esversion: 6 */

angular.module('myApp')
.controller('homeController', ['$scope', 'topicsProvider', function($scope, topicsProvider){
  $scope.tempObj = "hello world stuff";
  $scope.testData = [];
  $scope.topicsData = [];
  $scope.currentTopic = '';

  $scope.topicChange = function(topic) {
    console.log('topicChange', topic)
    $scope.currentTopic = topic;
  };

  topicsProvider.getData()
  .then((data)=>{
    console.log('topicsProvider data', data)
    data.forEach(function(item){
      $scope.topicsData.push(item.name)
    })
    //$scope.topicsData = data
  })

}])
