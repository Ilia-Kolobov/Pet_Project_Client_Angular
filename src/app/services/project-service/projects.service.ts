import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Project } from '../../shared/models/Project';

@Injectable()
export class ProjectsService {

  constructor(private http:HttpClient) { }

  getProjects(): Observable<Project[]>{

    return this.http.get<Project[]>('https://localhost:44339/api/Projects');
  }
  postProject(project: Project){
    
    return this.http.post('https://localhost:44339/api/Projects', project); 
  }
  getProjectsById(id:number): Observable<Project>{

    return this.http.get<Project>(`https://localhost:44339/api/Projects/${id}`);
  }
  deleteProject(id:number){
    return this.http.delete<Project>(`https://localhost:44339/api/Projects/${id}`);
  }
  putProject(project: Project){
    return this.http.put<Project>('https://localhost:44339/api/Projects', project); 
  }
}
