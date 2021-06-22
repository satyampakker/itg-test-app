import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';
import { CelebritiesComponent } from '../celebrities/celebrities.component';
import { MoviesComponent } from '../movies/movies.component';
import { VisualizeComponent } from '../visualize/visualize.component';
import { ActivatedRoute } from '@angular/router';
//import {TabMenuModule} from 'primeng/tabmenu';

//import {MenuItem} from 'primeng/api';
import { TabService } from '../../services/tab.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [CelebritiesComponent]
})
export class HomeComponent implements OnInit {

  httpError = false;
  isSuccessUpdate = false;
  isWarningUpdate = false;
  isErrorUpdate = false;
  isWaitingResponse = true;
  isWaitingConfirmation = false;

  
  activeTab = 'celeb';
  msg = '';
  //items: MenuItem[];
  @ViewChild(CelebritiesComponent, {static: false})
  private celebrityComponent: CelebritiesComponent;
  @ViewChild(MoviesComponent, {static: false})
  private movieComponent: MoviesComponent;
  //@ViewChild(VisualizeComponent, {static: false})
  //private visualizeComponent: VisualizeComponent;
  //items: MenuItem[];

  public index : number;

  constructor( private tabService: TabService,
               private userService: UserService ) { }

  ngOnInit() {  this.tabService.initTab();  }
  
  setActiveTab(t){
    this.tabService.setActiveTab(t);
  }

  search(term){

    this.isWaitingResponse = false;
    //call user service api here

    this.tabService.announceSearchMade(term);

/*
    this.userService.searchMovie(term).subscribe(
      resp => {
        console.log(JSON.stringify(resp, null, 4));
      },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.isWaitingResponse = false;
          this.httpError = true;
          this.isSuccessUpdate = false;
          this.isWarningUpdate = false;
          this.isErrorUpdate = true;
        },
        () => {

          this.httpError = false;
          this.isWaitingResponse = false;
          console.log("IN HTTPRESPONSE");

        }
    );
  */
    console.log("After making call in finish")










  }

  handleScrollDownCelebrities(event){

    //console.log("scroll occured event in celebrities: " + JSON.stringify(event, null, 2));
    if (event['isReachingBottom'] == true){

      console.log('reaching bottom of celebrities!');
      console.log(this);
      this.celebrityComponent.handleScrollDown(event);

    }
  }

  handleScrollDownMovies(event){

    //console.log("scroll occured event in movies: " + JSON.stringify(event, null, 2));
    if (event['isReachingBottom'] == true){

      console.log('reaching bottom of movies!');
      this.movieComponent.handleScrollDown(event);
    }
  }

    
  // handleScrollDownVisualize(event){

  //   //console.log("scroll occured event in visualize: " + JSON.stringify(event, null, 2));
  //   if (event['isReachingBottom'] == true){

  //     console.log('reaching bottom of visualize!');
  //     //this.visualizeComponent.handleScrollDown(event);
  //   }
  // }

  handleChange(e) {
    this.index = e.index;
    
  }

}
