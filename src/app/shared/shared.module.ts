import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from '../components/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    BreadcrumbsComponent
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule //Importamos para poder habilitar las rutas en los componentes de este modulo
  ]
})
export class SharedModule { }
