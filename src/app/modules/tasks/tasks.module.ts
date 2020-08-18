import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TasksPageComponent } from './components/tasks-page/tasks-page.component';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';

import { TasksService } from "../../services/tasks-service/tasks.service";
import { AppMaterialModule } from "../../shared/material-module";
import { SharedModule } from '../../shared/shared.module';
import { TasksRoutingModule } from '../../modules/tasks/tasks-routing.module';


@NgModule({
  declarations: [TasksPageComponent, TasksTableComponent, CreateTaskComponent, UpdateTaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    SharedModule,
    TasksRoutingModule,
    ReactiveFormsModule
  ],
  exports: [TasksPageComponent],
  providers:[TasksService]
})
export class TasksModule { }
