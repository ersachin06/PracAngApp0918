import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeJsonPipe'
})
export class CustomeJsonPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
