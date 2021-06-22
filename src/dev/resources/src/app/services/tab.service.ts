import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  _tab: number;
  
  private celebTabSource = new Subject<string>();
  private celebSearchSource = new Subject<string>();
  private movieTabSource = new Subject<string>();
  private movieSearchSource = new Subject<string>();
  private visTabSource = new Subject<string>();
  private visSearchSource = new Subject<string>();

  private visReadySource = new Subject<boolean>();
  private moviesStored = new Subject<boolean>();
  private celebsStored = new Subject<boolean>();

  celebTab$ = this.celebTabSource.asObservable();
  celebSearch$ = this.celebSearchSource.asObservable();
  movieTab$ = this.movieTabSource.asObservable();
  movieSearch$ = this.movieSearchSource.asObservable();
  visTab$ = this.visTabSource.asObservable();

  visReady$ = this.visReadySource.asObservable();
  moviesStored$ = this.moviesStored.asObservable();
  celebsStored$ = this.celebsStored.asObservable();

  constructor() { }

  announceScrollDown(){
    if (this._tab == 0){
      this.announceScrollDownCelebrity();
    }
    if (this._tab == 1){
      this.announceScrollDownMovie();
    }
    if (this._tab == 2){
      this.announceScrollDownVis();
    }
  }

  announceSearchMade(searchTerm){

    //console.log("In tabservice, searchTerm: " + searchTerm);
    if (this._tab == 0){
      //search in celebrities

      console.log("We tried to search in celeb tab!");
      this.announceSearchCelebrity(searchTerm);
    }
    if (this._tab == 1){
      //search in movies

      console.log("We tried to search in movie tab!");
      this.announceSearchMovie(searchTerm);
    }
    if (this._tab == 2){

      console.log("We tried to search in vis tab!");
      this.announceSearchVis(searchTerm);
    }

  }

  announceSearchCelebrity(s){
    this.celebSearchSource.next(s);
    this.celebTabSource.next("search");
    console.log("setting next celebrity search source in service");

  }
  announceSearchMovie(s){
    this.movieSearchSource.next(s);
    this.movieTabSource.next("search");
    console.log("setting next movie search source in service");

  }
  announceSearchVis(s){
    this.visSearchSource.next(s);
    this.visTabSource.next("search");
    console.log("setting next vis search source in service");

  }
  
  announceSearchFinishedCelebrity(){
    this.celebSearchSource.next('rest');
    this.celebTabSource.next('rest');
    console.log("setting next celebrity search source in service");

  }
  announceSearchFinishedMovie(){
    this.movieSearchSource.next('rest');
    this.movieTabSource.next('rest');
    console.log("setting next movie search source in service");

  }
  announceSearchFinishedVis(){
    this.visSearchSource.next('rest');
    this.visTabSource.next('rest');
    console.log("setting next vis search source in service");

  }


  announceScrollDownCelebrity(){
    this.celebTabSource.next("load");
    console.log("setting next celebrity observable in service");
  }

  announceLoadFinishedCelebrity(){
    this.celebTabSource.next("rest");
    console.log("setting default celebrity observable in service");
  }

  announceScrollDownMovie(){
    this.movieTabSource.next("load");
    console.log("setting next movie observable in service");
  }

  announceLoadFinishedMovie(){
    this.movieTabSource.next("rest");
    console.log("setting default movie observable in service");
  }

  announceScrollDownVis(){
    this.visTabSource.next("load");
    console.log("setting next vis observable in service");
  }

  announceLoadFinishedVis(){
    this.visTabSource.next("rest");
    console.log("setting default vis observable in service");
  }



  initTab(){
    this._tab = 0;
  }

  setActiveTab(e){
    this._tab = e.index;
    console.log("in setActiveTab in service.");
  }

  getActiveTab(){
    console.log("Getting active tab in service: " + this._tab);
    return this._tab;
  }
}
