import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Task } from '../../shared/models/Task';

@Injectable()

export class TasksService {
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{

    return this.http.get<Task[]>('https://localhost:44339/api/ProjectTasks');
  }
  postTask(task: Task){
    
    return this.http.post('https://localhost:44339/api/ProjectTasks', task); 
  }
  getTaskById(id:number): Observable<Task>{

    return this.http.get<Task>(`https://localhost:44339/api/ProjectTasks/${id}`);
  }
  deleteTask(id:number){
    return this.http.delete<Task>(`https://localhost:44339/api/ProjectTasks/${id}`);
  }
  putTask(task: Task){
    return this.http.put<Task>('https://localhost:44339/api/ProjectTasks', task); 
  }
}
