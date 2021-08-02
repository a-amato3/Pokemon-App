import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
})
export class Name implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'alakazam':
        return 'Agile ' + value;

      case 'bulbasaur':
        return 'Bulbous ' + value;

      case 'charizard':
        return 'Chompy ' + value;

      case 'ditto':
        return 'Dangerous ' + value;

      case 'electrode':
        return 'Energetic ' + value;

      case 'flareon':
        return 'Furious ' + value;

      case 'golem':
        return 'Gross ' + value;

      case 'haunter':
        return 'Hungry ' + value;

      case 'ivysaur':
        return 'Industrious ' + value;

      case 'jigglypuff':
        return 'Iconic ' + value;

      case 'koffing':
        return 'Kinaesthetic ' + value;

      case 'lapras':
        return 'Lucky ' + value;

      case 'magmar':
        return 'Majestic ' + value;

      case 'nidorina':
        return 'Naggin ' + value;

      case 'onix':
        return 'Obscure ' + value;

      case 'pikachu':
        return 'Patient ' + value;

      case 'rhydon':
        return 'Radical ' + value;

      case 'seel':
        return 'Salty ' + value;

      case 'tauros':
        return 'Tactile ' + value;

      case 'venonat':
        return 'Vicious ' + value;

      case 'weedle':
        return 'Weak ' + value;

      case 'zubat':
        return 'Zealous ' + value;

      default:
        break;
    }

    return value;
  }
}
