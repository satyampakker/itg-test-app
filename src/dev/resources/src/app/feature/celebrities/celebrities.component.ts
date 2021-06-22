import { Component, Input, OnInit, DoCheck } from '@angular/core';
//import { LocalStorage } from '@ngx-pwa/local-storage';
import { HttpErrorResponse } from '@angular/common/http';
import { ICelebrity } from 'src/app/models/data.model';
import { CelebrityService } from 'src/app/services/celebrity.service';
import { CompileStylesheetMetadata } from '@angular/compiler';
import { TabService } from '../../services/tab.service';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCelebritiesComponent } from '../modal-celebrities/modal-celebrities.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celebrities',
  templateUrl: './celebrities.component.html',
  styleUrls: ['./celebrities.component.css']
})
export class CelebritiesComponent implements OnInit {

  celebrityList : ICelebrity[];
  localCelebrityList : any = [];
  listLimit = 0;
  searchMade = false;


  dataReady : Promise<boolean>;
  httpError = false;
  isSuccessUpdate = false;
  isWarningUpdate = false;
  isErrorUpdate = false;
  isWaitingResponse = true;
  isWaitingConfirmation = false;

  searchNum = 0;
  subStatus = 'rest';
  searchSubStatus = 'rest';
  loadStatus = 'load';
  searchStatus = 'search';
  //@Input() tabStatus: string;
  subscription: Subscription;
  searchSubscription: Subscription;

 // celebrityDataSub: Subscription;



  constructor( private celebService: CelebrityService,
              private tabService: TabService,
              private modalService: NgbModal,
              private userService: UserService,
              private router: Router       ) { 

                this.subscription = tabService.celebTab$.subscribe(
                  celebTab => {
                    this.subStatus = celebTab;
                  });

                  this.searchSubscription = tabService.celebSearch$.subscribe(
                    celebSearch => {
                      this.searchSubStatus = celebSearch;
                    });
/*
                this.celebrityDataSub = celebService.getCelebrityList().subscribe(
                  celebData => {
                    console.log('inside our component constructor!');
                    this.celebrityList = celebData; 
                    localStorage.setItem('celebrities', JSON.stringify(celebData));
                  });
*/
              }

              getObservable(){
                console.log("sub status: " + this.subStatus);// + " tab status: " + this.tabStatus + " sub: " + this.subscription);
              }

              ngOnInit() {
                this.getcelebrityList();
              }

              openModal(celebrityItem) {
            
                const modalRef = this.modalService.open(ModalCelebritiesComponent,{windowClass:"xlModal",
																				   container: "#testmodal"
																					});
         
                modalRef.componentInstance.celebrityObject = celebrityItem;
                console.log (celebrityItem);
                modalRef.componentInstance.passEntry.subscribe(entry => {

                  console.log(entry);
                  modalRef.close();
                });
				
			   //this.modalService.open(celebrityItem);//, {backdropClass: 'light-blue-backdrop'});
              }

              loadMoreData(){
  
                console.log('here in loadmoredata() in celeb component');

  

                let lim = this.celebrityList.length;
                console.log("HERE WE ARE IN LOAD MORE DATA, SIZE OF LOCAL: " + this.localCelebrityList.length + " celebsLIST: " + this.celebrityList.length);

                if (lim == this.localCelebrityList.length){
                  if (this.searchMade){ return; }
                  console.log("TELLING SERVICE WE NEED NEXT PAGE");
                  this.celebService.nextPage();
                  return;
                }

                let localLim = this.localCelebrityList.length;

                //console.log("lim: " + lim + " our full MoviesList: " + JSON.stringify(this.MoviesList, null, 4));
                for(let i = localLim; i < localLim+3; i++){ 

                  if (i == lim){ break; }

                  //console.log("PUSHING: " + JSON.stringify(this.MoviesList[i], null, 2));
                  if (this.celebrityList[i]){
                  this.localCelebrityList.push(this.celebrityList[i]); 
                  console.log("OK WE ARE ADDING CELEBS\n\n " + this.celebrityList[i]);
                  }

                }

              }

              debugLoad(){
                for (let i = 0; i < 15; i++) { this.localCelebrityList.push(this.celebrityList[i]); }
              }


