import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontofficeComponent } from './frontoffice.component';
import { HomeComponent } from './pages/home/home.component';
import { UsComponent } from './pages/us/us.component';
import { FrontHeaderComponent } from './components/front-header/front-header.component';
import { FrontFooterComponent } from './components/front-footer/front-footer.component';


@NgModule({
  declarations: [
    FrontofficeComponent,
    HomeComponent,
    UsComponent,
    FrontHeaderComponent,
    FrontFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FrontofficeModule { }
