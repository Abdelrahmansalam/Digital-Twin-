import { Component } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
constructor(private _AuthService:AuthService){}
apiError:string = '';
  creatUserForm:FormGroup =new FormGroup({
    login: new FormControl(null , [Validators.required , Validators.minLength(3)]),
    password: new FormControl(null , [Validators.required , Validators.minLength(6)]),
    role: new FormControl(null , [Validators.required]),

  })
  handleRegister(creatUserForm:FormGroup){
    if(creatUserForm.valid)
    {
      this._AuthService.creatUser(creatUserForm.value).subscribe({

        next:(responce)=>{
          
        },
        
        error:(err)=>{
          this.apiError=err.error.message;
          console.log(err.error.message)
        }
        
      })
    }
    this.creatUserForm.markAllAsTouched();
    console.log(creatUserForm.value);   
  }
}
