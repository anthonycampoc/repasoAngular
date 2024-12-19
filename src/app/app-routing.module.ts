import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FormPlantillaComponent } from './form-plantilla/form-plantilla.component';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';

const routes: Routes = [
  {path: '', component: InicioComponent },
  {path: 'plantilla', component: FormPlantillaComponent},
  {path: 'reactivo', component: FormReactivoComponent},
  {path: '**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
