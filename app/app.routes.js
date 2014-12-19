/**
 *	app.routes.js
 */

'use strict';

angular.module('app')
    .config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/new', {
                templateUrl: 'app/new_product/newProduct.tpl.html',
                controller: 'NewProductCtrl'
            }).
            when('/products', {
                templateUrl: 'app/products_list/productsList.tpl.html',
                controller: 'ProductsListCtrl'
            }).
            when('/product/:productId', {
                templateUrl: 'app/product_details/productDetails.tpl.html',
                controller: 'ProductDetailsCtrl'
            }).
            otherwise({
                redirectTo: '/products'
            });
    }
]);