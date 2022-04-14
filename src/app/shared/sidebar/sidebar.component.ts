import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: any[]= [];

  //Inyectamos el servicio que se encarga de los datos para el menú y para las rutas:
  constructor( private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.menuItems= this.sidebarService.menu;
    console.log(this.menuItems);
  }

  listOfElement(){
    let listElement= document.querySelectorAll('.list-button__click');
    listElement.forEach(listElement =>{
      listElement.classList.toggle('arrow');
      let height= 0;
      let menu:any= listElement.nextElementSibling;//Tomaremos el hermano adyacente del elemento que tiene .list-button__click

      //Si el alto del menu es actualmente igual a 0:
      if(menu.clientHeight == "0"){
        height= menu.scrollHeight //cambie al alto minimo que debe tener menu para existir, osea la propiedad scrollHeight nos va a dar el alto minimo que tiene todo ese tag que contiene el sub menu
      }
      //(Si no está en cero entonces me pondría el height por defecto osea en cero)

      menu.style.height=`${height}px`;//Y ese alto se lo almacenamos al estilo del submenu para que ya tenga un alto y se muestre todo el submenu cuando demos click en el boton de dashboard
    })
  }
}
