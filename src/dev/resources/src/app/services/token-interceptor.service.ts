import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import {catchError, map} from 'rxjs/operators'

import { AuthenticationService } from '../services/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = this.authService.currentUserValue;
    console.log('Intercept Htp Req');

  //   request = request.clone({
  //     headers: request.headers.set('Access-Control-Allow-Origin', '*'),
  //         //'origin': ' *',
  //         //'Content-Type': 'application/json'
  // });

    if (currentUser && currentUser.cognitoSession) {
        request = request.clone({
            headers: new HttpHeaders ({
                Authorization: `Bearer ${currentUser.cognitoSession}`
            })
        });
    }
    console.log(request);
    
    return next.handle(request)
      .pipe(map((event: HttpEvent<any>) => {
      return event; }),
      catchError((err: any) => {
      if (err.status === 401) {
           //this.authService.logoutUser();
          this.authService.logout();
      }
      console.log(err);
      const error = err.error;
      return throwError(error);
  })
  );
}

}
