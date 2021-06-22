import { Component, OnInit } from '@angular/core';
import { IMovie} from 'src/app/models/data.model';
import { MovieService} from 'src/app/services/movie.service';
import { CompileStylesheetMetadata } from '@angular/compiler';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

    MoviesList : IMovie[];
  localMovieList: any = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getmoviesList();
  }

  private getmoviesList(){
    this.movieService.getmoviesList().subscribe(movie => { 
      this.MoviesList = movie; 
      localStorage.setItem('movies', JSON.stringify(movie)); 
      //console.log(movie);
    } );
    console.log(this.MoviesList);
  
    for (let i = 0; i < 100; i++) { this.localMovieList.push(this.MoviesList[i]); }
  }


  handleScrollDown(event){


    if (event['isReachingBottom'] == true){

      let lim = this.localMovieList.length;

      if (lim == this.MoviesList.length){
        return;
      }

      for(let i = lim; i < lim+15; i++){ this.localMovieList.push(this.MoviesList[i]); }

    }
  }

}
