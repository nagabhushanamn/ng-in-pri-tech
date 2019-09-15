import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceDiscount'
})
export class PriceDiscountPipe implements PipeTransform {

  transform(value: any, args: any): any {
    console.log("transforming..");
    if (args)
      return value - args;
    else
      return value - 1
  }

}
