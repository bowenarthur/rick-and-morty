import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { HomeService } from './../home.service';
import { Local } from './../../models/local';
import { ResponseLocal } from './../../models/responseLocal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.scss']
})
export class LocaisComponent implements OnInit {

  currentPage: number;
  page?: number;
  resposta: ResponseLocal = { info: {}, results: [] };
  indice: number = 0;
  local?: Local;

  constructor(private homeService: HomeService) {
    this.currentPage = 1
  }

  ngOnInit(): void {
    this.getLocais()
  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
    this.currentPage = event.page;
    this.getLocais()
  }

  getLocais() {
    this.homeService.getLocais(this.currentPage).subscribe(res => {
      this.resposta.results = res.results
      this.resposta.info = res.info
      this.local = res.results[0]
    })
  }

  tornaAtivo(indice: number, local: Local) {
    this.indice = indice;
    this.local = local;
  }

}
