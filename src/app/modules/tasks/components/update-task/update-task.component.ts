import { Component, OnInit, Output } from '@angular/core';
import { TasksService } from 'src/app/services/tasks-service/tasks.service';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  constructor(private tasksService :TasksService) { }
  saved: boolean = false;
  receivedTask: Task = new Task();

  @Output()newTask: Task =  new Task();
  
  updateTask(){
    this.newTask.createdAt = new Date();
    const response = this.tasksService.putTask(this.newTask);
    response.pipe()
    .subscribe(
      (data: Task) => {
        alert("Операція виконана успішно!");
         this.saved = true;
      },
      error => {alert(`${error.error}`);}
    );
    this.receivedTask = new Task();
  }

  ngOnInit(): void {
  }

}
