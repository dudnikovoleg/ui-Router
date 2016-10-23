; var myApp = angular.module('myApp' ,['ui.router']);
//-----------------------start router
myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,$urlRouterProvider)
{

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
        url: '/home',
        templateUrl: 'index.html'

    })

    .state('prod', {
        url: '/prod',
        templateUrl: 'product.html'

    })
}]);//---------------------end router
//-------------------------star myCtrl
    myApp.controller("myCtrl",['$scope','$http', function ($scope, $http) {


        $http.get('tsconfig.json ')
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
        $scope.somF = function  (value) {
            productFontImg = value;
            console.log(productFontImg)
        };



    }]);
//--------------------end myCtrl
