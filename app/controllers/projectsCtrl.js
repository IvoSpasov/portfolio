(function () {
    'use strict';

    angular
        .module('myPortfolio')
        .controller('projectsController', projectsController);

    projectsController.$inject = ['$scope', '$routeParams', 'projects'];

    function projectsController($scope, $routeParams, projects) {
        $scope.projects = projects.getAll();
    }
})();