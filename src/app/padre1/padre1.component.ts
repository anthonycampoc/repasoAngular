import { Component } from '@angular/core';

@Component({
  selector: 'app-padre1',
  templateUrl: './padre1.component.html',
  styleUrls: ['./padre1.component.css']
})
export class Padre1Component {
  mensajeHijo3?: string ='';

  recibirMensajeHijo3($event: string){
    this.mensajeHijo3 = $event;
  }
}
