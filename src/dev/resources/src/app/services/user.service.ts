import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../configuration/app.config';
//import { promise } from 'protractor';
import { IUser, ILogin, IForgot } from '../models/user.model';
import { IMovie, ICelebrity, DataObject } from '../models/data.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //	__headers:
  __headers = {
    headers: new HttpHeaders({
      'ORIGIN': '*',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient, private appConfig: AppConfig, private cookieService: CookieService) {  }

  // authenticateUser(user : ILogin) : Observable<HttpResponse<IUser>> {
  //   const obj: any = {'userName': user.username, 'userPassword': user.password };
  //   const payload = <JSON>obj;
  //   return this.http.post<IUser>(this.appConfig.cognitoAPIEP + '/authenticate', payload, { observe: 'response' });
  // }
  /* 
     createAuthorizationHeader(): HttpHeaders {
  // Just checking is this._options is null using lodash
  if (isNull(this.__headers)) {
  this.__headers = {
headers: new HttpHeaders({
'ORIGIN': '*',
'Access-Control-Allow-Origin': '*'
})
};
}

return this.__headers;
}
   */
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

  searchMovie(title: string, num: number) : Observable<HttpResponse<IMovie>>{
    const obj: any = {
      "movieTitle" : title
    }
    const payload = <JSON>obj;
    return this.http.post<IMovie>(this.appConfig.backendAPIEP + '/movies/search', payload, { observe: 'response'});
  }

  getMoviebyIdandCelebs(movieId: string) : Observable<HttpResponse<DataObject>>{
    return this.http.get<DataObject>(this.appConfig.backendAPIEP + '/movies/id/' + movieId, { observe: 'response'});
  }

  getAllMoviesPSQL(pagenum: number, pagesize: number) : Observable<HttpResponse<IMovie>>{
    return this.http.get<IMovie>(this.appConfig.backendAPIEP + '/movies/' + pagenum + '/' + pagesize, { observe: 'response'});//, {headers: this.__headers});
  }

  getAllMoviesELS() : Observable<HttpResponse<IMovie>>{
    return this.http.get<IMovie>(this.appConfig.backendAPIEP + '/movies/els/', { observe: 'response'});
  }

  searchCelebrity(name: string, num: number) : Observable<HttpResponse<ICelebrity>>{
    const obj: any = {
      "celebrityName" : name
    }
    const payload = <JSON>obj;
    return this.http.post<ICelebrity>(this.appConfig.backendAPIEP + '/celebrities/search/' + num, payload, { observe: 'response'});
  }

  getAllCelebritiesPSQL(pagenum: number, pagesize: number) : Observable<HttpResponse<ICelebrity>>{
    return this.http.get<ICelebrity>(this.appConfig.backendAPIEP + '/celebrities/' + pagenum + '/' + pagesize, { observe: 'response'});//, {headers: this.__headers});
  }

  getAllCelebritiesELS() : Observable<HttpResponse<ICelebrity>>{
    return this.http.get<ICelebrity>(this.appConfig.backendAPIEP + '/celebrities/els/', { observe: 'response'});
  }
  getCelebrityProfile(CelebId : string) : Observable<HttpResponse<ICelebrity>>
  {
    return this.http.get<ICelebrity>(this.appConfig.backendAPIEP + '/celebrities/id/' + CelebId, { observe: 'response'});
  }

}
