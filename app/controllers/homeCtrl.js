'use strict';

portfolio.controller('homeCtrl', ['$scope',
    function HomeCtrl($scope) {
        var speedHeroDescription = 'This is a gallery style, multi-author blog web application for cars.' +
            ' On the index page are the latest posts displayed in reverse chronological order.' +
            ' A post has photos and text describing the photos.' +
            ' Comments section is available for every individual post at the bottom.' +
            ' Unregistered users can only see the posts. Registered users can leave comments below the posts.' +
            ' Administrators can create, edit and delete posts and comments.';

        var speedHeroAbout = [
            'Technology - ASP.NET MVC 5',
            'Languages - C#, HTML5, CSS3',
            'Database server - MS SQL Server',
            'ORM - Entity Framework with Code First modeling workflow',
            'Repository Pattern is used to give abstraction over the data layer',
            'Inversion of Control Container - <a href="http://www.ninject.org/">Ninject</a>',
            '<a href="http://automapper.org/">AutoMapper</a> is used to automatically map the domain model objects to the ViewModel objects',
            '<a href="http://jquery.com/">jQuery</a> is used to access and manipulate the DOM tree',
            'Page is responsive on all screen sizes with <a href="http://getbootstrap.com/">Bootstrap</a>',
            'Controls - Telerik Kendo UI',
            'AJAX is used for adding new comments',
            'There is one minute caching on the index page',
            'There is protection against XSS attack',
            'IDE - Visual Studio',
            '<a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" data-toggle="tooltip" data-placement="top" title="Version control system">VCS - Git</a>',
            '<a href="https://github.com/ivossss/SpeedHero">Source code</a>'
        ];

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