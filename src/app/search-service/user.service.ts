import { Injectable } from '@angular/core';
import {User} from '../user';
import {Repository} from '../repository';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  findUser:User;
  repos: Repository;
  constructor(private http:HttpClient) {
    this.findUser= new User("","","",0,"",new Date,0,0);
    this.repos = new Repository("","","",new Date);
   }
   userSearch(nameSearch:String){
     interface Response{
       name:string;
       login:string;
       avatar_url:string;
       public_repos:number;
       html_url:string;
       created_at:Date;
       followers:number;
       following:number;
     

     }


   }
}
