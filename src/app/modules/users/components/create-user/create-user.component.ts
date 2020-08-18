import { Component, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { User } from 'src/app/shared/models/User';
import { UsersService } from 'src/app/services/users-service/users.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(private userService :UsersService) { }
  saved: boolean = false;
  receivedUser: User = new User();

  @Output()newUser: User =  new User();
  
  createUser(){
    this.newUser.registeredAt = new Date();
    console.log(this.newUser);

    const response = this.userService.postUser(this.newUser);
    response.pipe()
    .subscribe(
      (data: User) => {
        alert("Операція виконана успішно!");
         this.saved = true;
      },
      error => {alert(`${error.error}`);}
    );
    this.receivedUser = new User();
  }
  ngOnInit(): void {}
}
