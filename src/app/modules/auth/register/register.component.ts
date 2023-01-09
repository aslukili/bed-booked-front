import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role, FilteredRole } from 'src/app/enums/role';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup | undefined;


  // convert the keys from FilteredRole to values
  roles: {[key in FilteredRole]: string} = {
    [Role.USER]: 'User',
    [Role.OWNER]: 'Owner'
  };

  roleValues: FilteredRole[] = Object.keys(this.roles).map(key => Number(key)) as FilteredRole[];

  constructor(
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        firstName: [undefined, Validators.required],
        lastName: [undefined, Validators.required],
        email: [undefined, [Validators.required, Validators.email]],
        password: [undefined, [Validators.required, Validators.minLength(5)]],
        roleId: [undefined]
      }
    )
  }

  onFormSubmit():void {
    // validate the form
    if(!this.formGroup?.valid){
      return;
    }

    // TODO call login method here
    console.log(this.formGroup.value);
  }

}
