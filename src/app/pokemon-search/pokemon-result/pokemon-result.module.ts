import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/modules/material-module';
import { CustomPipeModule } from 'src/pipes/custom-pipes.module';
import { PokemonResultComponent } from './pokemon-result.component';

@NgModule({
  declarations: [PokemonResultComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomPipeModule,
    MaterialModule,
  ],
  exports: [PokemonResultComponent],
  schemas: [],
})
export class PokemonResultModule {}
