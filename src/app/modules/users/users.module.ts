import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { UsersRoutingModule } from './users-routing.module';
import { UsersTableComponent } from '../users/components/users-table/users-table.component'
import { CreateUserComponent } from '../users//components/create-user/create-user.component';
import { UpdateUserComponent } from '../users/components/update-user/update-user.component';
import { UsersPageComponent } from '../users/components/users-page/users-page.component';

import { AppMaterialModule } from "../../shared/material-module";
import { SharedModule } from '../../shared/shared.module'

import { UsersService } from '../../services/users-service/users.service';


@NgModule({
  declarations: [UsersPageComponent, CreateUserComponent, UsersTableComponent, UpdateUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppMaterialModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
