import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IAacademicPlan } from '@core/interfaces/academic-plan.interface';
import { AcademicPlan } from '@core/models/academic-plan.model';
import { Materia } from '@core/models/materia.model';
import { AcademicPlanService } from '@core/services/academic-plan.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  constructor(private academicPlanService: AcademicPlanService) {}

  allCareer = [
    { acronimo: 'ICC', name: 'INGENIERIA EN CIENCIAS DE LA COMPUTACION' },
    { acronimo: 'LCC', name: 'LICENCIATURA EN CIENCIAS DE LA COMPUTACION' },
    { acronimo: 'ITI', name: 'INGENIERIA EN TECNOLOGIAS DE LA INFORMACION' },
  ];

  academicPlan: AcademicPlan = new AcademicPlan();

  materias: Materia[] = [];
  selectedMaterias: Materia[] = [];

  career: FormControl = new FormControl('ICC');

  ngOnInit(): void {
    this.getAll();
  }

  /**
   * Listar planes academicos
   */
  getAll() {
    this.academicPlanService
      .getAllCareer(this.career.value)
      .pipe(finalize(() => (this.selectedMaterias = [])))
      .subscribe(
        (data) => (this.materias = data.materias),
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
