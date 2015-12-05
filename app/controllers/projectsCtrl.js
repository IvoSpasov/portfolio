'use strict';

portfolioModule.controller('projectsCtrl', ['$scope', 'projects',
    function HomeCtrl($scope, projects) {
        $scope.projects = projects.getAll();
    }
]);