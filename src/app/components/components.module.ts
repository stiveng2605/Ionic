import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ProductosComponent } from "./productos/productos.component";
import { CrearComponent } from "./crear/crear.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ProductosComponent, CrearComponent],
  exports: [ProductosComponent, CrearComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
})
export class ComponentsModule{}