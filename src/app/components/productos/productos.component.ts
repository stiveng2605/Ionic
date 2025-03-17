import { Component, OnInit } from '@angular/core';
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

  listVerProduct: Product [] = []
  
  verProducts: Boolean = true;

}
