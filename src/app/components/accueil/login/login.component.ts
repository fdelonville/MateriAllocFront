import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from 'src/app/models/loginform';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup
  
  constructor(private readonly authService: AuthService){
    this.form = new FormGroup({
      'username': new FormControl('',Validators.minLength(2)),
      'password': new FormControl('',Validators.minLength(2)),
    })
  }

  onSubmit(){
    if( this.form.valid ){
      const loginForm: LoginForm = {...this.form.value}
      this.authService.login(loginForm).subscribe({
          next: (r: any) => {console.log(r.token)}
      })
      this.form.reset({
        'username': '',
        'password': ''
      });
    }
  }

}