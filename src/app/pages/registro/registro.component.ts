import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.models';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario : UsuarioModel;

  constructor(){
    this.usuario = new UsuarioModel();
  }

  ngOnInit(): void {
      this.usuario.email ='jcastro12@utmachala.edu.ec';
      this.usuario.nombre='Joshy';
      this.usuario.password='yoshmiamor';
  }

  onSubmit(){
    console.log('Formulario enviado');
    console.log(this.usuario);
  }
}
