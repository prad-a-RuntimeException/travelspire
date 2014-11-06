'use strict';

// Declare app level module which depends on views, and components
angular.module('travelspire', [
        'ngRoute',
        'ui.select2',
        'travelspire.preference'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/preference'});
    }]);
