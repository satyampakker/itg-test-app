import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IMovie } from '../models/data.model';
import { AppConfig } from '../configuration/app.config';
import { HttpClient } from '@angular/common/http';
import jsonData from '../../assets/json/movies.json';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _movies: BehaviorSubject < IMovie[] > ;
  private dataStore: {
    movies: IMovie[] 
  }
  constructor( private appConfig: AppConfig,
    private http: HttpClient) { 
    this.dataStore = {
      movies: []
    }

    this._movies = new BehaviorSubject < IMovie[] > ([]);
  }

  getmoviesList() : Observable <IMovie[]>
  {
    if(this.dataStore.movies.length == 0 ){
      this.loadMovies();
    }

    return this._movies.asObservable();
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

    var today = new Date();
    var year = today.getFullYear();
    console.log(year);
    
    for (let i = 0; i < jsonData.data.length; i++){
      
      let data = jsonData.data[i];

      const obj = { 
        id: i,
        year: data.year,
        title: data.title,
        budget: data.budget,
        cover_url: data.cover_url,
        actors: data.actors,
        genres: data.genres,
        directors: data.director,
        plot: data.plot
      }

      //Add movies that are released in last 10 years
      if(obj.year >= year - 10)
      {
        this.dataStore.movies.push(obj);
      }
    }
    /*
    const movList : IMovie[] = [
      {
        id: 1,
        year: 2008,
        title: "Iron Man",
        budget: "$140,000,000 (estimated)",
        cover_url: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SY150_CR0,0,101,150_.jpg",
        actors: [ "Robert Downey Jr.", "Terrence Howard","Jeff Bridges", "Obadiah Stane"],
        genres: [ "Action", "Adventure", "Sci-Fi"],
        directors: [ "Jon Favreau"],
        plot: ["After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        "Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, he's given a ride on enemy lines. That ride ends badly when Stark's Humvee that he's riding in is attacked by enemy combatants. He survives - barely - with a chest full of shrapnel and a car battery attached to his heart. In order to survive he comes up with a way to miniaturize the battery and figures out that the battery can power something else. Thus Iron Man is born. He uses the primitive device to escape from the cave in Iraq. Once back home, he then begins work on perfecting the Iron Man suit. But the man who was put in charge of Stark Industries has plans of his own to take over Tony's technology for other matters." ]   
      },
      {
        id: 2,
        year: 2016,
        title: "Donald Trump's The Art of the Deal: The Movie",
        budget: "N/A",
        cover_url : "https://m.media-amazon.com/images/M/MV5BODcyNTk1ZGYtYzcwYy00Y2FiLTk4MjQtNmRlZmMyYWY1NzBkXkEyXkFqcGdeQXVyMjU3NDQ3MDg@._V1_SX101_CR0,0,101,150_.jpg",
        actors: [ "Johnny Depp", "Ron Howard", "Alfred Molina", "Robert Morse", "Patton Oswalt"],
        genres: [ "Comedy"],
        directors: [ "Jeremy Konner"],
        plot: [ "Funny or Die presents a satirical rendition of Donald Trump''s 1987 best selling business book, The Art of the Deal.", "Donald Trump has it all. Money, power, respect, and an Eastern European bride. But all his success didn''t come for nothing. First, he inherited millions of dollars from his rich father, then he grabbed New York City by the balls. Now you can learn the art of negotiation, real estate, and high-quality brass in this illuminating made-for-TV special feature, Funny Or Die Presents Donald Trump''s The Art Of The Deal: The Movie."]
      },
      {
        id: 3,
        year: 2016,
        title: "Kindergarten Cop",
        budget: "$26,000,000 (estimated)",
        cover_url: "https://m.media-amazon.com/images/M/MV5BMjMyMTIyOTc0N15BMl5BanBnXkFtZTgwODY1NTk4NjE@._V1_SX101_CR0,0,101,150_.jpg",
        actors: [ "Arnold Schwarzenegger","Penelope Ann Miller","Pamela Reed","Linda Hunt","Richard Tyson"],
        genres: [ "Comedy", "Crime"],
        directors: [ "Ivan Reitman"],
        plot: ["A tough cop must pose as a kindergarten teacher in order to locate a dangerous criminal's ex-wife, who may hold the key to putting him behind bars.",
        "After numerous fruitless attempts, the veteran LAPD Detective, John Kimble, has one last chance to put behind bars once and for all the elusive drug kingpin, Cullen Crisp, who is trying to find the whereabouts of his son and his ex-wife who run away with millions of dollars. In high hopes of picking up clues, the massive officer finds himself at a bustling elementary school in Astoria, Oregon, posing as a substitute kindergarten teacher; however, to keep up the ruse without blowing his cover, John must keep under control a noisy classroom full of intimidating five-year-old adversaries. Can Kimble show them who's boss?"]
       }
    ]

    this.dataStore.movies = movList;
    */


    this._movies.next(Object.assign({}, this.dataStore).movies);
  }
}
