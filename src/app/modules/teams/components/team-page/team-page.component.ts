import { Component, OnInit } from '@angular/core';

import { TeamsService } from '../../../../services/teams-service/teams.service';
import { map } from 'rxjs/operators';
import { Team } from 'src/app/shared/models/Team';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-teams-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit{

  routeQueryParams$: Subscription;
  teams: Team[] = [];
  constructor(private teamService :TeamsService,private dialog: MatDialog,private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.update();
  }

  getTeam(id:number){
    this.teamService.getTeamsById(id)
    .pipe(map(x=>{
      return x;
    })).subscribe(x=>{
      this.teams = [x];
    }, (error)=>{
      alert(error.error);
    });
  }
  update(){
    this.teamService.getTeams()
    .pipe(map(x=>{
      x=x.map(p=>{
        return p;
      })
      return x;
    })).subscribe(x=>{
      this.teams = x;
    }, (error)=>{
      alert(error.message);
    })
  }
  deleteTeam(id:number){
    this.teamService.deleteTeam(id)
    .pipe(map(x=>{
      return x;
    })).subscribe(x=>{
      alert("Операція виконана успішно");
    }, (error)=>{
      alert(error.error);
    })
  }
}