import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { UpdateTeamComponent } from './components/update-team/update-team.component';
import { TeamTableComponent } from './components/team-table/team-table.component';
import { AppMaterialModule } from 'src/app/shared/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamsService } from '../../services/teams-service/teams.service';
import { TeamPageComponent } from '../../modules/teams/components/team-page/team-page.component';


@NgModule({
  declarations: [CreateTeamComponent, UpdateTeamComponent, TeamPageComponent, TeamTableComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    AppMaterialModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [TeamPageComponent],
  providers: [TeamsService]
})
export class TeamsModule { }
