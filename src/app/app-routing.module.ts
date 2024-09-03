import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { defaultIfEmpty } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LogInComponent } from './log-in/log-in.component';
import { DataresultComponent } from './dataresult/dataresult.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component : LogInComponent},
  {path:'createuser', component : CreateUserComponent},
  {path:'home', component : HomeComponent},
  {path:'usercenter' , component:UserCenterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
