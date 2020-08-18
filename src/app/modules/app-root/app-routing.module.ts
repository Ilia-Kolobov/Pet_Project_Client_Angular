import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsPageComponent } from '../projects/components/projects-page/projects-page.component';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { CreateProjectComponent } from '../projects/components/create-project/create-project.component';
import { ExitCreateProjectGuard } from "src/app/shared/guards/exit.create-project.guard";
import { UpdateProjectComponent } from '../projects/components/update-project/update-project.component';
import { UsersPageComponent } from '../users/components/users-page/users-page.component'
import { CreateUserComponent } from '../users/components/create-user/create-user.component';
import { CreateTaskComponent } from '../tasks/components/create-task/create-task.component';
import { TasksPageComponent } from '../tasks/components/tasks-page/tasks-page.component';
import { UpdateTaskComponent } from '../tasks/components/update-task/update-task.component'; 
import { CreateTeamComponent } from '../teams/components/create-team/create-team.component';
import { TeamPageComponent } from '../teams/components/team-page/team-page.component';
import { UpdateTeamComponent } from '../teams/components/update-team/update-team.component';
import { UpdateUserComponent } from '../users/components/update-user/update-user.component';

// UpdateProjectComponent
const routes: Routes = [
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'projects/create', component: CreateProjectComponent,
  canDeactivate: [ExitCreateProjectGuard]},
  { path: 'projects/update', component: UpdateProjectComponent,
  canDeactivate: [ExitCreateProjectGuard]},
  
  { path: 'users', component: UsersPageComponent},
  { path: 'users/create', component: CreateUserComponent,
  canDeactivate: [ExitCreateProjectGuard]},
  { path: 'users/update', component: UpdateUserComponent,
  canDeactivate: [ExitCreateProjectGuard]},

  { path: 'tasks', component: TasksPageComponent },
  { path: 'tasks/create', component: CreateTaskComponent,
  canDeactivate: [ExitCreateProjectGuard]},
  { path: 'tasks/update', component: UpdateTaskComponent,
  canDeactivate: [ExitCreateProjectGuard]},

  { path: 'teams', component: TeamPageComponent },
  { path: 'teams/create', component: CreateTeamComponent,
  canDeactivate: [ExitCreateProjectGuard]},
  { path: 'teams/update', component: UpdateTeamComponent,
  canDeactivate: [ExitCreateProjectGuard]},  

  { path: '**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ExitCreateProjectGuard]
})
export class AppRoutingModule { }
