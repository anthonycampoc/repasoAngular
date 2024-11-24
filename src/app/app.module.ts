import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { Hijo3Component } from './hijo3/hijo3.component';
import { Padre1Component } from './padre1/padre1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    PadreComponent,
    Hijo2Component,
    Hijo3Component,
    Padre1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
