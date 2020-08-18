import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {

  @Input('tasks')dataSource:Task[];
  displayedColumns: string[] = ['id', 'name', 'description', 'createdAt', 'finishedAt','state', 'projectId', 'performerId'];
  constructor() { }
  ngOnInit(){ }

}
