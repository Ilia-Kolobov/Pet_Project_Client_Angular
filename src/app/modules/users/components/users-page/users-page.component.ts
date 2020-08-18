import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs/internal/Subscription';

import { UsersService } from '../../../../services/users-service/users.service'; 
import { User } from '../../../../shared/models/User';


@Component({
  selector: 'app-projects-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit{

  routeQueryParams$: Subscription;
  users: User[] = [];
  constructor(private userService :UsersService,private dialog: MatDialog,private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.update();
  }

  getProject(id:number){
    this.userService.getUsersById(id)
    .pipe(map(x=>{
      return x;
    })).subscribe(x=>{
      this.users = [x];
    }, (error)=>{
      alert(error.error);
    });
  }
  update(){
    this.userService.getUsers()
    .pipe(map(x=>{
      x=x.map(p=>{
        return p;
      })
      return x;
    })).subscribe(x=>{
      this.users = x;
    }, (error)=>{
      alert(error.message);
    })
  }
  deleteProject(id:number){
    this.userService.deleteUser(id)
    .pipe(map(x=>{
      return x;
    })).subscribe(x=>{
      alert("Операція виконана успішно");
    }, (error)=>{
      alert(error.error);
    })
  }
}