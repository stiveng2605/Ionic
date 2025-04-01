import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/data/interfaces/product.model';

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
  };

  EnviarProducto() {
    this.enviarProduct.emit({...this.nuevoProducto});
  }


  constructor() { }

  ngOnInit() {}

}
