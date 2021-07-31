import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
})
export class Name implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'bulbasaur':
        return value + ' bb';

      case 'charizard':
        return value + ' cc';

      default:
        break;
    }

    return value;
  }
}
