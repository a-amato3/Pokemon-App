import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Results } from 'src/interfaces';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
})
export class PokemonSearchComponent implements OnInit {
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

  public form: FormGroup;

  readonly SEARCH_INPUT = 'search_input';
  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      [this.SEARCH_INPUT]: this.formBuilder.control(''),
    });
  }

  public searchEvent(search: string): void {
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

  public onSubmit(): void {
    if (this.form.valid) {
      console.log('form valid', this.form.value);

      this.searchEvent(this.form.controls[this.SEARCH_INPUT].value);
      this.form.reset();
    }
  }

  public clearSearch(): void {
    this.search = '';
    this.searchResult = true;
  }
}
