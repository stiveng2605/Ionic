import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'User', url: '/user', icon: 'person' },
    { title: 'Registro', url: '/form', icon: 'add-circle' },
    { title: 'Productos', url: '/product', icon: 'person' },
    { title: 'Carrito de compras', url: '/carrito', icon: 'cart' },
    { title: 'Agregar Producto', url: '/creacion', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
