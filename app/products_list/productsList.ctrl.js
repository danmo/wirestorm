/**
 *	productsList.ctrl.js
 */

'use strict';

angular.module('app.productsList').controller('ProductsListCtrl', ['$scope', 'productsService','$location',
    function ($scope, productsService, $location) {

    $scope.baseUrl = $location.absUrl().replace("/products", "");

    productsService.getList().then(function (products) {
        $scope.products = products;
    });
}]);