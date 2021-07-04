import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Organize } from '@core/models/materia.model';
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
  materiasO = [];
  organize!: Organize;
  matricula: string;
  semana: ISemana;

  listaDeMaterias = [];
  materiasObligadas = [];

  showTable: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _horarioService: HorarioService
  ) {
    this.organizeForm = this.formBuilder.group({
      hra_inicio: new FormControl('07:00', [Validators.required]),
      hra_final: new FormControl('20:00', [Validators.required]),
    });
    this.matricula = localStorage.getItem('x-matricula');
  }

  ngOnInit(): void {}

  planificar() {
    console.log(this.materiasObligadas);
    
    this.materiasObligadas.forEach(element => {
      this.materiasO.push({mat_id: element.mat_id, NRC: element.NRC})
    });

    this.organize = {
      ...this.organizeForm.value,
      matricula: this.matricula,
      materias_obligadas: this.materiasO,
    };
    console.log(this.organize);
    
    this._horarioService.enviar(this.organize).subscribe(
      (data: any) => {
        this.semana = data.horario;
        this.validarMaterias(data.lista_horario);
        console.log('data', data);
        
        // this.quitarMateria();
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

  validarMaterias(lista: any) {
    for (let index = 0; index < lista.length; index++) {
      const element = lista[index];
      const existe = this.listaDeMaterias.some(
        (m) => m.mat_id === element.mat_id
      );
      if (!existe) {
        this.listaDeMaterias.push(element);
      }
    }
  }

  seleccionarMaterias(index: number, materia: any) {
    this.listaDeMaterias.splice(index, 1);
    this.materiasObligadas.push(materia);
  }

  quitarMateria(index: number, materia: any) {
    this.materiasObligadas.splice(index, 1);
    this.listaDeMaterias.push(materia);
  }
}
