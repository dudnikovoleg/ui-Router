var myApp = angular.module('myApp');
myApp.controller('HttpRequestCtrl', httpRequestCtrl );
httpRequestCtrl.$inject = ['$scope', 'httpRequestService'];
    function httpRequestCtrl ($scope,MyService) {
        $scope.countOnPage = 2;


        init();
        function init() {
            MyService
                .getMyCategory()
                    .then(function(response) {
                        $scope.items = response.data;
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
//-----------------------------------//
                    $scope.saveProductsIndex = function (){
                        var countOfPages = $scope.product.length/$scope.countOnPage;
                        $scope.getIndex = 0;
                        $scope.indexes = null;
                        $scope.indexes = [];
                        for(var i = 0; i < countOfPages; ++i){
                            $scope.indexes.push({index: i+1});
                        }
                    };
//-----------------------------//
                    $scope.saveProductsIndex();
//-----------------------------//
                   $scope.getItemsToShow =  function (getIndex){
                       $scope.itemsToShow = $scope.product.slice(getIndex*$scope.countOnPage,
                           (getIndex+1)*$scope.countOnPage);
                    };
//-----------------------------//
                    $scope.getItemsToShow($scope.getIndex)
//-----------------------------//
                });
        };
//---------------------------------------------------//
        $scope.getName = function(name) {
            MyService
                .getMyProd()
                .then(function(response) {
                    $scope.productName = response.data.filter(function (elem) {
                        return (elem.name) === name;
                    });
                });
        };
        //---------------------------------------------------//
}

