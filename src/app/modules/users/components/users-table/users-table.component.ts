import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../shared/models/User';
import { UsersService } from '../../../../services/users-service/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})

export class UsersTableComponent implements OnInit{
  @Input('users')dataSource:User[];
  constructor(private userService :UsersService) { }
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'birthday', 'registeredAt', 'teamId'];
  ngOnInit(){ }
}