              debugClick(){

                console.log('size of celebrityList in component:'+this.celebrityList.length);
                console.log('size of localCelebrityList in component:'+this.localCelebrityList.length);
                console.log('size of datastore back in the service:'+this.celebService.dataStore.celebrities.length)
                //console.log('heres whats in it:'+JSON.stringify(this.celebrityList, null, 4));
              }
/*
              loadMoreData(){
                let lim = this.localCelebrityList.length;

                if (lim == this.celebrityList.length){
                  return;
                }

                for(let i = lim; i < lim+15; i++){ this.localCelebrityList.push(this.celebrityList[i]); }

              }
*/
              ngDoCheck(){
                //console.log("INSIDE DOCHECK, tabStatus: " + this.subStatus);
                if (this.subStatus != 'rest'){

                  if (this.subStatus == this.loadStatus){

                    //load more data
                    this.loadMoreData();
                    //console.log("Just loaded more data!");

                    //then once data load is finished
                    this.tabService.announceLoadFinishedCelebrity();
                    //console.log("Just let service know we are done loading data");

                  }

                  if (this.subStatus == this.searchStatus) {
                    console.log("Okay we are searching for " + this.searchSubStatus);

                    this.searchMade = true;
                    this.subStatus = 'rest';
                    this.localCelebrityList = [];
                    this.celebrityList = [];

                    this.userService.searchCelebrity(this.searchSubStatus, this.searchNum).subscribe(
                      resp => {

                        console.log('our response:'+JSON.stringify(resp['body'], null, 4));

                        this.searchNum += 1;
                        let data = resp['body'];

                        for (let i = 0; i < data['rows'].length; i++){

                          //console.log("our search response:"+JSON.stringify(data['rows'][i], null, 4));
/*--
                    let miniBioText = data.mini_biography;


                    //miniBioText = miniBioText.toString().substr(0, 164) + '..';
                    //console.log(miniBioText);
                    //console.log(Array.isArray(miniBioText));

                    const obj = {
                      id: data.id,
                      name: data.name,
                      nickname : data.nickname,
                      birthdate : data.birth_info.birth_date,
                      birthplace: data.birth_info.birth_place,
                      minibio: miniBioText,
                      height : data.height,
                      headshot : data.headshot,
                      moviesList : data.filmography,
                    }
                    //console.log('about to push this obj into datastore:'+JSON.stringify(obj, null, 2));
                    this.dataStore.celebrities.push(obj);
--*/

                          let objData = data['rows'][i];
                          let miniBioText = objData.mini_biography;
                          //console.log(miniBioText);
                          //console.log(Array.isArray(miniBioText));

                    if (miniBioText == null){
                      miniBioText = '';
                    } else { 
                    
                      if (Array.isArray(miniBioText)){  miniBioText = miniBioText.join(',');  }

//                      miniBioText = miniBioText.toString().substr(0, 164) + '..'; 

                    }
                          const obj = {
                            id: i,
                            name: objData.name,
                            nickname : objData.nickname,
                            birthdate : objData.birth_info.birth_date,
                            birthplace: objData.birth_info.birth_place,
                            miniBio: miniBioText,
                            height : objData.height,
                            headshot : objData.headshot,
                            moviesList : objData.filmography,
                          }
                          this.celebrityList.push(obj);

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
                    this.tabService.announceSearchFinishedCelebrity();
                    this.displayResults();

                      }
                    );


                  }
                }

              }


              displayResults(){
                console.log("HERE WE ARE DISPLAYING RESULTS");

                let lim = this.localCelebrityList.length;
                if (this.celebrityList.length == 0){
                  this.celebrityList = [];
                  return;
                }
                console.log("VBNM LIM:" + lim);
                if (lim == this.celebrityList.length){
                  console.log("RETURNING BECAUSE REACHED LIMIT");
                  return;
                }

                for(let i = lim; i < lim+6; i++){ 
                
                  if (this.celebrityList[i]){
                  this.localCelebrityList.push(this.celebrityList[i]); 
                  console.log("OK WE ARE ADDING CELEBS\n\n " + this.celebrityList[i]);
                  }
                
                }
              }

             

  private getcelebrityList(){

    console.log('here in getcelebritylist in celeb component');

    this.celebService.getCelebrityList().subscribe(celeb => { 
      
      this.celebrityList = celeb; 
//      localStorage.setItem('celebrities', JSON.stringify(celeb));
      //console.log('inside celeb subscription in component, celeb obj:'+JSON.stringify(celeb, null, 4));
     // console.log('inside celeb subscription in component, size of celeb:'+celeb.length);
      //console.log(celeb);

        
      for (let c of celeb) {
        if (this.localCelebrityList.length == 15) { break; }
        this.localCelebrityList.push(c);
      }

    });

  }

  clickProfile(item){
    console.log(item);
    this.router.navigate(['/celebrityprofile'], { queryParams: { id: item.id } } );
  }

  
  handleScrollDown(event){

    console.log('in handlescrolldown');

    if (event['isReachingBottom'] == true){

      let lim = this.localCelebrityList.length;

      if (lim == this.celebrityList.length){
        return;
      }

      for(let i = lim; i < lim+15; i++){ this.localCelebrityList.push(this.celebrityList[i]); }

    }

  }


}
