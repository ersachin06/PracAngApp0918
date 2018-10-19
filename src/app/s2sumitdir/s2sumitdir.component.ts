import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s2sumitdir',
  templateUrl: './s2sumitdir.component.html',
  styleUrls: ['./s2sumitdir.component.css']
})
export class S2sumitdirComponent implements OnInit {

  constructor() { }
  users:string[]=["rohan","sohan","mohan","sumit"];
  categories:any[]=[
    {id:1,name:"laptop",desc:"description",img:"l1.jpg"},
    {id:2,name:"bookes",desc:"description",img:"b1.jpg"},
    {id:3,name:"clothes",desc:"description",img:"c1.jpg"},
    {id:4,name:"mobile",desc:"description",img:"m1.jpg"}
  ];

  ngOnInit() {
  }

}
