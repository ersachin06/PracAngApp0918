import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v4imgvishide',
  templateUrl: './v4imgvishide.component.html',
  styleUrls: ['./v4imgvishide.component.css']
})
export class V4imgvishideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isVisible:boolean=true;
  toggle()
  {
this.isVisible=!this.isVisible;
  }
  users:any[]=[
    {usersLogo:'assets/images/b1.jpg',id:1,department:'csc',salary:78000},
    {usersLogo:'assets/images/b2.jpg',id:2,department:'IT',salary:88000},
    {usersLogo:'assets/images/b3.jpg',id:3,department:'Sales',salary:98000},
    {usersLogo:'assets/images/b4.jpg',id:4,department:'RnD',salary:58000}
  ];
}
