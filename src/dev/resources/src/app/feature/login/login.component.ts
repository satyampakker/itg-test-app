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
  }

  loginUser() {
    console.log(this.username + this.password);
    this.authService.login(this.username, this.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    console.log(error);
                    //this.loading = false;
                });
  }

}
