(function () {
    'use strict';

    angular
        .module('myPortfolio')
        .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = ['$scope', '$routeParams', 'projects'];

    function ProjectsController($scope, $routeParams, projects) {
        $scope.projects = projects.getAll;
    }
})();