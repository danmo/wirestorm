/**
 *	products.service.js
 */

'use strict';

angular.module('app.common')
    .factory('productsService', [
        '$http', 'URL', function($http, URL) {
            var getList = function() {
                return $http.get(URL.products)
                    .then(function(result) {
                        return result.data;
                    });
            };

            var add = function (product) {
                return $http.post(URL.products, product)
                    .then(function (result) {
                        return result.data;
                    });
            };

            return {
                getList: getList,
                add: add
            };
        }
    ]);

