import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MateriasO, Organize } from '@core/models/materia.model';
import { AcademicPlanService } from '@core/services/academic-plan.service';
import { HorarioService } from '@core/services/horario.service';

export interface ISemana {
  Lunes: Object;
  Martes: Object;
  Miercoles: Object;
  Jueves: Object;
  Viernes: Object;
  Sabado: Object;
}

@Component({
  selector: 'app-organize',
  templateUrl: './organize.component.html',
  styleUrls: ['./organize.component.scss'],
})
export class OrganizeComponent implements OnInit {
  organizeForm!: FormGroup;
  materiasO: MateriasO[] = [];
  organize!: Organize;
  matricula: string;
  semana: ISemana;

  showTable: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _horarioService: HorarioService
  ) {
    this.organizeForm = this.formBuilder.group({
      hra_inicio: new FormControl('', [Validators.required]),
      hra_final: new FormControl('', [Validators.required]),
    });
    this.matricula = localStorage.getItem('x-matricula');
  }

  ngOnInit(): void {}

  planificar() {
    this.organize = {
      ...this.organizeForm.value,
      matricula: this.matricula,
      materias_obligadas: this.materiasO,
    };
    console.log(this.organize);

    this._horarioService.enviar(this.organize).subscribe(
      (data: any) => {
        this.semana = data;
        this.showTable = true;
      },
      (error) => console.error(error)
    );
  }

  aceptarPlan() {
    this._horarioService.aceptarHorario(this.semana).subscribe(
      (data) => console.log(data),
      (error) => console.error(error)
    );
  }
}
