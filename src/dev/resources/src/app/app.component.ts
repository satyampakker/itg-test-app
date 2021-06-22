import { Component, ViewChild, ContentChild } from '@angular/core';
import {AppGlobals } from '../app/app.global'

import { flatten } from '@angular/compiler';
import { ScrollEvent } from 'ngx-scroll-event';
import { TabService } from './services/tab.service'; 
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

  constructor(private global: AppGlobals, private tabService: TabService ){}

 
  @ContentChild(HomeComponent, {static: false})
  private homeComponent: HomeComponent;



  //@ContentChild(HomeComponent, {static: false})
  //@ViewChild(HomeComponent, {static: false})
  //homeComponent: HomeComponent;


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
//    console.log("Scroll Event");
    if (event['isReachingBottom'] == true){
 //     console.log('reaching bottom of AppComponent!');

      //this.tabService.getActiveTab();

      this.tabService.announceScrollDown();

      //this.homeComponent.handleScrollDownCelebrities(event);
      console.log(event);
    }

  }

}
