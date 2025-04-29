import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/interfaces/product.model';
import { ComponentsModule } from 'src/app/components/components.module';
import { ListaProductosService } from 'src/app/data/services/lista-productos.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone : false
})

export class ProductPage implements OnInit {

  listProduct: Product [] = []


  constructor(private listaProductosService: ListaProductosService) { }

  ngOnInit() {
    this.listaProductosService.metodoHTTP().subscribe(
        (lista: Product[]) => {
          this.listProduct = lista;
        },
        error => {
          console.log(error)
  
        }
      )
  }

  
  agregarProducto(product : Product){
    this.listProduct.push(product)
  }



  RecibirMensaje(mensaje: string){
    console.log("El mensaje de mi hijo es: " + mensaje)
  }

}
