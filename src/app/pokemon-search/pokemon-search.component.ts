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

  @Input()
  public control: FormControl;

  @Input()
  public search: string;

  public pokemonList: Array<Results>;

  public searchResult = true;

  @Input() set pokemons(pokemons: Results[]) {
    if (pokemons !== this.pokemonList) {
      this.pokemonList = pokemons;
    }
  }

  constructor() {}

  public searchEvent(search: string): void {
    // check for cleared search
    if (search !== null) {
      // this.search = search;

      switch (search) {
        case 'a':
          this.search = 'alakazam';
          this.searchResult = false;
          break;

        case 'b':
          this.search = 'bulbasaur';
          this.searchResult = false;
          break;

        case 'c':
          this.search = 'charizard';
          this.searchResult = false;
          break;

        case 'd':
          this.search = 'ditto';
          this.searchResult = false;

          break;

        case 'e':
          this.search = 'electrode';
          this.searchResult = false;

          break;
        case 'f':
          this.search = 'flareon';
          this.searchResult = false;

          break;
        case 'g':
          this.search = 'golem';
          this.searchResult = false;

          break;
        case 'h':
          this.search = 'haunter';
          this.searchResult = false;

          break;
        case 'i':
          this.search = 'ivysaur';
          this.searchResult = false;

          break;
        case 'j':
          this.search = 'jigglypuff';
          this.searchResult = false;

          break;
        case 'k':
          this.search = 'koffing';
          this.searchResult = false;

          break;
        case 'l':
          this.search = 'lapras';
          this.searchResult = false;

          break;
        case 'm':
          this.search = 'magmar';
          this.searchResult = false;

          break;
        case 'n':
          this.search = 'nidorina';
          this.searchResult = false;

          break;
        case 'o':
          this.search = 'onix';
          this.searchResult = false;

          break;
        case 'p':
          this.search = 'pikachu';
          this.searchResult = false;

          break;
        case 'q':
          this.search = '///';
          this.searchResult = false;

          break;
        case 'r':
          this.search = 'rhydon';
          this.searchResult = false;

          break;
        case 's':
          this.search = 'seel';
          this.searchResult = false;

          break;
        case 't':
          this.search = 'tauros';
          this.searchResult = false;

          break;
        case 'u':
          this.search = '///';
          this.searchResult = false;

          break;
        case 'v':
          this.search = 'venonat';
          this.searchResult = false;

          break;
        case 'w':
          this.search = 'weedle';
          this.searchResult = false;

          break;
        case 'x':
          this.search = '///';
          this.searchResult = false;

          break;
        case 'y':
          this.search = '///';
          this.searchResult = false;

          break;
        case 'z':
          this.search = 'zubat';
          this.searchResult = false;

          break;
        default:
          this.searchResult = false;
          break;
      }
      this.searchChange.emit(this.search);
    }
  }

  public clearSearch(): void {
    this.search = '';
    this.searchResult = true;
  }
}
