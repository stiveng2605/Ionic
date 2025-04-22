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

  @Input() MostrarBotonCompra: boolean= true;

  
  @Input() MostrarBotonEliminar: boolean = true;

  @Output() eventoEnviar = new EventEmitter<string>();
  
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
