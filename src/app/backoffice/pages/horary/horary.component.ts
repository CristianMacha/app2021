import { Component, OnInit } from '@angular/core';
import { HorarioService } from '@core/services/horario.service';
import { ISemana } from '../organize/organize.component';

@Component({
  selector: 'app-horary',
  templateUrl: './horary.component.html',
  styleUrls: ['./horary.component.scss'],
})
export class HoraryComponent implements OnInit {
  semana: ISemana;

  constructor(private _horarioService: HorarioService) {}
  ngOnInit(): void {
    this.miHorario();
  }

  miHorario() {
    this._horarioService.miHorario().subscribe(
      (data: any) => {
        this.semana = data;
        console.log('data', data);
      },
      (error) => console.error(error)
    );
  }
}
