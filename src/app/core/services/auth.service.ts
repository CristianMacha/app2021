import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { IAuthLogin, IAuthRegister } from '@core/interfaces/auth.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string;
  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = `${environment.apiUrl}/auth`;
  }

  /**
   * Registro de usuario
   * @param register Datos necesarios para el registro
   * @returns any
   */
  register(register: IAuthRegister) {
    return this.http.post(`${this.apiUrl}/signup`, register);
  }

  /**
   * Inicio de sesion
   * @param login Datos necesarios para el login
   * @returns token
   */
  login(login: IAuthLogin) {
    return this.http.post(`${this.apiUrl}/login`, login).pipe(
      tap((resp: any) => localStorage.setItem('x-token', resp.token)),
      map((resp: any) => (resp.token ? true : false)),
      catchError((err) => of(false))
    );
  }

  validateToken() {
    const token = localStorage.getItem('x-token');
    return token ? of(true) : of(false);
  }

  closeSession() {
    localStorage.removeItem('x-token');
    this.router.navigateByUrl('/login');
  }
}
