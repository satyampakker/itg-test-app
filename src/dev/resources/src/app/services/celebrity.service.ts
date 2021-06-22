import { Injectable } from '@angular/core';
//import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { ICelebrity } from '../models/data.model';
import { UserService } from './user.service';
import { AppConfig } from '../configuration/app.config';
import { HttpClient, HttpResponse } from '@angular/common/http';
import jsonData from '../../assets/json/celebrities.json';

@Injectable({
  providedIn: 'root'
})
export class CelebrityService {

  pageNum = 0;
  public clickedCeleb : ICelebrity;
  private _celebsReady = new BehaviorSubject <boolean> (false);
  private _celebrities: BehaviorSubject < ICelebrity[] > ;
  _celebsReady$ = this._celebsReady.asObservable();
  public dataStore: {
    celebrities: ICelebrity[] 
  }

  constructor( private appConfig: AppConfig,
              private http: HttpClient,
              private userService: UserService,       
              //private localStor: LocalStorage
             ) { 
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

                console.log('before returning observable, size of dataStore:'+this.dataStore.celebrities.length);
//                console.log('actual observable object:'+JSON.stringify(this._celebrities.asObservable(), null, 4));
                return this._celebrities.asObservable();
              }


              nextPage(){
                this.pageNum += 1;
                this.loadCelebrities();
              }

              private loadCelebrities()
              {
                
                console.log('before rest call in celeb service'+this.pageNum);
                this.userService.getAllCelebritiesPSQL(this.pageNum, 99)
                .subscribe(celebObj => {
                  //console.log('here we are in our subscription in celeb service. size of our object:'+celebObj['body']['content'].length);
                  let celebData = celebObj['body']['content'];
                  //console.log('our data:'+JSON.stringify(celebData, null, 3));
                  
                  celebData.forEach( data => {
                    //console.log('our individual celeb'+JSON.stringify(data, null, 4));

                    //console.log('hi from celebrityService');
                    let miniBioText = data.miniBio;
                    if (miniBioText == null){
                      miniBioText = '';
                    } else { 
                    
                      if (Array.isArray(miniBioText)){  miniBioText = miniBioText.join(',');  }

                      miniBioText = miniBioText.toString().substr(2); 

                    }


                    //miniBioText = miniBioText.toString().substr(0, 164) + '..';
                    //console.log(miniBioText);
                    //console.log(Array.isArray(miniBioText));

                    const obj = {
                      id: data.celebId,
                      name: data.name,
                      nickname : data.nickname,
                      birthdate : data.birthDate,
                      birthplace: data.birthPlace,
                      miniBio: miniBioText,
                      height : data.height,
                      headshot : data.headshot,
                      moviesList : data.filmography,
                    }
                    //console.log('about to push this obj into datastore:'+JSON.stringify(obj, null, 2));
                    this.dataStore.celebrities.push(obj);


                  });

                  console.log('size of datastore:'+this.dataStore.celebrities.length);
                  


                 // localStorage.setItem('celebrities', JSON.stringify(this.dataStore.celebrities));

/*                  this.localStor.setItem('celebrities', JSON.stringify(this.dataStore.celebrities))
                    .subscribe( () => {
                    
                    console.log('########### just in celebs');
                    });
  */
                  console.log('################### before setting next');
                  this._celebrities.next(Object.assign({}, this.dataStore).celebrities);
                  this._celebsReady.next(true);

                }, error => {
                  console.log('in httpError in celebService');
                });

                  console.log('right before setting next in service');
                  console.log('size of datastore:'+this.dataStore.celebrities.length);
                  //this._celebrities.next(Object.assign({}, this.dataStore).celebrities);

              }//end loadCelebrities

    getCelebrityProfile(CelebId : string) : Observable<HttpResponse<any[]>>
    {
      return this.http.get<any[]>(this.appConfig.backendAPIEP + '/celebrities/id/' + CelebId, { observe: 'response'});
    }
}
