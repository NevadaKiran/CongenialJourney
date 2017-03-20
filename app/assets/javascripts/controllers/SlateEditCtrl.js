angular
  .module('slateDriver')
  .controller('SlateEditCtrl', SlateEditCtrl)

function SlateEditCtrl($http, $scope, $rootScope, Auth, $stateParams, $state){
  var controller = this;

  $http.get("/slates/" + $stateParams.id + ".json")
    .then(function (response) {
      controller.slate = response.data;
    })

  controller.editSlate = function() {
    var slateEdit = {};
    controller.slate.issues_attributes = controller.slate.issues;
    slateEdit['slate'] = controller.slate;

    $http.put("/slates/" + controller.slate.id + ".json", slateEdit)
      .then(function (response) {
        $state.go('showSlate', {id: controller.slate.id});
      })
  }

  controller.removeIssue = function(issue, index) {
    if(issue.id) {
      issue._destroy = true;
    }
    else {
      controller.slate.issues.splice(index, 1);
    }
  }

  controller.addIssue = function() {
    controller.slate.issues.push({name: '', reasons: ''})
  }
}
