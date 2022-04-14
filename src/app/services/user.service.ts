import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//Sirve para poder hacer las peticiones http
import { registerModel } from '../model/register.model';//Es la interfaz modelo para el formulario register
import { environment } from 'src/environments/environment';

// http://localhost:3000. En está varaible de entorno tenemos la url donde corre el servidor que creamos
const URL= environment.urlServe;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  //Metodo para crear un usuario en el servidor que creamos:
  newUser(formData:registerModel){
    return this.http.post(`${URL}/users`, formData, {responseType: 'text'});//Como estamos enviando datos de tipo string en el body de esta peticion para crear el usuario con esos datos y en el servidor que creamos nosotros indicamos que nos reciba un json. Entonces para que no nos de un error debido esto, pues agregamos en la peticion un "responseType" e indicamos que esa data enviado en el body es de tipo text, ya que recuerda que está data esta tipada como strings
  }
}
