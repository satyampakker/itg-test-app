import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {CookieService } from 'ngx-cookie-service'
import { AppRoutingModule } from './app-routing.module';
import {AppConfigModule} from './configuration/app-config.module'

import {TokenInterceptorService} from './services/token-interceptor.service'

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './feature/login/login.component';
import { ContactComponent } from './feature/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './feature/home/home.component';
import { ConfirmComponent } from './feature/confirm/confirm.component';
import { ForgotPasswordComponent } from './feature/forgot-password/forgot-password.component';
import { CelebritiesComponent } from './feature/celebrities/celebrities.component';
import {TabViewModule} from 'primeng/tabview';
import { MoviesComponent } from './feature/movies/movies.component';
import { VisualizeComponent } from './feature/visualize/visualize.component';
import {CardModule} from 'primeng/card';
import { CelebrityprofileComponent } from './feature/celebrityprofile/celebrityprofile.component';
import { MovieprofileComponent } from './feature/movieprofile/movieprofile.component';
import {ButtonModule} from 'primeng/button';
import { AuthGuard } from './helpers/auth-guard';
import { TabMenuModule } from 'primeng/tabmenu';
import { ScrollEventModule } from 'ngx-scroll-event';

import { HighchartsChartModule } from 'highcharts-angular';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'confirm', component: ConfirmComponent  },
  { path: 'contact', component: ContactComponent },
  { path: 'celebrities', component: CelebritiesComponent, canActivate: [AuthGuard] },
  { path: 'celebrity/:id', component: CelebrityprofileComponent, canActivate: [AuthGuard] },
  { path: 'movie/:id', component: MovieprofileComponent, canActivate: [AuthGuard] },

   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ContactComponent,
    HomeComponent,
    ConfirmComponent,
    ForgotPasswordComponent,
    CelebritiesComponent,
    MoviesComponent,
    VisualizeComponent,
    CelebrityprofileComponent,
    MovieprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ScrollEventModule,
    HttpClientModule,
    AppConfigModule,
    TabViewModule,
    CardModule,
    ButtonModule,
    TabMenuModule,
    HighchartsChartModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
    CookieService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
