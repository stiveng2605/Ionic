import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class ListaProductosService {

  mensaje:string="";

  lista: Product[] = []

  constructor() { }

  guardarLista(producto: Product) {
    this.lista.push(producto);
  }

  mostrarLista(): Product[] {
    return this.lista
  }


}
