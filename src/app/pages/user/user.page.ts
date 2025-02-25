import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: false
})
export class UserPage implements OnInit {

  perfil: string = "https://cdn.soccerwiki.org/images/player/38125.png";
  nombre: string = "Eider Stiven Guerrero Acosta";
  cedula: number = 1070946652;
  telefono: number = 3146369417;
  correo: string = "esga1526@gmail.com";
  direccion: string = "CL 4 SUR # 20 - 106";
  edad: number = 19

  constructor() { }

  ngOnInit() {
  }



}
