import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2-prac-tillbinding',
  templateUrl: './c2-prac-tillbinding.component.html',
  styleUrls: ['./c2-prac-tillbinding.component.css']
})
export class C2PracTillbindingComponent implements OnInit {
  username = 'rohan';
  logoUrl = 'assets/images/b2.jpg';
  btnStatus = false;
  strName: String = 'manan';
  changeName() {
    this.username = 'deepak';
    this.logoUrl = '../../assets/images/l3.jpg';
  }

  constructor() { }

  ngOnInit() {
  }
  

}
