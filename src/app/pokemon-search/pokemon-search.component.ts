import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Results } from 'src/interfaces';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
})
export class PokemonSearchComponent {
  @Output() searchChange = new EventEmitter();

  public pokemonList: Array<Results>;

  @Input()
  public control: FormControl;

  @Input()
  public search: string;

  @Input() set pokemons(pokemons: Results[]) {
    if (pokemons !== this.pokemonList) {
      this.pokemonList = pokemons;
    }
  }

  constructor() {}

  public searchEvent(search: string): void {
    // check for cleared search
    if (search === '') {
      this.search = search;
    }
    this.searchChange.emit(this.search);
  }
}
