var myApp = angular.module('myApp',['ui.router']);
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('produ',{
            url: '/about',
            templateUrl: 'categories/categori3.html'
        })
        .state('about2',{
            url: '/about2',
            templateUrl: 'categories/categori2.html'
        })

})


