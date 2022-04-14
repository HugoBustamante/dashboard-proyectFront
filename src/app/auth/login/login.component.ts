import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  //Este metodo lo usaremos en el boton login para que cuando el usuario inicie sesion entonces se dirija automaticamente al dashboard:
  onLogin(){
    this.router.navigate(['']);//Recuerda quela ruta cuando la ponemos vacio nos redirecciona a la ruta del Dashboard
  }

}
