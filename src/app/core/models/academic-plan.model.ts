import { Materia } from './materia.model';

export class AcademicPlan {
  public carrera: string;
  public materias: Materia[];
  constructor() {
    this.carrera = '';
    this.materias = [];
  }
}
