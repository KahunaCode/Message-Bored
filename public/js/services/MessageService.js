angular.module('myApp')
.service('MessageService', ['$http', function($http){

  this.getLatest = function(){
    return $http.get('/api/messages/latest');
  };

  this.getByTopic = function(id){
    return $http.get(`api/messages/by-topic/${id}`);
  };

  // this.getSomething = function(){
  //   return $http.get('dosomething')
  // }


}]);