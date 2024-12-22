import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit{

  
  
  formularioContacto:  FormGroup;
  tipoId: string = '';
  mostrarCedula: boolean = false;
  /*usuarioActivo: any ={
    nombre: 'Anthony',
    apellido: 'Cotera',
    cedula: '0850268749'
  }*/

  constructor (private form: FormBuilder){
    this.formularioContacto = this.form.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipoId:[''],
      //cedula:['', [Validators.required, Validators.minLength(10)]],
     //cedula:[''],//asi quedaria si queremos hacer las validaciones cuado se cargue la aplicacion por primeza vez
      correo: ['',[ Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.formularioContacto.get('tipoId')?.valueChanges.subscribe(value =>{
      this.mostrarCedula = value != '';
      this.tipoId = value;
    })

    //validaciones al inicio de la aplicacion
     /* if (this.usuarioActivo.nombre == 'Anthony' ) {
        this.formularioContacto.get('cedula')?.setValidators([Validators.required, Validators.minLength(10)])
      }*/
    
    //permite desactivar las validaciones 
    /*this.formularioContacto.get('cedula')?.clearValidators();
    this.formularioContacto.get('cedula')?.updateValueAndValidity();*/

    //permite desactivar si traemos la informacion desde el backend
   /* this.formularioContacto.patchValue({
      nombre: this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
     cedula: this.usuarioActivo.cedula,
    })

    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('apellido')?.disable();
   this.formularioContacto.get('cedula')?.disable();*/
  }

  enviar(){
    console.log(this.formularioContacto)
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched

  }
}
