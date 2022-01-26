import { Component, OnInit } from '@angular/core';
import {Repository } from '../repository';
import { UserService } from '../search-service/user.service';
import { HttpClient } from '@angular/common/http';
import { UserRequestService } from '../user-http/user-request.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
  providers:[UserService]
})
export class RepositoryComponent implements OnInit {
  repos!:Repository;




  constructor(public searchservice:UserService,private repoService:UserService,private http:HttpClient,private userservice:UserRequestService) { }

  ngOnInit() {
    interface ApiResponse{
    name: string;
     html_url: string;
     description: string;
     created_at: Date;

  }
  this.http.get<ApiResponse>("https://api.github.com/").subscribe((data:any)=>{
      //succesful ApI request
      this.repos= new Repository( data.name,data.html_url,data.description,data.created_at)
    })
}

}
