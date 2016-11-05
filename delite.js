/**
 * Created by Oleg on 05.11.2016.
 */
$scope.saveProductsIndex = function (){
    var countOfPages = $scope.product.length/$scope.countOnPage;
    $scope.productsIndex = 0;
    $scope.indexes = null;
    $scope.indexes = [];
    for(var i = 0; i < countOfPages; ++i){
        $scope.indexes.push({index: i+1});
    }
    console.log($scope.indexes)
};

$scope.getItemsToShow =  function (index){
    $scope.itemsToShow = $scope.product.slice(index*$scope.countOnPage, (index+1)*$scope.countOnPage);

};




$scope.saveProductsIndex = function (){
    var countOfPages = $scope.product.length/$scope.countOnPage;
    $scope.indexes = [];
    for(var i = 0; i<countOfPages;++i){
        $scope.indexes.push({index: i+1})
    };

};
$scope.saveProductsIndex();

//-----------------------------//

$scope.getItemsToShow = function(index){
    $scope.index = 0
    $scope.index
    $scope.itemsToShow = $scope.product.slice(index*$scope.countOnPage,(index+1)*$scope.countOnPage)
    console.log($scope.index )

}
$scope.getItemsToShow($scope.index)