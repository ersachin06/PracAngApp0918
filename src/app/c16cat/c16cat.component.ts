import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c16cat',
  templateUrl: './c16cat.component.html',
  styleUrls: ['./c16cat.component.css']
})
export class C16catComponent implements OnInit {

  constructor() { }
  categories:any[]=[
    {id:1,name:"laptop",desc:"description",img:"l1.jpg"},
    {id:2,name:"mobile",desc:"description",img:"m1.jpg"},
    {id:3,name:"shoes",desc:"description",img:"s1.jpg"},
    {id:4,name:"clothes",desc:"description",img:"c1.jpg"}

  ];
  ngOnInit() {
  }

}
