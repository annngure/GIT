import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import {User} from '../user';
import { UserService } from '../search-service/user.service';
import { HttpClient } from '@angular/common/http';
import { UserRequestService } from '../user-http/user-request.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  username!: string;
  users!: User;
  repos!: Repository;
  userService!: UserService;

  constructor(searchService:UserService) {
    this.userService=searchService;
  }
     

  ngOnInit() {
    this.userService.userSearch(this.username)
    this.users=this.userService.findUser
  }

}
