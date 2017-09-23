/* jshint esversion: 6 */

angular.module('myApp')
.controller('homeController', ['$scope', '$filter','topicsProvider', 'userProvider', 'MessageService', function($scope, $filter, topicsProvider, userProvider, MessageService){
  $scope.tempObj = "hello world stuff";
  $scope.testData = [];
  $scope.topicsData = [];
  $scope.currentTopic = '';
  $scope.users = [];
  $scope.usersVisable = false;
  $scope.messages = [];
  $scope.messageTempHolder = [];

  function getMessages(){
    MessageService.getLatest()
    .then((data) =>{
      data.data.forEach(function(item){
        console.log('items:', item);
        let tempMessage = {
          topic: item.topic_id,
          msg: item.body
        };
        $scope.messages.push(tempMessage);
      });
      $scope.messageTempHolder = $scope.messages;
    });
  }

  getMessages();

  $scope.topicChange = function(topic) {
    $scope.currentTopic = topic;
    console.log('topicChange topic is', topic.id);
    console.log('messages', $scope.messages);
    $scope.messages = $filter('filter')($scope.messageTempHolder, {topic: topic.id});
  };

  $scope.userToggle = function(){
    console.log('toggle user function fired');
    $scope.usersVisable = !$scope.usersVisable;
  };

  topicsProvider.getData()
  .then((data)=>{
    console.log('topicsProvider data', data);
    data.forEach(function(item){
      let tempItem = {
        id: item.id,
        name: item.name
      };
      $scope.topicsData.push(tempItem);
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