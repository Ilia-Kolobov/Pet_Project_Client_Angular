import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Team } from '../../shared/models/Team';

@Injectable()

export class TeamsService {

  constructor(private http:HttpClient) { }

  getTeams(): Observable<Team[]>{

    return this.http.get<Team[]>('https://localhost:44339/api/Teams');
  }
  postTeam(team: Team){
    
    return this.http.post('https://localhost:44339/api/Teams', team); 
  }
  getTeamsById(id:number): Observable<Team>{

    return this.http.get<Team>(`https://localhost:44339/api/Teams/${id}`);
  }
  deleteTeam(id:number){
    return this.http.delete<Team>(`https://localhost:44339/api/Teams/${id}`);
  }
  putTeam(team: Team){
    return this.http.put<Team>('https://localhost:44339/api/Teams', team); 
  }
}
