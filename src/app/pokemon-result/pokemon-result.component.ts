import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokeAPI, PokemonDetails, Results } from 'src/interfaces';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-result',
  templateUrl: './pokemon-result.component.html',
  styleUrls: ['./pokemon-result.component.scss'],
})
export class PokemonResultComponent implements OnInit {
  @Input() set search(newSearch: string) {
    if (newSearch !== this.query) {
      this.query = newSearch;
    }
  }

  @Output()
  public exportPokemons = new EventEmitter();

  public pokemonsLoaded: boolean;
  public pokemons: PokeAPI;
  public query: string;

  constructor(private pokemonService: PokemonService) {}

  public ngOnInit(): void {
    this.pokemonsLoaded = false;
    this.getPokemons();
  }

  // Loads in all 151 Original pokemon and gets their details and species details
  public getPokemons(): void {
    this.pokemonService.getPokemon().subscribe((data: PokeAPI) => {
      this.pokemons = data;

      if (this.pokemons.results && this.pokemons.results.length) {
        this.pokemons.results.forEach((pokemon) => {
          pokemon.id =
            pokemon.url.split('/')[pokemon.url.split('/').length - 2];

          this.getPokemonDetails(pokemon);
        });
      }
    });
  }

  // Gets and sets pokemons details
  private getPokemonDetails(pokemon: Results): void {
    this.pokemonService
      .getPokemonDetails(pokemon.name)
      .subscribe((details: PokemonDetails) => {
        pokemon.details = details;
        if (pokemon.id === '151') {
          this.pokemonsLoaded = true;
        }
      });
  }
}
