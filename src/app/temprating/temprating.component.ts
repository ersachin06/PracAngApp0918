import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temprating',
  templateUrl: './temprating.component.html',
  styleUrls: ['./temprating.component.css']
})
export class TempratingComponent implements OnInit {

  constructor() { }

  @Input()
  prodrating:number;

  @Input()
  category:any;
  ngOnInit() {
  }
CustomeJsonPipePipe
}
