import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/interfaces/product.model';
import { ListaProductosService } from 'src/app/data/services/lista-productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: false
})
export class CarritoPage implements OnInit {

  listCarrito: Product [] = []

  constructor(private productService : ListaProductosService) { }

  ngOnInit() {
    this.productService.getProductsCar().subscribe(
        (lista : Product[]) => {
            this.listCarrito = lista
        },
        error => {
            console.log(error)
        }
    )
  }

  RecibirMensaje(mensaje: string){
    console.log("El mensaje de mi hijo es: " + mensaje)
  }

}
