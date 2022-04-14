//De la carpeta que descargamos de Adminlte3 pasamos las carpetas dist(donde esta el css y otros archivos) y plugins en la carpeta assets de este proyecto, que que necesitamos usar algunos plugins y archivos que necesitamos apra integrar el Adminlte3 en este proyecto Angular

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

//Creamos las rutas:
const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},//Cuando la ruta esta vacia iremos automaticamente al login
  {path:'**', component: NofoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
