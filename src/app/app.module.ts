import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ComprasComponent } from './compras/compras.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServicioComponent,
    ContactoComponent,
    ServiceDetailComponent,
    ComprasComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//para hacer peticiones HTTP@
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
