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
}
