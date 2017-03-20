angular
  .module('slateDriver')
  .controller('HomeCtrl', ['$http', '$scope', '$rootScope', 'Auth', function($http, $scope, $rootScope, Auth) {
    var controller = this;
    $scope.hello = "Welcome to Slate Driver."

    $http.get("/slates/latest.json")
      .then(function (response) {
        $scope.latest_slate = response.data;
      })
}]);
