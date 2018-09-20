import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c5-atbt-directive',
  templateUrl: './c5-atbt-directive.component.html',
  styleUrls: ['./c5-atbt-directive.component.css']
})
export class C5AtbtDirectiveComponent implements OnInit {
  colorTheme : string = "blueTheme"; // single quote not compulsory here
  userTitle:string="atbt directive ";
  colorName:string="orange";
  constructor() { }

  ngOnInit() {
  }
 //function keyword not use here
  changeCls()
  {
    this.colorTheme="redTheme";
    alert("btn clicked");
    this.userTitle="atbt directive icsd tech labs."+this.colorTheme;
  }

}
