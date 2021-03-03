import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ICSD Tech Labs';
  c6localfun()
  {
    alert("Btn clicked");
  }
}
