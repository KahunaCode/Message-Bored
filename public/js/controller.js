/* jshint esversion: 6 */

angular.module('myApp')
.controller('homeController', ['$scope', 'topicsProvider', 'userProvider', 'MessageService', function($scope, topicsProvider, userProvider, MessageService){
  $scope.tempObj = "hello world stuff";
  $scope.testData = [];
  $scope.topicsData = [];
  $scope.currentTopic = '';
  $scope.users = [];
  $scope.usersVisable = false;
  $scope.messages = [];

  $scope.topicChange = function(topic) {
    console.log('topicChange', topic);
    $scope.currentTopic = topic;
    MessageService.getLatest()
    .then((data)=>{
      console.log(data.data);
      data.data.forEach(function(item){
        $scope.messages.push(item.body);
      });
    });
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