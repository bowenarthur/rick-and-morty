import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { LocaisComponent } from './locais/locais.component';
import { PersonagensComponent } from './personagens/personagens.component';

const routes: Routes = [
  { path: 'personagens', component: PersonagensComponent },
  { path: 'locais', component: LocaisComponent },
  { path: 'episodios', component: EpisodiosComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
