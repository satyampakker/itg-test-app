import { Component, ViewChild, ContentChild } from '@angular/core';
import {AppGlobals } from '../app/app.global'
import { Router, ActivatedRoute } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AppGlobals, HomeComponent]
})
export class AppComponent {
  title = 'CoETechTraining-Web';
  isloginPage = true;
 
  @ContentChild(HomeComponent, {static: false})
  private homeComponent: HomeComponent;

  constructor(private global: AppGlobals){} //, private home : HomeComponent

ngoninit()
{
   this.global.isloginPage = this.isloginPage;
}

notLoginPage(){

  this.global.isloginPage = !this.isloginPage
  this.isloginPage = !this.isloginPage;
}

LoginPage()
{
  this.global.isloginPage = true;
  this.isloginPage = true;
}

handleScrollDown(event)
{
  console.log("Scroll Event");
  if (event['isReachingBottom'] == true){
    console.log('reaching bottom of AppComponent!');
    //this.homeComponent.handleScrollDownCelebrities(event);
    //console.log(event);
  }
}

}


