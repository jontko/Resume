import { NgModule, ɵINJECTOR_IMPL__POST_R3__ } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  
  {
    path:'career',
    loadChildren: () => 
      import('./career/career.module').then(m => m.CareerModule)
  },

  {
    path: 'resume',
    loadChildren: () =>
      import('./career/career.module').then(m => m.CareerModule)
  },
  
  {
    path: 'blog',
    loadChildren: () =>
      import('./blog/blog.module').then(b => b.BlogModule)
  }, 

  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then(p => p.PortfolioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
