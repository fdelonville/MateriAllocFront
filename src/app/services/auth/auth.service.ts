import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from 'src/app/models/loginform';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient) {}

  login(loginForm: LoginForm){
    return this.httpClient.post('http://localhost:8080/api/auth/login',loginForm)
  }

}
