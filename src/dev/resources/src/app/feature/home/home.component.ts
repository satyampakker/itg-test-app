import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';
import { CelebritiesComponent } from '../celebrities/celebrities.component';
import { MoviesComponent } from '../movies/movies.component';
import { VisualizeComponent } from '../visualize/visualize.component';
import { ActivatedRoute } from '@angular/router';
//import {TabMenuModule} from 'primeng/tabmenu';
//import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [CelebritiesComponent]
})
export class HomeComponent implements OnInit {


  @ViewChild(CelebritiesComponent, {static: false})
  private celebrityComponent: CelebritiesComponent;
  @ViewChild(MoviesComponent, {static: false})
  private movieComponent: MoviesComponent;
  //@ViewChild(VisualizeComponent, {static: false})
  //private visualizeComponent: VisualizeComponent;
  //items: MenuItem[];

  public index : number;

  constructor() { }

  ngOnInit() {
  //   this.items = [
  //     {label: 'Celebrities', icon: 'pi pi-star', routerLink: ['/celebrities']},
  //     {label: 'Movies', icon: 'pi pi-video', routerLink: ['/movies']},
  //     {label: 'Visualize', icon: 'pi pi-chart-bar', routerLink: ['/visualize']}
  // ];

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
