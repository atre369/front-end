import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(4), primeraLetraMayuscula()]
      }]
    });
  }

  guardarCambios(){
    //..guardar los cambios------ conectarse con web api aqui!!
    this.router.navigate(['/generos']);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');

    if (campo?.hasError('required')){
      return 'El campo nombre es requerido';
    }

    if (campo?.hasError('minlength')){
      return 'Nombre muy corto';
    }

    if (campo?.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }
}
