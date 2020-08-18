import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from '../../shared/models/User';

@Injectable()

export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{

    return this.http.get<User[]>('https://localhost:44339/api/Users');
  }
  postUser(user: User){
    
    return this.http.post('https://localhost:44339/api/Users', user); 
  }
  getUsersById(id:number): Observable<User>{

    return this.http.get<User>(`https://localhost:44339/api/Users/${id}`);
  }
  deleteUser(id:number){
    return this.http.delete<User>(`https://localhost:44339/api/Users/${id}`);
  }
  putuser(user: User){
    return this.http.put<User>('https://localhost:44339/api/Users', user); 
  }
}
