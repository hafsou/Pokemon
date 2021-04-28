import { Component, OnInit } from '@angular/core';
import {PokeDetail, Pokemon} from '../pokemon';
import {PokeAPIServiceService} from '../poke-apiservice.service';
import {PokeShareInfoService} from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {

  id!: string;
  pokes: Pokemon[] = [];
  selectedPokeId!: string;
  searchPokeName: string = '';
  pokeDetail!: PokeDetail;
  myDate!: Date;
  checked = true;

  constructor(private pokeService: PokeAPIServiceService,
              private pokeShareInfoService: PokeShareInfoService) {

    /*this.pokes.push(new Pokemon('1', 'pikachu'));
    this.pokes.push(new Pokemon('2', 'bulbaseur'));
    this.pokes.push(new Pokemon('3', 'ivysaur'));
    this.pokes.push(new Pokemon('4', 'pikachu'));
    this.pokes.push(new Pokemon('5', 'pikachu'));*/
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) =>
    {
      data.results.forEach((e, index) => {
      this.pokes.push(new Pokemon('' + (index+1), e.name, e.url));
      });
    });
  }

  go(){

    // console.log(this.selectedPokeId);
    if (this.selectedPokeId != ''){
      this.pokeService.getPokemonInfo(this.selectedPokeId)
        .subscribe(data => this.pokeDetail = data);
      this.pokeShareInfoService.setValue(this.selectedPokeId);
    }
  }
}
