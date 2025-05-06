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

  
  @Output() enviarProduct = new EventEmitter<Product>();

  

  constructor(private productService : ListaProductosService, private fb : FormBuilder,private router : Router){
    this.initForm()
  }
  
  initForm(){
    this.FormProduct = this.fb.group({
      id: ['',Validators.required],
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

  validaForm(){

    const product = this.FormProduct.value;

    if(this.FormProduct.invalid) {
      console.log('Error al Crear el producto')
    }
    else if(this.FormProduct.valid){
      this.productService.createProduct(product)
    }
  }



  ngOnInit() {}

}
