import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import {FormsModule} from '@angular/forms';
import { C2PracTillbindingComponent } from './c2-prac-tillbinding/c2-prac-tillbinding.component';
import { C3DirectiveComponent } from './c3-directive/c3-directive.component';
@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2PracTillbindingComponent,
    C3DirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
