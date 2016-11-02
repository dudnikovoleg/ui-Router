var myApp = angular.module('myApp');
myApp.controller('HttpRequestCtrl', httpRequestCtrl );
httpRequestCtrl.$inject = ['$scope', 'httpRequestService'];
    function httpRequestCtrl ($scope,MyService) {
        function init() {
            MyService
                .getMyCategory()
                    .then(function(response) {
                        $scope.items = response.data;
                        console.log($scope.items)
            });
            //---------------------------------------------------//
        }
        $scope.getId = function(id) {
            MyService
                .getMyProd()
                .then(function(response) {
                    $scope.product = response.data.filter(function (elem) {
                        return (elem.categoryId) === id;
                    });
                });
        };
        //---------------------------------------------------//


        $scope.getName = function(name) {
            console.log(name)
            MyService
                .getMyProd()
                .then(function(response) {
                    console.log( $scope.productName)

                    $scope.productName = response.data.filter(function (elem) {
                        return (elem.name) === name;
                    });
                });
        };

        //---------------------------------------------------//


            init()
}

