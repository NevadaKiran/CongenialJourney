angular
  .module('slateDriver')
  .controller('SharedSlateCtrl', ['$http', '$scope', '$stateParams', function($http, $scope, $stateParams){
    var controller = this;

    $http.get("/slates/" + $stateParams.id + "/shared.json")
      .then(function (response) {
        $scope.slate = response.data;
      })
}]);
