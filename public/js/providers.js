angular.module('myApp')
.provider('testProvider', function() {

  this.$get = ['$http', function($http) {
    return {
      getData: function(){
        return $http.get('/api/test')
        .then((data) =>{
          console.log("my data is", data);
          return data.data
        })
      }
    }
  }]
})