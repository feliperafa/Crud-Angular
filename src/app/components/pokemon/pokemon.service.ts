import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  urlPokemon = environment.baseUrlPokemon;

  constructor(private http: HttpClient) { }

  listPokemon(index){
    return this.http.get<any>(`${this.urlPokemon}/pokemon/${index}`);
  }
}
