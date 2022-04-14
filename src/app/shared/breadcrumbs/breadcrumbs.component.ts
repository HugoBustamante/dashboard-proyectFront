import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  title: string= '';
  constructor( private router: Router) {
  }

  ngOnInit(): void {
    this.arguments()
  }

  arguments(){
    this.router.events //Recuerda que el event es un observable, este está observando las rutas
    //Tendremos que fitrar las propiedades padre e hijo llamadas ActivationEnd que vienen en este evento de las rutas
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),//Traeremos ambas instancias de ActivationEnd que vienen en el event
      //Filtramos más:
      //Tipamos para que nos traiga ese tipo de dato:
      //Entonces llegamos filtrando a la propiedad snapshot que esta dentro de ese evento y traemos su ruta hija con firstChild
      //Y entro de firsChild nos tiene que buscar si hay un dato nulo y si lo hay, nos lo va a traer
      //Esto nos va a traer la primera ruta cuando demos click en el menu, ya sea en productos, en usuarios o dashboard:
      filter((event:ActivationEnd)=> event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data)//Nos traemos el data que agregamos a las rutas en pages-routing
    )
    .subscribe(data =>{//Nos traemos esa data. Ya con esto tendremos el nombre que agregamos en la data para que aparezca en el componente principal breadcrumbs segun la ruta en la que estemos
      console.log(data)
      this.title= data['title'];//Accedemos mediante desestructuracion a la propiedad title de la data
      document.title= `Adminlte - ${this.title}`;//Agregamos un titulo a la pestalla con ese mismo nombre para que aparezca en la pestaña el nombre segun la ruta en la que estemos
    })
  }

}
