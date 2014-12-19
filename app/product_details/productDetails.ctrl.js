/**
 *	productDetails.ctrl.js
 */

'use strict';

angular.module('app.productDetails').controller('ProductDetailsCtrl',
    ['$scope', '$location', '$routeParams', 'productsService', 'commentsService',
    function ($scope, $location, $routeParams, productsService, commentsService) {
        $scope.baseUrl = $location.absUrl().replace("/product", "");
        $scope.comments = [];
        $scope.newComment = "";

        productsService.getList($routeParams.productId).then(function (products) {
            $scope.product = products[$routeParams.productId];
        });

        commentsService.getList($routeParams.productId).then(function (comments) {
            $scope.comments = comments;
        });

        $scope.addComment = function() {
            if ($scope.newComment.length == 0) {
                alert("Empty comment detected. Please add some of your opinions before commenting");
                return;
            }

            commentsService.add($routeParams.productId,$scope.newComment).then(function () {
                $scope.comments.push({ text: $scope.newComment });
                $scope.newComment = "";
            });
        }
    }]);