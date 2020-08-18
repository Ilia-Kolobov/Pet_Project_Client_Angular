import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../../../../services/project-service/projects.service';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/shared/models/Project';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit{

  routeQueryParams$: Subscription;
  projects: Project[] = [];
  constructor(private projectService :ProjectsService,private dialog: MatDialog,private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.update();
  }

  getProject(id:number){
    this.projectService.getProjectsById(id)
    .pipe(map(x=>{
      return x;
    })).subscribe(x=>{
      this.projects = [x];
    }, (error)=>{
      alert(error.error);
    });
  }
  update(){
    this.projectService.getProjects()
    .pipe(map(x=>{
      x=x.map(p=>{
        return p;
      })
      return x;
    })).subscribe(x=>{
      this.projects = x;
    }, (error)=>{
      alert(error.message);
    })
  }
  deleteProject(id:number){
    this.projectService.deleteProject(id)
    .pipe(map(x=>{
      return x;
    })).subscribe(x=>{
      alert("Операція виконана успішно");
    }, (error)=>{
      alert(error.error);
    })
  }
}