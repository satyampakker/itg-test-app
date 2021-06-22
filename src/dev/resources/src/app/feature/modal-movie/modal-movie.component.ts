import { Component, EventEmitter, OnInit, Input, Output, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IMovie} from 'src/app/models/data.model';

@Component({
  selector: 'app-modal-movie',
  templateUrl: './modal-movie.component.html',
  styleUrls: ['./modal-movie.component.css']
})
export class ModalMovieComponent implements OnInit {

  @Input()
  public movieObject : IMovie;

  @Output() passEntry: EventEmitter<any> = new EventEmitter();


  constructor( private modalService: NgbModal ) { }

  ngOnInit() {
//    console.log('just instantiated modalMovieComponent! our movie:'+JSON.stringify(this.movieObject, null, 4));
  }

  passback(msg){
    console.log('passing back: '+msg);
    this.passEntry.emit(msg);
  }

}
