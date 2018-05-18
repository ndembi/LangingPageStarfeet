import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StheadComponent } from './sthead/sthead.component';
import { StbodComponent } from './stbod/stbod.component';
import { StfooComponent } from './stfoo/stfoo.component';
import { LpmodaleComponent } from './lpmodale/lpmodale.component';
import { LpViewComponent } from './lp-view/lp-view.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'contact', component: LpmodaleComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    StheadComponent,
    StbodComponent,
    StfooComponent,
    LpmodaleComponent,
    LpViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
