import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { AppGlobals } from '../../app.global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  isSuccessUpdate = false;
  isWarningUpdate = false;
  isErrorUpdate = false;

  isWaitingResponse = true;
  isWaitingConfirmation = false;
  confCode = "";
  newPass = "";

  userName = "";
  notValidPass = false;
  usernameError = false;
  firstNameError = false;
  lastNameError = false;
  firstName = '';
  lastName = '';
  httpError = false;



  constructor( private userService: UserService,
               private router : Router          ) { }

 ngOnInit() {
  }
  

  isValid() {
    return !(this.isUpper() === false && this.isLower() === false
      && this.isLong() === false && this.isSpecial() === false && this.isNumber() === false);
  }

  isUpper() {
    return /[A-Z]/.test(this.newPass) === false;
  }

  isLower() {
    return /[a-z]/.test(this.newPass) === false;
  }

  isNumber() {
    return /[0-9]/.test(this.newPass) === false;
  }

  isSpecial() {
    return /[!-*,-/:-<>-@[-`{-~]/.test(this.newPass) === false;
  }

  isLong() {
    return this.newPass.length < 8;
  }

  beginSetTempPassword(u){

    this.userName = u;
    console.log(u);
    //call user service api here
    this.userService.beginResetPassword(u).subscribe(
      resp => {
        console.log(JSON.stringify(resp, null, 4));
        this.isWaitingConfirmation = true;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.isSuccessUpdate = false;
          this.isWarningUpdate = false;
          this.isErrorUpdate = true;
        }



    );
    console.log("After making call")
  }

  finishSetTempPassword(code, newpass){
      
    console.log(code)
    this.isWaitingResponse = false;
    //call user service api here
    this.userService.finishResetPassword(this.userName, code, newpass).subscribe(
      resp => {
        console.log(JSON.stringify(resp, null, 4));
      },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.isWaitingResponse = false;
          this.httpError = true;
          this.isSuccessUpdate = false;
          this.isWarningUpdate = false;
          this.isErrorUpdate = true;
        },
        () => {

          this.httpError = false;
          this.isWaitingResponse = false;
          console.log("IN HTTPRESPONSE");

          alert("Password successfully reset!");
          this.router.navigateByUrl('');
        }
    );
    console.log("After making call in finish")

  }

}
