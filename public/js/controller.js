/* jshint esversion: 6 */

angular.module('myApp')
.controller('homeController', ['$scope', 'topicsProvider', 'userProvider', function($scope, topicsProvider, userProvider){
  $scope.tempObj = "hello world stuff";
  $scope.testData = [];
  $scope.topicsData = [];
  $scope.currentTopic = '';
  $scope.users = [];
  $scope.usersVisable = false;

  $scope.topicChange = function(topic) {
    console.log('topicChange', topic);
    $scope.currentTopic = topic;
  };

  $scope.userToggle = function(){
    console.log('toggle user function fired');
    $scope.usersVisable = !$scope.usersVisable;
  };

  topicsProvider.getData()
  .then((data)=>{
    console.log('topicsProvider data', data);
    data.forEach(function(item){
      $scope.topicsData.push(item.name);
    });
  })

  userProvider.getData()
  .then((data)=>{
    console.log('userProvider data in controller:', data);
    data.forEach(function(item){
      $scope.users.push(item.name);
    });
  });

}]);