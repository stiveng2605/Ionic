import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/data/interfaces/product.model';
import { ListaProductosService } from 'src/app/data/services/lista-productos.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
  standalone: false
})
export class CrearComponent  implements OnInit {

  FormProduct! : FormGroup;
  list : Product[] = []

  
  @Output() enviarProduct = new EventEmitter<Product>();

  

  constructor(private productService : ListaProductosService, private fb : FormBuilder,private router : Router){
    this.initForm()
    this.productService.metodoHTTP().subscribe(
      (lista : Product[]) => {
        this.list = lista
      },
      error => {
        console.log(error)
      }
    )
  
  }

  
  initForm(){
    this.FormProduct = this.fb.group({
      /* id: ['',Validators.required], */
      title :['', Validators.required],
      price : ['',[]],
      description : ['',Validators.required],
      category : ['',Validators.required],
      image : ['',Validators.required],
      rating: this.fb.group({
        rate: ['', [Validators.required, Validators.min(0)]],
        count: ['', [Validators.required, Validators.min(0)]]
      })
    })
  }

  validaForm() {
    if (this.FormProduct.invalid) {
      console.log('Error al Crear el producto');
    }
  
    const product = this.FormProduct.value;
  
    let maxId = 0;
    for (let i of this.list) {
        const id = Number(i.id);
        if (id > maxId) {
          maxId = id;
        }
    }

    const newProduct: Product = {
      id: (maxId + 1),
      ...product
    };
  
    this.productService.createProduct(newProduct);
    alert('Producto Creado Correctamente');
    console.log(newProduct)
    this.FormProduct.reset();
  }



  ngOnInit() {}

}
