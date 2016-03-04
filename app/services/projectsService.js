'use strict';

angular
    .module('myPortfolio')
    .factory('projects', function(){
    var speedHeroDescription = 'This is a gallery style, multi-author blog web application for cars.' +
        ' On the index page are the latest posts displayed in reverse chronological order.' +
        ' A post has photos and text describing the photos.' +
        ' Comments section is available for every individual post at the bottom.' +
        ' Unregistered users can only see the posts. Registered users can leave comments below the posts.' +
        ' Administrators can create, edit and delete posts and comments.';

    var vcsGitLink = '<a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" class="vcs" title="Version control system">' +
            'VCS - Git</a>',
        bootstrapText = 'Page is responsive on all screen sizes with <a href="http://getbootstrap.com/">Bootstrap</a>',
        glyphiconLink = 'glyphicon glyphicon-link';

    var speedHeroAbout = [{
        text: 'Technology - ASP.NET MVC 5'
    }, {
        text: 'Languages - C#, HTML5, CSS3'
    }, {
        text: 'Database server - Microsoft SQL Server'
    }, {
        text: 'ORM - Entity Framework with Code First modeling workflow'
    }, {
        text: 'Repository Pattern is used to give abstraction over the data layer'
    }, {
        text: 'Inversion of Control Container - <a href="http://www.ninject.org/">Ninject</a>'
    },{
        text: '<a href="http://automapper.org/">AutoMapper</a> is used to automatically map the domain model objects to the ViewModel objects'
    },{
        text: '<a href="http://jquery.com/">jQuery</a> is used to access and manipulate the DOM tree'
    },{
        text: bootstrapText
    },{
        text: 'Controls - Telerik Kendo UI'
    },{
        text: 'AJAX is used for adding new comments'
    },{
        text: 'There is one minute caching on the index page'
    },{
        text: 'There is protection against XSS attack'
    },{
        text: 'IDE - Visual Studio'
    },{
        text: vcsGitLink
    },{
        text: '<a href="https://github.com/ivossss/SpeedHero">Source Code</a>',
        glyphiconType: glyphiconLink
    }];

    var minesweeperAbout = [{
        text: 'Languages - JavaScript, HTML5, CSS3'
    },{
        text: 'Library - <a href="http://jquery.com/">jQuery</a>'
    },{
        text: 'Drawing is done with ' +
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">Canvas</a>'
    },{
        text: bootstrapText
    },{
        text: 'Recursion algorithm is used to open all empty tiles next to each other'
    },{
        text: 'IDE - JetBrains WebStorm'
    },{
        text: vcsGitLink
    },{
        text: '<a href="https://github.com/ivossss/Minesweeper">Source Code</a>',
        glyphiconType: glyphiconLink
    }];

    var projects = [{
        name: 'Speed Hero',
        description: speedHeroDescription,
        url: 'http://speedhero.apphb.com/',
        imagePath: 'content/images/SpeedHero.png',
        imageAlt: 'Speed Hero picture',
        about: speedHeroAbout,
        defaultGlyphiconType: 'glyphicon glyphicon-leaf'
    },{
        name: 'Minesweeper',
        description: 'A JavaScript version of the popular Microsoft Windows game.',
        url: 'http://ivossss.github.io/Minesweeper/',
        imagePath: 'content/images/minesweeper.png',
        imageAlt: 'Minesweeper picture',
        about: minesweeperAbout,
        defaultGlyphiconType: 'glyphicon glyphicon-flash'
    }];

    return {
        getAll: function(){
            return projects;
        }
    }
});