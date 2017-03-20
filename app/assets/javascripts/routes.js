angular
  .module('slateDriver')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('newSlate', {
        url: '/slate',
        templateUrl: 'views/slate.html',
        controller: 'SlateCtrl',
        controllerAs: 'slate_ctrl'
      })
      .state('showSlate', {
        url: '/slate/:id',
        templateUrl: 'views/slate_show.html',
        controller: 'SlateShowCtrl',
        controllerAs: 'show_slate_ctrl'
      })
      .state('editSlate', {
        url: '/slate/:id/edit',
        templateUrl: 'views/slate_edit.html',
        controller: 'SlateEditCtrl',
        controllerAs: 'edit_slate_ctrl'
      })
      .state('slates', {
        url: '/slates',
        templateUrl: 'views/slates.html',
        controller: 'SlatesCtrl',
        controllerAs: 'slates_ctrl'
      })
      .state('shared', {
        url: '/shared/:id',
        templateUrl: 'views/slate_show.html',
        controller: 'SharedSlateCtrl',
        controllerAs: 'show_slate_ctrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('home')
          })
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('home')
          })
        }
      })
    $urlRouterProvider.otherwise('/home')
  })

// angular
//   .module('slateDriver')
//   .config(function($stateProvider, $urlRouterProvider){
//     $stateProvider
//       .state('home', {
//         url: '/home',
//         templateUrl: 'views/home.html',
//         controller: 'HomeCtrl'
//       })
//       .state('newSlate', {
//         url: '/slate',
//         templateUrl: 'views/slate.html',
//         controller: 'SlateCtrl',
//         controllerAs: 'slate_ctrl'
//       })
//       .state('showSlate', {
//         url: '/slate/:id',
//         templateUrl: 'views/slate_show.html',
//         controller: 'SlateShowCtrl',
//         controllerAs: 'show_slate_ctrl'
//       })
//       .state('editSlate', {
//         url: '/slate/:id/edit',
//         templateUrl: 'views/slate_edit.html',
//         controller: 'SlateEditCtrl',
//         controllerAs: 'edit_slate_ctrl'
//       })
//       .state('slates', {
//         url: '/slates',
//         templateUrl: 'views/slates.html',
//         controller: 'SlatesCtrl',
//         controllerAs: 'slates_ctrl'
//       })
//       .state('login', {
//         url: '/login',
//         templateUrl: 'views/login.html',
//         controller: 'AuthCtrl',
//         onEnter: function(Auth, $state){
//           Auth.currentUser().then(function(){
//             $state.go('home')
//           })
//         }
//       })
//       .state('register', {
//         url: '/register',
//         templateUrl: 'views/register.html',
//         controller: 'AuthCtrl',
//         onEnter: function(Auth, $state){
//           Auth.currentUser().then(function(){
//             $state.go('home')
//           })
//         }
//       })
//     $urlRouterProvider.otherwise('/home')
//   })
