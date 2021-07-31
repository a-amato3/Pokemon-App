import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PokemonResultMoudule } from './pokemon-result/pokemon-result.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    PokemonResultMoudule,
  ],
  providers: [],
  schemas: [],
})
export class PokemonSearchModule {}
