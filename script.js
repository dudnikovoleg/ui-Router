; var myApp = angular.module('myApp' ,['ui.router']);
//-----------------------start router
myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,$urlRouterProvider)
{

    $urlRouterProvider.otherwise('/home');
    $stateProvider
//--------------link for Home
        .state('home', {
                    url: '/home',
                    templateUrl: 'index.html'
    })
//-------------link for categori1
        .state('categori1', {
        url: '/categori1',
        templateUrl: 'categories/categori1.html'
    })
        .state('categori2', {
            url: '/categori2',
            templateUrl: 'categories/categori2.html'
        })
        .state('categori3', {
            url: '/categori3',
            templateUrl: 'categories/categori3.html'
        })
}]);//---------------------end router
//-------------------------star myCtrl
    myApp.controller("myCtrl",['$scope','$http', function ($scope, $http) {


        $http.get('products.json ')
            .success(function (result) {
                console.log(result);
                $scope.items = result;
            })
        .error(function (data, status) {
            console.log(data);
            console.log(status);
        });
        //------end $http get
        //-------start function who mast be get id
        $scope.somF = function  (id) {
            productFontImg = id;
            console.log(productFontImg)
        };



    }]);
//--------------------end myCtrl
