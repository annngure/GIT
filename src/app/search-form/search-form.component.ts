import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService} from '../search-service/user.service';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  user!:User;
  username!: string;
  UserService!: UserService;

  constructor(private router:Router,public searchservice:UserService) {
    this.UserService=searchservice
   }
  

  ngOnInit(): void {
  }
  getUsername(){
      this.UserService.userSearch(this.username)
      this.user=this.UserService.findUser
      this.router.navigate(["user"])



  }

}
