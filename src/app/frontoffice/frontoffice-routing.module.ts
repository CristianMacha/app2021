import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontofficeComponent } from './frontoffice.component';
import { HomeComponent } from './pages/home/home.component';
import { UsComponent } from './pages/us/us.component';

const routes: Routes = [
  {
    path: 'home',
    component: FrontofficeComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'us', component: UsComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontofficeRoutingModule {}
