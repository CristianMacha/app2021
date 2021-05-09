import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { BackofficeRoutingModule } from './backoffice/backoffice-routing.module';
import { FrontofficeRoutingModule } from './frontoffice/frontoffice-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: componetne },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    BackofficeRoutingModule,
    FrontofficeRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
