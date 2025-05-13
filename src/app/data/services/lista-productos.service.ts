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
  listCreate : Product[] = []
  listCar: Product[]= []

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
          console.log("Se consumio correctamente")
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

  createProduct(product: Product){
    this.http.post(this.baseurl, product).subscribe(
      respuesta => {
        this.lista.push(product)
        this.listCreate.push(product)
        console.log(respuesta)
      },
      error => {
        console.log(error)
      }
    )

  }

  getProductsCreate(): Observable<Product[]> {
    return of(this.listCreate)
  }

  addCar(product : Product) {
    this.listCar.push(product)
  }

  getProductsCar():Observable<Product[]> {
    return of(this.listCar)
  }

  deleteProductCar(id: number) {
    const indice = this.listCar.findIndex(product => product.id === id);
    if (indice !== -1) {
      this.listCar.splice(indice, 1);
    }
  }

}
