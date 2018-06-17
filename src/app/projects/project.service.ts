import { Project } from './project.model';

export class ProjectService {
    private projects: Project[] = [
        new Project(
            'Speed Hero',
            `This is a gallery style, multi-author blog web application for cars. On the index page are the latest posts displayed 
            in reverse chronological order. A post has photos and text describing the photos. Comments section is available for 
            every individual post at the bottom. Unregistered users can only see the posts. Registered users can leave comments 
            below the posts. Administrators can create, edit and delete posts and comments. The site is slow when accessed for a 
            first time, so please be patient.`,
            'http://speedhero.apphb.com/',
            [
                'Technology - ASP.NET MVC 5',
                'Languages used - C#, HTML5, CSS3',
                'Database server - Microsoft SQL Server',
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
                'IDE - Visual Studio'
            ]),
        new Project(
            'Minesweeper',
            'A JavaScript version of the popular Microsoft Windows game.',
            'http://ivospasov.github.io/minesweeper/',
            [
                'Languages used - JavaScript, HTML5, CSS3',
                'Libraries used - <a href="http://jquery.com/">jQuery</a>, <a href="http://getbootstrap.com/">Bootstrap</a>',
                'Drawing is done with the HTML5 element <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">"Canvas"</a>',
                'Recursion algorithm is used to open all empty tiles next to each other',
                'IDE - JetBrains WebStorm',
                '<a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" class="vcs" title="Version control system"> VCS - Git</a>',
                '<a href="https://github.com/ivospasov/minesweeper">Source Code</a>'
            ]
        )
    ];

    getProject(name: string) {
        let proj: Project;
        this.projects.forEach((project: Project) => {
            const nameAsUrl = project.name.split(' ').join('-').toLowerCase();
            if (name === nameAsUrl) {
                proj = project;
            }
        });

        return proj;
    }
}