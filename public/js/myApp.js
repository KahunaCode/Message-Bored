angular.module('myApp', ['ngRoute']);

var myApp = angular.module('myApp')
.config(['$routeProvider', '$locationProvider', function(
  $routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'homeController'
  })
  .when('/users', {
    templateUrl: 'users.html',
    controller: 'usersController'
  })
  .otherwise({
    template: "<h1><center>this is a generic 404 page</center></h1>"
  });
  $locationProvider.html5Mode(true);
}])
.run(function(){

});

