(function(){
    'use strict';

    angular
        .module('myPortfolio', ['ngRoute', 'ngSanitize'])
        .config(function($routeProvider){
            $routeProvider.when('/', {
                templateUrl: 'app/views/section.html',
                controller: 'ProjectsController'
            });

            $routeProvider.otherwise({redirectTo: '/'});
        });
})();