import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Results } from 'src/interfaces';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PokemonSearchComponent),
      multi: true,
    },
  ],
})
export class PokemonSearchComponent {
  @Output() searchChange = new EventEmitter();

  public pokemonList: Array<Results>;

  @Input()
  public control: FormControl;

  @Input()
  public search: string;

  public searchResult = true;

  @Input() set pokemons(pokemons: Results[]) {
    if (pokemons !== this.pokemonList) {
      this.pokemonList = pokemons;
    }
  }

  constructor() {}

  public searchEvent(search: string): void {
    // check for cleared search
    // if (search === '') {
    // this.search = search;

    switch (search) {
      case 'b':
        this.search = 'bulbasaur';
        this.searchResult = false;
        break;

      case 'c':
        this.search = 'charizard';
        this.searchResult = false;

        break;
      default:
        this.searchResult = false;
        break;
    }
    // }
    this.searchChange.emit(this.search);
  }

  public clearSearch(): void {
    this.search = '';
    this.searchResult = true;
  }
}
