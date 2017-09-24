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

  // gets initial "latest messages" to display, called below for initial page load
  function getMessages(){
    MessageService.getLatest()
    .then((data) =>{
      data.data.forEach(function(item){
        //console.log('items:', item);
        let tempMessage = {
          id: item.id,
          topic: item.topic_id,
          msg: item.body
        };
        $scope.messages.push(tempMessage);
      });
      $scope.messageTempHolder = $scope.messages;
    });
  }

  getMessages();

  //filters messages based on topic for instant response
  //then queries getMessages() again for any more messages,
  //filters based on existing messages from page load, and
  //adds new messages to $scope.messages
  $scope.topicChange = function(topic) {
    $scope.currentTopic = topic;
    console.log('topicChange topic is', topic.id);
    console.log('messages', $scope.messages);
    $scope.messages = $filter('filter')($scope.messageTempHolder, {topic: topic.id});
    MessageService.getByTopic(topic.id)
    .then((data) =>{
      console.log("data length",data.data.length);
      data.data
      .filter(function(item){
        return !$scope.messages.some((message) => message.id === item.id);
      })
      .forEach(function(item){
        console.log('going to get more data');
        let tempMessage = {
          topic: item.topic_id,
          msg: item.body
        };
        $scope.messages.push(tempMessage);
      });
    });
  };

  //sets usersVisable for users.html view to be visible/hidden
  $scope.userToggle = function(){
    // console.log('toggle user function fired');
    // console.log('users:', $scope.users);
    // console.log('usersVisable', $scope.usersVisable)
    $scope.usersVisable = !$scope.usersVisable;

  };

  // $scope.NewUser = function(){
  //   LoginServices.addNewUser();
  // };

  //gets topics from DB
  topicsProvider.getData()
  .then((data)=>{
    //console.log('topicsProvider data', data);
    data.forEach(function(item){
      let tempItem = {
        id: item.id,
        name: item.name
      };
      $scope.topicsData.push(tempItem);
    });
  })

  //gets usernames from DB
  userProvider.getData()
  .then((data)=>{
    console.log('userProvider data in controller:', data);
    data.forEach(function(item){
      $scope.users.push(item.name);
    });
  });

}]);