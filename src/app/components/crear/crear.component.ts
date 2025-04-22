import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/data/interfaces/product.model';
import { ListaProductosService } from 'src/app/data/services/lista-productos.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
  standalone: false
})
export class CrearComponent  implements OnInit {

  
  @Output() enviarProduct = new EventEmitter<Product>();

  nuevoProducto: Product = {
    id: 0, 
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    }
  }

  constructor(private listaProductosService : ListaProductosService){}

  EnviarProducto() {
    this.enviarProduct.emit({...this.nuevoProducto});
  }


  ngOnInit() {}

}
