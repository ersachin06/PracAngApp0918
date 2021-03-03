import { Component, OnInit, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-c6localrefcontentviewchild',
  templateUrl: './c6localrefcontentviewchild.component.html',
  styleUrls: ['./c6localrefcontentviewchild.component.css']
})
export class C6localrefcontentviewchildComponent implements OnInit {

  constructor() { }
  @ViewChild('imgVC')
  imgNode:ElementRef;


  //acessing control from the content of component not the view - 
  //<app-c1>content btnSub defined here</app-c1>
  @ContentChild('btnSub')
  btn1:ElementRef;

  src:string="../../assets/images/b1.jpg";
  ngOnInit(): void {
  }
  fun(node:any)
  {
    this.imgNode.nativeElement.src="../../assets//images/b2.jpg";//<------------------
    node.src="../../assets/images/a1.jpg";
    console.log(node);
    console.log(node.value);
    node.value="deepak";
    console.log(node.value);
    this.btn1.nativeElement.value="login1";
    this.btn1.nativeElement.style.border="5px solid red";    
    console.log(this.btn1.nativeElement);
  }
}
