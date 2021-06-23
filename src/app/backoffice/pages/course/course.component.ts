import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { ProgramService } from '@core/services/program.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  materiasOfertadas: any = {};

  constructor(
    private programaDisponibleService: ProgramService,
  ) {}

  ngOnInit(): void {
    this.getProgramas();
  }

  getProgramas() {
    this.programaDisponibleService
      .programaDispponible(localStorage.getItem('x-carrera'))
      .subscribe(
        (data) => {(this.materiasOfertadas = data); console.log(data);
        },
        (error) => console.error(error)
      );
  }
}
