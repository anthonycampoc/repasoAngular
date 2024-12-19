import { Component } from '@angular/core';

@Component({
  selector: 'app-form-plantilla',
  templateUrl: './form-plantilla.component.html',
  styleUrls: ['./form-plantilla.component.css']
})
export class FormPlantillaComponent {
    public usuario: any ={
      nombre: '',
      apellido: ''
    }

    enviar(){
      console.log(this.usuario);
    }

    
}
