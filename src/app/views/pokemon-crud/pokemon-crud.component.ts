import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-pokemon-crud',
  templateUrl: './pokemon-crud.component.html',
  styleUrls: ['./pokemon-crud.component.css']
})
export class PokemonCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerDate = {
      title:'Listagem de Pokémons',
      icon:'catching_pokemon',
      routeUrl:'/pokemon'
    }
  }

  ngOnInit(): void {
  }

  viewPokemon(){
this.router.navigate(['/pokemon/read'])
  }
}
