import { Component, OnInit } from '@angular/core';

import { Project } from '../project.model';
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
            this.projects.push({ name: p.name, url: this.convertToUrl(p.name) });
        });
    }

    private convertToUrl(name: string) {
        return name.split(' ').join('-').toLowerCase();
    }
}