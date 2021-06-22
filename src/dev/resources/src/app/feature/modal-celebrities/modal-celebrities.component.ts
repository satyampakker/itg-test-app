import { Component, EventEmitter, OnInit, Input, Output, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICelebrity} from 'src/app/models/data.model';

@Component({
  selector: 'app-modal-celebrities',
  templateUrl: './modal-celebrities.component.html',
  styleUrls: ['./modal-celebrities.component.css']
})
export class ModalCelebritiesComponent implements OnInit {

  @Input()
  public celebrityObject : ICelebrity;

  @Output() passEntry: EventEmitter<any> = new EventEmitter();


  constructor( private modalService: NgbModal ) { }

  ngOnInit() {
    console.log('just instantiated modalMovieComponent! our movie:'+JSON.stringify(this.celebrityObject, null, 4));
  }

  passback(msg){
    console.log('passing back: '+msg);
    this.passEntry.emit(msg);
  }

}

 
