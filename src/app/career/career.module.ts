import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './career.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: CareerComponent}];

@NgModule({
  declarations: [
    CareerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ 
    CareerComponent
  ]
})
export class CareerModule { }
