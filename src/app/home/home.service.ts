import { ResponseEpisodio } from './../models/responseEpisodio';
import { ResponsePersonagem } from '../models/responsePersonagem';
import { ResponseLocal } from '../models/responseLocal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personagem } from '../models/personagem';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getPersonagensAleatorios() {
    let ids: number[] = [];
    for (let i = 0; i < 6; i++) {
      ids.push(Math.floor(Math.random() * 826) + 1)
    }
    return this.http.get<Personagem[]>(`https://rickandmortyapi.com/api/character/${ids}`)
  }

  getPersonagens(pagina: number) {
    return this.http.get<ResponsePersonagem>(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
  }

  getLocais(pagina: number){
    return this.http.get<ResponseLocal>(`https://rickandmortyapi.com/api/location/?page=${pagina}`)
  }

  getEpisodios(pagina: number){
    return this.http.get<ResponseEpisodio>(`https://rickandmortyapi.com/api/episode/?page=${pagina}`)
  }
}
