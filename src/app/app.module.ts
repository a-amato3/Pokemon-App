import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipeModule } from 'src/pipes/custom-pipes.module';
import { MaterialModule } from 'src/modules/material-module';
import { PokemonSearchModule } from './pokemon-search/pokemon-search.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomPipeModule,
    BrowserAnimationsModule,
    MaterialModule,
    PokemonSearchModule,
  ],
  exports: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
