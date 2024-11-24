import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{
  
  nombre?: string;

  
  // _ el guin bajo hace referencia a la inserccion de dependencias 
  constructor( private _servicioFamiliar : ServicioFamiliarService){}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('ROMANO');
    this.nombre = this._servicioFamiliar.gerHermanoGrande();
  }

  saludar(){
  this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '');
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }

}
