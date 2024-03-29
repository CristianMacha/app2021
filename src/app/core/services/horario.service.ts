import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Organize } from '@core/models/materia.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HorarioService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/horario`;
  }

  enviar(organize: Organize) {
    return this.http.post(`${this.apiUrl}`, organize, {
      headers: { Authorization: `Bearer ${localStorage.getItem('x-token')}` },
    });
  }

  aceptarHorario(data: any) {
    return this.http.post(
      `${this.apiUrl}/${localStorage.getItem('x-matricula')}`,
      data,
      {
        headers: { authorization: `Bearer ${localStorage.getItem('x-token')}` },
      }
    );
  }

  miHorario() {
    return this.http.get(
      `${this.apiUrl}/${localStorage.getItem('x-matricula')}`,
      {
        headers: { authorization: `Bearer ${localStorage.getItem('x-token')}` },
      }
    );
  }
}
