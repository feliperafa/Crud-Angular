import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonType = [];
  pokemonImg = '';

  constructor(private router: Router ,private pokemonService: PokemonService, private activatedRoute: ActivatedRoute, private headerService: HeaderService) {
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
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;

      }, error => {
        console.log(error)
      }
    )

  }
  back(){
    this.router.navigate(['/pokemon/read'])
  }
}
