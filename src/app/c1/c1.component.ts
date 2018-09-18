import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  username:string="sachin";
  profileStatus:boolean =true;
  uid:number=100;
  users:string[]=["rohan","sohan","sameer"];
  products:any={id:1,pnm:"laptop",qty:50,};
  btnStatus:boolean=false;
  logourl:string="assets/images/n3.jpg";
  constructor() { }
  changeName()
  {
    console.log("btn clicked");
    alert("btn clicked");
    this.username="ICSD Tech Labs";
     
  }
  ngOnInit() {
  }

}
