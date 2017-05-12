/**
 * Created by Jasper on 2017/5/11.
 */
import {Directive, ElementRef,Renderer} from '@angular/core';

@Directive({
  selector:'[myhighlight]',
})
export class HighLightDirective{
  constructor(el: ElementRef,render: Renderer){
    render.setElementStyle(el.nativeElement,'backgroundColor','yellow');
  }
}
