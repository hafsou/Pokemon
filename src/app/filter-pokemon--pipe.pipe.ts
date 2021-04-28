import { Pipe, PipeTransform } from '@angular/core';

/*pure par défaut : la fct Transform est invoqué quand
l input argument change*/
@Pipe({
  name: 'filterPokemonPipe', pure: false
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(value: any[], property: string, searchString: string): any {
    if (typeof value !== 'undefined') {
      return value.filter((e) => {
        return e[property].toLowerCase().indexOf(searchString.toString().toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }

}
