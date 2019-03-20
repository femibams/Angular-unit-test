import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users;
  text = 'This is the User Page';

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
  }

}
