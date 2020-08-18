import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }