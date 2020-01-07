import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import {Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: PortfolioComponent}];

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
