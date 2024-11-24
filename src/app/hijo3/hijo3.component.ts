import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo3',
  templateUrl: './hijo3.component.html',
  styleUrls: ['./hijo3.component.css']
})
export class Hijo3Component {
  @Output()  hijo3 = new EventEmitter<string>();

  mensaje: string = '';

  enviarMensaje(){
    this.hijo3.emit(this.mensaje);
  }
}
