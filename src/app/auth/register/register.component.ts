import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//Los necesitamos para crear formularios reactivos.
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formBandera: boolean= false //Está bandera servirá para saber si el usuario esta enviando datos o no atravez del formulario register
  roles:any= ['admin','editor'];

  public registerForm= this.formBuilder.group({
    nombre: ['Laura', [Validators.required]],
    email: ['laura@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required]],
    passwordValidate: ['123456', [Validators.required]],
    role: ['', [Validators.required]],
  });

  constructor( private formBuilder:FormBuilder,
              private router:Router,
              private userService: UserService
    ) { }

  ngOnInit(): void {
  }

  createUser(){
    this.formBandera=true;

    //Si el formulario es invalido: (osea si no se han enviado los datos en el formulario de register.)
    if(this.registerForm.invalid){
      return;
    }

    //Si de lo contrario los datos se envian, osea el formulario register es valido:
    //Le enviamos los datos del formulario al metodo del servicio:
    this.userService.newUser(this.registerForm.value)
    .subscribe( res=> {
      //Si todo va bien aparecerá el siguiente mensaje:
      Swal.fire('Exito', 'Usuario creado correctamente','success')

    }, (err)=>{//Si todo anda mal enviamos el siguiente mensaje:
      const errorServer= JSON.parse(err.error);//Parseamos el mensaje de error porque recuerda que no debemos recibir el mensaje en forma de string, sino como un objeto en un json para poder tomar la propiedad "message" que trae el mensaje de error.
      Swal.fire('Error', errorServer.message, 'error');
    });
  }

  //Creamos un metodo que nos va a devolver el role que está en el FormBuilder:
  get getRoles(){
    return this.registerForm.get('role');
  }

  //Metodo que tomara el cambio de valor que ocurra en el select input role:
  changeInputRole(event:any){//Resive un evento que en este caso será el elemento select que tiene los roles en el formulario
    this.getRoles?.setValue(event.target.value, {onlySelf:true});//Establecemos el valor que se escoge en el select input. La propiedad onlySelf es para mostrar el valor
  }

}
