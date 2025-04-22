import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/data/interfaces/product.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: false
})
export class ProductosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() listVerProduct: Product [] = []
  /*Propiedad Input -> Le damos nombre para la variable -> El tipo de dato que recibe -> Valor si lleva  */

  @Input() MostrarBotonCompra: boolean= true;

  
  @Input() MostrarBotonEliminar: boolean = true;

  @Output() eventoEnviar = new EventEmitter<string>();
  /*Propiedad Output -> Le damos nombre al evento -> Decimos que es un nuevo evento -> Valor que recibe  */
  
  verProducts: Boolean = true;

  ComprarProducto(){
    console.log("El objeto se ha comprado")
  }

  EliminarProducto(){
    console.log("El objeto se ha Eliminado")
  }

  MostarEvento(){
    this.eventoEnviar.emit("Hola soy tu hijo")
  }

}
