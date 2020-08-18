import { Component, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import { Project } from 'src/app/shared/models/Project';
import { ProjectsService } from 'src/app/services/project-service/projects.service';


@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  constructor(private projectService :ProjectsService) { }
  saved: boolean = false;
  receivedProject: Project = new Project();

  @Output()newProject: Project =  new Project();
  
  updateProject(){
    this.newProject.createdAt = new Date();
    const response = this.projectService.putProject(this.newProject);
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
