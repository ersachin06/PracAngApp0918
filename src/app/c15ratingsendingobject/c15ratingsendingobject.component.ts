import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c15ratingsendingobject',
  templateUrl: './c15ratingsendingobject.component.html',
  styleUrls: ['./c15ratingsendingobject.component.css']
})
export class C15ratingsendingobjectComponent implements OnInit {

  constructor() { }
  @Input()
  prodRating:number;


  @Output()
  prodRatingCount=new EventEmitter<any>();
  sendProdRating(prating11:number)
  {
    let prodInfo={prating11,status:"we are trying to improov"};
    //this.prodRatingCount.emit(prating11);
    this.prodRatingCount.emit(prodInfo);
  }
  ngOnInit() {
  }

}

