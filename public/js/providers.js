angular.module('myApp')
.provider('userProvider', function() {
  this.$get = ['$http', function($http) {
    return {
      getData: function(){
        return $http.get('/api/users')
        .then((data) =>{
          console.log("my data is", data);
          return data.data
        })
      }
    }
  }]
})

.provider('topicsProvider', function() {
  this.$get = ['$http', function($http) {
    return {
      getData: function(){
        return $http.get('/api/topics')
        .then((data) =>{
          console.log("my topicsProvider data is", data);
          return data.data
        })
      }
    }
  }]
})

