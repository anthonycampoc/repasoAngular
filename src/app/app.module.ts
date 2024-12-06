import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HermanoComponent } from './hermano/hermano.component';
import { EstiloHermanoDirective } from './estilo-hermano.directive';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HermanoComponent,
    EstiloHermanoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
