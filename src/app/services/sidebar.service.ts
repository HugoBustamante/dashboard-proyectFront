//En este servicio vamos hacer dinamico todo lo que tiene que ver el menú y las rutas, acá vamos a manejar esos datos u valores
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  //Datos que utilizaremos en el componente sidebar para almacenar algunos datos del menu y las rutas
  menu: any[]= [{
    title: 'dashboard',
    icon: 'nav-icon fa fa-tachometer-alt',//Acá almacenamos el icono de bootstrap para el menu de dashboard
    submenu: [
      {title: 'Usuarios', url: 'usuarios'},
      {title: 'Productos', url: 'productos'},
      {title: 'Stock', url: 'stock'}
    ]
  }]

  constructor() { }
}
