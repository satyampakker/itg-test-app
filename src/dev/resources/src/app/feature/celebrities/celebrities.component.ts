import { Component, OnInit } from '@angular/core';
import { ICelebrity } from 'src/app/models/data.model';
import { CelebrityService } from 'src/app/services/celebrity.service';
import { CompileStylesheetMetadata } from '@angular/compiler';

@Component({
  selector: 'app-celebrities',
  templateUrl: './celebrities.component.html',
  styleUrls: ['./celebrities.component.css']
})
export class CelebritiesComponent implements OnInit {

  celebrityList : ICelebrity[];
  localCelebrityList : any = [];
  listLimit = 0;

  constructor(private celebService: CelebrityService) { }

  ngOnInit() {
    this.getcelebrityList();
  }

  private getcelebrityList(){

    this.celebService.getCelebrityList().subscribe(celeb => { 
      this.celebrityList = celeb; 
      localStorage.setItem('celebrities', JSON.stringify(celeb));
      console.log(celeb);
    } );
    
    for (let i = 0; i < this.celebrityList.length; i++) { this.localCelebrityList.push(this.celebrityList[i]); }

  }

  
  handleScrollDown(event){


    if (event['isReachingBottom'] == true){

      let lim = this.localCelebrityList.length;

      if (lim == this.celebrityList.length){
        return;
      }

      for(let i = lim; i < lim+15; i++){ this.localCelebrityList.push(this.celebrityList[i]); }

    }
/*
=======
  
      this.celebService.getCelebritiyList().subscribe(celeb => { 
      this.celebrityList = celeb;
      localStorage.setItem('celebrities', JSON.stringify(celeb)); 
      //console.log(celeb);
    } );
    //console.log(this.celebrityList);
    //this.celebrityList = cList;
>>>>>>> 3d742903eac953bfac5ea8821d80b476727ef8b3*/
  }

}
