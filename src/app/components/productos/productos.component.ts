import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/data/interfaces/product.model';
import { ListaProductosService } from 'src/app/data/services/lista-productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: false
})
export class ProductosComponent  implements OnInit {

  @Input() listVerProduct: Product [] = []

  @Input() MostrarBotonCompra: boolean= true;

  
  @Input() MostrarBotonEliminar: boolean = true;

  constructor(private productService : ListaProductosService) { }

  ngOnInit() {
    
  }

  
  verProducts: Boolean = true;

  AddProductCar(product : Product){
    this.productService.addCar(product)
    alert("Producto agregado al carrito")
  }

  EliminarProducto(id : number){
    this.productService.deleteProductCar(id)
    console.log("El objeto se ha Eliminado")
  }



}
