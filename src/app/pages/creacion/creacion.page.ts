import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/interfaces/product.model';


@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.page.html',
  styleUrls: ['./creacion.page.scss'],
  standalone: false
})
export class CreacionPage implements OnInit {

  listCreacion: Product [] = []

  AgregarProducto(producto: Product) {
    this.listCreacion.push(producto)
  }

  constructor() { }

  ngOnInit() {
  }

}
