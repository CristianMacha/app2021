import { Materia } from './materia.model';

export class AcademicPlan {
  public matricula: string;
  public carrera: string;
  public materias: Materia[];
  constructor() {
    this.matricula = '';
    this.carrera = '';
    this.materias = [];
  }
}
