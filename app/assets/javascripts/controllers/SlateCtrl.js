angular
  .module('slateDriver')
  .controller('SlateCtrl', SlateCtrl)

function SlateCtrl($http, $scope, $state){
  var controller = this;
  controller.slate = {};

  controller.newSlate = function() {
  	var slateNew = {};
    slateNew['slate'] = controller.slate;

    $http.post('/slates.json', slateNew)
      .success(function (response) {
        $state.go('showSlate', {id: response.id});
      })
  }

  controller.removeIssue = function(index) {
    controller.slate.issues.splice(index, 1);
  }

  controller.addIssue = function() {
  	if(!controller.slate.issues) {
      controller.slate.issues = []
    }
    controller.slate.issues.push({name: '', reasons: ''})
  }
}
