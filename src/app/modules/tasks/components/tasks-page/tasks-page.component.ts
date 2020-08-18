import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TasksService } from 'src/app/services/tasks-service/tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from "../../../../shared/models/Task";
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {

  routeQueryParams$: Subscription;
  tasks: Task[] = [];
  constructor(private taskService :TasksService,private dialog: MatDialog,private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.update();
  }

  getTask(id:number){
    this.taskService.getTaskById(id)
    .pipe(map(x=>{
      return x;
    })).subscribe(x=>{
      this.tasks = [x];
    }, (error)=>{
      alert(error.error);
    });
  }
  update(){
    this.taskService.getTasks()
    .pipe(map(x=>{
      x=x.map(p=>{
        return p;
      })
      return x;
    })).subscribe(x=>{
      this.tasks = x;
    }, (error)=>{
      alert(error.message);
    })
  }
  deleteTask(id:number){
    this.taskService.deleteTask(id)
    .pipe(map(x=>{
      return x;
    })).subscribe(x=>{
      alert("Операція виконана успішно");
    }, (error)=>{
      alert(error.error);
    })
  }
}
