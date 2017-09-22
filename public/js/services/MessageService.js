angular.module('myApp')
.service('MessageService', ['$http', function($http){

  this.getLatest = function(){
    return $http.get('/api/messages/latest');
  }

  // this.getSomething = function(){
  //   return $http.get('dosomething')
  // }


}]);