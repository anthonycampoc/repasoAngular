import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPlantillaComponent } from './form-plantilla/form-plantilla.component';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormPlantillaComponent,
    FormReactivoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,// FORMULARIO DE PLANTILLAS
    ReactiveFormsModule//FORMULARIO DE TIPO REACTIVOS

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
