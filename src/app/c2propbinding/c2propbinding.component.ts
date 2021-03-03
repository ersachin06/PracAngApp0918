import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2propbinding',
  templateUrl: './c2propbinding.component.html',
  styleUrls: ['./c2propbinding.component.css']
})
export class C2propbindingComponent implements OnInit {

  btncls:string="btn btn-primary";
  constructor() { }

  ngOnInit(): void {
  }
  fun(x:number)
  {
    console.log(x);
    if(x==1)
    {
      this.btncls="btn btn-primary";
    }
    else if(x==2)
    {
      this.btncls="btn btn-warning";
    }
    else if(x==3)
    {
      this.btncls="btn btn-success";
    }
  }
}
