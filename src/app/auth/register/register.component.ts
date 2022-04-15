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
    nombre: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    passwordValidate: ['', [Validators.required]],
    role: ['', [Validators.required]],
  }, {
    validation: this.passwordsEquals('password', 'passwordValidate')//Llamamos el metodo acá que verifica que las contraseñas sean iguales para poderle pasar estos campos de password y passwordValidate.
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

  fieldsNoValidate(field:string):boolean{
    //Tomamos todos los campos del formBuilder y si alguno es invalido y la bandera es false osea que el usuario no ha enviado datos en el formulario, pues este metodo nos va a devolver un true, por lo que nos servirá para indicar un error si el campo que le pasamos en el componente html está vacio, de lo contrario no se mostrara el error por lo que es un false:
      if(this.registerForm.get(field)?.invalid && this.formBandera){
        return true;
      }else{
        return false;
      }
  }

  passwordNoValidate(){
    const pass1= this.registerForm.get('password')?.value; //Conseguimos el valor digitado en el campo de password
    const pass2= this.registerForm.get('passwordValidate')?.value; //Conseguimos el valor digitado en el campo de validación del password.

    if((pass1 !== pass2) && this.formBandera){
      return true;
    }else{
      return false;
    }
  }

  //Aplicamos el codigo para hacer la comparacion de los password para que sean:
  //Este metodo lo llamaremos en el formBuilder donde estan los campos del formulario para pasarle los dos campos de password.
  passwordsEquals(pass1:string , pass2:string){

    return (formGroup: FormGroup) =>{
      const pass1Control= formGroup.get(pass1);
      const pass2Control= formGroup.get(pass2);

      //Si las contraseñas ingresadas en lso campos son iguales:
      if(pass1Control?.value === pass2Control?.value){
        pass2Control?.setErrors(null);//Establece errores en este no establecemos ninguno porque las contraseñas son iguales

      }else{//Si las constraseñas de los campos no son iguales:
        pass2Control?.setErrors({noEsIgual:true});//Le establecemos un error
      }
    }
  }


}
