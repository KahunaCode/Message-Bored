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
  });

  $scope.topicChange = function(topic) {
    $scope.currentTopic = topic;
    console.log('topicChange topic is', topic.id);
    console.log('messages', $scope.messages);
    $scope.filteredMessages = $filter('filter')($scope.messages, {topic: topic.id});

    console.log('filtered messages:', $scope.filteredMessages)
    $scope.messages = $scope.filteredMessages;

    // $scope.messages.filter(
    //   function(topic){
    //     console.log('$scope.messages', $scope.messages)
    //     return ($scope.messages.id === topic.id);
    //   }
    //   );
  };


  // $scope.topicChange = function(topic) {
  //   console.log('topicChange', topic);
  //   $scope.currentTopic = topic;
  //   MessageService.getLatest()
  //   .then((data)=>{
  //     console.log(data.data);
  //     data.data.forEach(function(item){
  //       $scope.messages.push(item.body);
  //     });
  //   });
  // };

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