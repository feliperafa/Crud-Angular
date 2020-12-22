import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute, private headerService: HeaderService) {
    headerService.headerDate = {
      title: 'Status Pokémons',
      icon: 'catching_pokemon',
      routeUrl: '/pokemon/detaisl'
    }
    this.activatedRoute.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  ngOnInit(): void {
  }
  getPokemon(id) {
    this.pokemonService.listPokemon(id).subscribe(
      res => {
        console.log(res)

      }, error => {
        console.log(error)
      }
    )

  }
}
