import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
    project: Project;
    imagePath: string;

    constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                const projectName = params['projectName'];
                this.project = this.projectService.getProject(projectName);
                // TODO: if project is null then redirect to not found page

                this.imagePath = `/assets/images/${this.projectService.convertToUrl(this.project.name)}.png`;
            }
        );
    }
}