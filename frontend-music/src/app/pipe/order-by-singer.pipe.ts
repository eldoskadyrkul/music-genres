import { Pipe, PipeTransform } from '@angular/core';
import {Singer} from "../model/singer-model";

@Pipe({
  name: 'orderBySinger'
})
export class OrderBySingerPipe implements PipeTransform {

  transform(value: Singer[], name_singer: string): any {
    if (name_singer) {
      return value.sort((a: any, b:any) => b[name_singer].localeCompare(a[name_singer]));
    } {
      return value;
    }
  }

}
