import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

const routes: Routes = [

  {path: '', component: InicioComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'servicio', component: ServicioComponent},
  {path: 'servicio/:servicioID', component: ServiceDetailComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
