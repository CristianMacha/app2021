export interface IMateria {
  asignatura: string;
  mat_id: string;
}

export interface IAacademicPlan {
  carrera: string;
  materias: IMateria[];
}
