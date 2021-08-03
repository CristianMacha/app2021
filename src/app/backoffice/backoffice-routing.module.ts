import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BackofficeComponent } from './backoffice.component';
import { CourseComponent } from './pages/course/course.component';
import { HoraryComponent } from './pages/horary/horary.component';
import { AuthGuardGuard } from '../core/guards/auth-guard.guard';
import { PlanComponent } from './pages/plan/plan.component';
import { OrganizeComponent } from './pages/organize/organize.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'backoffice',
    component: BackofficeComponent,
    canActivate: [AuthGuardGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'course', component: CourseComponent },
      { path: 'plan', component: PlanComponent },
      { path: 'horary', component: HoraryComponent },
      { path: 'organize', component: OrganizeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
