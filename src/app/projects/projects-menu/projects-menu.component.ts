import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';

@Component({
    selector: 'app-projects-menu',
    templateUrl: './projects-menu.component.html'
})
export class ProjectsMenuComponent implements OnInit {
    projects: { name: string, url: string }[] = [];

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        const projects = this.projectService.getProjects();
        projects.forEach(p => {
            this.projects.push({
                name: p.name,
                url: this.projectService.convertToUrl(p.name)
            });
        });
    }
}