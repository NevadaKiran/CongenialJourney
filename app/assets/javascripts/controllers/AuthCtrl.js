angular
  .module('slateDriver')
  .controller('AuthCtrl', ['$scope', '$rootScope', 'Auth', '$state', function($scope, $rootScope, Auth, $state){
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}}

    $scope.register = function(){
      Auth.register($scope.user, config).then(function(user){
        $rootScope.user = user
        alert("Thanks for signing up, " + user.username);
        $state.go('home');
      }, function(response){
        errors = JSON.stringify(response.data.errors).replace(/[{}]/g, '').replace(/\"/g, '').replace(/:/g, ': ').split('],').join(']\n');
        alert(errors);
      });
    };

    $scope.login = function(){
      Auth.login($scope.user, config).then(function(user){
        $rootScope.user = user
        alert("You're all signed in, " + user.username);
        $state.go('home');
      }, function(response){
        errors = JSON.stringify(response.data.errors).replace(/[{}]/g, '').replace(/\"/g, '').replace(/:/g, ': ').split('],').join(']\n');
        alert(errors);
      });
    }
  }]);



// angular
//   .module('slateDriver')
//   .controller('AuthCtrl', ['$scope', '$rootScope', 'Auth', '$state', function($scope, $rootScope, Auth, $state){
//     var config = {headers: {'X-HTTP-Method-Override': 'POST'}}
//
//     $scope.register = function(){
//       Auth.register($scope.user, config).then(function(user){
//         $rootScope.user = user
//         alert("Thanks for signing up, " + user.username);
//         $state.go('home');
//       }, function(response){
//         alert(response.data.error)
//       });
//     };
//
//     $scope.login = function(){
//       Auth.login($scope.user, config).then(function(user){
//         $rootScope.user = user
//         alert("You're all signed in, " + user.username);
//         $state.go('home');
//       }, function(response){
//         alert(response.data.error)
//       });
//     }
//   }]);
