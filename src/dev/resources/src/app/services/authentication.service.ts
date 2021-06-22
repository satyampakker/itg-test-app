import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUser } from '../models/user.model';
import { AppConfig } from '../configuration/app.config';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;
  __headers = {
        headers: new HttpHeaders({
          'ORIGIN': '*',
          'Access-Control-Allow-Origin': '*'
        })
      };

  constructor(private http: HttpClient, private appConfig: AppConfig) {
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
}

public get currentUserValue(): IUser {
    return this.currentUserSubject.value;
}

login(username: string, password: string) {
  const obj: any = {'userName': username, 'userPassword': password };
  const payload = <JSON>obj;
  return this.http.post<any>(this.appConfig.cognitoAPIEP + '/authenticate', payload)
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      }));
}

signUp(firstname: string, lastname:string, email: string,  username: string, password: string) {
  const obj: any = {'firstname': firstname, 'lastname': lastname, 'email':email,'username': username, 'password': password };
  const payloadreg = <JSON>obj;
  console.log (payloadreg);
  return this.http.post<any>(this.appConfig.cognitoAPIEP + '/signUp', payloadreg)
      .pipe(map(resp => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          
          console.log ("response values" + resp);
        //  this.currentUserSubject.next(user);
          return resp;
      }));
}

signUpConfirm(username: string, confirmationcode: string) {
  const obj: any = {'username': username, 'confirmationcode': confirmationcode};
  const payloadreg = <JSON>obj;
  console.log (payloadreg);
  return this.http.post<any>(this.appConfig.cognitoAPIEP + '/signUpConfirm', payloadreg)
      .pipe(map(resp => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
      //    console.log (resp);
        //  this.currentUserSubject.next(user);
          return resp;
      }));
}

logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
}

}
