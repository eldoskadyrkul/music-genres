import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBySinger'
})
export class OrderBySingerPipe implements PipeTransform {

  transform(value: any, name_singer: string): any {
    if (name_singer) {
      return value.sort((a: any, b:any) => b[name_singer].localeCompare(a[name_singer]));
    } {
      return value;
    }
  }

}
