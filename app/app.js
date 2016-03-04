(function(){
    'use strict';

    angular
        .module('myPortfolio', ['ngRoute', 'ngSanitize'])
        .config(function($routeProvider){
            $routeProvider.when('/home', {
                templateUrl: 'app/views/section.html',
                controller: 'projectsController'
            });

            $routeProvider.otherwise({redirectTo: '/home'});
        });
})();