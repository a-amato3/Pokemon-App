import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PokemonResultModule } from './pokemon-result/pokemon-result.module';
import { PokemonSearchComponent } from './pokemon-search.component';

@NgModule({
  declarations: [PokemonSearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    PokemonResultModule,
  ],
  exports: [PokemonSearchComponent],
})
export class PokemonSearchModule {}
