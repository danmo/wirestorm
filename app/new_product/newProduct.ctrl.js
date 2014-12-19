/**
 *	productDetails.ctrl.js
 */

'use strict';

angular.module('app.newProduct').controller('NewProductCtrl', ['$scope', '$location', 'productsService',
    function ($scope, $location, productsService,views) {
        $scope.baseUrl = $location.absUrl().replace("/new", "");

        var product = $scope.product = {
            name: '',
            description: '',
            price: '',
            id:-1
        }

        $scope.addProduct = function() {
            if (product.name.length == 0 || product.description.length == 0 || product.price.length == 0) {
                alert("Error: Please populate all fields before saving!");
                return;
            }

            productsService.add(product).then(function() {
                $location.path('/products');
            });
        }
    }]);