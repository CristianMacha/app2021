import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAacademicPlan } from '@core/interfaces/academic-plan.interface';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AcademicPlanService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/plan`;
  }

  /**
   * ListarCarreras
   * @param career Carrera
   * @returns any
   */
  getAllCareer(career: 'ICC' | 'LCC' | 'ITI'): Observable<IAacademicPlan> {
    return this.http.get<IAacademicPlan>(`${this.apiUrl}?carrera=${career}`);
  }
}
