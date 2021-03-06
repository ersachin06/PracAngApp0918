import { C22dashboardComponent } from './c22dashboard/c22dashboard.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

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
import {Temp1Component} from './temp1/temp1.component';
import {S2sumitdirComponent} from './s2sumitdir/s2sumitdir.component';
import { V3directiveComponent } from './v3directive/v3directive.component';
import { C9prodComponent } from './c9prod/c9prod.component';
import { C10ratingComponent } from './c10rating/c10rating.component';
import { TempprodComponent } from './tempprod/tempprod.component';
import { TempratingComponent } from './temprating/temprating.component';
import { C11prodPassingObjToChildComponent } from './c11prod-passing-obj-to-child/c11prod-passing-obj-to-child.component';
import { C12Component } from './c12/c12.component';
import { C12interfaceComponent } from './c12interface/c12interface.component';
import { C13prodinputoutputComponent } from './c13prodinputoutput/c13prodinputoutput.component';
import { C12ratinginputoutputComponent } from './c12ratinginputoutput/c12ratinginputoutput.component';
import { C14prodeventobjectComponent } from './c14prodeventobject/c14prodeventobject.component';
import { C15ratingsendingobjectComponent } from './c15ratingsendingobject/c15ratingsendingobject.component';

import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { C16catComponent } from './c16cat/c16cat.component';
import { C17prodPassArgComponent } from './c17prod-pass-arg/c17prod-pass-arg.component';
import { C18adminComponent } from './c18admin/c18admin.component';
import { C19airlinesComponent } from './c18admin/c19airlines/c19airlines.component';
import { C20flightsComponent } from './c18admin/c20flights/c20flights.component';
import { C21viewuserComponent } from './c18admin/c21viewuser/c21viewuser.component';
import { C23infoComponent } from './c22dashboard/c23info/c23info.component';
import { C24panelComponent } from './c22dashboard/c24panel/c24panel.component';
import { V4imgvishideComponent } from './v4imgvishide/v4imgvishide.component';


import {Routes} from '@angular/router';
export const routes:Routes=
  [
    {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'home',component:HomeComponent},
   {path:'users',component:UsersComponent},
   {path:'products',component:ProductComponent},
   {path:'categories',component:C16catComponent},
   // {path:'prodInfo/:id',component:C17prodPassArgComponent},
   {path:'prodInfo',component:C17prodPassArgComponent},

   {
     path:'admin',component:C18adminComponent,children:
     [
       {path:'airlines',component:C19airlinesComponent},
       {path:'flights',component:C20flightsComponent},
       {path:'viewuser',component:C21viewuserComponent}
     ]
   },
   {

       path:'dashboard',component:C22dashboardComponent,children:
       [
         {path:'info/:id',component:C23infoComponent,outlet:'rinfo'},
         {path:'panel',component:C24panelComponent,outlet:'rpanel'}
       ]
   },
   {path:'**',redirectTo:'home'}

];