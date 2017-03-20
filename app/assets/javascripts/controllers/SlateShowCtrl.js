angular
  .module('slateDriver')
  .controller('SlateShowCtrl', ['$http', '$scope', '$rootScope', 'Auth', '$stateParams', function($http, $scope, $rootScope, Auth, $stateParams){
  var controller = this;

  $http.get("/slates/" + $stateParams.id + ".json")
    .then(function (response) {
      $scope.slate = response.data;
    })
}]);
