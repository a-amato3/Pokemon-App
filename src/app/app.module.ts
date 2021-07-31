import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonSearchComponent } from 'src/app/pokemon-search/pokemon-search.component';
import { PokemonResultComponent } from 'src/app/pokemon-search/pokemon-result/pokemon-result.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipeModule } from 'src/pipes/custom-pipes.module';
import { MaterialModule } from 'src/modules/material-module';

@NgModule({
  declarations: [AppComponent, PokemonResultComponent, PokemonSearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomPipeModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
