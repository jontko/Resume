import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { CareerModule } from './career/career.module';
// import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { CalendlyModule } from './calendly/calendly.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HeaderModule, 
    FooterModule, 
    HomeModule, 
    CareerModule,
    PortfolioModule,
    CalendlyModule,
  ],

  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
