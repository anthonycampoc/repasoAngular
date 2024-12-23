import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [

  {path: '', component: InicioComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'servicio', component: ServicioComponent},
  {path: 'producto', component: ProductsComponent},
  {path: 'servicio/:servicioID', component: ServiceDetailComponent},
  {path: 'product/:productID', component:ProductDetailComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
