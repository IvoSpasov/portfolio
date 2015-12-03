'use strict';

portfolio.controller('homeCtrl', ['$scope',
    function HomeCtrl($scope){
        var speedHeroInfo = [
            'Technology - ASP.NET MVC 5',
            'Languages - C#, HTML5, CSS3',
            'Database server - MS SQL Server'
        ];

        $scope.speedHeroInfo = speedHeroInfo;
    }
]);