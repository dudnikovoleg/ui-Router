var myApp = angular.module('myApp',['ui.router']);
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'category.html'
        })
        .state('product',{
            url: '/product',
            templateUrl: 'product.html'
        })
        .state('about',{
            url: '/about',
            templateUrl: 'products.html'
        })

})


