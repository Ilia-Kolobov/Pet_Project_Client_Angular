import { Component, OnInit, Output } from '@angular/core';
import { TasksService } from 'src/app/services/tasks-service/tasks.service';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskService :TasksService) { }
  saved: boolean = false;
  receivedTask: Task = new Task();

  @Output()newTask: Task =  new Task();
  
  createTask(){
    this.newTask.createdAt = new Date();
    console.log(this.newTask);

    const response = this.taskService.postTask(this.newTask);
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
