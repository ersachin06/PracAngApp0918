import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1prac',
  templateUrl: './c1prac.component.html',
  styleUrls: ['./c1prac.component.css']
})
export class C1pracComponent implements OnInit {

  username:string="icsd tech labs";
  imgurl:string="../assets/images/b3.jpg";
  blstatus:boolean=true;
  strname="sachin";
  constructor() { }

  ngOnInit() {
  }

}
