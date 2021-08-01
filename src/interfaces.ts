export interface Results {
  name: string;
  url: string;
  id?: string;
  details?: PokemonDetails;
}

export interface PokeAPI {
  // count: number;
  // next: string;
  results: Results[];
}

export interface PokemonDetails {
  name: string;
  id: number;
  weight: string;
  // types?: Array<any>;
}
