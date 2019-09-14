import { Directive, ElementRef } from '@angular/core';
import $ from 'jquery';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  constructor(ele: ElementRef) {
    let divEle = ele.nativeElement;
    divEle.addEventListener('mouseenter', () => {
      divEle.style.backgroundColor = "#DEF"
    })
    divEle.addEventListener('mouseleave', () => {
      divEle.style.backgroundColor = "#FFF"
    })
  }

}
