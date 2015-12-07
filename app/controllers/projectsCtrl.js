'use strict';

portfolioModule.controller('projectsCtrl', ['$scope', '$routeParams', 'projects',
    function HomeCtrl($scope, $routeParams, projects) {
        $scope.projects = projects.getAll();
    }
]);