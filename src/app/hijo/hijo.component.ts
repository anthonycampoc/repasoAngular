import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  valorContador: number = 0;

  incrementador(){
    this.valorContador++;
  }

  decrementar(){
    this.valorContador--;
  }
}
