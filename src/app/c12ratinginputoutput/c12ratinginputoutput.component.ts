import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c12ratinginputoutput',
  templateUrl: './c12ratinginputoutput.component.html',
  styleUrls: ['./c12ratinginputoutput.component.css']
})
export class C12ratinginputoutputComponent implements OnInit {

  constructor() { }

  @Input()
  prodRating:number;

  @Output()
  uRatingCount=new EventEmitter();

  CountRatingFun(prodRaing11:number)
  {
    this.uRatingCount.emit(prodRaing11);
  }

  ngOnInit() {
  }

}
