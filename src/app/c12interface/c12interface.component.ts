import { Component, OnInit } from '@angular/core';
import { Icat } from '../icat';

@Component({
  selector: 'app-c12interface',
  templateUrl: './c12interface.component.html',
  styleUrls: ['./c12interface.component.css']
})
export class C12interfaceComponent implements OnInit {

  constructor() { }

  cat:Icat={id:1,name:"laptop",img:"l1.jpg",desc:"description"};
  ngOnInit() {
  }

}

