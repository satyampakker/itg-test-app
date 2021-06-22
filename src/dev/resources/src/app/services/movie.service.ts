import { Injectable } from '@angular/core';
//import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable, BehaviorSubject } from 'rxjs';
import { IMovie, ICelebrity } from '../models/data.model';
import { AppConfig } from '../configuration/app.config';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserService } from './user.service';
import jsonData from '../../assets/json/movies.json';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public celebRepo : ICelebrity[];

  pageNum = 0;
  private celebToPush: ICelebrity;
  public clickedMovie : IMovie;
  private _moviesReady = new BehaviorSubject <boolean> (false);
  _moviesReady$ = this._moviesReady.asObservable();
  private _movies: BehaviorSubject < IMovie[] > ;
  private dataStore: {
    movies: IMovie[] 
  }
  constructor( private appConfig: AppConfig,
    private http: HttpClient,
  //            private localStor: LocalStorage,
             private userService: UserService) { 
    this.dataStore = {
      movies: []
    }

    this._movies = new BehaviorSubject < IMovie[] > ([]);
  }

  getClickedMovie(): IMovie{
    console.log('returning our clicked movie'+this.clickedMovie);
    return this.clickedMovie;
  }

  setClickedMovie(movie){
    console.log('just set our clicked movie'+movie);//JSON.stringify(movie, null, 4));
    this.clickedMovie = movie;
    this.getMovieActorObjects(movie.id);
    console.log('after calling getactor objects method');
  }

  getmoviesList() : Observable <IMovie[]>
  {
    if(this.dataStore.movies.length == 0 ){
      this.loadMovies();
    }

    return this._movies.asObservable();
  }

  nextPage(){
    this.pageNum += 1;
    this.loadMovies();
  }

  getMovieActorObjects(movie){

    //make rest call, marshall data.
    this.userService.getMoviebyIdandCelebs(movie)
        .subscribe(data =>{

          console.log('here is our data!'+JSON.stringify(data['body']));

          //console.log('size of data:'+data['body'].length);

          //let restData = data['body']['rows'];
          //console.log('size:'+restData);
          //console.log('our rest data:'+JSON.stringify(data, null, 4));
          //console.log('our rest data attrib, celeb:'+restData['celeb']);
          //console.log('our rest data attrib, movie:'+restData['movie']);
          //console.log('size of restData'+restData.size);
          

/*
          for (let i = 1; i < data['body'].length; i++){
            //console.log('here is our rest data!'+JSON.stringify(data['body'][i], null, 4));
            
            //this.celebToPush = data['body'][i];
            console.log('name of celeb we got:'+this.celebToPush.name);
            this.celebRepo.push(data['body'][i]);
          }
*/
          /*restData.forEach( object => {

            console.log('here is our rest data!'+JSON.stringify(object, null, 4));
            this.celebToPush = object;
            this.celebRepo.push(this.celebToPush);

          });*/

        });
  }

  private loadMovies()
  {

    //Commenting the Micro services call and manually constructing the list
    //const endpoint = this.appConfig.CelebMSEP + '/findallmovies';
    // return this.http.get < IMovie[] > (endpoint)
    //   .subscribe(data => {
    //     this.dataStore.movies = data;
    //     this._movies.next(Object.assign({}, this.dataStore).movies);
    //   }, error => {
    //     console.log('Failed to fetch movies');
    //   });
   


    this.userService.getAllMoviesPSQL(this.pageNum, 99)
      .subscribe(movieObj => {

        let today = new Date();
        let year = today.getFullYear();
        let movieData = movieObj['body']['content'];
        //console.log('our data:'+JSON.stringify(movieData, null, 3));

        movieData.forEach( data => {

          console.log('hi from movieService');
          let plotText = data.plot;
          //console.log('movie from server:'+JSON.stringify(data, null, 4));
          if (plotText == null){
            plotText = ''
          } else { 

          if (Array.isArray(plotText)){

            plotText = plotText.join(',');
            //console.log('our plot was an array');
          }
            plotText = plotText.replace('\", \"', '\n');
			plotText = plotText.replace('\\', '');
            plotText = plotText.toString().substr(2, plotText.length-4); 
			//plotText = plotText.toString().substr(-2);

          }
          

          if (data.genres == null){
            data.genres = '';
          } else { 
			  let genreList = []
			  data.genres.forEach( genreString => {
				genreList.push(genreString.genre)
			  });
			  //console.log('our genres:'+JSON.stringify(genreList, null, 4));
			  data.genres = genreList.join( ' | ');

		  }
          if (data.writers == null){
            data.writers = '';
          } else { 
			  let writerList = []
			  data.writers.forEach( writerString => {
				  if (writerString.name == ""){
				  } else {

				writerList.push(writerString.name)
				  }
			  });
			  //console.log('our writers:'+JSON.stringify(data.writers, null, 4));
			  data.writers = writerList.join( ' | ');

		  }



          const obj = { 
            id: data.movieId,
            year: data.year,
            title: data.movieTitle,
            budget: data.budget,
            cover_url: data.coverUrl,
            actors: data.actors,
            genres: data.genres,
            directors: data.writers,
            distributors: data.productionCompanies,
            plot: plotText
          }


          //Add movies that are released in last 10 years
          if(obj.year >= year - 10)
            {
              console.log('about to push this obj into datastore:'+JSON.stringify(obj, null, 2));
              this.dataStore.movies.push(obj);
            }
        });

    /*    this.localStor.setItem('movies', JSON.stringify(this.dataStore.movies))
        .subscribe( () => {

          console.log('########### just in movies lenght:'+this.dataStore.movies.length);
        });*/
        this.dataStore.movies = this.dataStore.movies.sort((m1, m2) => {
          return m2.year - m1.year;
          /*if (m1.year > m2.year){
            return m1;
          } else { return m2; } */
        });
        this._movies.next(Object.assign({}, this.dataStore).movies);
        this._moviesReady.next(true);


      }, error => {
        console.log('in httpError in movieService');
      });




    /*
    var today = new Date();
    var year = today.getFullYear();
    console.log(year);
    
    for (let i = 0; i < jsonData.data.length; i++){
      
      let data = jsonData.data[i];

                          let plotText = data.plot;
                          if (Array.isArray(plotText)){

                            plotText = plotText.join(',');
                          }
                          plotText = plotText.toString().substr(0, 164) + '..';

                          
      const obj = { 
        id: i,
        year: data.year,
        title: data.title,
        budget: data.budget,
        cover_url: data.cover_url,
        actors: data.actors,
        genres: data.genres,
        directors: data.director,
        plot: plotText
      }
      

      //Add movies that are released in last 10 years
      if(obj.year >= year - 10)
      {
        this.dataStore.movies.push(obj);
      }
    }

    this._movies.next(Object.assign({}, this.dataStore).movies);
    */
  }
    getMovieProfile(MovieId : string) : Observable<HttpResponse<any[]>>
    {
      return this.http.get<any[]>(this.appConfig.backendAPIEP + '/movies/id/' + MovieId, { observe: 'response'});
    }
}
