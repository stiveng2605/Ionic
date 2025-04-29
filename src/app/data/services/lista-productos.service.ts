import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaProductosService {

  mensaje:string="";

  lista: Product[] = []

  consum : boolean = false;

  private baseurl = "https://fakestoreapi.com/products"

  constructor(private http: HttpClient) {}

  getProducto(): Observable<Product[]>{
      return this.http.get<Product[]>(this.baseurl)
  }

  metodoHTTP(): Observable<Product[]> {

    if (this.consum == false){
      this.http.get<Product[]>(this.baseurl).subscribe(
        
        respuesta => {
          this.lista=respuesta
          this.consum = true
          console.log("SSe consumio correctamente")
        },
        error => {
          console.log(error)
        }

      )

    }else {
      console.log("Ya esta consumida")
    }

    return of(this.lista)
  }


  guardarLista(producto: Product) {
    this.lista.push(producto);
  }

  mostrarLista(): Product[] {
    return this.lista
  }


}
