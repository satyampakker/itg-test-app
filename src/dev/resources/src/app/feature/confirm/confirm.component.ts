import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';
import { ILogin } from 'src/app/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
  providers: [HeaderComponent]
})
export class ConfirmComponent implements OnInit {

  loginObj: ILogin = {  username: this.cookieService.get('username'),
                        password: '',
                        newpassword: '',
                        temppassword: '',
                        confpassword: '',
                      };
  

  constructor(private cookieService: CookieService, private userService: UserService, private router: Router, private header: HeaderComponent) { }

  ngOnInit() {
  }

  isSame() {
    return !(this.loginObj.newpassword === this.loginObj.confpassword && this.isUpper() === false && this.isLower() === false
      && this.isLong() === false && this.isSpecial() === false && this.isNumber() === false);
  }

  isUpper() {
    return /[A-Z]/.test(this.loginObj.newpassword) === false;
  }

  isLower() {
    return /[a-z]/.test(this.loginObj.newpassword) === false;
  }

  isNumber() {
    return /[0-9]/.test(this.loginObj.newpassword) === false;
  }

  isSpecial() {
    return /[!-*,-/:-<>-@[-`{-~]/.test(this.loginObj.newpassword) === false;
  }

  isLong() {
    return this.loginObj.newpassword.length < 8;
  }

  updateUser() {
    // const obj: any = {
    //   'username': this.username,
    //   'tempPassword': this.temppassword,
    //   'password': this.newpassword,
    //   'confPassword': this.confpassword,
    //   'session': this.cookieService.get('session')};
    // this.payload = <JSON>obj;
    this.userService.confirmUser(this.loginObj).subscribe(res => {
      this.isLogOut();
    },
    (err: HttpErrorResponse) => {});

    // this.http.post(this.sg['baseAPIUrl'] + '/authenticate2', this.payload, {headers: this.createAuthorizationHeader()}).subscribe(res => {
    //     /*this.cookie.set('userVo', JSON.stringify(res));
    //     for (let x = 0; x < res['groups'].length; x++) {
    //       this.groups.push(res['groups'][x]['groupName']);
    //     }
    //     this.cookie.set('groups', JSON.stringify(this.groups));
    //     this.cookie.delete('session');
    //     this.router.navigateByUrl('/user');*/
    //     this.isLogOut();
    //   },
    //   (err: HttpErrorResponse) => {});
  }

  isLogOut() {
    this.cookieService.deleteAll();
    //this.header.resetAll();
    this.router.navigateByUrl('/');
  }

}
