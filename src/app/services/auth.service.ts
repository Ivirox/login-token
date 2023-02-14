import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "https://identitytoolkit.googleapis.com/v1";

  private apiKey = 'AIzaSyAhd3V5_OsuBzYhlM2LJ8Lq6l2J5owvsqQ'

  //Crear y registrar usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  //Iniciar sesion
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { }

  logout(){

  }

  login(usuario: UsuarioModel){
    const authData ={
      //email:usuario.email,
      //password:usuario.password,
      //nombre:usuario.nombre

      ...usuario,
      returnSecureToken: true
    }
    return this.http.post(
      `${this.url}/accounts:signInWithPassword?key=${this.apiKey}`,authData
    );
  }

  nuevoUsuario(usuario: UsuarioModel){
    const authData ={
      //email:usuario.email,
      //password:usuario.password,
      //nombre:usuario.nombre

      ...usuario,
      returnSecureToken: true
    }
    return this.http.post(
      `${this.url}/accounts:signUp?key=${this.apiKey}`,authData
    );
  }
}
