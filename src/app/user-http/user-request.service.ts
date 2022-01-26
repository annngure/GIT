import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import{User} from '../user'
import { Repository } from '../repository';
@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
    users:User;
    repos:Repository;
  constructor(private http:HttpClient) {
     this.users=new User("","","",0,"",new Date,0,0)
     this.repos=new Repository("","","",new Date)
   }
   userSearch(username:string){
     interface ApiResponse{
      name:string;
      login:string;
      avatar_url:string;
      public_repos:number;
      html_url:string;
      created_at:Date;
      followers:number;
      following:number; 
     }
     let promise=new Promise<void>((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl + `${username}?` + environment.apikey).toPromise().then(response=>{
         this.users.name= response!.name
         this.users.login =response!.login
         this.users.avatar_url=response!.avatar_url
         this.users.public_repos=response!.public_repos
         this.users.html_url=response!.html_url
         this.users.created_at=response!.created_at
         this.users.followers=response!.followers
         this.users.following=response!.following
        
         resolve()
       },
       error=>{
         this.users.name="Ann"
         this.users.login="annwanjikungure@gmail.com"
         
       
         reject(error)
        })
     })
     return promise
   }

}
