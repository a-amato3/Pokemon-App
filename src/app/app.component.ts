import { Component } from '@angular/core';
import { Results } from './../interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public search: string;
  public pokemons: Array<Results>;

  // Called when search input changes
  public newPokemonSearch(search: string): void {
    if (this.search !== search) {
      this.search = search;
    }
  }
}
