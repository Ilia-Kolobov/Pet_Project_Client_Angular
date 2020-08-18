import { Component, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import { Project } from 'src/app/shared/models/Project';
import { TeamsService } from '../../../../services/teams-service/teams.service';
import { Team } from 'src/app/shared/models/Team';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  constructor(private teamService :TeamsService) { }
  saved: boolean = false;
  receivedTeam: Team = new Team();

  @Output()newTeam: Team =  new Team();
  
  createTeam(){
    this.newTeam.createdAt = new Date();
    console.log(this.newTeam);

    const response = this.teamService.postTeam(this.newTeam);
    response.pipe()
    .subscribe(
      (data: Project) => {
        alert("Операція виконана успішно!");
         this.saved = true;
      },
      error => {alert(`${error.error}`);}
    );
    this.receivedTeam = new Team();
  }

  ngOnInit(): void {}
}
