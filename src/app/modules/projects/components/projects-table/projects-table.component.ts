import { Component, OnInit,Input, ViewChild,AfterViewInit,AfterContentInit } from '@angular/core';
import { Project } from 'src/app/shared/models/Project';
import { ProjectsService } from '../../../../services/project-service/projects.service';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})

export class ProjectsTableComponent implements OnInit{
  @Input('projects')dataSource:Project[];
  constructor(private projectService :ProjectsService) { }
  displayedColumns: string[] = ['id', 'name', 'description', 'createdAt', 'deadline', 'authorId', 'teamId'];
  ngOnInit(){}
}
