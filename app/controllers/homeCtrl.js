'use strict';

portfolio.controller('homeCtrl', ['$scope',
    function HomeCtrl($scope) {
        var speedHeroInfo = [{
            text: 'Technology - ASP.NET MVC 5'
        }, {
            text: 'Languages - C#, HTML5, CSS3'
        }, {
            text: 'Database server - MS SQL Server'
        }, {
            text: 'ORM - Entity Framework with Code First modeling workflow'
        }, {
            text: 'Repository Pattern is used to give abstraction over the data layer'
        }, {
            text: 'Inversion of Control Container - ',
            link: 'http://www.ninject.org/',
            textForLink: 'Ninject'
        }];

        $scope.speedHeroInfo = speedHeroInfo;
    }
]);