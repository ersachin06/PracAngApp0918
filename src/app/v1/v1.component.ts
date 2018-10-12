import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v1',
  templateUrl: './v1.component.html',
  styleUrls: ['./v1.component.css']
})
export class V1Component implements OnInit {

  username:string ="vishal icsd tech labs";
  imgurl:string='../assets/images/b2.jpg';
  blstatus:boolean =false;
  users:any=["rohan","deepak","sohan","mohan"];
  
  emp :any[]=[
      {empno:1,ename:"vishal",eage:21,eadd:"delhi",imgurl:'../assets/images/b2.jpg'},
      {empno:2,ename:"rohan",eage:22,eadd:"goa",imgurl:'../assets/images/b3.jpg'},
      {empno:3,ename:"sohan",eage:23,eadd:"pune",imgurl:'../assets/images/b4.jpg'},
      {empno:4,ename:"mohan",eage:24,eadd:"delhi",imgurl:'../assets/images/n3.jpg'}
  ];
  
  
  constructor() { }
  changeName()
  {
    alert("hello icsd");
    this.username="vishal rewri icsd tech labs";
  }





  ngOnInit() {
  }

}
