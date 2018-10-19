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
import { C7inbuiltpipesComponent } from './c7inbuiltpipes/c7inbuiltpipes.component';
import { CustomPipe,CustomJSONPipe,FilterPipe } from './pipes/custom.pipe';
import { C8custompipesComponent } from './c8custompipes/c8custompipes.component';
import { CustomeJsonPipePipe } from './pipes/custome-json-pipe.pipe';
import { C1pracComponent } from './prac/c1prac/c1prac.component';
import { V1Component } from './v1/v1.component';
import { S1Component } from './s1/s1.component';
import { S2sumitdirComponent } from './s2sumitdir/s2sumitdir.component';

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
    C6imgdispthclickComponent,
    C7inbuiltpipesComponent,
    CustomPipe,
    C8custompipesComponent,
    CustomeJsonPipePipe,
    CustomJSONPipe,
    FilterPipe,
    C1pracComponent,
    V1Component,
    S1Component,
    S2sumitdirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
