angular.module('myApp')
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

