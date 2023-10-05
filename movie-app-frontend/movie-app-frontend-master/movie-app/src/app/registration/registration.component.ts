import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { phoneNoValidator } from '../Validators/PhoneNumberValidator';
import { UserauthService } from '../userauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private userService:UserauthService,
    private route:Router
  ) {}

  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar() {
    this.userService.registerUser(this.registerForm.value).subscribe((data)=>console.log(data),e=>alert("Network issue"));
    this._snackBar.open('Registered Successfully!!', 'Welcome to MovieFlix', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
 this.route.navigateByUrl("/login")
  }
                                                
  // private String userEmailID;
  //   private String password;
  //   private String mobileNumber;
  //   private String userName;


  registerForm = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: [
      '',
      [
        Validators.pattern(
          /^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/
        ),
        Validators.minLength(8),
        Validators.required,
      ],
    ],
    mobileNumber: ['', [phoneNoValidator, Validators.required]],
    userEmailID: [
      '',
      [
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9  !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~€£¥₩])(?=.*?[A-Z 0-9]).{8,}$'
        ),
        Validators.required,
      ],
    ],
  });

  get userNameValidator() {
    return this.registerForm.get('userName');
  }

  get passwordValidator() {
    return this.registerForm.get('password');
  }

  get mobileNumberValidator() {
    return this.registerForm.get('mobileNumber');
  }

  get emailValidator() {
    return this.registerForm.get('userEmailID');
  }

  ngOnInit() {
    this.registerForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  // private String username;
  // private String password;
  // private String phoneNumber;
  // private String email;
}


