import { Injectable } from '@angular/core';
import {User} from './user';
import {Repository} from '../repository';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  findUser:User;
  repos: Repository;
  constructor(private http:HttpClient) {
    this.findUser= new User("","","","",0,0,0,"","",new Date);
    this.repos = new Repository("","","",new Date,0,0,"");
   }
   userSearch(nameSearch:String){
     interface Response{
       url:string;
       login:string;
       html_url:string;
       location:string;
       public_repos:number;
       followers:number;
       following:number;
       avatar_url:string;
       bio:string;
       created_at:Date;

     }



   }
}
