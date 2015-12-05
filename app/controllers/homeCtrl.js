'use strict';

portfolio.controller('homeCtrl', ['$scope',
    function HomeCtrl($scope) {
        var speedHeroDescription = 'This is a gallery style, multi-author blog web application for cars.' +
            ' On the index page are the latest posts displayed in reverse chronological order.' +
            ' A post has photos and text describing the photos.' +
            ' Comments section is available for every individual post at the bottom.' +
            ' Unregistered users can only see the posts. Registered users can leave comments below the posts.' +
            ' Administrators can create, edit and delete posts and comments.';

        var vcsGitLink = '<a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" class="vcs" title="Version control system">' +
            'VCS - Git</a>';

        var speedHeroAbout = [{
            text: 'Technology - ASP.NET MVC 5',
            glyphiconType: 'glyphicon glyphicon-leaf'
        }, {
            text: 'Languages - C#, HTML5, CSS3',
            glyphiconType: 'glyphicon glyphicon-leaf'
        }, {
            text: 'Database server - MS SQL Server',
            glyphiconType: 'glyphicon glyphicon-leaf'
        }, {
            text: 'ORM - Entity Framework with Code First modeling workflow',
            glyphiconType: 'glyphicon glyphicon-leaf'
        }, {
            text: 'Repository Pattern is used to give abstraction over the data layer',
            glyphiconType: 'glyphicon glyphicon-leaf'
        }, {
            text: 'Inversion of Control Container - <a href="http://www.ninject.org/">Ninject</a>',
            glyphiconType: 'glyphicon glyphicon-leaf'
        },{
            text: '<a href="http://automapper.org/">AutoMapper</a> is used to automatically map the domain model objects to the ViewModel objects',
            glyphiconType: 'glyphicon glyphicon-leaf'
        },{
            text: '<a href="http://jquery.com/">jQuery</a> is used to access and manipulate the DOM tree',
            glyphiconType: 'glyphicon glyphicon-leaf'
        },{
            text: 'Page is responsive on all screen sizes with <a href="http://getbootstrap.com/">Bootstrap</a>',
            glyphiconType: 'glyphicon glyphicon-leaf'
        },{
            text: 'Controls - Telerik Kendo UI',
            glyphiconType: 'glyphicon glyphicon-leaf'
        },{
            text: 'AJAX is used for adding new comments',
            glyphiconType: 'glyphicon glyphicon-leaf'
        },{
            text: 'There is one minute caching on the index page',
            glyphiconType: 'glyphicon glyphicon-leaf'
        },{
            text: 'There is protection against XSS attack',
            glyphiconType: 'glyphicon glyphicon-leaf'
        },{
            text: 'IDE - Visual Studio',
            glyphiconType: 'glyphicon glyphicon-leaf'
        },{
            text: vcsGitLink,
            glyphiconType: 'glyphicon glyphicon-leaf'
        },{
            text: '<a href="https://github.com/ivossss/SpeedHero">Source code</a>',
            glyphiconType: 'glyphicon glyphicon-link'
        }];

        var minesweeperAbout = [{
            text: 'Languages - JavaScript, HTML5, CSS3',
            glyphiconType: 'glyphicon glyphicon-flash'
        },{
            text: 'Library - <a href="http://jquery.com/">jQuery</a>',
            glyphiconType: 'glyphicon glyphicon-flash'
        },{
            text: 'Drawing is done with ' +
            '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">Canvas</a>',
            glyphiconType: 'glyphicon glyphicon-flash'
        },{
            text: 'Page is responsive on all screen sizes with <a href="http://getbootstrap.com/">Bootstrap</a>',
            glyphiconType: 'glyphicon glyphicon-flash'
        },{
            text: 'Recursion algorithm is used to open all empty tiles next to each other',
            glyphiconType: 'glyphicon glyphicon-flash'
        },{
            text: 'IDE - JetBrains WebStorm',
            glyphiconType: 'glyphicon glyphicon-flash'
        },{
            text: vcsGitLink,
            glyphiconType: 'glyphicon glyphicon-flash'
        },{
            text: '<a href="https://github.com/ivossss/Minesweeper">Source code</a>',
            glyphiconType: 'glyphicon glyphicon-link'
        }];

        var projects = [{
            name: 'Speed Hero',
            description: speedHeroDescription,
            url: 'http://speedhero.apphb.com/',
            imagePath: 'content/images/SpeedHero.png',
            about: speedHeroAbout
        },{
            name: 'Minesweeper',
            description: 'A JavaScript version of the popular Microsoft Windows game.',
            url: 'http://ivossss.github.io/Minesweeper/',
            imagePath: 'content/images/minesweeper.png',
            about: minesweeperAbout
        }];

        $scope.projects = projects;
    }
]);