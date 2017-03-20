angular
  .module('slateDriver')
  .controller('SlatesCtrl', ['$http', '$scope', '$state', function($http, $scope, $state){
    var controller = this;

    $http.get('/slates.json')
      .then(function (response) {
        controller.slates = response.data;
      })

    controller.deleteSlate = function(slate) {
      if (confirm('Are you sure you want to delete this?')) {
        $http.delete("/slates/" + slate.id + ".json")
          .then(function (response) {
            index = controller.slates.indexOf(slate);
            controller.slates.splice(index, 1);
          })
      }
    }

    controller.editSlate = function(slate) {
      $state.go('editSlate', {id: slate.id});
    }

    controller.showSlate = function(slate) {
      $state.go('showSlate', {id: slate.id});
    }

    controller.shareSlate = function(slate, value) {
      slate.shared = value;

      $http.put("/slates/" + slate.id + ".json", slate)
    }

    controller.sharedLink = function(slate) {
      if (slate.shared) {
        return window.location.origin + "/#/shared/" + slate.id
      }
    }
}]);
