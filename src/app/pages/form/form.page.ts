import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  standalone: false
})
export class FormPage implements OnInit {

  perfil: string 
  nombre: string
  cedula: number
  telefono: number
  correo: string 
  direccion: string 
  edad: number 

  constructor() { }

  ngOnInit() {
  }

  guardarDatos() {
    console.log('Nombre:', this.nombre);
    console.log('Cédula:', this.cedula);
    console.log('Teléfono:', this.telefono);
    console.log('Correo:', this.correo);
    console.log('Dirección:', this.direccion);
    console.log('Edad:', this.edad);
  }

}
