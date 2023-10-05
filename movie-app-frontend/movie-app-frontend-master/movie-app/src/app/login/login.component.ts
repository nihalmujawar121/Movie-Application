import { Component, Input } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { UserDetails } from '../Model/User';
import { UserauthService } from '../userauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _snackBar: MatSnackBar,private userService:UserauthService,private route:Router) {}

  details: UserDetails = {};

  myToken:any;

  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar() {
    this._snackBar.open('Login Successfully!!', 'Welcome to MovieFlix ', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
    this.route.navigateByUrl("/home");
  }

  login(){
   this.userService.loginUser(this.details).subscribe({
    next:data=>{
     this.myToken=data;
     localStorage.setItem("Token",this.myToken.token);
     console.log("Token Generated");
     console.log(data)
    }
   })
   this.route.navigateByUrl("/home")
  }
}

