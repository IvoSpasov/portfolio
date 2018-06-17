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
                'Database server - Microsoft SQL Server'
            ])
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