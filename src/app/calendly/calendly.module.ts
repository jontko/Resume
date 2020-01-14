import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendlyComponent } from './calendly.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: CalendlyComponent}];

@NgModule({
  declarations: [CalendlyComponent],
  imports: [
    CommonModule
  ],
  exports: [CalendlyComponent]
})
export class CalendlyModule { }
