'use strict';

var cardApp = angular.module('travelspire.preference', ['ngRoute', 'ui.select2', 'ngAnimate'])


cardApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/preference', {
        templateUrl: 'preference/preference.html',
        controller: 'CardsCtrl'
    });
}])

cardApp.controller('CardsCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.detailsClicked = false;

    $scope.getTags = function () {
        var url = 'http://localhost:5000/fly/tags';
        $http.get(url).
            success(function (data) {
                if (data != null && data != undefined) {
                    var dataObj = angular.fromJson(data);
                    if (dataObj != null && dataObj.tags.length > 0) {
                        $scope.allTags = dataObj.tags;
                    }
                }
            });
    }

    $scope.getActors = function () {
        var url = 'http://localhost:5000/fly/actors';
        $http.get(url).
            success(function (data) {
                if (data != null && data != undefined) {
                    var dataObj = angular.fromJson(data);
                    if (dataObj != null && dataObj.actors.length > 0) {
                        $scope.allActors = dataObj.actors;
                    }
                }
            });
    }

    $scope.getTags();
    $scope.getActors();

    $scope.searchCards = function () {
        if ($scope.query.length >= 4) {
            var url = 'http://localhost:5000/fly/cards?id=' + $scope.query;
            $http.get(url).
                success(function (data) {
                    if (data != null && data != undefined) {
                        var dataObj = angular.fromJson(data);
                        if (dataObj != null && dataObj.cards.length > 0) {
                            $scope.cards = dataObj.cards;
                        }
                    }
                });
        }
    }


    $scope.getCardDetails = function (card) {
        $scope.detailsClicked = true;
        $scope.tags = card.tags;
        $scope.devs = card.added;
    }

    $scope.actorOptions = {
        'multiple': true,
        'simple_tags': true,
        'createSearchChoice': function () {
            return null;
        },
        'tags': function () {
            return $scope.allActors
        },
        'width': '100%'
    };

    $scope.tagOptions = {
        'multiple': true,
        'simple_tags': true,
        'createSearchChoice': function () {
            return null;
        },
        'tags': function () {
            return $scope.allTags;
        },
        'width': '100%'
    }

    $scope.$watch('tags', function (newVal, oldVal) {
        if (oldVal == newVal) return;
        var added_val = $(newVal).not(oldVal).get()
        var removed_val = $(oldVal).not(newVal).get()
        console.log(added_val);
        console.log(removed_val);

    }, true);

}]);
