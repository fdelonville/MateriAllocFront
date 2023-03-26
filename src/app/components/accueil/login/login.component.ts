import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/models/loginform';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup
  
  constructor(private readonly authService: AuthService, private router: Router){
    this.form = new FormGroup({
      'username': new FormControl('',Validators.minLength(2)),
      'password': new FormControl('',Validators.minLength(2)),
    })
  }

  onSubmit(){
    if( this.form.valid ){
      const loginForm: LoginForm = {...this.form.value}
      this.authService.login(loginForm).subscribe({
          next: (r: any) => {
            sessionStorage.setItem('token',r.token)
            sessionStorage.setItem('roles', r.roles)
            sessionStorage.setItem('username', r.username)
            window.location.reload()
          }
      })
      this.form.reset({
        'username': '',
        'password': ''
      });
    }
  }

}