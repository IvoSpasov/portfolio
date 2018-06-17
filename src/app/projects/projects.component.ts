import { Component } from '@angular/core';

import { ProjectService } from './project.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    providers: [ProjectService]
})
export class ProjectsComponent {

}