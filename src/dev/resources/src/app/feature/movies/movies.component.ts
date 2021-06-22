import { Component, OnInit, DoCheck } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { IMovie} from 'src/app/models/data.model';
import { MovieService} from 'src/app/services/movie.service';
import { CompileStylesheetMetadata } from '@angular/compiler';
import { TabService } from '../../services/tab.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalMovieComponent } from '../modal-movie/modal-movie.component';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, DoCheck {


  MoviesList : IMovie[];
  localMovieList: any = [];
  subStatus = 'rest';
  searchSubStatus = 'rest';
  subscription: Subscription;
  searchSubscription: Subscription;
  loadStatus = 'load';
  searchStatus = 'search';
  searchNum = 0;
  searchMade = false;




  httpError = false;
  isSuccessUpdate = false;
  isWarningUpdate = false;
  isErrorUpdate = false;
  isWaitingResponse = true;
  isWaitingConfirmation = false;


  constructor( private movieService: MovieService,
               private modalService: NgbModal,
               private tabService: TabService,
               private router: Router,
               private userService: UserService   ) { 

                this.subscription = tabService.movieTab$.subscribe(
                  movieTab => {
                    this.subStatus = movieTab;
                  });
                  this.subscription = tabService.movieSearch$.subscribe(
                    movieSearch => {
                      this.searchSubStatus = movieSearch;
                    });

              }
              ngOnInit() {
                this.getmoviesList();
              }

              openFullMovieView(obj){
                this.movieService.setClickedMovie(obj);
                console.log('here we are navigating to our movie profile with movie:'+obj.title);
                this.router.navigate(['movieprofile/']);
              }

              testMovieService(){
                let mov = this.movieService.getClickedMovie();
                console.log('getting movie back from service'+JSON.stringify(mov, null, 4));
              }

              openModal(movieItem) {
                const modalRef = this.modalService.open(ModalMovieComponent);

                modalRef.componentInstance.movieObject = movieItem;
                //this.movieService.setClickedMovie(movieItem);

                modalRef.componentInstance.passEntry.subscribe(entry => {

                  console.log(entry);
                  if (entry == 'close'){
                    modalRef.close();
                  }
                  else {
                    this.openFullMovieView(movieItem);
                  }
                });
               
              }

              loadMoreData(){
                let lim = this.MoviesList.length;
                console.log("HERE WE ARE IN LOAD MORE DATA, SIZE OF LOCAL: " + this.localMovieList.length + " MOVIESLIST: " + this.MoviesList.length);

                if (lim == this.localMovieList.length){
                  if (this.searchMade) { return; }
                  console.log("TELLING SERVICE WE NEED ANOTHER PAGE");
                  this.movieService.nextPage();
                  return;
                }

                let localLim = this.localMovieList.length;

                //console.log("lim: " + lim + " our full MoviesList: " + JSON.stringify(this.MoviesList, null, 4));
                for(let i = localLim; i < localLim+3; i++){ 

                  if (i == lim){ break; }

                  //console.log("PUSHING: " + JSON.stringify(this.MoviesList[i], null, 2));
                  if (this.MoviesList[i]){
                  this.localMovieList.push(this.MoviesList[i]); 
                  }
                }

              }

              ngDoCheck(){
                //console.log("INSIDE DOCHECK, tabStatus: " + this.subStatus);
                if (this.subStatus != 'rest'){

                  if (this.subStatus == this.loadStatus){

                    //load more data
                    this.loadMoreData();
                    console.log("Just loaded more data!");

                    //then once data load is finished
                    this.tabService.announceLoadFinishedMovie();
                    console.log("Just let service know we are done loading data");

                  }

                  if (this.subStatus == this.searchStatus) {
                    console.log("Okay we are searching for " + this.searchSubStatus);

                    this.searchMade = true;
                    this.subStatus = 'rest';
                    this.MoviesList = [];
                    this.localMovieList = [];

                    this.userService.searchMovie(this.searchSubStatus, this.searchNum).subscribe(
                      resp => {

                        console.log(JSON.stringify(resp['body'], null, 4));

                        this.searchNum += 1;
                        let data = resp['body'];

                        for (let i = 0; i < data['rows'].length; i++){

                          console.log(JSON.stringify(data['rows'][i], null, 4));

                          let objData = data['rows'][i];
                          let plotText = objData.plot;
//--


                          /*
                             let miniBioText = objData.mini_biography.substr(2, 164) + '..';
                             console.log(miniBioText);
                             console.log(Array.isArray(miniBioText));

                             if (Array.isArray(miniBioText)){

                             miniBioText = miniBioText.join(',');
                             }

                             const obj = {
id: i,
name: objData.celebritiesname,
nickname : objData.nickname,
birthdate : objData.birthdate,
birthplace: objData.birth_place,
minibio: miniBioText,
height : objData.height,
headshot : objData.headshot,
moviesList : 'none',
          if (plotText == null){
            plotText = ''
          } else { 

          if (Array.isArray(plotText)){

            plotText = plotText.join(',');
            //console.log('our plot was an array');
          }
            plotText = plotText.replace('\", \"', '\n');
            plotText = plotText.toString().substr(0, 164) + '..'; 

          }
          

          if (data.genres == null){
            data.genres = '';
          } else { data.genres = data.genres.join( ' | '); }

          const obj = { 
            id: data.id,
            year: data.year,
            title: data.title,
            budget: data.budget,
            cover_url: data.cover_url,
            actors: data.actors,
            genres: data.genres,
            directors: data.director,
            distributors: data.distributors,
            plot: plotText
          }


}*/
          if (plotText == null){
            plotText = ''
          } else { 

          if (Array.isArray(plotText)){

            plotText = plotText.join(',');
            //console.log('our plot was an array');
          }
            plotText = plotText.replace('\", \"', '\n');
//            plotText = plotText.toString().substr(0, 164) + '..'; 

          }
          

          if (objData.genres == null){
            objData.genres = '';
          } else { objData.genres = objData.genres.join( ' | '); }

                          

                          const obj = { 
                            id: objData.id,
                            year: objData.year,
                            title: objData.title,
                            budget: objData.budget,
                            cover_url: objData.cover_url,
                            actors: objData.actors,
                            genres: objData.genres,
                            directors: objData.director,
                            distributors: objData.distributors,
                            plot: plotText
                          }


                          console.log("FIRST OBJECT: " + JSON.stringify(objData, null, 2));
                          console.log("SECOND OBJECT: " + JSON.stringify(obj, null, 2));
                          this.MoviesList.push(obj);

                        }


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
                    this.tabService.announceSearchFinishedMovie();
                    this.displayResults();

                      }
                    );


                  }
                }

              }
              
              displayResults(){
                console.log("HERE WE ARE DISPLAYING RESULTS");

                let lim = this.localMovieList.length;
                console.log("VBNM LIM:" + lim);
                if (this.MoviesList.length == 0){
                  this.MoviesList = [];
                  return;
                }
                if (lim == this.MoviesList.length){
                  console.log("RETURNING BECAUSE REACHED LIMIT");
                  return;
                }

                for(let i = lim; i < lim+6; i++){ 
                  if (this.MoviesList[i]){
                  this.localMovieList.push(this.MoviesList[i]); 
                  }
                }
              }
       


  private getmoviesList(){
    this.movieService.getmoviesList().subscribe(movie => { 
      this.MoviesList = movie; 
      localStorage.setItem('movies', JSON.stringify(movie)); 
      //console.log(movie);

      for(let m of movie) {
        if (this.localMovieList.length == 15) { break; }
        this.localMovieList.push(m)
      }

    });
  
  }

  clickProfile(item){
    this.router.navigate(['/movieprofile'], { queryParams: { id: item.id } } );
  }

  handleScrollDown(event){

    console.log('HANDLING SCROLLDOWN EVENT');
    if (event['isReachingBottom'] == true){

      let lim = this.localMovieList.length;

      if (lim == this.MoviesList.length){
        return;
      }

      for(let i = lim; i < lim+15; i++){ this.localMovieList.push(this.MoviesList[i]); }

    }
  }
}
