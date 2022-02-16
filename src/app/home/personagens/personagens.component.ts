import { ResponsePersonagem } from '../../models/responsePersonagem';
import { Personagem } from './../../models/personagem';
import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {

  currentPage: number;
  page?: number;
  resposta: ResponsePersonagem = { info: {}, results: [] };
  indice: number = 0;
  personagem?: Personagem;

  constructor(private homeService: HomeService) {
    this.currentPage = 1
  }

  ngOnInit(): void {
    this.getPersonagens()
  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
    this.currentPage = event.page;
    this.getPersonagens()
  }

  getPersonagens() {
    this.homeService.getPersonagens(this.currentPage).subscribe(res => {
      this.resposta.results = res.results
      this.resposta.info = res.info
      this.personagem = res.results[0]
    })
  }

  tornaAtivo(indice: number, personagem: Personagem) {
    this.indice = indice;
    this.personagem = personagem;
  }

}
