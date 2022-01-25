import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import {User} from '../user';
import { UserService } from '../search-service/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
   users:User;
   repos: Repository;
  constructor(searchservice:UserService,repoService:UserService) {
    this.users=searchservice.findUser()
    this.repos=repoService.repos()
   }

  ngOnInit(): void {
  }

}
