import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import {FormsModule} from '@angular/forms';
import { C2PracTillbindingComponent } from './c2-prac-tillbinding/c2-prac-tillbinding.component';
import { C3DirectiveComponent } from './c3-directive/c3-directive.component';
import { UserstempComponent } from './userstemp/userstemp.component';
import { Userstemp11Component } from './userstemp11/userstemp11.component';
import { Userstemp12Component } from './userstemp12/userstemp12.component';
import { Temp11Component } from './temp11/temp11.component';
import { C4directiveReComponent } from './c4directive-re/c4directive-re.component';
import { C5AtbtDirectiveComponent } from './c5-atbt-directive/c5-atbt-directive.component';
import { C6imgdispthclickComponent } from './c6imgdispthclick/c6imgdispthclick.component';
@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2PracTillbindingComponent,
    C3DirectiveComponent,
    UserstempComponent,
    Userstemp11Component,
    Userstemp12Component,
    Temp11Component,
    C4directiveReComponent,
    C5AtbtDirectiveComponent,
    C6imgdispthclickComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
