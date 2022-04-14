import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NofoundComponent } from './nofound/nofound.component';
import { StockComponent } from './stock/stock.component';//Importamos porque vamos a trabajar con rutas



@NgModule({
  declarations: [
    DashboardComponent,
    ProductosComponent,
    UsuariosComponent,
    PagesComponent,
    NofoundComponent,
    StockComponent

  ],
  exports: [
    DashboardComponent,
    ProductosComponent,
    UsuariosComponent,
    PagesComponent,
    StockComponent,
    NofoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
