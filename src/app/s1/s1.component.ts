import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s1',
  templateUrl: './s1.component.html',
  styleUrls: ['./s1.component.css']
})
export class S1Component implements OnInit {

username: string="sumit";
btnStatus:boolean=false;
imgurl:string="assets/images/c4.jpg";
strNm:string="sachin";
  constructor() { }

  ngOnInit() {
  }
  changeName()
  {
    this.username="sahil";
    //alert("btn clicked");
  }

}
