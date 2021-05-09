import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BackofficeComponent } from './backoffice.component';
import { CourseComponent } from './pages/course/course.component';
import { HoraryComponent } from './pages/horary/horary.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlanComponent } from './pages/plan/plan.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BackofficeComponent,
    CourseComponent,
    HoraryComponent,
    NavbarComponent,
    SidebarComponent,
    PlanComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  providers: [HttpClient],
})
export class BackofficeModule {}
