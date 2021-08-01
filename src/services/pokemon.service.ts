import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PokeAPI, PokemonDetails } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokeAPI: any;
  public pokeSpeciesAPI: any;

  constructor(private http: HttpClient) {
    this.pokeAPI = environment.pokemonURL;
  }

  //  Returns original 151 pokemon
  public getPokemon(): Observable<PokeAPI> {
    return this.http.get<PokeAPI>(`${this.pokeAPI}?limit=151`).pipe(
      tap((pokemon) => console.log('LOG', pokemon)),
      catchError(this._handleError)
    );
  }

  // Uses pokemon name to retrieve individual pokemon details
  public getPokemonDetails(name: string): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(`${this.pokeAPI}/${name}`)
      .pipe(catchError(this._handleError));
  }

  // Handles any request errors
  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
