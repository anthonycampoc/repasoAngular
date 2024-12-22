import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cedula-input',
  templateUrl: './formulario-hijo.component.html',
  styleUrls: ['./formulario-hijo.component.css']
})
export class FormularioHijoComponent implements OnChanges {
  formularioDocumento:  FormGroup;
  @Input() tipoId: string = 'Cedula'; 
  cambioTipoId: string = 'Cedula';

  constructor (private form: FormBuilder){
      this.formularioDocumento = this.form.group({
    
        cedula:['', [Validators.required, Validators.minLength(10)]],
      
      })
    }

    ngOnChanges(changes: SimpleChanges): void {
     //this.cambioTipoId= !changes?.['tipoId'].firstChange ? changes?.['tipoId'].currentValue : 'Cedula';
      this.cambioTipoId = changes?.['tipoId'].currentValue 
    }
  hasErrors(controlName: string, errorType: string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched

  }
}
