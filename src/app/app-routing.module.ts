import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';

const appRoutes: Routes = [
    { path: 'projects', redirectTo: 'projects/speed-hero' },
    { path: 'projects', component: ProjectsComponent, children: [
        { path: ':projectName', component: ProjectDetailComponent }
    ]},    
    // This wild card path is very generic and must be last
    { path: '**', redirectTo: 'projects/speed-hero' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class RoutingModule {

}