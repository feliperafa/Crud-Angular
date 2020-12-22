import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-read',
  templateUrl: './pokemon-read.component.html',
  styleUrls: ['./pokemon-read.component.css']
})
export class PokemonReadComponent implements OnInit {

  displayedColumns: string[] = ['posicao', 'image', 'name'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data)
  pokemon = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;



  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }
  getPokemon() {
    let pookemonData;
    for (let i = 1; i <= 150; i++) {

      this.pokeService.listPokemon(i).subscribe(
        res => {
          pookemonData = {
            posicao: i,
            image: res.sprites.front_default,
            name: res.name
          };
          this.data.push(pookemonData);
          this.dataSource = new MatTableDataSource<any>(this.data)
          this.dataSource.paginator = this.paginator;
          console.log(res)
        },

        err => {

          console.log(err)

        }
      );
    }

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

