import { Component, OnInit,Input, ViewChild,AfterViewInit,AfterContentInit } from '@angular/core';
import { Team } from 'src/app/shared/models/Team';
import { TeamsService } from '../../../../services/teams-service/teams.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})

export class TeamTableComponent implements OnInit{
  @Input('teams')dataSource:Team[];
  constructor(private teamService :TeamsService) { }
  displayedColumns: string[] = ['id', 'name','createdAt'];
  ngOnInit(){}
}
