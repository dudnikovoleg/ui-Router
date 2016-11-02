angular.module('myApp');
myApp.service("httpRequestService", MyService);
MyService.$inject = ['$http'];

    function MyService ( $http) {

        this.getMyCategory = function () {
            return $http.get('categories.json ');
        };

        this.getMyProd = function () {
            return $http.get('products.json');
        };
    //------end $http get
    //-------start function who mast be get id

}