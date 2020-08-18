import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';

import { AppMaterialModule } from "../../shared/material-module";
import { SharedModule } from '../../shared/shared.module';
import { ProjectsService } from '../../services/project-service/projects.service';


@NgModule({
  declarations: [ProjectsPageComponent, CreateProjectComponent, ProjectsTableComponent, UpdateProjectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    AppMaterialModule,
    SharedModule
  ],
  exports: [ProjectsPageComponent],
  providers: [ProjectsService]
})
export class ProjectsModule { }
