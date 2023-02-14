import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.models';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;

  constructor(private auth: AuthService) {
    this.usuario = new UsuarioModel();
  }

  ngOnInit(): void {
    this.usuario.email = 'jcastro12@utmachala.edu.ec';

  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth.nuevoUsuario(this.usuario).subscribe({
      next(resp) {
        console.log(resp);
      },
      error(err) {
        console.log(err.error.error.message);
      }

    });
  }
}
