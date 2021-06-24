import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IAacademicPlan } from '@core/interfaces/academic-plan.interface';
import { AcademicPlan } from '@core/models/academic-plan.model';
import { Enrollment } from '@core/models/enrollment.model';
import { Materia } from '@core/models/materia.model';
import { AcademicPlanService } from '@core/services/academic-plan.service';
import { AuthService } from '@core/services/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  constructor(
    private academicPlanService: AcademicPlanService,
    private authService: AuthService
  ) {}

  allCareer = [
    { acronimo: 'ICC', name: 'INGENIERIA EN CIENCIAS DE LA COMPUTACION' },
    { acronimo: 'LCC', name: 'LICENCIATURA EN CIENCIAS DE LA COMPUTACION' },
    { acronimo: 'ITI', name: 'INGENIERIA EN TECNOLOGIAS DE LA INFORMACION' },
  ];

  academicPlan: AcademicPlan = new AcademicPlan();

  materias: Materia[] = [];
  materiasAll: Materia[] = [];
  selectedMaterias: Materia[] = [];
  enrollmentM: Enrollment = new Enrollment();

  career: FormControl = new FormControl('ICC');

  ngOnInit(): void {
    // this.getAll();
    this.getSubjectsStudied();
  }

  /**
   * Listar planes academicos
   */
  // getAll() {
  //   console.log(this.authService.user);

  //   this.academicPlanService
  //     .getAllCareer(this.authService.user.carrera)
  //     .pipe(finalize(() => (this.selectedMaterias = [])))
  //     .subscribe(
  //       (data) => {(this.materias = data.materias); console.log(data)},
  //       (error) => console.error(error)
  //     );
  // }

  /**
   * Matricular usuario
   */
  enrollment() {
    this.enrollmentM.matricula = localStorage.getItem('x-matricula');
    this.enrollmentM.carrera = localStorage.getItem('x-carrera');

    this.selectedMaterias.forEach((materia) => {
      this.enrollmentM.materias_nuevas.push(materia.mat_id);
    });

    this.academicPlanService.enrollment(this.enrollmentM).subscribe(
      (data) => console.log(data),
      (error) => console.error(error)
    );
  }

  /**
   * Obtener cursos cursados
   */
  getSubjectsStudied() {
    this.academicPlanService
      .getSubjectsStudied()
      .pipe(
        finalize(() => {
          const array1 = this.materiasAll.filter(
            (materia) => materia.aprobada == true
          );
          const array2 = this.materiasAll.filter(
            (materia) => materia.aprobada == false
          );
          this.selectedMaterias = array1;
          this.materias = array2;
        })
      )
      .subscribe(
        (data) => {
          this.materiasAll = data.materias;
        },
        (error) => console.error(error)
      );
  }

  /**
   * Quitar materia de la lista original
   * @param index Index
   */
  removeMateriaToListOriginal(index: number) {
    this.materias.splice(index, 1);
  }

  /**
   * Agrega una materia a la lista original
   * @param materia Materia seleccionada
   */
  addMateriaToListOriginal(materia: Materia) {
    this.materias.unshift(materia);
  }

  /**
   * Agregar materia a la lista
   * @param index Index
   * @param materia Materia seleccionada
   */
  addMateria(index: number, materia: Materia) {
    this.removeMateriaToListOriginal(index);
    this.selectedMaterias.unshift(materia);
  }

  /**
   * Quitar materia de la lista
   * @param index Index
   * @param materia Materia seleccionada
   */
  removeMateria(index: number, materia: Materia) {
    this.selectedMaterias.splice(index, 1);
    this.addMateriaToListOriginal(materia);
  }
}
