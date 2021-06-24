import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAacademicPlan } from '@core/interfaces/academic-plan.interface';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Enrollment } from '@core/models/enrollment.model';
import { Materia } from '@core/models/materia.model';
import { AcademicPlan } from '@core/models/academic-plan.model';

@Injectable({
  providedIn: 'root',
})
export class AcademicPlanService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/plan`;
  }

  /**
   * Listar carreras
   * @param career Carrera
   * @returns any
   */
  getAllCareer(career: 'ICC' | 'LCC' | 'ITI'): Observable<IAacademicPlan> {
    return this.http.get<IAacademicPlan>(`${this.apiUrl}?carrera=${career}`);
  }

  /**
   * Listar materias cursadas por matricula
   * @returns Lista de materias cursadas
   */
  getSubjectsStudied() {
    return this.http.get<AcademicPlan>(
      `${this.apiUrl}/${localStorage.getItem('x-matricula')}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('x-token')}` },
      }
    );
  }

  /**
   * Matricular usuario
   * @param enrollment Matricula
   * @returns any
   */
  enrollment(enrollment: Enrollment) {
    console.log(enrollment);
    
    return this.http.patch(
      `${this.apiUrl}/${localStorage.getItem('x-matricula')}`,
      enrollment,
      {
        headers: { authorization: `Bearer ${localStorage.getItem('x-token')}` },
      }
    );
  }
}
