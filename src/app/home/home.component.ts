import { Personagem } from './../models/personagem';
import { Observable, map, tap } from 'rxjs';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  personagens: Personagem[] = []

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getPersonagensAleatorios()
    .subscribe(
      res => this.personagens = res
    )
  }

}
