import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AppGlobals } from '../../app.global'
import{CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppGlobals]
})
export class HeaderComponent implements OnInit {
  userVO : {}
  groups : []

  @Output() logoutEvent = new EventEmitter<boolean>();

  constructor(private _global: AppGlobals, 
    private cookieService: CookieService,
    private router: Router,
    private myapp : AppComponent,
    private authService: AuthenticationService) { }

  ngOnInit() {
    if (this.cookieService.check('userVO') === true) {
      this.userVO = this.cookieService.get('userVO');
    }

    // if (this.cookieService.check('groups') === true) {
    //   this.groups = JSON.parse(this.cookieService.get('groups'));
    // }
  }

  isUserLoggedIn()
  {
    if (this.authService.currentUserValue) {
      return true;
    }
      else {
        return false;
    }
  }

  LogOutUser() {
    this.authService.logout();
        this.router.navigate(['/login']);
  }

}
