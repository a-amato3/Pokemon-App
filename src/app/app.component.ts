import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Results } from './../interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
