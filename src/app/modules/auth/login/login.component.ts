import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthRequest } from 'src/app/models/UserAuthRequest';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formGroup: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ){

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required]
    })
  }

  onFormSubmit():void {
    // validate the form
    if(!this.formGroup?.valid){
      return;
    }

    // TODO call login method here
    console.log(this.formGroup.value);
  }

  public onLogin(userAuthRequest: UserAuthRequest): void {
    
  }

}
