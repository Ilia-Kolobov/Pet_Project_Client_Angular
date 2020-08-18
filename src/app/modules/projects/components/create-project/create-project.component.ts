import { Component, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import { Project } from 'src/app/shared/models/Project';
import { ProjectsService } from 'src/app/services/project-service/projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor(private projectService :ProjectsService) { }
  saved: boolean = false;
  receivedProject: Project = new Project();

  @Output()newProject: Project =  new Project();
  
  createProject(){
    this.newProject.createdAt = new Date();
    console.log(this.newProject);

    const response = this.projectService.postProject(this.newProject);
    response.pipe()
    .subscribe(
      (data: Project) => {
        alert("Операція виконана успішно!");
         this.saved = true;
      },
      error => {alert(`${error.error}`);}
    );
    this.receivedProject = new Project();
  }

  ngOnInit(): void {}
}
