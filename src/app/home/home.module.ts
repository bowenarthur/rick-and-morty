import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { PersonagensComponent } from './personagens/personagens.component';
import { LocaisComponent } from './locais/locais.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    HomeComponent,
    PersonagensComponent,
    LocaisComponent,
    EpisodiosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    CarouselModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers:[
    HomeService
  ]
})
export class HomeModule { }
