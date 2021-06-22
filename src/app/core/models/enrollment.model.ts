import { Materia } from './materia.model';

export class Enrollment {
  public matricula: string;
  public carrera: string;
  public materias_nuevas: string[];
  constructor() {
    this.matricula = '';
    this.carrera = '';
    this.materias_nuevas = [];
  }
}
