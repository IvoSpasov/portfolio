'use strict';

var portfolioModule = angular
    .module('portfolioModule', ['ngRoute', 'ngSanitize'])
    .config(function($routeProvider){
        $routeProvider.when('/home', {
            templateUrl: 'app/views/section.html',
            controller: 'projectsCtrl'
        });

        $routeProvider.otherwise({redirectTo: '/home'});
    });