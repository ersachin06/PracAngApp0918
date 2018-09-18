import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2-prac-tillbinding',
  templateUrl: './c2-prac-tillbinding.component.html',
  styleUrls: ['./c2-prac-tillbinding.component.css']
})
export class C2PracTillbindingComponent implements OnInit 
{
  username:string ="rohan";
  logoUrl:string="assets/images/n5.jpg";
  btnStatus:boolean =false;
  changeName()
  {
    this.username="deepak";
  }

  constructor() { }

  ngOnInit() {
  }

}
