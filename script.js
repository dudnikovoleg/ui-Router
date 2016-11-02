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
        .state('product',{
            url: '/about',
            templateUrl: 'template/product.html'
        })
        .state('category',{
            url: '/category',
            templateUrl: 'template/category.html'
        })

})


