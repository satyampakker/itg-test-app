import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { CookieService } from 'ngx-cookie-service';
//import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { AppConfig } from 'src/app/configuration/app.config';
import { AppComponent } from 'src/app/app.component';
//import { UserService } from 'src/app/services/user.service';
//import { IUser, ILogin } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  error: string;
  username: string;
  password: string;
  newuserConfirmationMsg : string;
  usernamelogin : string;

  constructor(private router: Router,
              private route: ActivatedRoute, 
              private myapp: AppComponent,
              private authService: AuthenticationService) { 
               // redirect to home if already logged in
                if (this.authService.currentUserValue) { 
                  this.router.navigate(['/']);
                  }
              }

  ngOnInit() {

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.route.queryParams.subscribe(params => {
      console.log(JSON.stringify(params.usernamelogin));
     // this.usernamelogin = params.get ('usernamelogin');

      if (params['usernamelogin'])
      {
      this.newuserConfirmationMsg=params.usernamelogin + ' has been registered successfully, please sign in!'; // popular4
      }
    
 });

  }

  loginUser() {
    console.log(this.username + this.password);
    this.authService.login(this.username, this.password)
            .pipe(first())
            .subscribe(
              resp => {
                  console.log(resp);
                  if(resp.status == 202)
                  {
                    console.log('First time user: Redirect to Confirm/Change password page')
                    this.router.navigate(['/confirm']);
                  }
                  else
                  {
                    this.router.navigate([this.returnUrl]);
                  }
                },
                error => {
                    this.error = "Invalid Username or Password";
                    console.log('loging error');
                    console.log(this.error);
                    //this.loading = false;
                });
  }

}
