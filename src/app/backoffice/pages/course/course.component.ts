import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { ProgramService } from '@core/services/program.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  constructor(
    private programaDisponibleService: ProgramService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getProgramas();
  }

  getProgramas() {
    this.programaDisponibleService
      .programaDispponible(this.authService.user.carrera)
      .subscribe(
        (data) => console.log(data),
        (error) => console.error(error)
      );
  }
}
