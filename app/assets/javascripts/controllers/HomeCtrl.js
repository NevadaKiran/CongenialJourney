angular
  .module('slateDriver')
  .controller('HomeCtrl', HomeCtrl)

function HomeCtrl($http, $scope, $rootScope, Auth){
  var controller = this;
  $scope.hello = "Hello World"

  $http.get("/slates/latest.json")
    .then(function (response) {
      $scope.latest_slate = response.data;
    })
}
