import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
})
export class Name implements PipeTransform {
  transform(value: any): any {
    if (value === 'bulbasaur') {
      return value + ' bb';
    }
    if (value === 'charizard') {
      return value + ' bb';
    }

    return value;
  }
}
