import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import { UpdateProjectComponent } from '../../modules/projects/components/update-project/update-project.component';
import { Injectable } from '@angular/core';
 

@Injectable() 
export class ExitUpdateProjectGuard implements CanDeactivate<UpdateProjectComponent>{
    
    constructor() {}
    canDeactivate(
        component: UpdateProjectComponent
      ) {
        if (!component.saved)
        return window.confirm('Є не збереженні дані. Ви впевненні, що хочете покинути сторінку?')
      else return true
      }
      
}