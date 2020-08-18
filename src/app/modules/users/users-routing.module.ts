import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ExitCreateProjectGuard } from 'src/app/shared/guards/exit.create-project.guard';

const routes: Routes = [
  { path: 'users/create', component: CreateUserComponent,
  canDeactivate: [ExitCreateProjectGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
