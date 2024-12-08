import { Component } from '@angular/core';
import { servicioList } from './servicio.mock';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {
  servicioList = servicioList;
}
