import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { IAuthLogin, IAuthRegister } from '@core/interfaces/auth.interface';
import { environment } from '../../../environments/environment';
import { User } from '@core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string;
  user: User = new User();

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
    return this.http.post<User>(`${this.apiUrl}/login`, login).pipe(
      tap((resp) => {
        if (resp.last_updated == null) resp.last_updated = new Date();
        console.log(resp);
        localStorage.setItem('x-token', resp.token);
        localStorage.setItem('x-name', resp.name);
        localStorage.setItem('x-matricula', resp.matricula);
        localStorage.setItem('x-carrera', resp.carrera);
        localStorage.setItem('x-last-updated', resp.last_updated.toString());

        this.user = resp;
      }),
      map((resp: any) => (resp.token ? true : false)),
      catchError((err) => {
        console.error(err);
        localStorage.clear();
        return of(false);
      })
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
