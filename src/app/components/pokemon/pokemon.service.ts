import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  urlPokemon =  "https://pokeapi.co/api/v2";



  constructor(private http: HttpClient) { }

  listPokemon(index){
    return this.http.get<any>(`${this.urlPokemon}/pokemon/${index}`);
  }
}
