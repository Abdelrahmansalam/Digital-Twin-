import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss']
})
export class UserCenterComponent implements OnInit {

  changePasswordForm!: FormGroup;

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      'currentPassword': new FormControl(null, Validators.required),
      'newPassword': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,14}$/)]),
      'confirmPassword': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,14}$/)])
    });
  }

  onSubmitChangePassword() {
    // Handle the form submission here
    console.log(this.changePasswordForm.value);
  }

 
}