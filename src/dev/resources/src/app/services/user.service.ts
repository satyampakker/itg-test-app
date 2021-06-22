import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../configuration/app.config';
//import { promise } from 'protractor';
import { IUser, ILogin, IForgot } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private appConfig: AppConfig, private cookieService: CookieService) {  }

  // authenticateUser(user : ILogin) : Observable<HttpResponse<IUser>> {
  //   const obj: any = {'userName': user.username, 'userPassword': user.password };
  //   const payload = <JSON>obj;
  //   return this.http.post<IUser>(this.appConfig.cognitoAPIEP + '/authenticate', payload, { observe: 'response' });
  // }

  confirmUser(user: ILogin) : Observable<HttpResponse<IUser>>{
    const obj: any = {
      'username': user.username,
      'tempPassword': user.temppassword,
      'password': user.newpassword,
      'confPassword': user.confpassword,
      'session': this.cookieService.get('session')};
    const payload = <JSON>obj;

    return this.http.post<IUser>(this.appConfig.cognitoAPIEP + '/authenticate2', payload, { observe: 'response' });
  }

  beginResetPassword(user: string) : Observable<IForgot>{
    return this.http.post<IForgot>(this.appConfig.cognitoAPIEP + '/forgotPassword/' + user, { observe: 'response' });
  }

  finishResetPassword(user: string, code: string, newpass: string) : Observable<IForgot>{
    return this.http.post<IForgot>(this.appConfig.cognitoAPIEP + '/confirmPassword/' + user + '/' + code + '/' + newpass, { observe: 'response'});
  }

}
