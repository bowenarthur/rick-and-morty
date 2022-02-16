import { HomeService } from './../home.service';
import { Episodio } from './../../models/episodio';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ResponseEpisodio } from './../../models/responseEpisodio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit {

  currentPage: number;
  page?: number;
  resposta: ResponseEpisodio = { info: {}, results: [] };
  indice: number = 0;
  episodio?: Episodio;

  constructor(private homeService: HomeService) {
    this.currentPage = 1
  }

  ngOnInit(): void {
    this.getEpisodios()
  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
    this.currentPage = event.page;
    this.getEpisodios()
  }

  getEpisodios() {
    this.homeService.getEpisodios(this.currentPage).subscribe(res => {
      this.resposta.results = res.results
      this.resposta.info = res.info
      this.episodio = res.results[0]
    })
  }

  tornaAtivo(indice: number, episodio: Episodio) {
    this.indice = indice;
    this.episodio = episodio;
  }

}
