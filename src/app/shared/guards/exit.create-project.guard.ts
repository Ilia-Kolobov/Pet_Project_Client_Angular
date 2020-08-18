import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import { CreateProjectComponent } from 'src/app/modules/projects/components/create-project/create-project.component';
import { Injectable } from '@angular/core';
 

@Injectable() 
export class ExitCreateProjectGuard implements CanDeactivate<CreateProjectComponent>{
    
    constructor() {}
    canDeactivate(
        component: CreateProjectComponent
      ) {
        if (!component.saved)
        return window.confirm('Є не збереженні дані. Ви впевненні, що хочете покинути сторінку?');
      else return true;
      }
      
}