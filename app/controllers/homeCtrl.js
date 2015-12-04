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
            linkText: 'Ninject',
            linkIsInFront: false
        },{
            text: 'is used to automatically map the domain model objects to the ViewModel objects',
            link: 'http://automapper.org/',
            linkText: 'AutoMapper',
            linkIsInFront: true
        },{
            text: '<a href="http://jquery.com/">jQuery</a> is used to access and manipulate the DOM tree',
        },{
            text: 'Page is responsive on all screen sizes with <a href="http://getbootstrap.com/">Bootstrap</a>'
        },{
            text: 'Controls - Telerik Kendo UI'
        },{
            text: 'AJAX is used for adding new comments'
        },{
            text: 'There is one minute caching on the index page'
        }];

        $scope.speedHeroInfo = speedHeroInfo;
    }
]);