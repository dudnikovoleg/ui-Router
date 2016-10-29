angular.module('myApp');

myApp.controller('HttpRequestCtrl', httpRequestCtrl );


httpRequestCtrl.$inject = ['$scope', 'httpRequestService'];

    function httpRequestCtrl ($scope,MyService) {

        function init() {
            MyService.then(fulfilld, rejected);
                function fulfilld(response) {
                    $scope.items = response.data;
                    console.log($scope.items)
            }

        function rejected(error) {
            console.log(error.data);
            console.log(error.status);
        }
        }

        $scope.getId = function  (id) {
            $scope.productFontImg = id;
            console.log( $scope.productFontImg)
        };
            init()
}
