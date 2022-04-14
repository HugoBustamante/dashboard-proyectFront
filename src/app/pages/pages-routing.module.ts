import { NgModule } from '@angular/core';import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';

//Creamos las rutas:
const routes: Routes = [
  {
    path:'dashboard',
    component: PagesComponent, //ESTE SERÁ LA RUTA PADRE
  children:[//Rutas hijas:
  //Agregaremos unos datos extras para usarlos en el componente breadcrumbs, el cual es el principal donde vamos a renderizar los productos, el dashboard, etc.., estos datos los vamos a usar para cambiar el nombre de su contenido con el de la ruta correspondiente en donde se esté, ya sea en la ruta de productos, de usuarios o dashboard:
    {path:"", component: DashboardComponent, data: {title: "Dashboard"} },//Va ser la ruta del dashboard
    {path:"usuarios", component:UsuariosComponent, data: {title: "Usuarios"}},
    {path:"productos", component: ProductosComponent, data: {title: "Productos"}},
    {path:"stock", component: StockComponent, data: {title: "Stock"}}
  ]
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
