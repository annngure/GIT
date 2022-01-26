import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'user',component:UserComponent}
];
        
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
           
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
