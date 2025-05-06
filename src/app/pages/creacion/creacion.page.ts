import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/interfaces/product.model';
import { ListaProductosService } from 'src/app/data/services/lista-productos.service';


@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.page.html',
  styleUrls: ['./creacion.page.scss'],
  standalone: false
})
export class CreacionPage implements OnInit {

  listCreacion: Product [] = []

  constructor(private prouctService : ListaProductosService) { }

  ngOnInit() {
    this.prouctService.getProductsCreate().subscribe(
      (lista: Product[]) => {
        this.listCreacion = lista
      },
      error => {
        console.log(error)
      }
    )
  }

}
