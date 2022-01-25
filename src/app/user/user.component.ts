import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import {User} from '../user';
import { UserService } from '../search-service/user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  userName='ann';
  users: User | undefined;
  repos: Repository|undefined;

  constructor(public searchservice:UserService,private repoService:UserService,private http:HttpClient) {
    
  }
     

  ngOnInit() {
    interface ApiResponse{
      name:string;
      login: string;
      avatar_url:string;
      public_repos:number;
      html_url: string;
      created_at:Date;
      followers:number;
      following:number;
    }
    this.http.get<ApiResponse>("https://github.com/annngure").subscribe((data:any)=>{
      //succesful ApI request
      this.users= new User( data.name,data.login,data.avatar_url,data.public_repos,data.html_url,data.created_at,data.followers,data.following)
    })
  }

}
