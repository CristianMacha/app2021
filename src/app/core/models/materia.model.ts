export class Materia {
  public asignatura: string;
  public mat_id: string;
  public aprobada: boolean;
  constructor() {
    this.asignatura = '';
    this.mat_id = '';
    this.aprobada = false;
  }
}

export class MateriasO {
  public mat_id: string;
  public NRC: string;
  constructor() {
    this.mat_id = '';
    this.NRC = '';
  }
}
export class Organize {
  public matricula: string;
  public hra_inicio: string;
  public hra_final: string;
  public materias_obligadas: MateriasO[];

  constructor() {
    this.matricula = '';
    this.hra_inicio = '';
    this.hra_final = '';
    this.materias_obligadas = [];
  }
}
