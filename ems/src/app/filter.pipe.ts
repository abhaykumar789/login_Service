import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string, ...name: string[]): string {
    // if(name=='RAJU')
    // return value;

    // else
    return "no data"
  }


  
}
