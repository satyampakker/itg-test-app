import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ICelebrity } from '../models/data.model';
import { AppConfig } from '../configuration/app.config';
import { HttpClient } from '@angular/common/http';
import jsonData from '../../assets/json/celebrities.json';

@Injectable({
  providedIn: 'root'
})
export class CelebrityService {

  private _celebrities: BehaviorSubject < ICelebrity[] > ;
  private dataStore: {
    celebrities: ICelebrity[] 
  }

  constructor( private appConfig: AppConfig,
    private http: HttpClient) { 
    this.dataStore = {
      celebrities: []
    }

    this._celebrities = new BehaviorSubject < ICelebrity[] > ([]);
  }

  getCelebrityList() : Observable <ICelebrity[]>
    {
      if(this.dataStore.celebrities.length == 0 ){
        this.loadCelebrities();
      }

      return this._celebrities.asObservable();
    }

  private loadCelebrities()
  {
    //Commenting the Micro services call and manually constructing the list
    //const endpoint = this.appConfig.CelebMSEP + '/findallcelebs';
    // return this.http.get < ICelebrity[] > (endpoint)
    //   .subscribe(data => {
    //     this.dataStore.celebrities = data;
    //     this._celebrities.next(Object.assign({}, this.dataStore).celebrities);
    //   }, error => {
    //     console.log('Failed to fetch celebrities');
    //   });

    //console.log("LOADING CELEBRITIES!");
    //console.log(jsonData.data);

    //const cList : ICelebrity[];
    //cList: any[];

    for (let i = 0; i < jsonData.data.length; i++){
      //console.log(jsonData.data[i].name)
      let data = jsonData.data[i];
    
      const obj = {
        id: i,
        name: data.name,
        nickname : data.nickname,
        birthdate : data.birth_info.birth_date,
        birthplace: data.birth_info.birth_place,
        minibio: data.mini_biography,
        height : data.height,
        headshot : data.headshot,
        moviesList : data.filmography,
      }
      this.dataStore.celebrities.push(obj);
    
    }

    //this.dataStore.celebrities = cList;
    this._celebrities.next(Object.assign({}, this.dataStore).celebrities);
  }
}
