import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  // transform(value: any,arg?:number): any {
  //   return value.substr(0,arg).toUpperCase();
  // }
  transform(value: any): any
  {
    return value.toUpperCase();
  }
}

@Pipe({
  name: 'customjson',
  pure:false  // to make pure pipe impure //now we will get chages
})
export class CustomJSONPipe implements PipeTransform {

  // transform(value: any,arg?:number): any {
  //   return value.substr(0,arg).toUpperCase();
  // }
  transform(value: any): any {
    return JSON.stringify(value);
  }
}


@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
      if (!items) {
          return [];
      }
      if (!field || !value) {
          return items;
      }
      console.log("icsd tech labs 1 "+JSON.stringify(items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()))));

      return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
  }
}
