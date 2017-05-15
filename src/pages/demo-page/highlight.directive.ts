/**
 * Created by Jasper on 2017/5/11.
 */
import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector:'[myhighlight]',
})
export class HighLightDirective{
  constructor(el: ElementRef){
    //render.setElementStyle(el.nativeElement,'backgroundColor','yellow');
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
