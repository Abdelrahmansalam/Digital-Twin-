import { Component } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {


    constructor(private _AuthService:AuthService , private _Router:Router){}
    isLoading:boolean=true;
  apiError:string = '';
    loginForm:FormGroup =new FormGroup({
      login: new FormControl(null , [Validators.required , Validators.minLength(3)]),
      password: new FormControl(null , [Validators.required , Validators.minLength(6)]),
    })
    handlelogin(loginForm:FormGroup){
      if(loginForm.valid)
      {
        this._AuthService.login(loginForm.value).subscribe({
  
          next: (response) => {
            if (response && response.accessToken) {
              this.isLoading=false;
              localStorage.setItem('userToken' , response.accessToken)
              this._AuthService.decodeUserData();
              this._Router.navigate(['/home'])
            }
          },
          
          error:(err)=>{
            this.isLoading=false;
            this.apiError=err.error.message;
            console.log(err.error.message)
          }
          
        })
      }
      this.loginForm.markAllAsTouched();
      console.log(loginForm.value);   
    }
  }
  

