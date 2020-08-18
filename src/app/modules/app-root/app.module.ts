import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ ProjectsModule } from '../projects/projects.module';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UsersModule } from '../users/users.module'

import { AppMaterialModule } from '../../shared/material-module';
import { SharedModule } from '../../shared/shared.module';
import { TasksModule } from '../tasks/tasks.module';
import { TeamsModule } from '../teams/teams.module';



@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    UsersModule,
    BrowserAnimationsModule, 
    AppMaterialModule,
    HttpClientModule,
    SharedModule,
    TasksModule,
    TeamsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
