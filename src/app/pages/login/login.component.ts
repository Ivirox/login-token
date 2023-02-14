import { Component } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.models';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: UsuarioModel = new UsuarioModel();
  constructor(private auth: AuthService) {
    this.usuario = new UsuarioModel();
  }

  ngOnInit(): void {
    this.usuario.email ='jcastro12@utmachala.edu.ec';
    
}

login(form: NgForm) {
  if(form.invalid){
    return;
  }
  this.auth.login(this.usuario).subscribe({
    next(resp) {
      console.log(resp);
    },
    error(err) {
      console.log(err.error.error.message);
    }

  });
}
}
