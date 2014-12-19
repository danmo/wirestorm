/**
 *	products.service.js
 */

'use strict';

angular.module('app.common')
    .factory('commentsService', [
        '$http', 'URL', function ($http, URL) {
            var getList = function (productId) {
                return $http.get(URL.comments + '/' + productId)
                    .then(function (result) {
                        return result.data;
                    });
            };

            var add = function (productId, comment) {
                return $http.post(URL.comments, { id: productId, text: comment })
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

