import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/programa-disponible`;
  }

  programaDispponible(career: 'ICC' | 'LCC' | 'ITI') {
    return this.http.get(`${this.apiUrl}?carrera=${career}`, {
      headers: { authorization: `Bearer ${localStorage.getItem('x-token')}` },
    });
  }
}
