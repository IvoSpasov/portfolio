'use strict';

portfolio.controller('homeCtrl', ['$scope',
    function HomeCtrl($scope) {
        var speedHeroDescription = 'This is a gallery style, multi-author blog web application for cars.' +
            ' On the index page are the latest posts displayed in reverse chronological order.' +
            ' A post has photos and text describing the photos.' +
            ' Comments section is available for every individual post at the bottom.' +
            ' Unregistered users can only see the posts. Registered users can leave comments below the posts.' +
            ' Administrators can create, edit and delete posts and comments.';

        var speedHeroAbout = [{
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
            text: 'Inversion of Control Container - <a href="http://www.ninject.org/">Ninject</a>',
        },{
            text: '<a href="http://automapper.org/">AutoMapper</a> is used to automatically map the domain model objects to the ViewModel objects'
        },{
            text: '<a href="http://jquery.com/">jQuery</a> is used to access and manipulate the DOM tree'
        },{
            text: 'Page is responsive on all screen sizes with <a href="http://getbootstrap.com/">Bootstrap</a>'
        },{
            text: 'Controls - Telerik Kendo UI'
        },{
            text: 'AJAX is used for adding new comments'
        },{
            text: 'There is one minute caching on the index page'
        }];

        var projects = [{
            name: 'Speed Hero',
            description: speedHeroDescription,
            url: 'http://speedhero.apphb.com/',
            imagePath: 'content/images/SpeedHero.png',
            about: speedHeroAbout
        }];

        $scope.projects = projects;
    }
]);